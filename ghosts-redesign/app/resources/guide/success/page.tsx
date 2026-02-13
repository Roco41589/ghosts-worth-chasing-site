export default function SuccessPage() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: 'var(--space-xl) var(--space-md)',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'rgba(163, 201, 226, 0.08)',
        border: '2px solid var(--color-sky-blue)',
        borderRadius: '16px',
        padding: 'var(--space-xl)',
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'var(--color-sky-blue)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-lg)',
          fontSize: '40px',
        }}>
          ✓
        </div>

        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: 'var(--color-deep-navy)',
          marginBottom: 'var(--space-md)',
        }}>
          Purchase Successful!
        </h1>

        <p style={{
          fontSize: '18px',
          lineHeight: 1.6,
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-lg)',
        }}>
          Thank you for your purchase. Your guide has been sent to your email.
        </p>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)',
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
          }}>
            Download Your Guide
          </h2>

          <a
            href={process.env.NEXT_PUBLIC_EBOOK_PDF_URL}
            download
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-mist-white)',
              background: 'var(--color-deep-navy)',
              border: 'none',
              borderRadius: '8px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Download PDF
          </a>

          <p style={{
            fontSize: '13px',
            color: 'var(--color-teal-grey)',
            marginTop: '16px',
          }}>
            Can't find the email? Check your spam folder or contact roconnor@ghostsworthchasing.org
          </p>
        </div>

        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-lg)',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
          }}>
            What's Next?
          </h3>
          <p style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
          }}>
            Consider applying for Individual Support if you're in the middle of a transition.
          </p>
          <a
            href="/apply"
            style={{
              display: 'inline-block',
              marginTop: 'var(--space-md)',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              background: 'transparent',
              border: '1px solid var(--color-sky-blue)',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            View Application
          </a>
        </div>
      </div>
    </div>
  )
}
