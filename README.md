# MeerDigital — Premium Business Solutions & E-Commerce Growth Platform

> **"From Business Registration to E-commerce Growth — Everything Under One Roof."**  
> *Tagline: Everything Your Business Needs.*

**MeerDigital** is a one-stop business solutions and e-commerce growth partner built for Indian entrepreneurs, manufacturers, wholesalers, startups, and online sellers. The platform brings foundational compliance, multi-channel marketplace onboarding (Meesho, Flipkart, Amazon), custom website development, trademark protection, and performance marketing together into one cohesive ecosystem.

---

## 🚀 Key Architectural Pillars

### 1. Brand Identity & Design System
- **Color Tokens**:
  - Primary: `#6338E8` (Vibrant Indigo-Purple)
  - Secondary: `#8B5CF6` (Soft Violet)
  - Dark: `#151329` (Deep Navy Typography & Surfaces)
  - Background: `#F8F8FC` (Off-White, Clean Modern Canvas)
  - Text: `#22213A` (High-contrast deep readability)
- **Custom Monogram**: Geometric vector M/S monogram combining precision lines with purple-violet linear gradients.
- **Pure Custom CSS**: Zero Tailwind dependencies. Clean, modular CSS design tokens in `src/styles/global.css` and `src/styles/components.css`.
- **Framer Motion**: Smooth page transitions, scroll-reveals, interactive dashboard switches, modal drawers, and responsive menus.

---

## 📱 Pages & Complete Site Structure

| Route | Page | Purpose & Scope |
|---|---|---|
| `/` | **Home** | Hero with interactive Growth Dashboard, trust pillars, 6 service suites, "Why Choose", 4-step process, industries served, pricing tiers, demo portfolio, client feedback standard, expandable FAQ accordion, and final CTA band. |
| `/about` | **About Us** | Mission statement, operating philosophy, practical growth standard, core values, and consultation guarantees. |
| `/services` | **All Services** | Catalog of all 6 service categories with offering pills and direct deep links. |
| `/services/:slug` | **Service Detail** | Dedicated breakdown for each of the 6 service suites: detailed offerings, benefits, 4-stage workflow, document checklist requirements, specific FAQs, and pre-filled enquiry desk. |
| `/pricing` | **Pricing & Quotes** | 5 engagement tiers (Business Starter, Seller Growth, Digital Presence, Brand Launch, Custom Solutions), statutory fee disclaimers, and instant quote selector. |
| `/portfolio` | **Portfolio & Demos** | Interactive case study showcase with category tabs (E-Commerce, Business Web, Marketplaces, Branding), and inspect modal detailing challenges, solutions, deliverables, and tech stack. |
| `/blog` | **Journal & Insights** | Searchable operational articles covering business registration, marketplace account preparation, and website essentials. |
| `/blog/:slug` | **Article Detail** | Full reading view with read-time metadata, breadcrumbs, and consultation cross-sell. |
| `/contact` | **Contact & Consult** | Enquiry intake form, direct phone/email/region reach cards, hours of operation, and consultation ethics notice. |
| `/privacy` | **Privacy Policy** | Transparent data handling disclosures for enquiry storage and marketplace documentation. |
| `/terms` | **Terms & Conditions** | Professional scope definitions, disclaimers on government approvals, and liability limits. |
| `/refund` | **Refund Policy** | Clear terms distinguishing agency labor from non-refundable statutory government disbursements. |

---

## 🛠️ The 6 Core Service Categories

1. **GST & Business Compliance**: GST Registration Assistance, GST Return Filing, GSTR-1 and GSTR-3B Assistance, GST Compliance Support.
2. **Marketplace Solutions**: Meesho Seller Account Setup, Flipkart Seller Account Setup, Amazon Seller Account Setup, Marketplace Account Management.
3. **Website Development**: Business Website Development, E-commerce Website Development, Landing Page Development, Website Maintenance.
4. **Trademark & Branding**: Trademark Search Assistance, Trademark Application Assistance, Brand Identity Development, Logo and Branding.
5. **E-Commerce Management**: Product Listing, Catalogue Management, Product Image Optimization, Inventory and Order Support.
6. **Digital Marketing**: Search Engine Optimization, Google Ads, Meta Ads, Social Media Management.

---

## ⚡ Functional Enquiry System & Dual-Mode Backend

The enquiry system satisfies strict operational honesty requirements:

- **Frontend Validation**:
  - Full Name validation (min 2 characters, letters)
  - Phone Number validation (strict 10-digit Indian mobile format `^[6-9]\d{9}$`)
  - Email format verification
  - Business type selection
  - Required service selection
  - Minimum 10-character message requirement
  - Loading spinner & disabled state during flight
  - Confirmed Reference ID receipt (`#MD-XXXXXX`) with one-click WhatsApp forwarding
- **Dual-Mode Backend Resilience**:
  - `POST /api/enquiries`
  - When **MongoDB** is configured via `MONGODB_URI`, enquiries are saved using the Mongoose `Enquiry` schema.
  - When running locally without MongoDB, the server automatically persists entries to `server/data/enquiries.json` with generated reference IDs and timestamps.
  - If the backend server is offline, the frontend catches the network error, transparently caches the enquiry in browser `localStorage`, and displays an honest notice with instant WhatsApp/Email forwarding links.

---

## 💻 Development & Execution

### Prerequisites
- Node.js 18+ (tested and verified on Node.js 20 LTS)
- npm 9+

### Available Scripts
```bash
# Start frontend client in development mode (port 5173)
npm run dev

# Start backend Express API (port 5000)
npm run server

# Run both frontend and backend concurrently
npm run dev:full

# Compile production bundle
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

### Environment Configuration
Copy `.env.example` to `.env`:
```env
VITE_SITE_URL=https://meerdigital.in
VITE_API_URL=/api
VITE_CONTACT_EMAIL=contact@meerdigital.in
VITE_CONTACT_PHONE=+91 98765 43210
VITE_WHATSAPP_NUMBER=+91 98765 43210
VITE_BUSINESS_ADDRESS=Business Solutions Tower, Connaught Place, New Delhi, India
```

For MongoDB:
```env
# In server/.env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/meerdigital
CLIENT_ORIGIN=http://localhost:5173
```

---

## 🛡️ SEO & Performance

- **Semantic HTML5**: Native `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` landmarks.
- **Dynamic Meta & Social Graphs**: React Helmet Async managing title, description, Open Graph, and Twitter Cards across all routes.
- **Schema.org Structured Data**: Integrated `ProfessionalService` / `Organization` JSON-LD markup.
- **Code-Splitting**: Route-level dynamic `React.lazy()` bundling for sub-second initial load.
- **Sitemap & Robots**: `public/sitemap.xml` and `public/robots.txt` configured for search engine indexation.
