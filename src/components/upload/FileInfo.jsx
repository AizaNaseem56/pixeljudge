import { formatFileSize } from '../../utils/fileHelpers'

function FileInfo({ name, size, dimensions }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 rounded-lg bg-white px-4 py-3 text-sm shadow">
      <p>
        <span className="text-brown/70">File: </span>
        <span className="font-medium">{name}</span>
      </p>

      {size !== undefined && (
        <p>
          <span className="text-brown/70">Size: </span>
          <span className="font-medium">{formatFileSize(size)}</span>
        </p>
      )}

      {dimensions && (
        <p>
          <span className="text-brown/70">Dimensions: </span>
          <span className="font-medium">
            {dimensions.width} × {dimensions.height} px
          </span>
        </p>
      )}
    </div>
  )
}

export default FileInfo