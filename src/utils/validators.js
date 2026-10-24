const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateLogin({ email, password }) {
  const errors = {}

  if (!email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!password) {
    errors.password = 'Password is required.'
  }

  return errors
}

export function validateSignup({ name, email, password, confirmPassword }) {
  const errors = validateLogin({ email, password })

  if (name.trim().length < 2) {
    errors.name = 'Enter your full name.'
  }

  if (password && password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}