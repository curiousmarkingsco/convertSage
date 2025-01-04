class ConversionsController < ApplicationController
  def new
    @file_conversion = FileConversion.new
  end

  ALLOWED_CONVERSIONS = %w[
    convert_to_jpg
    convert_to_gif
    convert_to_webp
    convert_to_avif
    convert_to_bmp
    convert_to_mp3
    convert_to_webm
    convert_to_avi
  ].freeze

  def create
    converted_files = []

    params[:files]&.each do |uploaded_file|
      raise ArgumentError, "Unsupported file type" unless %w[image/png image/jpeg image/gif].include?(uploaded_file.content_type)
      if uploaded_file.size > 10.megabytes
        raise ArgumentError, "File size exceeds the limit"
      end
      
      sanitized_filename = File.basename(uploaded_file.original_filename)

      from_format = params[:convert_from]
      to_format = params[:convert_to]
      optimize = params[:optimize_image] == 'true'

      temp_file_path = Rails.root.join('tmp', sanitized_filename)
      File.open(temp_file_path, 'wb') { |file| file.write(uploaded_file.read) }

      converter = case from_format
                  when 'png' then Converted::PNG.new(temp_file_path)
                  when 'jpg' then Converted::JPG.new(temp_file_path)
                  when 'gif' then Converted::GIF.new(temp_file_path)
                  else
                    raise 'Unsupported file type'
                  end

      method_name = "convert_to_#{to_format}"
      unless ALLOWED_CONVERSIONS.include?(method_name)
        raise ArgumentError, "Unsupported conversion format: #{to_format}"
      end

      converted_file_path = Rails.root.join('tmp', "converted_#{sanitized_filename.split('.').first}.#{to_format}")
      converter.public_send(method_name, converted_file_path)

      optimize_image(converted_file_path) if optimize && %w[png jpg jpeg gif webp].include?(to_format)

      attached_file = attach_file_to_blob(converted_file_path, "converted.#{to_format}")

      converted_files << {
        original_name: sanitized_filename,
        format: to_format,
        download_url: Rails.application.routes.url_helpers.rails_blob_path(attached_file, only_path: true),
        download_name: "converted.#{to_format}"
      }
    end

    render json: { files: converted_files }, status: :ok
  end

  private

  def optimize_image(file_path)
    image_optim = ImageOptim.new(
      pngout: false,
      jpegoptim: { strip: ['all'], max_quality: 85 },
      optipng: { level: 3 }
    )
    image_optim.optimize_image!(file_path)
  end

  def create_uploaded_file(file_path, filename)
    tempfile = Tempfile.new(filename, Rails.root.join('tmp'))
    FileUtils.copy_file(file_path, tempfile.path)
    tempfile
  end

  def attach_file_to_blob(file_path, filename)
    ActiveStorage::Blob.create_and_upload!(
      io: File.open(file_path),
      filename: filename,
      content_type: Marcel::MimeType.for(file_path)
    )
  end
end
