import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onGetStarted, leadData, updateLeadData }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    onGetStarted();
    navigate('/qualify');
  };

  const handleQuickQuote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateLeadData({
      zipCode: formData.get('zipCode'),
      electricBill: formData.get('electricBill')
    });
    handleGetStarted();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Stop Overpaying for Electricity and Claim the 30% Tax Credit Before It Disappears
            </h1>
            <p className="hero-subtitle">
              California electricity costs are spiraling out of control. Every month you wait costs you more. 
              Don't lose your chance to save 30% on solar installation.
            </p>
            
            {/* Quick Quote Form */}
            <div className="card" style={{ 
              maxWidth: '500px', 
              margin: '2rem auto',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--primary-dark)',
                textAlign: 'center'
              }}>
                Get Your Free Solar Quote in 60 Seconds
              </h3>
              
              <form onSubmit={handleQuickQuote}>
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="zipCode">ZIP Code</label>
                    <input 
                      id="zipCode"
                      type="text" 
                      name="zipCode"
                      className="form-input"
                      placeholder="92308"
                      required
                      pattern="[0-9]{5}"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      aria-describedby="zipcode-help"
                    />
                    <div id="zipcode-help" className="form-hint">Enter your 5-digit ZIP code</div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="electricBill">Monthly Electric Bill</label>
                    <select 
                      id="electricBill"
                      name="electricBill" 
                      className="form-select" 
                      required
                      autoComplete="off"
                      aria-describedby="bill-help"
                    >
                      <option value="">Select your average monthly bill</option>
                      <option value="50-100">$50 - $100</option>
                      <option value="100-150">$100 - $150</option>
                      <option value="150-200">$150 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="300-400">$300 - $400</option>
                      <option value="400+">$400+</option>
                    </select>
                    <div id="bill-help" className="form-hint">Check your recent electric bill for accuracy</div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large" 
                  style={{ 
                    width: '100%',
                    touchAction: 'manipulation'
                  }}
                  aria-describedby="submit-help"
                >
                  Calculate My Savings ⚡
                </button>
                <div id="submit-help" className="sr-only">Get your personalized solar savings estimate</div>
              </form>
              
              <p style={{ 
                textAlign: 'center', 
                marginTop: '1rem', 
                fontSize: '0.875rem',
                color: 'var(--text-gray)'
              }}>
                ✅ No hidden fees • ✅ Licensed & insured • ✅ 25-year warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Why Keep Overpaying When Solar Can Slash Your Bill?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-gray)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              California utility companies made over $10 billion in profits last year—while your bill keeps rising. 
              Lock in your own energy savings for decades.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Lock In Lower Rates</h3>
              <p className="benefit-description">
                Stop utility rate hikes from eating into your budget. Solar locks in predictable energy costs for 25+ years.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3 className="benefit-title">Increase Home Value</h3>
              <p className="benefit-description">
                Homes with solar sell for an average of $15,000 more and spend 20% less time on the market.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3 className="benefit-title">Go Green & Save</h3>
              <p className="benefit-description">
                Reduce your carbon footprint while enjoying decades of free electricity from the sun.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3 className="benefit-title">Energy Independence</h3>
              <p className="benefit-description">
                Protect yourself from power outages and utility price manipulation with your own clean energy.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">30% Tax Credit</h3>
              <p className="benefit-description">
                The federal solar tax credit covers 30% of your installation cost, but it expires December 31st.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3 className="benefit-title">Trusted Since 1970</h3>
              <p className="benefit-description">
                Over 50 years of experience bringing space-age reliability to residential and commercial solar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof" style={{ background: 'var(--primary-white)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '3rem',
            color: 'var(--primary-dark)'
          }}>
            Join the Community of Satisfied Solar Customers
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Option One Solar stood out with their supportive team and smooth project. 
                Issues were handled instantly with no hidden fees. That's why I chose the right solar company 💯"
              </p>
              <div className="testimonial-author">- Jeff, Apple Valley</div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Our electric bill went from $350/month to just $12! The installation was professional 
                and they handled all the permits. Best investment we've ever made."
              </p>
              <div className="testimonial-author">- Maria, Riverside</div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "50+ years in business means they know what they're doing. The system has performed 
                flawlessly for 3 years now. Highly recommend!"
              </p>
              <div className="testimonial-author">- Robert, San Bernardino</div>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button 
              onClick={handleGetStarted}
              className="btn btn-primary btn-large"
              style={{ fontSize: '1.25rem', padding: '1.25rem 3rem' }}
            >
              Start My Free Quote Now →
            </button>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
        color: 'var(--primary-white)',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Don't Wait for Rates to Climb Higher!
          </h2>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem' }}>
            Federal incentives disappear December 31st. Every month you wait costs you more.
          </p>
          <button 
            onClick={handleGetStarted}
            className="btn btn-secondary btn-large"
          >
            Claim Your Free Quote Today!
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;