'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header style={{
      borderBottom: '1px solid var(--color-border)',
      padding: '16px 24px',
      background: 'var(--color-mist-white)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <nav style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        <Link href="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: 'none',
          flexShrink: 0,
        }}>
          <Image 
            src="/logo.svg" 
            alt="Ghosts Worth Chasing" 
            width={40}
            height={40}
            style={{
              width: '40px',
              height: 'auto',
            }}
          />
          <span style={{
            fontSize: '18px',
            fontWeight: 500,
            color: 'var(--color-deep-navy)',
            whiteSpace: 'nowrap',
          }}>
            Ghosts Worth Chasing
          </span>
        </Link>
        
        <div style={{
          display: 'flex',
          gap: '24px',
          fontSize: '15px',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          {/* What We Do with Dropdown */}
          <div 
            style={{ 
              position: 'relative',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link 
              href="/what-we-do"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'block',
                paddingBottom: '8px',
              }}
            >
              What We Do
            </Link>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                paddingTop: '8px',
                zIndex: 1001,
              }}>
                <div style={{
                  background: 'var(--color-mist-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(11, 29, 58, 0.1)',
                  minWidth: '220px',
                  padding: '8px 0',
                }}>
                  <Link
                    href="/what-we-do/individual-support"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: 'var(--color-slate-ink)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Individual Support
                  </Link>
                  <Link
                    href="/what-we-do/organizational-grants"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: 'var(--color-slate-ink)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Organizational Grants
                  </Link>
                  <Link
                    href="/what-we-do/endowment"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: 'var(--color-slate-ink)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Endowment
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Regular Links */}
          <Link href="/impact" style={{ whiteSpace: 'nowrap' }}>Impact</Link>
          <Link href="/hall-of-ghosts" style={{ whiteSpace: 'nowrap' }}>Hall of Ghosts</Link>
          <Link href="/resources" style={{ whiteSpace: 'nowrap' }}>Resources</Link>
          <Link href="/about" style={{ whiteSpace: 'nowrap' }}>About</Link>
          <Link href="/donate" style={{ whiteSpace: 'nowrap' }}>Donate</Link>
        </div>
      </nav>
    </header>
  )
}
