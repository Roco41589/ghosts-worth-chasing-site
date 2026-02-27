'use client'

import { useState } from 'react'

export default function DonationForm() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [dedication, setDedication] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    isCompany: false,
    anonymous: false,
    comments: '',
    smsOptIn: false,
  })

  const presetAmounts = [1000, 500, 250, 100, 50]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      donationType,
      amount: customAmount || amount,
      dedication,
      ...formData,
    })
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: 'var(--space-lg) var(--space-md)',
    }}>
      <h1 style={{
        fontSize: '40px',
        color: 'var(--color-deep-navy)',
        marginBottom: '16px',
        fontWeight: 600,
      }}>
        Support Our Work
      </h1>
      <p style={{
        fontSize: '16px',
        color: 'var(--color-text)',
        marginBottom: 'var(--space-md)',
        lineHeight: 1.6,
      }}>
        <strong>Thank you for supporting</strong> individuals in transition, mission-aligned
        organizations, and long-term institutional capacity.
      </p>

      <form onSubmit={handleSubmit} autoComplete="on">
        {/* Donation Type Toggle */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}>
            Donation Type
          </h3>
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '8px',
          }}>
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              style={{
                flex: 1,
                padding: '14px 24px',
                background: donationType === 'one-time' ? 'var(--color-deep-navy)' : '#E5E7EB',
                color: donationType === 'one-time' ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              One Time Gift
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              style={{
                flex: 1,
                padding: '14px 24px',
                background: donationType === 'monthly' ? 'var(--color-deep-navy)' : '#E5E7EB',
                color: donationType === 'monthly' ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Monthly Gift
            </button>
          </div>
          {donationType === 'monthly' && (
            <p style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontStyle: 'italic',
              marginTop: '8px',
            }}>
              → A monthly gift provides sustained, predictable support
            </p>
          )}
        </div>

        {/* Gift Amount Selection */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}>
            Gift Amount
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '12px',
            marginBottom: '16px',
          }}>
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setAmount(preset)
                  setCustomAmount('')
                }}
                style={{
                  padding: '14px',
                  background: amount === preset && !customAmount ? 'var(--color-deep-navy)' : '#E5E7EB',
                  color: amount === preset && !customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ${preset.toLocaleString()}
              </button>
            ))}
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                color: customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                pointerEvents: 'none',
              }}>
                $
              </span>
              <input
                type="number"
                placeholder="Other"
                min="1"
                inputMode="numeric"
                autoComplete="off"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 32px',
                  background: customAmount ? 'var(--color-deep-navy)' : '#E5E7EB',
                  color: customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  textAlign: 'center',
                }}
              />
            </div>
          </div>
        </div>

        {/* Impact Message */}
        <div style={{
          background: 'rgba(163, 201, 226, 0.1)',
          border: '2px solid var(--color-sky-blue)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: 'var(--space-md)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '16px',
            color: 'var(--color-deep-navy)',
            marginBottom: 0,
          }}>
            Your gift supports institutional capacity, individual transitions, and long-term sustainability.
          </p>
        </div>

        {/* Dedication Checkbox */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={dedication}
              onChange={(e) => setDedication(e.target.checked)}
              style={{
                width: '20px',
                height: '20px',
                cursor: 'pointer',
              }}
            />
            <span style={{ fontSize: '15px', color: 'var(--color-text)' }}>
              Dedicate this gift in honor or memory of someone special
            </span>
          </label>

          {dedication && (
            <div style={{
              marginTop: '16px',
              padding: '20px',
              background: 'rgba(163, 201, 226, 0.05)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
            }}>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="dedicationType" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-slate-ink)',
                  marginBottom: '6px',
                }}>
                  Honoree Gift Type
                </label>
                <select
                  id="dedicationType"
                  autoComplete="off"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Select</option>
                  <option value="honor">In Honor Of</option>
                  <option value="memory">In Memory Of</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="honoreeName" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-slate-ink)',
                  marginBottom: '6px',
                }}>
                  Honoree Name
                </label>
                <input
                  type="text"
                  id="honoreeName"
                  name="honoree-name"
                  autoComplete="off"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label htmlFor="dedicationMessage" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-slate-ink)',
                  marginBottom: '6px',
                }}>
                  Message (optional)
                </label>
                <textarea
                  id="dedicationMessage"
                  name="dedication-message"
                  autoComplete="off"
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Billing Information */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}>
            Billing Information
          </h3>

          {/* First/Last Name */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px',
          }}>
            <div>
              <label htmlFor="firstName" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="given-name"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
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
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="family-name"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>

          {/* Company Checkbox */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                checked={formData.isCompany}
                onChange={(e) => setFormData({ ...formData, isCompany: e.target.checked })}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>
                Yes, this is a gift from a company or organization.
              </span>
            </label>
          </div>

          {formData.isCompany && (
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="companyName" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                Company or Organization Name
              </label>
              <input
                type="text"
                id="companyName"
                name="organization"
                autoComplete="organization"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          )}

          {/* Address 1 */}
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="address1" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
            }}>
              Address 1
            </label>
            <input
              type="text"
              id="address1"
              name="address-line1"
              autoComplete="address-line1"
              required
              value={formData.address1}
              onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontSize: '15px',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Address 2 */}
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="address2" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
            }}>
              Address 2 (optional)
            </label>
            <input
              type="text"
              id="address2"
              name="address-line2"
              autoComplete="address-line2"
              placeholder="Apt, ste, bldg."
              value={formData.address2}
              onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontSize: '15px',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* City / State */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px',
          }}>
            <div>
              <label htmlFor="city" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                City
              </label>
              <input
                type="text"
                id="city"
                name="address-level2"
                autoComplete="address-level2"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label htmlFor="state" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                State
              </label>
              <input
                type="text"
                id="state"
                name="address-level1"
                autoComplete="address-level1"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>

          {/* Zip Code / Country */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px',
          }}>
            <div>
              <label htmlFor="zipCode" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="postal-code"
                autoComplete="postal-code"
                inputMode="numeric"
                required
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label htmlFor="country" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-slate-ink)',
                marginBottom: '6px',
              }}>
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                }}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="phone" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
            }}>
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="tel"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontSize: '15px',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* SMS Opt-in */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                checked={formData.smsOptIn}
                onChange={(e) => setFormData({ ...formData, smsOptIn: e.target.checked })}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  marginTop: '2px',
                }}
              />
              <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                By checking this box, you agree to receive SMS messages from Ghosts Worth Chasing. You can reply 'STOP' to opt out at any time.
              </span>
            </label>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
            }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontSize: '15px',
                fontFamily: 'inherit',
              }}
            />
            <p style={{
              fontSize: '12px',
              color: 'var(--color-text-secondary)',
              marginTop: '6px',
            }}>
              You'll receive a tax receipt and periodic updates. You can unsubscribe at any time.
            </p>
          </div>

          {/* Anonymous */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>
                Yes, I would like to make this donation anonymously.
              </span>
            </label>
          </div>

          {/* Comments */}
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <label htmlFor="comments" style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
            }}>
              Donor Comments (optional):
            </label>
            <textarea
              id="comments"
              name="comments"
              autoComplete="off"
              rows={3}
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontSize: '15px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
            />
          </div>
        </div>

        {/* Payment Information Section */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}>
            Payment Information
          </h3>

          <div style={{
            padding: 'var(--space-md)',
            background: 'rgba(163, 201, 226, 0.1)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}>
              Secure payment processing via Stripe.
            </p>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: 0,
            }}>
              Accepted: Card, Direct Debit, Google Pay, Apple Pay, PayPal, Venmo
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '18px',
            background: 'var(--color-deep-navy)',
            color: 'var(--color-mist-white)',
            border: '2px solid var(--color-sky-blue)',
            borderRadius: '50px',
            fontSize: '20px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-slate-ink)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(11, 29, 58, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-deep-navy)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Donate ${customAmount || amount}
        </button>
      </form>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          form > div:nth-child(4) > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
