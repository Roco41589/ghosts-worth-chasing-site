'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, just show success message
    // Later: connect to newsletter service endpoint
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setFirstName('')
      setLastName('')
    }, 3000)
  }

  return (
    <footer style={{
      borderTop: '1px solid var(--color-slate-ink)',
      background: 'var(--color-mist-white)',
      marginTop: 'var(--space-xl)',
    }}>
      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: 'var(--space-xl) var(--space-md)',
      }}>
        {/* Main Footer Content - Two Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-xl)',
        }}>
          {/* Left Column - Newsletter Signup */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: 'var(--space-sm)',
            }}>
              Stay Connected
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-md)',
              lineHeight: 1.6,
            }}>
              Get the latest Ghosts Worth Chasing news, stories and announcements in your inbox
            </p>

            {submitted ? (
              <div style={{
                padding: 'var(--space-md)',
                background: 'rgba(163, 201, 226, 0.1)',
                border: '1px solid var(--color-sky-blue)',
                borderRadius: '4px',
                color: 'var(--color-deep-navy)',
                fontSize: '14px',
              }}>
                Thank you for your interest. Newsletter signups will open once our 501(c)(3) status is confirmed.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div>
                    <label htmlFor="email" style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--color-slate-ink)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--color-slate-ink)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--color-slate-ink)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '12px 32px',
                    background: 'var(--color-deep-navy)',
                    color: 'var(--color-mist-white)',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-slate-ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-deep-navy)'}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Navigation Links */}
          <div>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}>
              <Link 
                href="/what-we-do" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                What We Do
              </Link>
              <Link 
                href="/about" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                About
              </Link>
              <Link 
                href="/resources" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Resources
              </Link>
              <a 
                href="mailto:contact@ghostsworthchasing.org" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--color-border)',
          margin: 'var(--space-lg) 0',
        }} />

        {/* Bottom Row - Logo/Name and Copyright/Social */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          {/* Foundation Name */}
          <div>
            <h2 style={{
              fontFamily: 'Regika, serif',
              fontSize: '32px',
              color: 'var(--color-deep-navy)',
              margin: 0,
              lineHeight: 1,
            }}>
              Ghosts Worth Chasing
            </h2>
          </div>

          {/* Copyright and Social Links */}
          <div style={{
            textAlign: 'right',
          }}>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              marginBottom: '12px',
            }}>
              © {new Date().getFullYear()} Ghosts Worth Chasing
            </p>
            
            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-end',
            }}>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/ghosts-worth-chasing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: 'var(--color-slate-ink)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-deep-navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-ink)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/ghostsworthchasing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: 'var(--color-slate-ink)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-deep-navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-ink)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/ghostsworthchasing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: 'var(--color-slate-ink)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-deep-navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-ink)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@ghostsworthchasing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: 'var(--color-slate-ink)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-deep-navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-ink)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer nav {
            align-items: flex-start !important;
            margin-top: 24px;
          }
          footer form > div {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          footer > div > div:last-child > div:last-child {
            text-align: left !important;
            margin-top: 16px;
          }
          footer > div > div:last-child > div:last-child > div {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
