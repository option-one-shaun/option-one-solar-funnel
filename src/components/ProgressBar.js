import React from 'react';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  const steps = [
    { number: 1, label: 'Welcome', active: false },
    { number: 2, label: 'Property Info', active: currentStep >= 2 },
    { number: 3, label: 'Savings Calculator', active: currentStep >= 3 },
    { number: 4, label: 'Contact Info', active: currentStep >= 4 }
  ];

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Step Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem'
        }}>
          {steps.slice(1).map((step, index) => (
            <div 
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1
              }}
            >
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: step.active 
                  ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                  : 'var(--border-gray)',
                color: step.active ? 'var(--primary-white)' : 'var(--text-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                {currentStep > step.number ? '✓' : step.number}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: step.active ? 'var(--primary-dark)' : 'var(--text-gray)',
                textAlign: 'center',
                fontWeight: step.active ? '600' : '400'
              }}>
                {step.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Text */}
        <div style={{
          textAlign: 'center',
          marginTop: '1rem',
          color: 'var(--text-gray)',
          fontSize: '0.875rem'
        }}>
          Step {currentStep - 1} of {totalSteps - 1} • {Math.round(progress)}% Complete
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;