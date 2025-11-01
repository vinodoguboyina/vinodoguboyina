import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const calculateEyePosition = (eyeX, eyeY) => {
    if (isMobile) return { x: 0, y: 0 };
    const dx = mousePosition.x - eyeX;
    const dy = mousePosition.y - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(3, Math.sqrt(dx * dx + dy * dy) / 80);
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  const leftEyePos = calculateEyePosition(windowWidth - 180, 35);
  const rightEyePos = calculateEyePosition(windowWidth - 130, 35);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: isMobile ? '60px' : '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '0 20px' : isTablet ? '0 35px' : '0 50px',
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: isMobile ? '1px solid #222' : 'none'
  };

  const logoStyle = {
    width: isMobile ? '24px' : '28px',
    height: isMobile ? '24px' : '28px',
    border: '2px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    flexShrink: 0
  };

  const centerNameStyle = {
    position: isMobile ? 'relative' : 'absolute',
    left: isMobile ? 'auto' : '50%',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: isMobile ? '11px' : isTablet ? '14px' : '16px',
    fontWeight: '400',
    letterSpacing: isMobile ? '0.5px' : '1px',
    display: isMobile && menuOpen ? 'none' : 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: isMobile ? '120px' : 'auto'
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
    padding: '5px',
    zIndex: 1001
  };

  const hamburgerLineStyle = {
    width: '22px',
    height: '2px',
    background: '#fff',
    transition: 'all 0.3s ease'
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: isMobile ? '60px' : '80px',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.98)',
    backdropFilter: 'blur(20px)',
    padding: '30px 20px',
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '25px',
    zIndex: 999,
    borderBottom: '1px solid #222'
  };

  const desktopNavStyle = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: isTablet ? '20px' : '30px'
  };

  const navLinkStyle = (isActive) => ({
    color: '#fff',
    textDecoration: 'none',
    fontSize: isMobile ? '18px' : isTablet ? '14px' : '16px',
    fontWeight: isActive ? '500' : '400',
    transition: 'opacity 0.2s',
    display: 'block',
    padding: isMobile ? '8px 0' : '0'
  });

  const eyesContainerStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: '8px',
    marginLeft: '10px'
  };

  const eyeStyle = {
    width: isTablet ? '18px' : '20px',
    height: isTablet ? '18px' : '20px',
    background: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const pupilStyle = (pos) => ({
    width: isTablet ? '5px' : '6px',
    height: isTablet ? '5px' : '6px',
    background: '#000',
    borderRadius: '50%',
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.1s ease'
  });

  const footerStyle = {
    position: 'fixed',
    bottom: isMobile ? '15px' : '30px',
    left: isMobile ? '20px' : '50px',
    color: '#fff',
    fontSize: isMobile ? '12px' : '14px',
    zIndex: 100,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        background: '#000',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: 'hidden',
        width: '100%'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Header */}
      <header style={headerStyle}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }} onClick={() => setMenuOpen(false)}>
          <div style={logoStyle}>H</div>
        </Link>

        {/* Center Name */}
        <div style={centerNameStyle}>
          Vinod Oguboyina
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{
            ...hamburgerLineStyle,
            transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
          }} />
          <div style={{
            ...hamburgerLineStyle,
            opacity: menuOpen ? 0 : 1
          }} />
          <div style={{
            ...hamburgerLineStyle,
            transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
          }} />
        </div>

        {/* Desktop Navigation */}
        <div style={desktopNavStyle}>
          <nav style={{ display: 'flex', gap: isTablet ? '20px' : '30px', alignItems: 'center' }}>
            <Link to="/work" style={navLinkStyle(location.pathname === '/work')}>
              Work
            </Link>
            <Link to="/profile" style={navLinkStyle(location.pathname === '/profile')}>
              Profile
            </Link>
            <Link to="/contact" style={navLinkStyle(location.pathname === '/contact')}>
              Contact
            </Link>
          </nav>

          {/* Animated Eyes */}
          <div style={eyesContainerStyle}>
            <div style={eyeStyle}>
              <div style={pupilStyle(leftEyePos)} />
            </div>
            <div style={eyeStyle}>
              <div style={pupilStyle(rightEyePos)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <Link 
          to="/work" 
          style={navLinkStyle(location.pathname === '/work')}
          onClick={() => setMenuOpen(false)}
        >
          Work
        </Link>
        <Link 
          to="/profile" 
          style={navLinkStyle(location.pathname === '/profile')}
          onClick={() => setMenuOpen(false)}
        >
          Profile
        </Link>
        <Link 
          to="/contact" 
          style={navLinkStyle(location.pathname === '/contact')}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      {/* Content */}
      <main style={{ 
        paddingTop: isMobile ? '60px' : '80px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <span style={{ fontSize: isMobile ? '10px' : '12px' }}></span>
      </footer>
    </div>
  );
};

export default Layout;