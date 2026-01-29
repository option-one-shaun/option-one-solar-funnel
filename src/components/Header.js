import React from 'react';

const Header = () => {
  return (
    <header style={{
      background: 'var(--primary-white)',
      borderBottom: '1px solid var(--border-gray)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-light)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Option One Solar Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
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

          {/* Contact Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div className="hidden-mobile" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-gray)',
              fontSize: '0.875rem'
            }}>
              <span>📞</span>
              <span>(855) 502-6363</span>
            </div>
            
            <a 
              href="tel:855-502-6363" 
              className="btn btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;