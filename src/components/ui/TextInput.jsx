import FormError from './FormError'

function TextInput({
  label, name, type = 'text', value, onChange, error, placeholder, rightElement,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : 'false'}
          className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-plum ${
            error ? 'border-red-700' : 'border-brown/50'
          } ${rightElement ? 'pr-16' : ''}`}
        />
        {rightElement}
      </div>

      <FormError message={error} />
    </div>
  )
}

export default TextInput