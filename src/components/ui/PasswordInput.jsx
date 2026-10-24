import { useState } from 'react'
import TextInput from './TextInput'

function PasswordInput(props) {
  const [visible, setVisible] = useState(false)

  return (
    <TextInput
      {...props}
      type={visible ? 'text' : 'password'}
      rightElement={
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute inset-y-0 right-3 text-xs font-semibold text-plum"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      }
    />
  )
}

export default PasswordInput