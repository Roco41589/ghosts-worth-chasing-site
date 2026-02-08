'use client'

import { useState } from 'react'

export default function BoardInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    expertise: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, just show success message
    // Later: connect to email service endpoint or Airtable
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        background: '',
        expertise: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div style={{
        marginTop: 'var(--space-md)',
        padding: 'var(--space-md)',
        background: 'rgba(163, 201, 226, 0.1)',
        border: '2px solid var(--color-sky-blue)',
        borderRadius: '4px',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontSize: '20px',
          color: 'var(--color-deep-navy)',
          marginBottom: '12px',
        }}>
          Thank you for your interest
        </h3>
        <p style={{
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: 0,
        }}>
          We've received your inquiry and will be in touch once board recruitment begins.
        </p>
      </div>
    )
  }

  return (
    <div style={{
      marginTop: 'var(--space-md)',
      padding: 'var(--space-md)',
      background: 'rgba(163, 201, 226, 0.05)',
      border: '1px solid var(--color-border)',
      borderRadius: '4px',
    }}>
      <h3 style={{
        fontSize: '20px',
        color: 'var(--color-deep-navy)',
        marginBottom: '8px',
      }}>
        Board Service Inquiry
      </h3>
      <p style={{
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        marginBottom: '24px',
      }}>
        Share your background and areas of expertise
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '16px',
        }}>
          {/* Name */}
          <div>
            <label htmlFor="name" style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--color-slate-ink)',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
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

          {/* Email */}
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
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
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

        {/* Background */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="background" style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--color-slate-ink)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Professional Background *
          </label>
          <input
            type="text"
            id="background"
            name="background"
            required
            placeholder="e.g., Former CFO, nonprofit consultant, impact investor"
            value={formData.background}
            onChange={handleChange}
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

        {/* Expertise */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="expertise" style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--color-slate-ink)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Areas of Expertise *
          </label>
          <input
            type="text"
            id="expertise"
            name="expertise"
            required
            placeholder="e.g., Nonprofit governance, endowment management, social services"
            value={formData.expertise}
            onChange={handleChange}
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

        {/* Message */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--color-slate-ink)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share any additional context about your interest in board service"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              fontSize: '15px',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
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
          Submit Inquiry
        </button>
      </form>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
