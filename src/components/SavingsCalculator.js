import React, { useState, useEffect, useCallback } from 'react';

const SavingsCalculator = ({ leadData, updateLeadData, onNext, onPrev }) => {
  const [calculations, setCalculations] = useState({
    loading: true,
    annualUsage: 0,
    systemSize: 0,
    estimatedSavings: 0,
    investmentCost: 0,
    monthlyPayment: 0,
    paybackPeriod: 0,
    co2Offset: 0
  });

  const calculateSavings = useCallback(async () => {
    setCalculations(prev => ({ ...prev, loading: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Solar calculations based on user input
    const billRange = leadData.electricBill || '200-300';
    let monthlyBill = 250; // Default
    
    if (billRange.includes('-')) {
      const [min, max] = billRange.split('-').map(num => parseInt(num.replace('$', '')));
      monthlyBill = (min + max) / 2;
    } else if (billRange.includes('+')) {
      monthlyBill = parseInt(billRange.replace('$', '').replace('+', '')) + 100;
    }
    
    // Calculate system requirements
    const annualBill = monthlyBill * 12;
    const kWhPerYear = annualBill / 0.25; // Assuming $0.25/kWh average CA rate
    const systemSizeKW = kWhPerYear / 1400; // CA average sun hours/year
    
    // Calculate costs and savings
    const costPerWatt = 3.50; // Average cost per watt installed
    const systemCost = systemSizeKW * 1000 * costPerWatt;
    const federalTaxCredit = systemCost * 0.30;
    const netCost = systemCost - federalTaxCredit;
    
    // Calculate savings
    const annualSavings = annualBill * 0.85; // Assume 85% offset
    const monthlySavings = annualSavings / 12;
    const twentyFiveYearSavings = annualSavings * 25;
    const paybackYears = netCost / annualSavings;
    
    // Environmental impact
    const co2PerYear = kWhPerYear * 0.0004409; // metric tons CO2 per kWh in CA
    
    const newCalculations = {
      loading: false,
      annualUsage: Math.round(kWhPerYear),
      systemSize: Math.round(systemSizeKW * 10) / 10,
      estimatedSavings: Math.round(twentyFiveYearSavings),
      investmentCost: Math.round(netCost),
      monthlyPayment: Math.round(netCost / 300), // 25-year financing
      monthlySavings: Math.round(monthlySavings),
      paybackPeriod: Math.round(paybackYears * 10) / 10,
      co2Offset: Math.round(co2PerYear * 25 * 10) / 10
    };
    
    setCalculations(newCalculations);
    updateLeadData(newCalculations);
  }, [leadData, updateLeadData]);

  useEffect(() => {
    calculateSavings();
  }, [calculateSavings]);

  const handleContinue = () => {
    onNext();
  };

  if (calculations.loading) {
    return (
      <div className="form-section">
        <div className="card text-center">
          <div className="loading">
            <div className="spinner" style={{ width: '3rem', height: '3rem' }} />
          </div>
          <h2>Calculating Your Solar Savings...</h2>
          <p>We're analyzing your property and energy usage to provide accurate estimates.</p>
          <div style={{ marginTop: '2rem' }}>
            <div style={{ 
              background: 'var(--light-background)', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-gray)'
            }}>
              ✓ Analyzing your location's sun exposure<br />
              ✓ Calculating optimal system size<br />
              ✓ Computing 25-year savings projection<br />
              ✓ Factoring in available incentives
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-section">
      <div className="text-center mb-8">
        <h2>🎉 Great News! Your Home Qualifies for Solar</h2>
        <p>Based on your property details, here's your personalized solar savings projection:</p>
      </div>

      {/* Main Savings Display */}
      <div className="savings-results">
        <div className="savings-amount">
          ${calculations.estimatedSavings.toLocaleString()}
        </div>
        <div className="savings-period">
          Estimated 25-Year Savings
        </div>
        <div style={{ fontSize: '1.125rem', opacity: 0.9 }}>
          That's <strong>${calculations.monthlySavings}</strong> saved every month!
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="savings-details">
        <div className="savings-detail">
          <div className="detail-value">{calculations.systemSize} kW</div>
          <div className="detail-label">Recommended System Size</div>
        </div>
        
        <div className="savings-detail">
          <div className="detail-value">${calculations.investmentCost.toLocaleString()}</div>
          <div className="detail-label">Investment After Tax Credit</div>
        </div>
        
        <div className="savings-detail">
          <div className="detail-value">{calculations.paybackPeriod} years</div>
          <div className="detail-label">Payback Period</div>
        </div>
        
        <div className="savings-detail">
          <div className="detail-value">{calculations.co2Offset} tons</div>
          <div className="detail-label">CO₂ Prevented (25 years)</div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="card" style={{ marginTop: '2rem', background: 'var(--light-background)' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
          Additional Benefits Included:
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
            <div>
              <div style={{ fontWeight: '600' }}>30% Federal Tax Credit</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>
                Save ${Math.round(calculations.investmentCost / 0.70 * 0.30).toLocaleString()} on taxes
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🏠</span>
            <div>
              <div style={{ fontWeight: '600' }}>Increased Home Value</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>
                ~$15,000 average increase
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <div>
              <div style={{ fontWeight: '600' }}>25-Year Warranty</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>
                Complete system protection
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <div>
              <div style={{ fontWeight: '600' }}>Net Metering</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>
                Sell excess power back to grid
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Message */}
      <div style={{
        background: 'linear-gradient(135deg, var(--warning-orange), #f59e0b)',
        color: 'var(--primary-white)',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          ⚠️ Time-Sensitive: Federal Tax Credit Expires Dec 31st
        </div>
        <div style={{ fontSize: '0.975rem', opacity: 0.9 }}>
          Don't miss out on saving ${Math.round(calculations.investmentCost / 0.70 * 0.30).toLocaleString()} in tax credits. 
          Act now to lock in these savings!
        </div>
      </div>

      {/* Form Navigation */}
      <div className="form-navigation">
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={onPrev}
        >
          ← Back to Property Info
        </button>
        
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleContinue}
        >
          Get My Free Quote →
        </button>
      </div>

      {/* Disclaimer */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        background: 'var(--light-background)', 
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-gray)',
        textAlign: 'center'
      }}>
        *Estimates based on available data and industry averages. Actual results may vary based on 
        final system design, local utility rates, usage patterns, and weather conditions. 
        Final proposal will include detailed calculations specific to your property.
      </div>
    </div>
  );
};

export default SavingsCalculator;