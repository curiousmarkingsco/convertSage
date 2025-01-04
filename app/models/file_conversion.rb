class FileConversion
  include ActiveModel::Model

  attr_accessor :file, :convert_from, :convert_to, :optimize_image
end
