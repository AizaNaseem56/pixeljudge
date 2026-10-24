import { Link } from 'react-router-dom'

function AuthLayout({ title, subtitle, children, footerText, footerLinkText, footerLinkTo }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-cream via-blush to-plum px-6 py-12">
      <Link to="/" className="font-brand text-4xl text-plum">
        PixelJudge
      </Link>

      <div className="mt-8 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-brown/70">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>

      <p className="mt-6 text-sm text-white">
        {footerText}{' '}
        <Link to={footerLinkTo} className="font-semibold underline hover:text-peach">
          {footerLinkText}
        </Link>
      </p>
    </div>
  )
}

export default AuthLayout