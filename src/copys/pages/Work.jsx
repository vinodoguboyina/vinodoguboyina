import { useState, useEffect } from 'react';

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const projects = [
    {
      title: 'Toolcrib Management System',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      role: 'Full Stack Software Engineer',
      period: '2025 - Testing Phase',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      description: 'Enterprise-level tool management system with 43 distinct user roles and comprehensive permission management. Designed scalable backend with Python FastAPI and PostgreSQL.',
      tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Manual Testing', 'Load Testing'],
      impact: '35% expected improvement in operational efficiency',
    },
    {
      title: 'Statistical Process Control (SPC) Platform',
      company: 'Tesa India',
      role: 'Software Engineer',
      period: '2025 - Completed',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Full-stack SPC software for industrial quality management with complex data processing. Built high-performance frontend with React and interactive data visualization.',
      tags: ['React', 'FastAPI', 'Bluetooth', 'Data Visualization', 'API Testing', 'Postman'],
      impact: 'Successfully deployed and in active use',
    },
    {
      title: 'Logistics Management System',
      company: 'Buhler Group',
      role: 'Mobile Application Developer',
      period: '2025 - Completed',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
      description: 'Enterprise-grade mobile application using React Native for logistics operations. Implemented route optimization algorithms and real-time GPS tracking.',
      tags: ['React Native', 'GPS Tracking', 'Cross-platform', 'API Testing', 'Mobile'],
      impact: '40% improvement in logistics efficiency',
    },
    {
      title: 'Inspect Pro',
      company: 'Personal Project',
      role: 'Mobile Application Developer',
      period: '2025',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      description: 'Enterprise Bluetooth Integration Platform handling concurrent connections to 20+ BLE devices. Developed hybrid data processing system with automated validation.',
      tags: ['React Native', 'Bluetooth Low Energy', 'Data Processing', 'Automation'],
      impact: '40% reduction in inspection processing time',
    },
    {
      title: 'AgroVista',
      company: 'Academic Project',
      role: 'Full Stack Developer',
      period: '2024',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=800&q=80',
      description: 'E-commerce platform designed for agricultural products, featuring a scalable interface and secure online payment system.',
      tags: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'Third-party APIs', 'Testing'],
      impact: '30% improvement in profit margins',
    },
    {
      title: 'Web Aura Startup',
      company: 'Founder',
      role: 'Full Stack Developer & Entrepreneur',
      period: '2025 - Present',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Founded startup focused on delivering custom web and mobile solutions. Building innovative products using modern tech stack.',
      tags: ['React', 'React Native', 'Python', 'Entrepreneurship', 'Product Development'],
      impact: 'Portfolio: web-aura.github.io',
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#000',
      padding: isMobile ? '100px 15px 40px 15px' : isTablet ? '110px 30px 50px 30px' : '120px 50px 50px 50px',
      boxSizing: 'border-box',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'center' : 'flex-start',
        marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px',
        paddingTop: isMobile ? '10px' : isTablet ? '20px' : '30px',
        borderTop: '1px solid #333',
        flexDirection: isMobile ? 'row' : 'row',
        width: '100%'
      }}>
        <h1 style={{ 
          color: '#fff', 
          fontSize: isMobile ? '42px' : isTablet ? '70px' : '100px', 
          fontWeight: '400',
          margin: 0,
          lineHeight: '1'
        }}>
          Work
        </h1>
        <div style={{ 
          color: '#666', 
          fontSize: isMobile ? '28px' : isTablet ? '40px' : '54px', 
          fontWeight: '300',
          marginTop: isMobile ? '5px' : '10px'
        }}>
          {projects.length}
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: isMobile ? '35px' : isTablet ? '30px' : '35px',
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%'
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: hoveredIndex === index && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Image Container */}
            <div style={{
              width: '100%',
              height: isMobile ? '200px' : isTablet ? '240px' : '280px',
              overflow: 'hidden',
              marginBottom: isMobile ? '12px' : '16px',
              position: 'relative',
              borderRadius: '4px'
            }}>
              <img 
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  transform: hoveredIndex === index && !isMobile ? 'scale(1.05)' : 'scale(1)',
                  display: 'block'
                }}
              />
            </div>

            {/* Project Info */}
            <div style={{ 
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}>
              <h3 style={{ 
                color: '#fff', 
                fontSize: isMobile ? '18px' : isTablet ? '22px' : '24px', 
                fontWeight: '400',
                margin: '0 0 6px 0',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>

              <p style={{ 
                color: '#666', 
                fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
                fontWeight: '300',
                margin: '0 0 12px 0'
              }}>
                {project.role}
              </p>

              <p style={{ 
                color: '#999', 
                fontSize: isMobile ? '13px' : '14px',
                lineHeight: '1.6',
                margin: '0 0 12px 0',
                flex: '0 0 auto'
              }}>
                {project.description}
              </p>

              {/* Impact Box */}
              <div style={{
                background: 'rgba(102, 126, 234, 0.1)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                padding: isMobile ? '8px 12px' : '10px 14px',
                marginBottom: '12px',
                borderRadius: '4px'
              }}>
                <p style={{ 
                  color: '#667eea', 
                  fontSize: isMobile ? '11px' : '12px',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  <strong>Impact:</strong> {project.impact}
                </p>
              </div>

              {/* Tags */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: isMobile ? '6px' : '8px',
                marginBottom: '12px'
              }}>
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span 
                    key={idx}
                    style={{
                      background: 'rgba(102, 126, 234, 0.2)',
                      color: '#667eea',
                      padding: isMobile ? '3px 8px' : '4px 10px',
                      fontSize: isMobile ? '10px' : '11px',
                      borderRadius: '3px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                paddingTop: '10px',
                borderTop: '1px solid #222',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '6px' : '0'
              }}>
                <span style={{ 
                  color: '#666', 
                  fontSize: isMobile ? '11px' : '12px',
                  wordBreak: 'break-word'
                }}>
                  {project.company}
                </span>
                <span style={{ 
                  color: '#666', 
                  fontSize: isMobile ? '11px' : '12px'
                }}>
                  {project.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;