import { useState } from 'react'
import Button from '../ui/Button'
import TextInput from '../ui/TextInput'
import PasswordInput from '../ui/PasswordInput'
import AuthDivider from './AuthDivider'
import SocialLoginButton from './SocialLoginButton'
import { validateSignup } from '../../utils/validators'

const emptyForm = { name: '', email: '', password: '', confirmPassword: '' }

function SignupForm() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validateSignup(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      setValues(emptyForm)
    } else {
      setSuccess(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <TextInput
        label="Full name"
        name="name"
        placeholder="Aiza Khan"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />

      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="At least 8 characters"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <PasswordInput
        label="Confirm password"
        name="confirmPassword"
        placeholder="Type the password again"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      {success && (
        <p className="rounded-lg bg-peach p-3 text-sm font-medium" role="status">
          Account created! (demo only, nothing is saved yet)
        </p>
      )}

      <Button type="submit" className="w-full">
        Create account
      </Button>

      <AuthDivider />
      <SocialLoginButton label="Sign up with Google" />
    </form>
  )
}

export default SignupForm