import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const itemId = `faq-item-${index}`

        return (
          <div key={item.q} className={`faq-item ${isOpen ? 'expanded' : ''}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={itemId}
            >
              <span>{item.q}</span>
              <span
                className="faq-icon"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  background: isOpen ? 'rgba(99, 56, 232, 0.12)' : 'var(--bg-subtle)',
                }}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={itemId}
                  className="faq-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p style={{ margin: 0 }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
