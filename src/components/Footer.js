import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--light-background)',
      borderTop: '1px solid var(--border-gray)',
      padding: '3rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-white)',
                fontWeight: '800',
                fontSize: '1.25rem'
              }}>
                ☀
              </div>
              <div>
                <div style={{
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: 'var(--primary-dark)',
                  lineHeight: 1
                }}>
                  Option One Solar
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-gray)',
                  lineHeight: 1
                }}>
                  Trusted Since 1970
                </div>
              </div>
            </div>
            <p style={{ 
              color: 'var(--text-gray)', 
              fontSize: '0.875rem', 
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Bringing space-age reliability to residential and commercial solar since 1970. 
              California's trusted solar installer with over 50 years of experience.
            </p>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>
              C-10 & C-46 License #985340
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              color: 'var(--primary-dark)',
              marginBottom: '1rem',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}>
              Contact Information
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem',
              fontSize: '0.875rem',
              color: 'var(--text-gray)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📍</span>
                <span>13581 John Glenn Rd A, Apple Valley, CA 92308</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span>
                <a href="tel:855-502-6363" style={{ color: 'var(--blue-accent)' }}>
                  (855) 502-6363
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✉️</span>
                <a href="mailto:info@optiononesolar.com" style={{ color: 'var(--blue-accent)' }}>
                  info@optiononesolar.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🕒</span>
                <span>Monday - Friday: 8:00 AM - 5:00 PM PST</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{
              color: 'var(--primary-dark)',
              marginBottom: '1rem',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}>
              Service Areas
            </h4>
            <div style={{ 
              color: 'var(--text-gray)', 
              fontSize: '0.875rem', 
              lineHeight: 1.8
            }}>
              <div>• San Bernardino County</div>
              <div>• Riverside County</div>
              <div>• Los Angeles County</div>
              <div>• Orange County</div>
              <div>• San Diego County</div>
              <div>• Imperial County</div>
              <div>• And surrounding areas</div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div>
            <h4 style={{
              color: 'var(--primary-dark)',
              marginBottom: '1rem',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}>
              Follow Us
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <a 
                href="https://www.facebook.com/OptionOneSolar/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#1877f2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.25rem'
                }}
              >
                📘
              </a>
              <a 
                href="https://x.com/optiononesolar" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.25rem'
                }}
              >
                𝕏
              </a>
              <a 
                href="https://www.instagram.com/optiononesolar" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.25rem'
                }}
              >
                📷
              </a>
              <a 
                href="https://www.linkedin.com/company/option-one-corporation/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#0a66c2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.25rem'
                }}
              >
                💼
              </a>
            </div>
            
            <div style={{ 
              color: 'var(--text-gray)', 
              fontSize: '0.875rem', 
              lineHeight: 1.6
            }}>
              <div><a href="/privacy" style={{ color: 'var(--blue-accent)' }}>Privacy Policy</a></div>
              <div><a href="/terms" style={{ color: 'var(--blue-accent)' }}>Terms of Service</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-gray)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            color: 'var(--text-gray)', 
            fontSize: '0.875rem'
          }}>
            © 2025 Option One Solar. All rights reserved.
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            fontSize: '0.875rem',
            color: 'var(--text-gray)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--success-green)',
              color: 'white',
connects: '0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              🔒 SSL Secured
            </div>
            <div>Licensed & Insured</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;