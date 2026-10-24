import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import TextInput from '../ui/TextInput'
import PasswordInput from '../ui/PasswordInput'
import AuthDivider from './AuthDivider'
import SocialLoginButton from './SocialLoginButton'
import { validateLogin } from '../../utils/validators'

function LoginForm() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validateLogin(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="text-right text-sm">
        <a href="#" className="font-medium text-plum hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full">
        Log in
      </Button>

      <AuthDivider />
      <SocialLoginButton label="Continue with Google" />
    </form>
  )
}

export default LoginForm