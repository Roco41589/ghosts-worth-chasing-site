'use client'

import { useState } from 'react'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    age: '',
    website: '',
    socialHandles: '',
    // Eligibility + Fit
    isIndividual: '',
    isUSBased: '',
    pursuitAreas: [] as string[],
    pursuitAreasOther: '',
    supportType: '',
    supportTypeOther: '',
    amountRequested: '',
    partialFundingAcceptable: '',
    // The Work
    whatBuilding: '',
    whyMatters: '',
    specificConstraint: '',
    next90Days: '',
    success12Months: '',
    // Proof of Follow-Through
    exampleFinished: '',
    artifactLink: '',
    artifactFile: null as File | null,
    referenceName: '',
    referenceEmail: '',
    // Use of Funds
    fundsUseCategories: [] as string[],
    fundsBreakdown: '',
    acceptanceComplications: '',
    acceptanceComplicationsExplain: '',
    // Follow-Up
    sixMonthCheckIn: '',
    twelveMonthUpdate: '',
    publicFeature: '',
    sharePhotoWork: '',
    // Final
    anythingElse: '',
    certificationConfirmed: false,
  })

  const [charCounts, setCharCounts] = useState({
    whatBuilding: 0,
    whyMatters: 0,
    specificConstraint: 0,
    next90Days: 0,
    success12Months: 0,
    exampleFinished: 0,
    fundsBreakdown: 0,
    anythingElse: 0,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox' && name === 'certificationConfirmed') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({ ...prev, certificationConfirmed: checkbox.checked }))
    } else if (type === 'checkbox' && name === 'pursuitAreas') {
      const checkbox = e.target as HTMLInputElement
      const currentValues = formData.pursuitAreas
      if (checkbox.checked) {
        setFormData(prev => ({ ...prev, pursuitAreas: [...currentValues, value] }))
      } else {
        setFormData(prev => ({ ...prev, pursuitAreas: currentValues.filter(v => v !== value) }))
      }
    } else if (type === 'checkbox' && name === 'fundsUseCategories') {
      const checkbox = e.target as HTMLInputElement
      const currentValues = formData.fundsUseCategories
      if (checkbox.checked) {
        setFormData(prev => ({ ...prev, fundsUseCategories: [...currentValues, value] }))
      } else {
        setFormData(prev => ({ ...prev, fundsUseCategories: currentValues.filter(v => v !== value) }))
      }
    } else if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      const file = fileInput.files?.[0] || null
      
      // Check file size (5MB limit)
      if (file && file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      
      setFormData(prev => ({ ...prev, [name]: file }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      
      // Update word count for textareas
      if (e.target instanceof HTMLTextAreaElement && Object.keys(charCounts).includes(name)) {
        const wordCount = value.trim().split(/\s+/).filter(w => w.length > 0).length
        setCharCounts(prev => ({ ...prev, [name]: wordCount }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // TEMPORARY: Just show success message for testing
    // No actual submission happening yet
    setTimeout(() => {
      console.log('Form data:', formData) // Log to console so you can see it
      setSubmitSuccess(true)
      setIsSubmitting(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1000) // Fake 1 second delay

    /* COMMENTED OUT - Add back when you set up backend
    try {
      const submitData = new FormData()
      
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'artifactFile' && value instanceof File) {
          submitData.append(key, value)
        } else if (Array.isArray(value)) {
          submitData.append(key, value.join(', '))
        } else {
          submitData.append(key, String(value))
        }
      })

      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitSuccess(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitError('There was an error submitting your application. Please try again.')
      }
    } catch (error) {
      setSubmitError('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
    */
  }

  if (submitSuccess) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'var(--space-xl) var(--space-md)',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'rgba(163, 201, 226, 0.08)',
          border: '2px solid var(--color-sky-blue)',
          borderRadius: '8px',
          padding: 'var(--space-xl)',
        }}>
          <h1 style={{
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            fontSize: '32px',
          }}>
            Application Received
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            marginBottom: 'var(--space-md)',
          }}>
            Thank you for your application to Ghosts Worth Chasing.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
          }}>
            We have received your submission and will review it carefully. 
            Applicants will be notified following board decision. 
            This may take several weeks.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--space-md)',
          }}>
            A confirmation email has been sent to <strong>{formData.email}</strong>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: 'var(--space-lg) var(--space-md)',
    }}>
      <h1 style={{
        color: 'var(--color-deep-navy)',
        marginBottom: 'var(--space-md)',
        textAlign: 'center',
      }}>
        Individual Support Application
      </h1>

      {/* Intro Text */}
      <div style={{
        background: 'rgba(163, 201, 226, 0.08)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: 'var(--space-md)',
        marginBottom: 'var(--space-xl)',
      }}>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          Ghosts Worth Chasing supports individuals who are building something meaningful and durable.
          We prioritize clarity, follow-through, and trajectory shift—support that changes what you can attempt next.
        </p>
        <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
          This application should take ~10–15 minutes. If selected, you'll be asked for a lightweight update 
          at 6 and 12 months so we can document what changed.
        </p>
      </div>

      {submitError && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #ef4444',
          borderRadius: '8px',
          padding: 'var(--space-md)',
          marginBottom: 'var(--space-lg)',
          color: '#991b1b',
        }}>
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Section 1: Basic Info */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            1. Basic Information
          </h2>

          {/* Full Name */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* Preferred Name */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Preferred Name <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              type="text"
              name="preferredName"
              value={formData.preferredName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Phone <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* City + State */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--color-deep-navy)',
                marginBottom: '8px',
              }}>
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="e.g., CA"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>
          </div>

          {/* Age */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Age * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400, fontSize: '14px' }}>(must be 18+)</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="18"
              style={{
                width: '150px',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* Website / Portfolio */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Website / Portfolio / Linktree <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {/* Social Handles */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Social Handle(s) <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              type="text"
              name="socialHandles"
              value={formData.socialHandles}
              onChange={handleChange}
              placeholder="@username or links"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>
        </div>

        {/* Section 2: Eligibility + Fit */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            2. Eligibility + Fit
          </h2>

          {/* Are you applying as an individual? */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              Are you applying as an individual (not an organization)? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="isIndividual"
                  value="yes"
                  checked={formData.isIndividual === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="isIndividual"
                  value="no"
                  checked={formData.isIndividual === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Are you currently based in the U.S.? */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              Are you currently based in the U.S.? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="isUSBased"
                  value="yes"
                  checked={formData.isUSBased === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="isUSBased"
                  value="no"
                  checked={formData.isUSBased === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Which areas describe what you're pursuing */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              Which areas best describe what you're pursuing? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(Select up to 2)</span>
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Education / learning', 'Creative work / art / writing', 'Civic / community impact', 'Economic mobility / career building'].map(area => (
                <label key={area} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="pursuitAreas"
                    value={area}
                    checked={formData.pursuitAreas.includes(area)}
                    onChange={handleChange}
                    disabled={formData.pursuitAreas.length >= 2 && !formData.pursuitAreas.includes(area)}
                  />
                  <span>{area}</span>
                </label>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="pursuitAreas"
                    value="Other"
                    checked={formData.pursuitAreas.includes('Other')}
                    onChange={handleChange}
                    disabled={formData.pursuitAreas.length >= 2 && !formData.pursuitAreas.includes('Other')}
                  />
                  <span>Other:</span>
                </label>
                <input
                  type="text"
                  name="pursuitAreasOther"
                  value={formData.pursuitAreasOther}
                  onChange={handleChange}
                  disabled={!formData.pursuitAreas.includes('Other')}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: '15px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* What type of support */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              What type of support are you seeking? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(Select one)</span>
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['One-time cash award', 'Tools / materials / equipment', 'Training / certification / course', 'Travel related to the work (limited)'].map(type => (
                <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="supportType"
                    value={type}
                    checked={formData.supportType === type}
                    onChange={handleChange}
                    required
                  />
                  <span>{type}</span>
                </label>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="supportType"
                    value="Other"
                    checked={formData.supportType === 'Other'}
                    onChange={handleChange}
                    required
                  />
                  <span>Other:</span>
                </label>
                <input
                  type="text"
                  name="supportTypeOther"
                  value={formData.supportTypeOther}
                  onChange={handleChange}
                  disabled={formData.supportType !== 'Other'}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: '15px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Amount Requested */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Amount requested (USD) *
            </label>
            <div style={{ position: 'relative', width: '250px' }}>
              <span style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-secondary)',
              }}>
                $
              </span>
              <input
                type="number"
                name="amountRequested"
                value={formData.amountRequested}
                onChange={handleChange}
                required
                min="1"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 24px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>
          </div>

          {/* Partial funding acceptable? */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              If you receive partial funding, would that still help? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="partialFundingAcceptable"
                  value="yes"
                  checked={formData.partialFundingAcceptable === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="partialFundingAcceptable"
                  value="no"
                  checked={formData.partialFundingAcceptable === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section 3: The Work */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            3. The Work
          </h2>

          {/* What are you building */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              What are you building, learning, or pursuing right now? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 300 words)</span>
            </label>
            <textarea
              name="whatBuilding"
              value={formData.whatBuilding}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.whatBuilding > 300 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.whatBuilding} / 300 words
            </div>
          </div>

          {/* Why does it matter */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Why does it matter beyond you? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 250 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              Who benefits, or what changes if this succeeds?
            </p>
            <textarea
              name="whyMatters"
              value={formData.whyMatters}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.whyMatters > 250 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.whyMatters} / 250 words
            </div>
          </div>

          {/* Specific constraint */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              What is the specific constraint holding you back today? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 200 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              Money, time, tools, access, confidence, credential, etc.
            </p>
            <textarea
              name="specificConstraint"
              value={formData.specificConstraint}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.specificConstraint > 200 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.specificConstraint} / 200 words
            </div>
          </div>

          {/* Next 90 days */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              If selected, what will you do in the next 90 days that you cannot do today? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 200 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              Be concrete.
            </p>
            <textarea
              name="next90Days"
              value={formData.next90Days}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.next90Days > 200 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.next90Days} / 200 words
            </div>
          </div>

          {/* Success at 12 months */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              What would "success" look like 12 months from now? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 200 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              Use real-world outcomes (a finished body of work, certification, launch, number of people served, etc.).
            </p>
            <textarea
              name="success12Months"
              value={formData.success12Months}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.success12Months > 200 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.success12Months} / 200 words
            </div>
          </div>
        </div>


        {/* Section 4: Proof of Follow-Through */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            4. Proof of Follow-Through (Anti-Vibes)
          </h2>

          {/* Example of something finished */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Give one example of something you finished. * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 200 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              What did you complete, and how did you push through resistance?
            </p>
            <textarea
              name="exampleFinished"
              value={formData.exampleFinished}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.exampleFinished > 200 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.exampleFinished} / 200 words
            </div>
          </div>

          {/* Artifact link or file */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Link to one artifact <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional but strongly encouraged)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '12px',
              fontStyle: 'italic',
            }}>
              Examples: project link, writing sample, portfolio piece, GitHub, certificate, photo, etc.
            </p>
            
            {/* Link option */}
            <input
              type="url"
              name="artifactLink"
              value={formData.artifactLink}
              onChange={handleChange}
              placeholder="https://"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                marginBottom: '12px',
              }}
            />
            
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              textAlign: 'center',
            }}>
              — or —
            </p>
            
            {/* File upload option */}
            <div style={{
              border: '2px dashed var(--color-border)',
              borderRadius: '8px',
              padding: '24px',
              textAlign: 'center',
              background: 'rgba(163, 201, 226, 0.03)',
            }}>
              <input
                type="file"
                name="artifactFile"
                onChange={handleChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  fontSize: '14px',
                }}
              />
              <p style={{
                fontSize: '13px',
                color: 'var(--color-teal-grey)',
                marginTop: '8px',
                marginBottom: 0,
              }}>
                Max file size: 5MB
              </p>
            </div>
          </div>

          {/* Reference */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Who can vouch for you? *
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '12px',
              fontStyle: 'italic',
            }}>
              Name + email of one reference (we may not contact them).
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
                required
                placeholder="Full name"
                style={{
                  padding: '12px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <input
                type="email"
                name="referenceEmail"
                value={formData.referenceEmail}
                onChange={handleChange}
                required
                placeholder="Email address"
                style={{
                  padding: '12px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>
          </div>
        </div>


        {/* Section 5: Use of Funds */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            5. Use of Funds (Stewardship)
          </h2>

          {/* How would you use the support */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              How would you use the support? * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(check all that apply)</span>
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Course / training', 'Equipment / tools', 'Materials / supplies', 'Professional services (editing, coaching, etc.)', 'Travel essential to the work', 'Other'].map(category => (
                <label key={category} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="fundsUseCategories"
                    value={category}
                    checked={formData.fundsUseCategories.includes(category)}
                    onChange={handleChange}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Breakdown */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Give a simple breakdown * <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(max 120 words)</span>
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}>
              Example: "$800 course + $200 supplies." (rough is fine)
            </p>
            <textarea
              name="fundsBreakdown"
              value={formData.fundsBreakdown}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.fundsBreakdown > 120 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.fundsBreakdown} / 120 words
            </div>
          </div>

          {/* Complications */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              Is there anything that would make accepting support complicated? *
            </label>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginBottom: '12px',
              fontStyle: 'italic',
            }}>
              Examples: legal constraints, employer policy, visa, etc.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="acceptanceComplications"
                  value="yes"
                  checked={formData.acceptanceComplications === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="acceptanceComplications"
                  value="no"
                  checked={formData.acceptanceComplications === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
            
            {formData.acceptanceComplications === 'yes' && (
              <textarea
                name="acceptanceComplicationsExplain"
                value={formData.acceptanceComplicationsExplain}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Please explain..."
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '15px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                  resize: 'vertical',
                }}
              />
            )}
          </div>
        </div>

        {/* Section 6: Follow-Up */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            6. Follow-Up + Story Consent
          </h2>

          {/* 6-month check-in */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              If selected, are you willing to submit a 6-month check-in? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="sixMonthCheckIn"
                  value="yes"
                  checked={formData.sixMonthCheckIn === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="sixMonthCheckIn"
                  value="no"
                  checked={formData.sixMonthCheckIn === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* 12-month update */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              If selected, are you willing to submit a 12-month impact update? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="twelveMonthUpdate"
                  value="yes"
                  checked={formData.twelveMonthUpdate === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="twelveMonthUpdate"
                  value="no"
                  checked={formData.twelveMonthUpdate === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Public feature */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              Are you open to being featured publicly by Ghosts Worth Chasing? *
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="publicFeature"
                  value="yes-public"
                  checked={formData.publicFeature === 'yes-public'}
                  onChange={handleChange}
                  required
                />
                <span>Yes, public name + story</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="publicFeature"
                  value="yes-anonymous"
                  checked={formData.publicFeature === 'yes-anonymous'}
                  onChange={handleChange}
                  required
                />
                <span>Yes, but anonymous / first name only</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="publicFeature"
                  value="no"
                  checked={formData.publicFeature === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No, keep private</span>
              </label>
            </div>
          </div>

          {/* Share photo/work */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '12px',
            }}>
              If featured, are you open to sharing a photo and/or a small piece of your work? *
            </label>
            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="sharePhotoWork"
                  value="yes"
                  checked={formData.sharePhotoWork === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="sharePhotoWork"
                  value="no"
                  checked={formData.sharePhotoWork === 'no'}
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section 7: Final */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
            marginBottom: 'var(--space-md)',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--color-sky-blue)',
          }}>
            7. Final
          </h2>

          {/* Anything else */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '8px',
            }}>
              Anything else we should know? <span style={{ color: 'var(--color-teal-grey)', fontWeight: 400 }}>(optional, max 150 words)</span>
            </label>
            <textarea
              name="anythingElse"
              value={formData.anythingElse}
              onChange={handleChange}
              rows={4}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
                resize: 'vertical',
              }}
            />
            <div style={{
              fontSize: '13px',
              color: charCounts.anythingElse > 150 ? '#ef4444' : 'var(--color-teal-grey)',
              marginTop: '4px',
              textAlign: 'right',
            }}>
              {charCounts.anythingElse} / 150 words
            </div>
          </div>

          {/* Certification */}
          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                name="certificationConfirmed"
                checked={formData.certificationConfirmed}
                onChange={handleChange}
                required
                style={{
                  marginTop: '4px',
                  flexShrink: 0,
                }}
              />
              <span style={{
                fontSize: '15px',
                lineHeight: 1.6,
              }}>
                I confirm the information above is true to the best of my knowledge. 
                I understand Ghosts Worth Chasing retains full discretion in selections. *
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{
          borderTop: '2px solid var(--color-border)',
          paddingTop: 'var(--space-lg)',
          textAlign: 'center',
        }}>
          <button
            type="submit"
            disabled={isSubmitting || !formData.certificationConfirmed}
            style={{
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-mist-white)',
              background: formData.certificationConfirmed ? 'var(--color-deep-navy)' : 'var(--color-teal-grey)',
              border: '2px solid var(--color-sky-blue)',
              borderRadius: '8px',
              cursor: formData.certificationConfirmed ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--space-md)',
          }}>
            By submitting, you agree to our terms and privacy policy.
          </p>
        </div>
      </form>
    </div>
  )
}
