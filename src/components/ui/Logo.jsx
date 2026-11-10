import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'

export function LogoMark({ size = 38 }) {
  return (
    <span
      className="logo-mark"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.65, height: size * 0.65 }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E9D5FF" />
          </linearGradient>
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>
        {/* Minimal M / S Monogram Path */}
        <path
          d="M7 29V11L14.5 21L22 11V29"
          stroke="url(#logoGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#subtleGlow)"
        />
        <path
          d="M23 15.5C23 13.5 24.8 12 27.5 12C30.2 12 32 13.5 32 15.8C32 20.2 23 20.8 23 25.2C23 27.5 24.8 29 27.5 29C30.2 29 32 27.5 32 25.5"
          stroke="url(#logoGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#subtleGlow)"
        />
      </svg>
    </span>
  )
}

export default function Logo({ to = '/', showTagline = false }) {
  const brandName = siteConfig.name

  const inner = (
    <>
      <LogoMark />
      <span className="logo-text-group">
        <span className="logo-title">
          {brandName.slice(0, 4)}
          <span className="logo-highlight">{brandName.slice(4)}</span>
        </span>
        {showTagline && (
          <span className="logo-subtitle">BUSINESS SOLUTIONS</span>
        )}
      </span>
    </>
  )

  if (!to) {
    return <span className="logo">{inner}</span>
  }

  return (
    <Link to={to} className="logo" aria-label={`${brandName} Home`}>
      {inner}
    </Link>
  )
}
