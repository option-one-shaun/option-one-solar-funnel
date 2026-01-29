import React, { useState } from 'react';

const ContactForm = ({ leadData, updateLeadData, onPrev, onComplete }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!leadData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!leadData.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!leadData.email?.trim()) newErrors.email = 'Email is required';
    if (!leadData.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!leadData.contactTime) newErrors.contactTime = 'Preferred contact time is required';
    if (!leadData.contactMethod) newErrors.contactMethod = 'Preferred contact method is required';
    if (!leadData.timeline) newErrors.timeline = 'Installation timeline is required';

    // Email validation
    if (leadData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (leadData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(leadData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Submit to your CRM/database here
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });
      
      if (response.ok) {
        onComplete();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    updateLeadData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div className="form-section">
      <div className="card">
        <h2>Get Your Free Solar Quote</h2>
        <p>We're ready to provide your detailed solar proposal. Just need a few contact details to get started.</p>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                className="form-input"
                value={leadData.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                className="form-input"
                value={leadData.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Smith"
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-input"
                value={leadData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john.smith@email.com"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                className="form-input"
                value={leadData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
          </div>

          {/* Contact Preferences */}
          <div className="form-group">
            <label className="form-label">Best time to contact you? *</label>
            <select
              className="form-select"
              value={leadData.contactTime || ''}
              onChange={(e) => handleInputChange('contactTime', e.target.value)}
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
              <option value="anytime">Anytime</option>
            </select>
            {errors.contactTime && <div className="error-message">{errors.contactTime}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">How would you prefer to be contacted? *</label>
            <select
              className="form-select"
              value={leadData.contactMethod || ''}
              onChange={(e) => handleInputChange('contactMethod', e.target.value)}
            >
              <option value="">Select contact method</option>
              <option value="phone">Phone call</option>
              <option value="text">Text message</option>
              <option value="email">Email</option>
              <option value="any">Any method</option>
            </select>
            {errors.contactMethod && <div className="error-message">{errors.contactMethod}</div>}
          </div>

          {/* Timeline */}
          <div className="form-group">
            <label className="form-label">When are you looking to install solar? *</label>
            <select
              className="form-select"
              value={leadData.timeline || ''}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
            >
              <option value="">Select timeline</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="exploring">Just exploring options</option>
            </select>
            {errors.timeline && <div className="error-message">{errors.timeline}</div>}
          </div>

          {/* Additional Comments */}
          <div className="form-group">
            <label className="form-label">Additional Comments or Questions (Optional)</label>
            <textarea
              className="form-input"
              value={leadData.comments || ''}
              onChange={(e) => handleInputChange('comments', e.target.value)}
              placeholder="Any specific questions about solar installation or financing?"
              rows="4"
              style={{ minHeight: '100px', resize: 'vertical' }}
            />
          </div>

          {/* Summary Box */}
          <div style={{
            background: 'var(--light-background)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            margin: '2rem 0'
          }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>
              📋 Your Solar Summary
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <strong>Estimated 25-Year Savings:</strong><br />
                <span style={{ color: 'var(--success-green)', fontSize: '1.125rem', fontWeight: '600' }}>
                  ${leadData.estimatedSavings?.toLocaleString() || '0'}
                </span>
              </div>
              <div>
                <strong>System Size:</strong><br />
                <span style={{ color: 'var(--blue-accent)' }}>
                  {leadData.systemSize || '0'} kW
                </span>
              </div>
              <div>
                <strong>Investment After Tax Credit:</strong><br />
                <span style={{ color: 'var(--primary-dark)' }}>
                  ${leadData.investmentCost?.toLocaleString() || '0'}
                </span>
              </div>
            </div>
          </div>

          {/* Consent and Disclaimers */}
          <div style={{
            background: '#f8f9fa',
            padding: '1rem',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            color: 'var(--text-gray)',
            marginBottom: '2rem'
          }}>
            <p style={{ marginBottom: '0.75rem' }}>
              <strong>What happens next:</strong>
            </p>
            <ul style={{ marginLeft: '1rem', lineHeight: 1.6 }}>
              <li>One of our solar specialists will contact you within 24 hours</li>
              <li>We'll schedule a free home assessment at your convenience</li>
              <li>You'll receive a detailed proposal with exact pricing and savings</li>
              <li>No pressure - take your time to review everything</li>
            </ul>
          </div>

          {/* Privacy Notice */}
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-gray)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            By submitting this form, you consent to Option One Solar contacting you about solar installation services. 
            We respect your privacy and will never sell your information to third parties. 
            You can opt out at any time.
          </div>

          {/* Form Navigation */}
          <div className="form-navigation">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onPrev}
            >
              ← Back to Savings
            </button>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner" style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  Submitting...
                </>
              ) : (
                'Get My Free Quote! 🎉'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;