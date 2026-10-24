import AuthLayout from '../components/auth/AuthLayout'
import SignupForm from '../components/auth/SignupForm'

function Signup() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start reviewing website designs with AI."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkTo="/login"
    >
      <SignupForm />
    </AuthLayout>
  )
}

export default Signup