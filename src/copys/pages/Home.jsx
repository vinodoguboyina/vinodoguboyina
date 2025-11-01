import { useState, useEffect } from 'react';
import videounscreen from '../assets/video-unscreen.gif';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: 'calc(100vh - 80px)',
    background: '#000',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    position: 'absolute',
    top: isMobile ? '35%' : isTablet ? '38%' : '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: isMobile ? '40vh' : isTablet ? '55vh' : '65vh',
    width: 'auto',
    maxWidth: isMobile ? '90%' : '100%',
    objectFit: 'contain',
    zIndex: 5
  };

  const textContainerStyle = {
    position: 'absolute',
    top: isMobile ? '70%' : isTablet ? '80%' : '85%',
    left: isMobile ? '50%' : '52%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '20px' : isTablet ? '40px' : '60px',
    zIndex: 4,
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '90%' : 'auto'
  };

  const yearTextStyle = {
    fontSize: isMobile ? '36px' : isTablet ? '50px' : '70px',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.2)',
    pointerEvents: 'none',
    letterSpacing: isMobile ? '8px' : isTablet ? '10px' : '12px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    lineHeight: '1',
    userSelect: 'none'
  };

  const portfolioTextStyle = {
    fontSize: isMobile ? '36px' : isTablet ? '50px' : '70px',
    fontWeight: '300',
    color: '#fff',
    pointerEvents: 'none',
    letterSpacing: isMobile ? '1px' : '2px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    lineHeight: '1',
    userSelect: 'none'
  };

  const feedStyle = {
    position: 'absolute',
    bottom: isMobile ? '3%' : '5%',
    left: isMobile ? '50%' : '4%',
    transform: isMobile ? 'translateX(-50%)' : 'none',
    color: '#fff',
    fontSize: isMobile ? '14px' : '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Arial, sans-serif',
    zIndex: 10
  };

  return (
    <div style={containerStyle}>
      <img
        src={videounscreen}
        alt="Portfolio animation"
        style={imageStyle}
      />

      <div style={textContainerStyle}>
        <div style={yearTextStyle}>2025</div>
        <div style={portfolioTextStyle}>Portfolio</div>
      </div>

      <div style={feedStyle}>
        Feed
        <span style={{ fontSize: isMobile ? '12px' : '14px' }}>↓</span>
      </div>
    </div>
  );
};

export default Home;