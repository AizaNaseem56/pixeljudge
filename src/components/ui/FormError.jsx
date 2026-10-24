function FormError({ message }) {
  if (!message) {
    return null
  }

  return (
    <p className="mt-1 text-sm text-red-700" role="alert">
      {message}
    </p>
  )
}

export default FormError