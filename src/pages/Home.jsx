import { useState, useEffect } from 'react';
import portrait from '../assets/n1.png';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div
      style={{
        width: '100%',
        height: isMobile ? 'auto' : 'calc(100vh - 80px)',
        minHeight: isMobile ? 'calc(100vh - 60px)' : 'calc(100vh - 80px)',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: isMobile ? '28px 20px 40px' : isTablet ? '0 35px' : '0 50px',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '8px' : '40px'
        }}
      >
        <div style={{ maxWidth: isMobile ? '100%' : '580px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 0 24px 0',
              lineHeight: '1'
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
                display: 'block'
              }}
            />
            <p
              style={{
                margin: 0,
                color: 'var(--text-muted)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                lineHeight: '1'
              }}
            >
              Full Stack Cloud Engineer
            </p>
          </div>

          <h1
            style={{
              margin: 0,
              color: 'var(--text)',
              fontSize: isMobile ? '40px' : isTablet ? '60px' : '76px',
              fontWeight: '600',
              letterSpacing: '-0.045em',
              lineHeight: '1'
            }}
          >
            Vinod Oguboyina
          </h1>

          <p
            style={{
              margin: isMobile ? '20px 0 0' : '26px 0 0',
              color: 'color-mix(in srgb, var(--text) 85%, transparent)',
              fontSize: isMobile ? '19px' : '23px',
              fontWeight: '500',
              letterSpacing: '-0.02em',
              lineHeight: '1.45',
              maxWidth: '440px'
            }}
          >
            Full-stack engineer building production systems — web, mobile, cloud, and AI.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              margin: '30px 0 0',
              lineHeight: '1'
            }}
          >
            <span
              style={{
                width: '20px',
                height: '1px',
                background: 'var(--border-strong)',
                display: 'block'
              }}
            />
            <p
              style={{
                margin: 0,
                color: 'var(--text-muted)',
                fontSize: '14px',
                letterSpacing: '0.02em',
                lineHeight: '1'
              }}
            >
              Bengaluru
            </p>
          </div>
        </div>

        <img
          src={portrait}
          alt="Vinod Oguboyina"
          style={{
            height: isMobile ? '280px' : 'min(68vh, 620px)',
            width: 'auto',
            maxWidth: isMobile ? '240px' : '42vw',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            display: 'block',
            flexShrink: 0,
            userSelect: 'none',
            background: theme === 'light' ? '#111' : 'transparent',
            borderRadius: theme === 'light' ? '20px' : '0'
          }}
        />
      </div>

      {/* Scroll Down Indicator */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            animation: 'scrollBounce 2s ease-in-out infinite'
          }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          <p
            style={{
              margin: 0,
              color: 'var(--text-muted)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase'
            }}
          >
            Scroll
          </p>
          <svg
            width="18"
            height="28"
            viewBox="0 0 18 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="16"
              height="26"
              rx="8"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
            />
            <circle cx="9" cy="8" r="2.5" fill="var(--accent)">
              <animate
                attributeName="cy"
                values="8;16;8"
                dur="1.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
};

export default Home;