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
      maxWidth: '760px',
      margin: '0 auto',
      padding: '56px 20px',
    }}>

      {/* Hero */}
      <div style={{
        textAlign: 'center',
        marginBottom: '48px',
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 500,
          color: 'var(--color-deep-navy)',
          marginBottom: '16px',
        }}>
          The Transition Guide
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          A practical handbook for navigating life transitions with clarity and intention.
        </p>
      </div>

      {/* Product Card */}
      <div style={{
        background: 'rgba(163, 201, 226, 0.08)',
        border: '2px solid var(--color-sky-blue)',
        borderRadius: '16px',
        padding: '40px 28px',
        marginBottom: '56px',
      }}>

        <h2 style={{
          fontSize: '22px',
          fontWeight: 500,
          color: 'var(--color-deep-navy)',
          marginBottom: '24px',
        }}>
          What's Inside
        </h2>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: '32px',
        }}>
          {[
            'Framework for evaluating transition opportunities',
            'Case studies from successful transitions',
            'Decision-making tools and worksheets',
            'Resource library and recommended reading',
            'Community connection strategies',
          ].map((item, i) => (
            <li key={i} style={{
              padding: '10px 0',
              borderBottom: '1px solid rgba(124,170,176,0.3)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}>
              <span style={{
                color: 'var(--color-sky-blue)',
                fontSize: '18px',
              }}>
                ✓
              </span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Pricing Block */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px 24px',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '8px',
          }}>
            $10
          </div>

          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            marginBottom: '24px',
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
              maxWidth: '280px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--color-mist-white)',
              background: loading
                ? 'var(--color-teal-grey)'
                : 'var(--color-deep-navy)',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
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

      {/* FAQ */}
      <div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 500,
          color: 'var(--color-deep-navy)',
          marginBottom: '24px',
        }}>
          Frequently Asked Questions
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '6px' }}>
              What format is the guide?
            </h4>
            <p style={{
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              PDF format, optimized for both screen reading and printing.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '6px' }}>
              How do I receive the guide?
            </h4>
            <p style={{
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              Immediately after purchase, you'll receive an email with a download link.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '6px' }}>
              Can I get a refund?
            </h4>
            <p style={{
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              Due to the digital nature of the product, all sales are final. If you have concerns, email roconnor@ghostsworthchasing.org
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
