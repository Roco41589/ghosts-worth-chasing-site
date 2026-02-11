'use client'

import Link from 'next/link'

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

        {/* Our Core Principles Section */}
        <div style={{ 
          maxWidth: '700px',
          margin: '0 auto var(--space-lg) auto',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-sm)',
          }}>
            Our Core Principles
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: 'var(--color-text)',
            marginBottom: 'var(--space-md)',
            lineHeight: 1.6,
          }}>
            These principles guide evaluation and selection. They are applied in every review.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
          }}>
            {/* Eternal Optimism */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Eternal Optimism
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Belief in possibility grounded in sustained effort.
              </p>
            </div>

            {/* Relentless Ingenuity */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Relentless Ingenuity
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Creative problem-solving under constraint.
              </p>
            </div>

            {/* Defiant Resolve */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Defiant Resolve
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Commitment that persists despite resistance.
              </p>
            </div>

            {/* Radical Pragmatism */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Radical Pragmatism
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Clear-eyed realism paired with disciplined execution.
              </p>
            </div>

            {/* Devoted Stewardship */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Devoted Stewardship
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Respect for capital, responsibility, and long-term consequence.
              </p>
            </div>
          </div>
        </div>
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
