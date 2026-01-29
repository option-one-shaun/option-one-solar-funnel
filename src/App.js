import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QualificationForm from './components/QualificationForm';
import SavingsCalculator from './components/SavingsCalculator';
import ContactForm from './components/ContactForm';
import ThankYou from './components/ThankYou';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [leadData, setLeadData] = useState({
    // Personal info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Property info
    propertyType: '',
    homeOwnership: '',
    electricBill: '',
    roofAge: '',
    roofCondition: '',
    shadeLevel: '',
    
    // Contact preferences
    contactTime: '',
    contactMethod: '',
    timeline: '',
    
    // Calculated values
    annualUsage: 0,
    systemSize: 0,
    estimatedSavings: 0,
    investmentCost: 0
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const updateLeadData = (newData) => {
    setLeadData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  // Track page views for analytics
  useEffect(() => {
    // Google Analytics tracking would go here
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [currentStep]);

  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                onGetStarted={() => setCurrentStep(2)}
                leadData={leadData}
                updateLeadData={updateLeadData}
              />
            } 
          />
          
          <Route 
            path="/qualify" 
            element={
              <div className="funnel-container">
                <ProgressBar progress={getProgress()} currentStep={currentStep} totalSteps={totalSteps} />
                
                {currentStep === 2 && (
                  <QualificationForm 
                    leadData={leadData}
                    updateLeadData={updateLeadData}
                    onNext={nextStep}
                    onPrev={prevStep}
                  />
                )}
                
                {currentStep === 3 && (
                  <SavingsCalculator 
                    leadData={leadData}
                    updateLeadData={updateLeadData}
                    onNext={nextStep}
                    onPrev={prevStep}
                  />
                )}
                
                {currentStep === 4 && (
                  <ContactForm 
                    leadData={leadData}
                    updateLeadData={updateLeadData}
                    onPrev={prevStep}
                    onComplete={() => setCurrentStep(5)}
                  />
                )}
              </div>
            } 
          />
          
          <Route 
            path="/thank-you" 
            element={<ThankYou leadData={leadData} />} 
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;