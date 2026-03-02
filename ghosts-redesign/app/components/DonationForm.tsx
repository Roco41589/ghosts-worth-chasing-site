'use client'

import { useState } from 'react'

export default function DonationForm() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const presetAmounts = [50, 100, 250, 500, 1000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Stripe integration preserved — wire payment element here
    console.log({
      donationType,
      amount: customAmount || amount,
      email,
    })
  }

  const selectedAmount = customAmount ? parseInt(customAmount) : amount

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} autoComplete="on">

        {/* One-time / Monthly Toggle */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}>
            {(['one-time', 'monthly'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setDonationType(type)}
                style={{
                  padding: '13px 20px',
                  background: donationType === type ? 'var(--color-deep-navy)' : 'transparent',
                  color: donationType === type ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: `1px solid ${donationType === type ? 'var(--color-deep-navy)' : 'var(--color-border)'}`,
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {type === 'one-time' ? 'One Time' : 'Monthly'}
              </button>
            ))}
          </div>
          {donationType === 'monthly' && (
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              marginTop: '10px',
              fontWeight: 300,
            }}>
              A recurring gift provides sustained, predictable support for long-term operations.
            </p>
          )}
        </div>

        {/* Amount Selection */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginBottom: '10px',
          }}>
            {presetAmounts.slice(0, 3).map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => { setAmount(preset); setCustomAmount('') }}
                style={{
                  padding: '12px',
                  background: amount === preset && !customAmount ? 'var(--color-deep-navy)' : 'transparent',
                  color: amount === preset && !customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: `1px solid ${amount === preset && !customAmount ? 'var(--color-deep-navy)' : 'var(--color-border)'}`,
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ${preset.toLocaleString()}
              </button>
            ))}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}>
            {presetAmounts.slice(3).map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => { setAmount(preset); setCustomAmount('') }}
                style={{
                  padding: '12px',
                  background: amount === preset && !customAmount ? 'var(--color-deep-navy)' : 'transparent',
                  color: amount === preset && !customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: `1px solid ${amount === preset && !customAmount ? 'var(--color-deep-navy)' : 'var(--color-border)'}`,
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ${preset.toLocaleString()}
              </button>
            ))}
            <div style={{ position: 'relative', gridColumn: 'span 2' }}>
              <span style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '15px',
                color: customAmount ? 'var(--color-mist-white)' : 'var(--color-text-secondary)',
                pointerEvents: 'none',
                fontFamily: 'var(--font-body)',
              }}>
                $
              </span>
              <input
                type="number"
                name="custom-amount"
                placeholder="Other"
                min="1"
                inputMode="numeric"
                autoComplete="off"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 28px',
                  background: customAmount ? 'var(--color-deep-navy)' : 'transparent',
                  color: customAmount ? 'var(--color-mist-white)' : 'var(--color-slate-ink)',
                  border: `1px solid ${customAmount ? 'var(--color-deep-navy)' : 'var(--color-border)'}`,
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontFamily: 'var(--font-body)',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <label
            htmlFor="donor-email"
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Email Address
          </label>
          <input
            type="email"
            id="donor-email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              fontSize: '15px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
          />
          <p style={{
            fontSize: '12px',
            color: 'var(--color-text-secondary)',
            marginTop: '6px',
            fontWeight: 300,
          }}>
            Used for your tax receipt only. You will not be added to a mailing list.
          </p>
        </div>

        {/* Stripe Payment Element — preserved from existing integration */}
        <div id="stripe-payment-element" style={{ marginBottom: 'var(--space-md)' }}>
          {/* Mount your Stripe Elements here — do not modify surrounding structure */}
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            background: 'var(--color-deep-navy)',
            color: 'var(--color-mist-white)',
            border: '1px solid var(--color-sky-blue)',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            letterSpacing: '0.04em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-slate-ink)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 29, 58, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-deep-navy)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {donationType === 'monthly'
            ? `Give $${selectedAmount?.toLocaleString() || '—'} / month`
            : `Give $${selectedAmount?.toLocaleString() || '—'}`}
        </button>

      </form>

      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  )
}
