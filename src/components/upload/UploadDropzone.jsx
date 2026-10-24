import { useState } from 'react'
import FilePicker from './FilePicker'
import FormError from '../ui/FormError'

function UploadDropzone({ onFileSelected, error }) {
  const [isDragging, setIsDragging] = useState(false)

  function handleDragOver(event) {
    event.preventDefault()
    setIsDragging(true)
  }

  function handleDrop(event) {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files[0]

    if (file) {
      onFileSelected(file)
    }
  }

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
          isDragging ? 'border-plum bg-blush/30' : 'border-brown/40 bg-white'
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach text-3xl">
          🖼️
        </div>
        <h3 className="mt-4 text-lg font-semibold">Drag and drop your screenshot here</h3>
        <p className="mt-1 text-sm text-brown/70">PNG, JPG or WebP, up to 5 MB</p>

        <div className="mt-6">
          <FilePicker onFileSelected={onFileSelected} />
        </div>
      </div>

      <FormError message={error} />
    </div>
  )
}

export default UploadDropzone