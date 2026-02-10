'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Philosophy() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Sticky Header Section */}
      <div style={{
        position: 'sticky',
        top: '72px',
        background: 'var(--color-mist-white)',
        borderBottom: '1px solid var(--color-border)',
        padding: '12px var(--space-md)',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: 'var(--max-content-width)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}>
          <Link 
            href="/what-we-do/organizational-grants" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              fontSize: '13px',
              color: 'var(--color-deep-navy)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              background: isHovered ? 'rgba(163, 201, 226, 0.1)' : 'transparent',
              borderColor: isHovered ? 'var(--color-sky-blue)' : 'var(--color-border)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            ← Back
          </Link>
          
          <h1 style={{ 
            color: 'var(--color-deep-navy)', 
            margin: 0,
            fontSize: '24px',
            fontWeight: 500,
          }}>
            Grantmaking Philosophy
          </h1>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 20px !important;
          }
        }
      `}</style>

      {/* Content Section */}
      <section className="section section--narrow">
      <p>
        Most philanthropy optimizes for measurable outcomes on short timelines. This creates 
        structural pressure toward visible, fundable work at the expense of foundational capacity. 
        Organizational grants exist to support institutions willing to do necessary work that 
        cannot be easily quantified or celebrated.
      </p>

      <p>
        The foundation operates on long horizons. Capital is deployed deliberately. Decisions 
        prioritize alignment and durability over urgency or visibility.
      </p>

      <p>
        Grants support institutional capacity, not specific projects. The foundation does not 
        impose donor-directed mandates or require alignment with narrow programmatic goals.
      </p>

      <p>
        Organizational grants function as near-term mission support. The endowment functions as 
        a long-term sustainability engine. The endowment remains structurally prioritized over time.
      </p>
    </section>
    </>
  )
}
