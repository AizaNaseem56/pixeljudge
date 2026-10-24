import { Link } from 'react-router-dom'

const base = 'inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-colors'

const styles = {
  primary: 'bg-plum text-white hover:bg-brown',
  dark: 'bg-brown text-white hover:bg-plum',
  secondary: 'bg-blush text-brown hover:bg-peach',
  outline: 'border-2 border-plum text-plum hover:bg-plum hover:text-white',
}

function Button({
  children, to, href, type = 'button', variant = 'primary', className = '', onClick, disabled = false,
}) {
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  )
}

export default Button