'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function EbookPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePurchase = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_EBOOK_PRICE_ID,
        }),
      })

      const { sessionId } = await response.json()

      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) {
        setError(error.message || 'Something went wrong')
      }
    } catch (err: any) {
      setError('Failed to process purchase. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: 'var(--space-xl) var(--space-md)',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: 'var(--space-xl)',
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: 600,
          color: 'var(--color-deep-navy)',
          marginBottom: 'var(--space-md)',
        }}>
          The Transition Guide
        </h1>
        <p style={{
          fontSize: '20px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          A practical handbook for navigating life transitions with clarity and intention.
        </p>
      </div>

      <div style={{
        background: 'rgba(163, 201, 226, 0.08)',
        border: '2px solid var(--color-sky-blue)',
        borderRadius: '16px',
        padding: 'var(--space-xl)',
        marginBottom: 'var(--space-xl)',
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--color-deep-navy)',
          marginBottom: 'var(--space-md)',
        }}>
          What's Inside
        </h2>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: 'var(--space-lg)',
        }}>
          {[
            'Framework for evaluating transition opportunities',
            'Case studies from successful transitions',
            'Decision-making tools and worksheets',
            'Resource library and recommended reading',
            'Community connection strategies',
          ].map((item, i) => (
            <li key={i} style={{
              padding: '12px 0',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}>
              <span style={{ color: 'var(--color-sky-blue)', fontSize: '20px' }}>✓</span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: 'var(--space-lg)',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'var(--color-deep-navy)',
            marginBottom: '8px',
          }}>
            $10
          </div>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
          }}>
            One-time purchase • Instant PDF delivery
          </p>

          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #ef4444',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              color: '#991b1b',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handlePurchase}
            disabled={loading}
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-mist-white)',
              background: loading ? 'var(--color-teal-grey)' : 'var(--color-deep-navy)',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {loading ? 'Processing...' : 'Purchase Guide'}
          </button>

          <p style={{
            fontSize: '13px',
            color: 'var(--color-teal-grey)',
            marginTop: '16px',
          }}>
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--color-deep-navy)',
          marginBottom: 'var(--space-md)',
        }}>
          Frequently Asked Questions
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>
              What format is the guide?
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              PDF format, optimized for both screen reading and printing.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>
              How do I receive the guide?
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Immediately after purchase, you'll receive an email with a download link.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>
              Can I get a refund?
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Due to the digital nature of the product, all sales are final. If you have concerns, email roconnor@ghostsworthchasing.org
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
