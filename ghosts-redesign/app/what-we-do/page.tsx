'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WhatWeDo() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>What We Do</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
          fontSize: '18px',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          Ghosts Worth Chasing operates in three distinct modes, each with separate accounting, 
          criteria, and oversight. Funds are not commingled. Each mode serves a different time 
          horizon and type of need.
        </p>
      </section>

      <section className="section">
        <div style={{
          maxWidth: 'var(--max-content-width)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-lg)',
          padding: '0 var(--space-md)',
        }}>
          {/* Individual Support Card */}
          <Link 
            href="/what-we-do/individual-support"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: 'var(--space-xl)',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-lg)',
              minHeight: '280px',
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
            <div style={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image 
                src="/individualgrants.png" 
                alt="Individual Support"
                width={64}
                height={64}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
            }}>
              Individual Support
            </h2>
            
            <div style={{
              fontSize: '15px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>

          {/* Organizational Grants Card */}
          <Link 
            href="/what-we-do/organizational-grants"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: 'var(--space-xl)',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-lg)',
              minHeight: '280px',
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
            <div style={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image 
                src="/corporategrants.png" 
                alt="Organizational Grants"
                width={64}
                height={64}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
            }}>
              Organizational Grants
            </h2>
            
            <div style={{
              fontSize: '15px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>

          {/* Endowment Card */}
          <Link 
            href="/what-we-do/endowment"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: 'var(--space-xl)',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-lg)',
              minHeight: '280px',
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
            <div style={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image 
                src="/endownment.png" 
                alt="Endowment"
                width={64}
                height={64}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
            }}>
              Endowment
            </h2>
            
            <div style={{
              fontSize: '15px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>
        </div>
      </section>

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-lg)',
        marginTop: 'var(--space-xl)',
      }}>
        <p style={{ 
          fontWeight: 300,
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}>
          All three modes operate under the same governance structure but maintain separate budgets. 
          This prevents mission drift and ensures each commitment can be honored independently.
        </p>
      </section>
    </>
  )
}
      <section className="section">
        <div style={{
          maxWidth: 'var(--max-content-width)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-lg)',
          padding: '0 var(--space-md)',
        }}>
          {/* Individual Support Card */}
          <Link 
            href="/what-we-do/individual-support"
            style={{
              border: '1px solid var(--color-border)',
              padding: 'var(--space-lg)',
              background: 'var(--color-mist-white)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-sky-blue)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 29, 58, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              background: 'var(--color-deep-navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-mist-white)',
              fontSize: '24px',
            }}>
              👤
            </div>
            
            <div style={{ flex: 1 }}>
              <h2 style={{ 
                fontFamily: 'Regika, serif',
                fontSize: '24px',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-deep-navy)',
              }}>
                Individual Support
              </h2>
              <p style={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: 'var(--space-sm)',
              }}>
                Direct financial assistance to individuals experiencing career transition, personal hardship, 
                or structural disadvantage.
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-teal-grey)',
                fontWeight: 500,
              }}>
                30% of distributable funds
              </p>
            </div>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>

          {/* Organizational Grants Card */}
          <Link 
            href="/what-we-do/organizational-grants"
            style={{
              border: '1px solid var(--color-border)',
              padding: 'var(--space-lg)',
              background: 'var(--color-mist-white)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-sky-blue)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 29, 58, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              background: 'var(--color-deep-navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-mist-white)',
              fontSize: '24px',
            }}>
              🏛️
            </div>
            
            <div style={{ flex: 1 }}>
              <h2 style={{ 
                fontFamily: 'Regika, serif',
                fontSize: '24px',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-deep-navy)',
              }}>
                Organizational Grants
              </h2>
              <p style={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: 'var(--space-sm)',
              }}>
                Multi-year capacity grants to aligned nonprofits working on long-horizon challenges 
                where traditional philanthropy is poorly suited.
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-teal-grey)',
                fontWeight: 500,
              }}>
                40% of distributable funds
              </p>
            </div>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>

          {/* Endowment Card */}
          <Link 
            href="/what-we-do/endowment"
            style={{
              border: '1px solid var(--color-border)',
              padding: 'var(--space-lg)',
              background: 'var(--color-mist-white)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-sky-blue)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 29, 58, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              background: 'var(--color-deep-navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-mist-white)',
              fontSize: '24px',
            }}>
              🌱
            </div>
            
            <div style={{ flex: 1 }}>
              <h2 style={{ 
                fontFamily: 'Regika, serif',
                fontSize: '24px',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-deep-navy)',
              }}>
                Endowment
              </h2>
              <p style={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: 'var(--space-sm)',
              }}>
                Reserved capital invested conservatively for perpetual operation, ensuring organizational 
                continuity and independence from fundraising pressure.
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-teal-grey)',
                fontWeight: 500,
              }}>
                30% of total capital
              </p>
            </div>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Learn more →
            </div>
          </Link>
        </div>
      </section>

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-lg)',
        marginTop: 'var(--space-xl)',
      }}>
        <p style={{ 
          fontWeight: 300,
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}>
          All three modes operate under the same governance structure but maintain separate budgets. 
          This prevents mission drift and ensures each commitment can be honored independently.
        </p>
      </section>
    </>
  )
}
