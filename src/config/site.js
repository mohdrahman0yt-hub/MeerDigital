export const siteConfig = {
  name: 'MeerDigital Dev',
  brandName: 'MeerDigital Dev',
  tagline: 'Everything Your Business Needs.',
  coreMessage:
    'From Business Registration to E-commerce Growth — Everything Under One Roof.',
  description:
    'MeerDigital is a one-stop business solutions partner helping entrepreneurs, manufacturers, wholesalers, startups, and online sellers establish, manage, and grow their businesses across India.',
  url: import.meta.env.VITE_SITE_URL || 'https://meerdigital.in',
  locale: 'en_IN',
  region: 'India',
  operatingMode: 'Pan-India Remote & On-Site Consultation',
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@meerdigital.in',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+91 9065605144',
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '+91 9065605144',
    address:
      import.meta.env.VITE_BUSINESS_ADDRESS ||
      'Business Solutions Tower, Connaught Place, New Delhi, India',
  },
  social: {
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com/meerdigital',
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || 'https://linkedin.com/company/meerdigital',
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/meerdigital',
    x: import.meta.env.VITE_SOCIAL_X || 'https://x.com/meerdigital',
  },
  apiUrl: import.meta.env.VITE_API_URL || '/api',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const businessTypes = [
  'Manufacturer',
  'Wholesaler',
  'Startup',
  'Small Business',
  'Online Seller',
  'Entrepreneur',
  'Other',
]
