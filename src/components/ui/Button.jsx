import { Link } from 'react-router-dom'

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size,
  type = 'button',
  className = '',
  ...props
}) {
  const sizeClass = size ? `btn-${size}` : ''
  const cls = `btn btn-${variant} ${sizeClass} ${className}`.trim()

  if (to) {
    return (
      <Link className={cls} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={cls} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type={type} {...props}>
      {children}
    </button>
  )
}
