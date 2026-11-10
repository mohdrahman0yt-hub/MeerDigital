import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Refund = lazy(() => import('./pages/Refund'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        padding: 40,
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: '50%',
          border: '3px solid rgba(99, 56, 232, 0.15)',
          borderTopColor: 'var(--primary)',
          animation: 'spin 0.7s linear infinite',
        }}
      />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/* Legal routes with aliases */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
