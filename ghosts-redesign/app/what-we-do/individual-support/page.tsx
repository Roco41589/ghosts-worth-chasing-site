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
          .principles-grid {
            grid-template-columns: 1fr !important;
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
          marginBottom: 'var(--space-md)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--space-md) auto',
        }}>
          We support individuals willing to pursue work that matters despite structural 
          obstacles. This is for people building toward something durable, not seeking 
          short-term relief. Selection is rigorous and intentional.
        </p>

        {/* Selection Principles Section */}
        <div style={{ 
          marginBottom: 'var(--space-lg)',
          maxWidth: '900px',
          margin: '0 auto var(--space-lg) auto',
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
          }}>
            Selection Principles
          </h2>
          
          <div 
            className="principles-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            {/* Principle 1 */}
            <div style={{
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              background: 'rgba(163, 201, 226, 0.03)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Disciplined Ambition
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Clear direction sustained over time
              </p>
            </div>

            {/* Principle 2 */}
            <div style={{
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              background: 'rgba(163, 201, 226, 0.03)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Structural Constraint
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Barriers beyond individual control
              </p>
            </div>

            {/* Principle 3 */}
            <div style={{
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              background: 'rgba(163, 201, 226, 0.03)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Demonstrable Commitment
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Evidence of sustained effort and sacrifice
              </p>
            </div>

            {/* Principle 4 */}
            <div style={{
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              background: 'rgba(163, 201, 226, 0.03)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Institutional Alignment
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Work that resists easy quantification
              </p>
            </div>

            {/* Principle 5 - spans 2 columns on desktop */}
            <div style={{
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              background: 'rgba(163, 201, 226, 0.03)',
              gridColumn: '1 / -1',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                Stewardship Over Scale
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Preference for deliberate capital deployment over volume
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
        </div>
      </section>
    </>
  )
}
