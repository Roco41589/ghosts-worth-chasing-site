'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type FaqItem = { q: string; a: string }

const FAQS: FaqItem[] = [
  {
    q: 'What format is the guide?',
    a: 'PDF format, optimized for both screen reading and printing.',
  },
  {
    q: 'How do I receive the guide?',
    a: "Immediately after purchase, you'll be redirected to a confirmation page and you’ll also receive an email with a download link.",
  },
  {
    q: 'Can I get a refund?',
    a: 'Due to the digital nature of the product, all sales are final. If you have concerns, email roconnor@ghostsworthchasing.org.',
  },
  {
    q: 'I didn’t get the email — what should I do?',
    a: 'Check spam/promotions first. If it’s not there, email roconnor@ghostsworthchasing.org and include the email used at checkout.',
  },
]

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        borderRadius: 999,
        background: 'rgba(163, 201, 226, 0.22)',
        border: '1px solid rgba(124,170,176,0.35)',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 180ms ease',
        color: 'var(--color-deep-navy)',
        flex: '0 0 auto',
      }}
    >
      ▾
    </span>
  )
}

function PillLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        padding: '0 18px',
        borderRadius: 999,
        border: '1px solid rgba(124,170,176,0.45)',
        background: 'white',
        color: 'var(--color-deep-navy)',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '-0.01em',
        boxShadow: '0 1px 0 rgba(11,29,58,0.04)',
        textDecoration: 'none',
      }}
    >
      {label}
    </a>
  )
}

export default function EbookPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [openIndex, setOpenIndex] = useState<number>(0)

  const handlePurchase = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_EBOOK_PRICE_ID,
        }),
      })

      const { sessionId } = await response.json()

      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) setError(error.message || 'Something went wrong')
    } catch (err: any) {
      setError('Failed to process purchase. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '56px var(--space-md)', // tighter than --space-xl
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px', // tighter
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          The Transition Guide
        </h1>

        <p
          style={{
            fontSize: '20px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          A practical handbook for navigating life transitions with clarity and intention.
        </p>
      </div>

      {/* Main Card */}
      <div
        style={{
          background: 'rgba(163, 201, 226, 0.08)',
          border: '2px solid var(--color-sky-blue)',
          borderRadius: '16px',
          padding: '48px', // was var(--space-xl) — tighter
          marginBottom: '44px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}
        >
          What’s Inside
        </h2>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: '28px',
          }}
        >
          {[
            'Framework for evaluating transition opportunities',
            'Case studies from successful transitions',
            'Decision-making tools and worksheets',
            'Resource library and recommended reading',
            'Community connection strategies',
          ].map((item, i) => (
            <li
              key={i}
              style={{
                padding: '12px 0',
                borderBottom: '1px solid rgba(124,170,176,0.35)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <span style={{ color: 'var(--color-sky-blue)', fontSize: '20px', lineHeight: 1 }}>
                ✓
              </span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Purchase box */}
        <div
          style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '46px',
              fontWeight: 700,
              color: 'var(--color-deep-navy)',
              marginBottom: '6px',
            }}
          >
            $10
          </div>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '16px',
            }}
          >
            One-time purchase • Instant PDF delivery
          </p>

          {error && (
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #ef4444',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                color: '#991b1b',
                fontSize: '14px',
              }}
            >
              {error}
            </div>
          )}

          <button
            onClick={handlePurchase}
            disabled={loading}
            style={{
              width: '100%',
              maxWidth: '320px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-mist-white)',
              background: loading ? 'var(--color-teal-grey)' : 'var(--color-deep-navy)',
              border: 'none',
              borderRadius: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {loading ? 'Processing…' : 'Purchase Guide'}
          </button>

          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-teal-grey)',
              marginTop: '14px',
              marginBottom: 0,
            }}
          >
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>

      {/* ✅ NEW FAQ SECTION (replaces old FAQ block) */}
      <div style={{ paddingBottom: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <h2
            style={{
              fontSize: '34px',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              color: 'var(--color-deep-navy)',
              marginBottom: 10,
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              margin: '0 auto',
              maxWidth: 680,
              color: 'var(--color-text-secondary)',
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            If you can’t find an answer you’re looking for, feel free to drop us a line.
          </p>

          <div
            style={{
              marginTop: 18,
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <PillLink href="/about" label="About the organization" />
            <PillLink href="/resources" label="Resources" />
            <PillLink href="/donate" label="Donate" />
          </div>
        </div>

        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {FAQS.map((item, i) => {
            const open = i === openIndex
            return (
              <div
                key={item.q}
                style={{
                  background: 'rgba(124,170,176,0.10)',
                  border: '1px solid rgba(124,170,176,0.30)',
                  borderRadius: 18,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(11,29,58,0.06)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '18px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--color-deep-navy)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.q}
                  </span>

                  <Chevron open={open} />
                </button>

                {open && (
                  <div style={{ padding: '0 18px 18px 18px' }}>
                    <div
                      style={{
                        height: 1,
                        background: 'rgba(124,170,176,0.28)',
                        marginBottom: 14,
                      }}
                    />
                    <p style={{ margin: 0, lineHeight: 1.75, color: 'var(--color-slate-ink)' }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Responsive tweak for the big header */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 34px !important;
          }
        }
      `}</style>
    </div>
  )
}
