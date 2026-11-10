import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Store,
} from 'lucide-react'

const tabData = {
  overview: {
    title: 'Integrated Growth Pipeline',
    sub: 'Full business lifecycle connected',
    metric1Label: 'Operational Engine',
    metric1Value: 'Setup → Sell → Scale',
    metric1Desc: 'Registration, marketplace onboarding, website & ongoing ops under one roof.',
    metric2Label: 'Catalogue Readiness',
    metric2Value: '1,420+ SKUs',
    bars: [42, 68, 54, 88, 76, 95],
    barLabels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
  },
  marketplaces: {
    title: 'Marketplace Operations',
    sub: 'Meesho, Flipkart & Amazon synched',
    metric1Label: 'Active Accounts',
    metric1Value: '3 Marketplaces',
    metric1Desc: 'KYC, listing compliance, cataloguing & dispute resolution.',
    metric2Label: 'Dispatches On-Time',
    metric2Value: '99.4% SLA',
    bars: [60, 72, 85, 92, 90, 98],
    barLabels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
  },
  compliance: {
    title: 'GST & Statutory Filings',
    sub: 'Structured on-time compliance',
    metric1Label: 'Filing Status',
    metric1Value: 'GSTR-1 & 3B Ready',
    metric1Desc: 'Monthly reconciliations, timely reminders & CA coordination.',
    metric2Label: 'Tax Health Score',
    metric2Value: '100% Filed',
    bars: [80, 85, 90, 95, 98, 100],
    barLabels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  digital: {
    title: 'Web & Brand Experience',
    sub: 'Speed, clarity & high conversion',
    metric1Label: 'Storefront Health',
    metric1Value: '99/100 Core Web',
    metric1Desc: 'Custom e-commerce & corporate sites engineered for buyer trust.',
    metric2Label: 'Lead Conversion',
    metric2Value: 'Enquiry Ready',
    bars: [35, 52, 68, 80, 86, 94],
    barLabels: ['Q1', 'Q2', 'Q3', 'Q4', 'YTD', 'Target'],
  },
}

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('overview')
  const current = tabData[activeTab]

  return (
    <div className="hero-visual-wrapper" aria-label="Business Growth Interactive Dashboard">
      {/* Decorative ambient orbs */}
      <div className="hero-ambient hero-ambient-1" />
      <div className="hero-ambient hero-ambient-2" />

      {/* Main Dashboard Window */}
      <motion.article
        className="dash"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="dash-topbar">
          <div className="dash-window-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="dash-status-pill">
            <span className="dash-status-dot" />
            Live Operations Hub
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="dash-tabs" role="tablist">
          <button
            type="button"
            className={`dash-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`dash-tab-btn ${activeTab === 'marketplaces' ? 'active' : ''}`}
            onClick={() => setActiveTab('marketplaces')}
          >
            Marketplaces
          </button>
          <button
            type="button"
            className={`dash-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            GST & Compliance
          </button>
          <button
            type="button"
            className={`dash-tab-btn ${activeTab === 'digital' ? 'active' : ''}`}
            onClick={() => setActiveTab('digital')}
          >
            Web & Brand
          </button>
        </div>

        {/* Dynamic Metric Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="dash-metrics-grid">
              <div className="dash-metric-box">
                <small>{current.metric1Label}</small>
                <strong>{current.metric1Value}</strong>
                <p>{current.metric1Desc}</p>
              </div>
              <div className="dash-metric-box">
                <small>{current.metric2Label}</small>
                <strong>{current.metric2Value}</strong>
                <p style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--success)' }}>
                  <CheckCircle2 size={14} /> Verified Workflow
                </p>
              </div>
            </div>

            {/* Growth Graph Bar Chart */}
            <div className="dash-chart-section">
              <div className="dash-chart-head">
                <span>{current.title}</span>
                <span style={{ color: 'var(--primary)' }}>Growth Trajectory</span>
              </div>
              <div className="dash-bars">
                {current.bars.map((height, i) => (
                  <div key={i} className="dash-bar-col">
                    <div
                      className="dash-bar-fill"
                      style={{ height: `${height}%` }}
                    />
                    <span className="dash-bar-label">{current.barLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.article>

      {/* Floating Glassmorphic Service Cards */}
      <motion.div
        className="float-card fc-pos-1"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="fc-icon">
          <Store size={18} />
        </div>
        <div className="fc-text">
          <strong>Marketplace Setup</strong>
          <span>Meesho · Flipkart · Amazon</span>
        </div>
      </motion.div>

      <motion.div
        className="float-card fc-pos-2"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <div className="fc-icon" style={{ background: 'rgba(15, 123, 76, 0.1)', color: 'var(--success)' }}>
          <ShieldCheck size={18} />
        </div>
        <div className="fc-text">
          <strong>GST & Compliance</strong>
          <span>Filing & Documentation</span>
        </div>
      </motion.div>

      <motion.div
        className="float-card fc-pos-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="fc-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--secondary)' }}>
          <Sparkles size={18} />
        </div>
        <div className="fc-text">
          <strong>Website & Branding</strong>
          <span>Modern & Conversion-Ready</span>
        </div>
      </motion.div>
    </div>
  )
}
