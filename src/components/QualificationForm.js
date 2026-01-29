import React, { useState } from 'react';

const QualificationForm = ({ leadData, updateLeadData, onNext, onPrev }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!leadData.address?.trim()) newErrors.address = 'Property address is required';
    if (!leadData.city?.trim()) newErrors.city = 'City is required';
    if (!leadData.state?.trim()) newErrors.state = 'State is required';
    if (!leadData.zipCode?.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!leadData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!leadData.homeOwnership) newErrors.homeOwnership = 'Home ownership status is required';
    if (!leadData.electricBill) newErrors.electricBill = 'Electric bill amount is required';
    if (!leadData.roofAge) newErrors.roofAge = 'Roof age is required';
    if (!leadData.roofCondition) newErrors.roofCondition = 'Roof condition is required';
    if (!leadData.shadeLevel) newErrors.shadeLevel = 'Shade level is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call for qualification
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    onNext();
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
        <h2>Tell Us About Your Property</h2>
        <p>This information helps us determine if your home qualifies for solar and calculate accurate savings.</p>
        
        <form onSubmit={handleSubmit}>
          {/* Property Address */}
          <div className="form-group">
            <label className="form-label">Property Address *</label>
            <input
              type="text"
              className="form-input"
              value={leadData.address || ''}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="123 Main Street"
            />
            {errors.address && <div className="error-message">{errors.address}</div>}
          </div>

          <div className="form-grid form-grid-3">
            <div className="form-group">
              <label className="form-label">City *</label>
              <input
                type="text"
                className="form-input"
                value={leadData.city || ''}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Apple Valley"
              />
              {errors.city && <div className="error-message">{errors.city}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">State *</label>
              <select
                className="form-select"
                value={leadData.state || ''}
                onChange={(e) => handleInputChange('state', e.target.value)}
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="AZ">Arizona</option>
                <option value="TX">Texas</option>
              </select>
              {errors.state && <div className="error-message">{errors.state}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">ZIP Code *</label>
              <input
                type="text"
                className="form-input"
                value={leadData.zipCode || ''}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="92308"
                pattern="[0-9]{5}"
              />
              {errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
            </div>
          </div>

          {/* Property Details */}
          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label className="form-label">Property Type *</label>
              <select
                className="form-select"
                value={leadData.propertyType || ''}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="single-family">Single Family Home</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condominium</option>
                <option value="manufactured">Manufactured Home</option>
                <option value="commercial">Commercial Building</option>
              </select>
              {errors.propertyType && <div className="error-message">{errors.propertyType}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Do you own your home? *</label>
              <select
                className="form-select"
                value={leadData.homeOwnership || ''}
                onChange={(e) => handleInputChange('homeOwnership', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="own">I own my home</option>
                <option value="rent">I rent</option>
                <option value="buying">I'm buying (mortgage)</option>
              </select>
              {errors.homeOwnership && <div className="error-message">{errors.homeOwnership}</div>}
            </div>
          </div>

          {/* Electric Bill */}
          <div className="form-group">
            <label className="form-label">Average Monthly Electric Bill *</label>
            <select
              className="form-select"
              value={leadData.electricBill || ''}
              onChange={(e) => handleInputChange('electricBill', e.target.value)}
            >
              <option value="">Select Range</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-150">$100 - $150</option>
              <option value="150-200">$150 - $200</option>
              <option value="200-300">$200 - $300</option>
              <option value="300-400">$300 - $400</option>
              <option value="400-500">$400 - $500</option>
              <option value="500+">$500+</option>
            </select>
            {errors.electricBill && <div className="error-message">{errors.electricBill}</div>}
          </div>

          {/* Roof Information */}
          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label className="form-label">Age of Your Roof *</label>
              <select
                className="form-select"
                value={leadData.roofAge || ''}
                onChange={(e) => handleInputChange('roofAge', e.target.value)}
              >
                <option value="">Select Age</option>
                <option value="0-5">0-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10-15">10-15 years</option>
                <option value="15-20">15-20 years</option>
                <option value="20+">20+ years</option>
                <option value="unknown">Not sure</option>
              </select>
              {errors.roofAge && <div className="error-message">{errors.roofAge}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Roof Condition *</label>
              <select
                className="form-select"
                value={leadData.roofCondition || ''}
                onChange={(e) => handleInputChange('roofCondition', e.target.value)}
              >
                <option value="">Select Condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Needs repair/replacement</option>
                <option value="unknown">Not sure</option>
              </select>
              {errors.roofCondition && <div className="error-message">{errors.roofCondition}</div>}
            </div>
          </div>

          {/* Shade Assessment */}
          <div className="form-group">
            <label className="form-label">How much shade does your roof get? *</label>
            <select
              className="form-select"
              value={leadData.shadeLevel || ''}
              onChange={(e) => handleInputChange('shadeLevel', e.target.value)}
            >
              <option value="">Select Shade Level</option>
              <option value="none">No shade - full sun all day</option>
              <option value="minimal">Minimal shade - mostly sunny</option>
              <option value="partial">Partial shade - some trees/buildings</option>
              <option value="heavy">Heavy shade - lots of trees/buildings</option>
              <option value="unknown">Not sure</option>
            </select>
            {errors.shadeLevel && <div className="error-message">{errors.shadeLevel}</div>}
          </div>

          {/* Form Navigation */}
          <div className="form-navigation">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner" style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  Calculating...
                </>
              ) : (
                'Calculate My Savings →'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QualificationForm;