import { useState, useEffect } from 'react';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#000',
      padding: isMobile ? '100px 20px 30px 20px' : isTablet ? '110px 35px 40px 35px' : '100px 50px 40px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px',
        paddingTop: isMobile ? '10px' : '20px',
        borderTop: '1px solid #333'
      }}>
        <h1 style={{ 
          color: '#fff', 
          fontSize: isMobile ? '36px' : isTablet ? '64px' : '96px',
          fontWeight: '400',
          margin: 0,
          lineHeight: '1.2',
          wordBreak: 'break-word'
        }}>
          Get in touch ↓
        </h1>
      </div>

      {/* Contact Information Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        marginBottom: isMobile ? '40px' : '30px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '40px' : '0',
        width: '100%'
      }}>
        {/* Left Side - Location */}
        <div>
          <p style={{
            color: '#666',
            fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
            margin: '0 0 10px 0'
          }}>
            Currently located in
          </p>
          <p style={{
            color: '#666',
            fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
            margin: 0
          }}>
            Bengaluru, Karnataka
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
          <div style={{ marginBottom: isMobile ? '15px' : '20px' }}>
            <a 
              href="https://linkedin.com/in/vinod-oguboyina-939994267" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#fff', 
                fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                textDecoration: 'none',
                display: 'block',
                marginBottom: isMobile ? '8px' : '12px'
              }}
            >
              LinkedIn
            </a>
          </div>
          <div style={{ marginBottom: isMobile ? '15px' : '20px' }}>
            <a 
              href="https://github.com/vinodoguboyina" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#fff', 
                fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                textDecoration: 'none',
                display: 'block',
                marginBottom: isMobile ? '8px' : '12px'
              }}
            >
              GitHub
            </a>
          </div>
          <div style={{ marginBottom: isMobile ? '15px' : '20px' }}>
            <a 
              href="https://vinodoguboyina.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#fff', 
                fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                textDecoration: 'none',
                display: 'block',
                marginBottom: isMobile ? '8px' : '12px'
              }}
            >
              Portfolio
            </a>
          </div>
          <div>
            <a 
              href="https://web-aura.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#fff', 
                fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              Web Aura
            </a>
          </div>
        </div>
      </div>

      {/* Email Handle Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '30px' : '20px',
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '0' : '-40px',
        padding: isMobile ? '20px 0' : '0'
      }}>
        <a 
          href="mailto:vinodoguboyina123@gmail.com"
          style={{
            color: '#fff',
            fontSize: isMobile ? '28px' : isTablet ? '48px' : '72px',
            fontWeight: '400',
            textDecoration: 'none',
            letterSpacing: isMobile ? '-1px' : '-2px',
            wordBreak: 'break-word',
            display: 'block',
            padding: isMobile ? '0 10px' : '0'
          }}
        >
          @vinodoguboyina
        </a>
      </div>

      {/* Footer Info */}
      <div style={{
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        marginTop: 'auto',
        marginBottom: isMobile ? '20px' : '30px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '15px' : '0',
        width: '100%'
      }}>
        <p style={{
          color: '#666',
          fontSize: isMobile ? '9px' : '11px',
          textTransform: 'uppercase',
          letterSpacing: isMobile ? '1px' : '2px',
          margin: 0,
          fontWeight: 'bold'
        }}>
          Don't be a jerk & steal my work
        </p>
        
        <p style={{
          color: '#666',
          fontSize: isMobile ? '9px' : '11px',
          margin: 0,
          letterSpacing: '1px',
          fontWeight: 'bold',
          order: isMobile ? 3 : 2
        }}>
          It's {formatTime(currentTime).toLowerCase()} 
        </p>

        <p style={{
          color: '#666',
          fontSize: isMobile ? '9px' : '11px',
          margin: 0,
          fontWeight: 'bold',
          wordBreak: 'break-word',
          order: isMobile ? 2 : 3
        }}>
          {isMobile ? (
            <>
              vinodoguboyina123@gmail.com
              <br />
              +91-7207026931
            </>
          ) : (
            'vinodoguboyina123@gmail.com | +91-7207026931'
          )}
        </p>
      </div>
    </div>
  );
};

export default Contact;