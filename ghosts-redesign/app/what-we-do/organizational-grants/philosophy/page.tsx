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
        top: '72px', // Height of your nav bar
        background: 'var(--color-mist-white)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--space-md) 0',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: 'var(--max-text-width)',
          margin: '0 auto',
          padding: '0 var(--space-md)',
        }}>
          <Link 
            href="/what-we-do/organizational-grants" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              fontSize: '14px',
              color: 'var(--color-deep-navy)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              marginBottom: '16px',
              background: isHovered ? 'rgba(163, 201, 226, 0.1)' : 'transparent',
              borderColor: isHovered ? 'var(--color-sky-blue)' : 'var(--color-border)',
            }}
          >
            ← Our Funding Model
          </Link>
          
          <h1 style={{ 
            color: 'var(--color-deep-navy)', 
            marginBottom: 0,
            fontSize: '32px',
          }}>
            Grantmaking Philosophy
          </h1>
        </div>
      </div>

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
