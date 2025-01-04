class DownloadsController < ApplicationController
  def download_blob
    blob = ActiveStorage::Blob.find_signed(params[:signed_blob_id])

    # Stream the file to the user
    send_data blob.download, filename: blob.filename.to_s, disposition: 'attachment'

    # Purge the blob after the response
    blob.purge
  end
end
