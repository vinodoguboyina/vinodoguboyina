import { useState, useEffect } from 'react';
import resume from '../assets/Vinod_Oguboyina_Resume.pdf';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverResume, setHoverResume] = useState(false);

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
      hour12: true,
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        padding: isMobile
          ? '100px 20px 30px'
          : isTablet
          ? '110px 35px 40px'
          : '100px 50px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '40px' : '60px',
          paddingTop: isMobile ? '10px' : '20px',
          borderTop: '1px solid var(--border-strong)',
        }}
      >
        <h1
          style={{
            color: 'var(--text)',
            fontSize: isMobile ? '36px' : isTablet ? '64px' : '96px',
            fontWeight: '400',
            margin: 0,
            lineHeight: '1.2',
          }}
        >
          Get in touch ↓
        </h1>
      </div>

      {/* Contact Info */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          marginBottom: isMobile ? '40px' : '30px',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '0',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: isMobile ? '13px' : '16px',
              marginBottom: '10px',
            }}
          >
            Currently located in
          </p>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: isMobile ? '13px' : '16px',
            }}
          >
            Bengaluru, Karnataka
          </p>
        </div>

        {/* Right */}
        <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
          <a
            href="https://linkedin.com/in/vinod-oguboyina-939994267"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text)',
              fontSize: isMobile ? '24px' : '36px',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/vinodoguboyina"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text)',
              fontSize: isMobile ? '24px' : '36px',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            GitHub
          </a>

          <a
            href="https://web-aura.github.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text)',
              fontSize: isMobile ? '24px' : '36px',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '25px',
            }}
          >
            Web Aura
          </a>

          {/* Resume Download */}
          <a
            href={resume}
            download="Vinod_Oguboyina_Resume.pdf"
            onMouseEnter={() => setHoverResume(true)}
            onMouseLeave={() => setHoverResume(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: isMobile ? '12px 20px' : '14px 24px',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: isMobile ? '14px' : '15px',
              letterSpacing: '1px',
              background: hoverResume ? 'var(--text)' : 'transparent',
              color: hoverResume ? 'var(--bg)' : 'var(--text)',
              transition: 'all .3s ease',
              transform: hoverResume ? 'translateY(-3px)' : 'translateY(0)',
            }}
          >
            ↓ Download Resume
          </a>
        </div>
      </div>

      {/* Email */}
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: isMobile ? '0' : '-40px',
        }}
      >
        <a
          href="mailto:vinodoguboyina123@gmail.com"
          style={{
            color: 'var(--text)',
            fontSize: isMobile ? '28px' : isTablet ? '48px' : '72px',
            fontWeight: '400',
            textDecoration: 'none',
            letterSpacing: isMobile ? '-1px' : '-2px',
          }}
        >
          @vinodoguboyina
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '0',
          marginBottom: isMobile ? '20px' : '30px',
        }}
      >
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: isMobile ? '9px' : '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          Thank you for visiting my creative space
        </p>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: isMobile ? '9px' : '11px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          It's {formatTime(currentTime).toLowerCase()}
        </p>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: isMobile ? '9px' : '11px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
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