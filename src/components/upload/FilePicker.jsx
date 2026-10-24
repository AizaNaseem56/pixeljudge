import { useRef } from 'react'
import Button from '../ui/Button'

function FilePicker({ onFileSelected, label = 'Choose file', variant = 'primary' }) {
  const inputRef = useRef(null)

  function handleChange(event) {
    const file = event.target.files[0]

    if (file) {
      onFileSelected(file)
    }

    event.target.value = ''
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleChange}
        className="hidden"
      />
      <Button variant={variant} onClick={() => inputRef.current.click()}>
        {label}
      </Button>
    </>
  )
}

export default FilePicker