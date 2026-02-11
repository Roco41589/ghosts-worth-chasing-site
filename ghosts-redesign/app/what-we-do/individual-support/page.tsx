'use client'

import Link from 'next/link'
import { useState } from 'react'

// CorePrinciplesIconGrid component integrated directly
function CorePrinciplesIconGrid() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null)

  const principles = [
    {
      id: 'eternal-optimism',
      icon: '🔥',
      title: 'Eternal Optimism',
      description: 'Belief in possibility grounded in sustained effort.',
      bgColor: 'rgba(163, 201, 226, 0.08)',
      borderColor: '#A3C9E2',
    },
    {
      id: 'relentless-ingenuity',
      icon: '🧠',
      title: 'Relentless Ingenuity',
      description: 'Creative problem-solving under constraint.',
      bgColor: 'rgba(124, 170, 176, 0.08)',
      borderColor: '#7CAAB0',
    },
    {
      id: 'defiant-resolve',
      icon: '⚡',
      title: 'Defiant Resolve',
      description: 'Commitment that persists despite resistance.',
      bgColor: 'rgba(11, 29, 58, 0.04)',
      borderColor: '#0B1D3A',
    },
    {
      id: 'radical-pragmatism',
      icon: '⚖️',
      title: 'Radical Pragmatism',
      description: 'Clear-eyed realism paired with disciplined execution.',
      bgColor: 'rgba(26, 46, 59, 0.06)',
      borderColor: '#1A2E3B',
    },
    {
      id: 'devoted-stewardship',
      icon: '🛡️',
      title: 'Devoted Stewardship',
      description: 'Respect for capital, responsibility, and long-term consequence.',
      bgColor: 'rgba(163, 201, 226, 0.08)',
      borderColor: '#A3C9E2',
    },
  ]

  return (
    <div style={{ 
      maxWidth: '900px',
      margin: '0 auto var(--space-lg) auto',
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
                opacity: 0,
                animation: 'fadeIn 0.2s ease forwards',
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
      `}</style>
    </div>
  )
}

export default function IndividualSupport() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
          }
        }
      `}</style>

      <section style={{ 
        padding: 'var(--space-lg) var(--space-md) var(--space-md) var(--space-md)',
      }}>
        <Link 
          href="/what-we-do" 
          style={{ 
            fontSize: '14px',
            color: 'var(--color-teal-grey)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'var(--space-md)',
          }}
        >
          ← Back to What We Do
        </Link>
        
        <h1 style={{ 
          color: 'var(--color-deep-navy)', 
          marginBottom: 'var(--space-sm)',
          textAlign: 'center',
        }}>
          Individual Support
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-lg)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--space-lg) auto',
        }}>
          We support individuals building work and lives worth emulating despite structural obstacles. 
          This program is designed for disciplined ambition and long-horizon resilience, not short-term relief. 
          Selection is rigorous and intentional.
        </p>

        {/* Our Core Principles Section with Icon Grid */}
        <CorePrinciplesIconGrid />
      </section>

      <section style={{ 
        padding: '0 var(--space-md) var(--space-xl) var(--space-md)',
      }}>
        <div 
          className="cards-grid"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {/* Selection Philosophy Card */}
          <Link 
            href="/what-we-do/individual-support/philosophy"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '26px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Selection Philosophy
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Eligibility Card */}
          <Link 
            href="/what-we-do/individual-support/eligibility"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '26px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Eligibility
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Review & Process Card */}
          <Link 
            href="/what-we-do/individual-support/application"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '26px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Review & Process
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
