import FilePicker from './FilePicker'
import Button from '../ui/Button'

function ImagePreview({ src, alt, onReplace, onRemove, onLoad }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <div className="flex justify-center overflow-hidden rounded-lg bg-peach/40">
        <img
          src={src}
          alt={alt}
          onLoad={event =>
            onLoad({
              width: event.target.naturalWidth,
              height: event.target.naturalHeight,
            })
          }
          className="max-h-96 max-w-full object-contain"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <FilePicker label="Replace" variant="outline" onFileSelected={onReplace} />
        <Button variant="outline" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  )
}

export default ImagePreview