'use client'

import { useState } from 'react'

export default function CorePrinciplesIconGrid() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null)

  const principles = [
    {
      id: 'eternal-optimism',
      icon: '🔥',
      title: 'Eternal Optimism',
      description: 'Belief in possibility grounded in sustained effort.',
      bgColor: 'rgba(163, 201, 226, 0.08)', // Sky Blue tint
      borderColor: 'var(--color-sky-blue)',
    },
    {
      id: 'relentless-ingenuity',
      icon: '🧠',
      title: 'Relentless Ingenuity',
      description: 'Creative problem-solving under constraint.',
      bgColor: 'rgba(124, 170, 176, 0.08)', // Teal Grey tint
      borderColor: 'var(--color-teal-grey)',
    },
    {
      id: 'defiant-resolve',
      icon: '⚡',
      title: 'Defiant Resolve',
      description: 'Commitment that persists despite resistance.',
      bgColor: 'rgba(11, 29, 58, 0.04)', // Deep Navy tint
      borderColor: 'var(--color-deep-navy)',
    },
    {
      id: 'radical-pragmatism',
      icon: '⚖️',
      title: 'Radical Pragmatism',
      description: 'Clear-eyed realism paired with disciplined execution.',
      bgColor: 'rgba(26, 46, 59, 0.06)', // Slate Ink tint
      borderColor: 'var(--color-slate-ink)',
    },
    {
      id: 'devoted-stewardship',
      icon: '🛡️',
      title: 'Devoted Stewardship',
      description: 'Respect for capital, responsibility, and long-term consequence.',
      bgColor: 'rgba(163, 201, 226, 0.08)', // Sky Blue tint
      borderColor: 'var(--color-sky-blue)',
    },
  ]

  return (
    <div style={{ 
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 600,
        color: 'var(--color-deep-navy)',
        marginBottom: 'var(--space-sm)',
        textAlign: 'center',
      }}>
        Our Core Principles
      </h2>
      
      <p style={{
        fontSize: '16px',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-lg)',
        textAlign: 'center',
        lineHeight: 1.6,
      }}>
        These principles guide evaluation and selection. They are applied in every review.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '20px',
        marginBottom: 'var(--space-lg)',
      }}>
        {principles.map((principle) => (
          <div
            key={principle.id}
            onMouseEnter={() => setHoveredPrinciple(principle.id)}
            onMouseLeave={() => setHoveredPrinciple(null)}
            style={{
              position: 'relative',
              padding: '24px 16px',
              background: principle.bgColor,
              border: `2px solid ${principle.borderColor}`,
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredPrinciple === principle.id ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredPrinciple === principle.id 
                ? '0 8px 16px rgba(11, 29, 58, 0.1)' 
                : 'none',
            }}
          >
            {/* Icon */}
            <div style={{
              fontSize: '36px',
              marginBottom: '12px',
              filter: hoveredPrinciple === principle.id ? 'brightness(1.1)' : 'none',
              transition: 'filter 0.3s ease',
            }}>
              {principle.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--color-deep-navy)',
              margin: 0,
              lineHeight: 1.3,
            }}>
              {principle.title}
            </h3>

            {/* Tooltip */}
            {hoveredPrinciple === principle.id && (
              <div style={{
                position: 'absolute',
                bottom: '-80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '220px',
                padding: '12px 16px',
                background: 'var(--color-deep-navy)',
                color: 'var(--color-mist-white)',
                borderRadius: '6px',
                fontSize: '14px',
                lineHeight: 1.5,
                boxShadow: '0 4px 12px rgba(11, 29, 58, 0.2)',
                zIndex: 100,
                pointerEvents: 'none',
                animation: 'fadeIn 0.2s ease',
              }}>
                {principle.description}
                
                {/* Arrow pointing up */}
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderBottom: '6px solid var(--color-deep-navy)',
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile note - show all text on mobile */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (max-width: 768px) {
          /* On mobile, show descriptions by default instead of tooltips */
          .mobile-description {
            display: block !important;
            margin-top: 8px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.4;
          }
        }
      `}</style>
    </div>
  )
}
