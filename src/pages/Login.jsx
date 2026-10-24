import AuthLayout from '../components/auth/AuthLayout'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to review your designs."
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkTo="/signup"
    >
      <LoginForm />
    </AuthLayout>
  )
}

export default Login