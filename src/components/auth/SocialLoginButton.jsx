function SocialLoginButton({ label }) {
  return (
    <button
      type="button"
      onClick={() => alert('Google login will be added with the backend.')}
      className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-peach bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-peach/50"
    >
      <span className="text-lg font-bold text-plum">G</span>
      {label}
    </button>
  )
}

export default SocialLoginButton