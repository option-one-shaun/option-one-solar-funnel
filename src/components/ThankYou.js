import React, { useEffect } from 'react';

const ThankYou = ({ leadData }) => {
  useEffect(() => {
    // Track conversion for analytics
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: leadData.investmentCost || 25000,
        currency: 'USD'
      });
    }

    // Facebook Pixel tracking
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        value: leadData.investmentCost || 25000,
        currency: 'USD'
      });
    }
  }, [leadData]);

  return (
    <div className="form-section" style={{ padding: '4rem 0' }}>
      <div className="text-center">
        {/* Success Animation */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, var(--success-green), #10b981)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2rem',
          animation: 'bounce 1s ease-out'
        }}>
          ✅
        </div>

        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, var(--success-green), var(--blue-accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Thank You, {leadData.firstName}!
        </h1>

        <div style={{
          fontSize: '1.5rem',
          color: 'var(--text-gray)',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Your solar quote request has been submitted successfully. 
          You're one step closer to energy independence!
        </div>

        {/* What's Next */}
        <div className="card" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary-dark)' }}>
            🎯 What Happens Next
          </h2>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                flexShrink: 0
              }}>
                1
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
                  Expert Consultation (Within 24 Hours)
                </h4>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>
                  A certified solar specialist will call you at {leadData.phone} during your preferred time 
                  ({leadData.contactTime}) to discuss your specific needs and answer any questions.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                flexShrink: 0
              }}>
                2
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
                  Free Home Assessment
                </h4>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>
                  We'll schedule a convenient time to visit your property at {leadData.address}, {leadData.city}, {leadData.state} 
                  and conduct a thorough solar assessment using satellite imaging and on-site evaluation.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                flexShrink: 0
              }}>
                3
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
                  Custom Proposal & Financing Options
                </h4>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>
                  Receive a detailed proposal with exact system specifications, costs, savings projections, 
                  and financing options tailored to your {leadData.propertyType} and energy needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Reminder */}
        <div style={{
          background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
          color: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>🎉 Your Estimated Solar Savings</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            ${leadData.estimatedSavings?.toLocaleString() || '0'}
          </div>
          <div style={{ fontSize: '1rem', opacity: 0.9 }}>
            Over 25 years with a {leadData.systemSize || 0} kW system
          </div>
        </div>

        {/* Contact Info */}
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto 3rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
            📞 Need to Reach Us?
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <strong>Phone:</strong> <a href="tel:855-502-6363" style={{ color: 'var(--blue-accent)' }}>(855) 502-6363</a>
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:info@optiononesolar.com" style={{ color: 'var(--blue-accent)' }}>info@optiononesolar.com</a>
            </div>
            <div>
              <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM PST
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div style={{
          background: 'var(--light-background)',
          padding: '2rem',
          borderRadius: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>
            ⭐ Join 10,000+ Happy Customers
          </h4>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>
            Since 1970, Option One Solar has been California's trusted solar installer. 
            We're licensed, insured, and committed to helping you save money while protecting the environment.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            marginTop: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--blue-accent)' }}>50+</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Years Experience</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--blue-accent)' }}>10,000+</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Happy Customers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--blue-accent)' }}>⭐⭐⭐⭐⭐</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>5-Star Rated</div>
            </div>
          </div>
        </div>

        {/* Urgency Reminder */}
        <div style={{
          background: 'linear-gradient(135deg, var(--warning-orange), #f59e0b)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          margin: '3rem auto 0',
          maxWidth: '600px'
        }}>
          <div style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            ⚠️ Reminder: Tax Credit Expires December 31st
          </div>
          <div style={{ fontSize: '0.975rem', opacity: 0.9 }}>
            Don't miss out on saving 30% with the federal solar tax credit. 
            Our team will help you take advantage of all available incentives.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-15px,0);
          }
          70% {
            transform: translate3d(0,-7px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;