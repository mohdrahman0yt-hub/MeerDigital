import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../config/site'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll for subtle border/shadow styling
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo showTagline={false} />

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <Button to="/contact" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <nav className="mobile-menu-links" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} />
                </NavLink>
              ))}
            </nav>
            <Button
              to="/contact"
              style={{ width: '100%' }}
              onClick={() => setOpen(false)}
            >
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
