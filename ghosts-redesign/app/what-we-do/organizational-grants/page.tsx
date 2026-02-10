'use client'

import Link from 'next/link'

export default function OrganizationalGrants() {
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
          ← Our Funding Model
        </Link>
        
        <h1 style={{ 
          color: 'var(--color-deep-navy)', 
          marginBottom: 'var(--space-sm)',
          textAlign: 'center',
        }}>
          Organizational Grants
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-sm)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--space-sm) auto',
        }}>
          We fund aligned nonprofits working on long-horizon challenges where traditional 
          philanthropy is poorly suited. Grants support institutional capacity, not specific projects.
        </p>

        <p style={{ 
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: 'var(--space-md)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--space-md) auto',
        }}>
          The foundation does not operate an open application pipeline. Organizations are identified 
          through deliberate sourcing and board review.
        </p>

        <div style={{ 
          marginBottom: 'var(--space-md)',
          padding: 'var(--space-md)',
          borderLeft: '2px solid var(--color-sky-blue)',
          background: 'rgba(163, 201, 226, 0.05)',
          maxWidth: '700px',
          margin: '0 auto var(--space-md) auto',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '12px',
          }}>
            Stewardship Approach
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            Capital is deployed selectively under board governance. The foundation is not obligated to deploy 
            capital annually. Restraint is considered a feature of good stewardship, not a limitation.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            Decisions are made on a deliberate timeline that prioritizes institutional alignment and long-term sustainability.
          </p>
        </div>

        <div style={{ 
          marginBottom: 'var(--space-lg)',
          padding: 'var(--space-md)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          maxWidth: '700px',
          margin: '0 auto var(--space-lg) auto',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '12px',
          }}>
            What We Do Not Do
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text)', marginBottom: 0, lineHeight: 1.6 }}>
            Ghosts Worth Chasing does not fund short-term pilots, donor-directed projects, or visibility-driven initiatives. 
            We do not fund work optimized for urgency or measurable short-term outcomes.
          </p>
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
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {/* How Organizations Are Evaluated Card */}
          <Link 
            href="/what-we-do/organizational-grants/criteria"
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
              How Organizations Are Evaluated
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* How Grants Are Structured Card */}
          <Link 
            href="/what-we-do/organizational-grants/structure"
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
              How Grants Are Structured
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* How Decisions Are Made Card */}
          <Link 
            href="/what-we-do/organizational-grants/application"
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
              How Decisions Are Made
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Grantmaking Philosophy Card */}
          <Link 
            href="/what-we-do/organizational-grants/philosophy"
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
              Grantmaking Philosophy
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
