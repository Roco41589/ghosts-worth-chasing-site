'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const closeDropdown = () => {
    setIsDropdownOpen(false)
    setActiveSubmenu(null)
  }

  const subMenus = {
    'individual-support': [
      { label: 'Eligibility', href: '/what-we-do/individual-support/eligibility' },
      { label: 'Application', href: '/what-we-do/individual-support/application' },
      { label: 'Philosophy', href: '/what-we-do/individual-support/philosophy' },
    ],
    'organizational-grants': [
      { label: 'Selection Criteria', href: '/what-we-do/organizational-grants/criteria' },
      { label: 'Grant Structure', href: '/what-we-do/organizational-grants/structure' },
      { label: 'Application Process', href: '/what-we-do/organizational-grants/application' },
      { label: 'Philosophy', href: '/what-we-do/organizational-grants/philosophy' },
    ],
    'endowment': [
      { label: 'Purpose', href: '/what-we-do/endowment/purpose' },
      { label: 'Investment Policy', href: '/what-we-do/endowment/investment-policy' },
      { label: 'Spending Policy', href: '/what-we-do/endowment/spending-policy' },
      { label: 'Transparency', href: '/what-we-do/endowment/transparency' },
      { label: 'Philosophy', href: '/what-we-do/endowment/philosophy' },
    ],
  }

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
            onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
            onMouseLeave={() => !isMobile && closeDropdown()}
          >
            <Link 
              href="/what-we-do"
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
              onClick={(e) => {
                if (isMobile) {
                  closeDropdown()
                }
              }}
            >
              What We Do
            </Link>
            
            {/* Invisible hover bridge */}
            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                height: '8px',
              }} />
            )}
            
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
                  {/* Individual Support */}
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => !isMobile && setActiveSubmenu('individual-support')}
                    onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                  >
                    <Link
                      href="/what-we-do/individual-support"
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        color: 'var(--color-slate-ink)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'background 0.2s ease',
                        background: activeSubmenu === 'individual-support' ? 'rgba(163, 201, 226, 0.1)' : 'transparent',
                      }}
                      onClick={() => isMobile && closeDropdown()}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                      onMouseLeave={(e) => {
                        if (activeSubmenu !== 'individual-support') {
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      Individual Support {!isMobile && '→'}
                    </Link>
                    
                    {/* Individual Support Submenu (Desktop only) */}
                    {!isMobile && activeSubmenu === 'individual-support' && (
                      <div style={{
                        position: 'absolute',
                        left: '100%',
                        top: 0,
                        marginLeft: '4px',
                        background: 'var(--color-mist-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        boxShadow: '0 4px 12px rgba(11, 29, 58, 0.1)',
                        minWidth: '200px',
                        padding: '8px 0',
                      }}>
                        {subMenus['individual-support'].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              display: 'block',
                              padding: '12px 20px',
                              color: 'var(--color-slate-ink)',
                              textDecoration: 'none',
                              fontSize: '15px',
                              transition: 'background 0.2s ease',
                            }}
                            onClick={closeDropdown}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Organizational Grants */}
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => !isMobile && setActiveSubmenu('organizational-grants')}
                    onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                  >
                    <Link
                      href="/what-we-do/organizational-grants"
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        color: 'var(--color-slate-ink)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'background 0.2s ease',
                        background: activeSubmenu === 'organizational-grants' ? 'rgba(163, 201, 226, 0.1)' : 'transparent',
                      }}
                      onClick={() => isMobile && closeDropdown()}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                      onMouseLeave={(e) => {
                        if (activeSubmenu !== 'organizational-grants') {
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      Organizational Grants {!isMobile && '→'}
                    </Link>
                    
                    {/* Organizational Grants Submenu (Desktop only) */}
                    {!isMobile && activeSubmenu === 'organizational-grants' && (
                      <div style={{
                        position: 'absolute',
                        left: '100%',
                        top: 0,
                        marginLeft: '4px',
                        background: 'var(--color-mist-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        boxShadow: '0 4px 12px rgba(11, 29, 58, 0.1)',
                        minWidth: '200px',
                        padding: '8px 0',
                      }}>
                        {subMenus['organizational-grants'].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              display: 'block',
                              padding: '12px 20px',
                              color: 'var(--color-slate-ink)',
                              textDecoration: 'none',
                              fontSize: '15px',
                              transition: 'background 0.2s ease',
                            }}
                            onClick={closeDropdown}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Endowment */}
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => !isMobile && setActiveSubmenu('endowment')}
                    onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                  >
                    <Link
                      href="/what-we-do/endowment"
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        color: 'var(--color-slate-ink)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'background 0.2s ease',
                        background: activeSubmenu === 'endowment' ? 'rgba(163, 201, 226, 0.1)' : 'transparent',
                      }}
                      onClick={() => isMobile && closeDropdown()}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                      onMouseLeave={(e) => {
                        if (activeSubmenu !== 'endowment') {
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      Endowment {!isMobile && '→'}
                    </Link>
                    
                    {/* Endowment Submenu (Desktop only) */}
                    {!isMobile && activeSubmenu === 'endowment' && (
                      <div style={{
                        position: 'absolute',
                        left: '100%',
                        top: 0,
                        marginLeft: '4px',
                        background: 'var(--color-mist-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        boxShadow: '0 4px 12px rgba(11, 29, 58, 0.1)',
                        minWidth: '200px',
                        padding: '8px 0',
                      }}>
                        {subMenus['endowment'].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              display: 'block',
                              padding: '12px 20px',
                              color: 'var(--color-slate-ink)',
                              textDecoration: 'none',
                              fontSize: '15px',
                              transition: 'background 0.2s ease',
                            }}
                            onClick={closeDropdown}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Regular Links */}
          <Link href="/impact" style={{ 
            whiteSpace: 'nowrap',
            paddingLeft: '24px',
            borderLeft: '1px solid var(--color-border)',
          }}>Impact</Link>
          <Link href="/hall-of-ghosts" style={{ 
            whiteSpace: 'nowrap',
            paddingLeft: '24px',
            borderLeft: '1px solid var(--color-border)',
          }}>Hall of Ghosts</Link>
          <Link href="/resources" style={{ 
            whiteSpace: 'nowrap',
            paddingLeft: '24px',
            borderLeft: '1px solid var(--color-border)',
          }}>Resources</Link>
          
          {/* About with Dropdown */}
          <div 
            style={{ 
              position: 'relative',
              whiteSpace: 'nowrap',
              paddingLeft: '24px',
              borderLeft: '1px solid var(--color-border)',
            }}
            onMouseEnter={() => !isMobile && setIsAboutDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setIsAboutDropdownOpen(false)}
          >
            <Link 
              href="/about"
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
              onClick={(e) => {
                if (isMobile) {
                  setIsAboutDropdownOpen(false)
                }
              }}
            >
              About
            </Link>
            
            {/* Invisible hover bridge */}
            {isAboutDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                height: '8px',
              }} />
            )}
            
            {/* About Dropdown Menu */}
            {isAboutDropdownOpen && (
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
                  minWidth: '180px',
                  padding: '8px 0',
                }}>
                  <Link
                    href="/financials"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: 'var(--color-slate-ink)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'background 0.2s ease',
                    }}
                    onClick={() => setIsAboutDropdownOpen(false)}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163, 201, 226, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Financials
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            href="/donate" 
            style={{ 
              whiteSpace: 'nowrap',
              padding: '10px 24px',
              background: 'var(--color-sky-blue)',
              color: 'var(--color-deep-navy)',
              border: '1px solid var(--color-deep-navy)',
              borderRadius: '50px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(163, 201, 226, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(163, 201, 226, 0.5)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(163, 201, 226, 0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span className="heart-icon" style={{ 
              fontSize: '12px',
              display: 'inline-block',
            }}>
              ❤️
            </span>
            Donate
          </Link>
          
          {/* Heart animation styles */}
          <style jsx global>{`
            @keyframes heartbeat {
              0%, 100% {
                transform: scale(1);
                filter: drop-shadow(0 0 0px rgba(239, 68, 68, 0));
              }
              50% {
                transform: scale(1.15);
                filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8));
              }
            }
            
            .heart-icon {
              animation: heartbeat 1.5s ease-in-out infinite;
            }
          `}</style>
        </div>
      </nav>
    </header>
  )
}
