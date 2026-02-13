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
        marginBottom
