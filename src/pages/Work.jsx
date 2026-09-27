import { useState, useEffect } from 'react';
import cmf from '../assets/cmf-digitization.jpg';
import bel from '../assets/bel-mes.jpg';
import toolcrib from '../assets/toolcrib.jpg';
import spc from '../assets/spc.jpg';
import buhler from '../assets/buhler.jpg';
import inspectpro from '../assets/inspectpro.jpg';
import agrovista from '../assets/agrovista.jpg';
import webaura from '../assets/webaura.jpg';
import calibration from '../assets/gauge-calibration.jpg';

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
      title: 'CMF Digitization Platform',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: '2025 - Present',
      image: cmf,
      description: 'Led a cross-functional team to replace paper-based job-shop work with an integrated digital workflow across Order Management, Product Data Management, Production Planning, and a tablet-based Work Execution module. Built a LangChain and LangGraph shop-floor Q&A chatbot and deployed the software on an Ubuntu/Linux server.',
      tags: ['LangChain', 'LangGraph', 'Linux', 'Team Lead', 'RAG', 'Architecture'],
      impact: 'Operator Q&A chatbot for repetitive shop-floor questions',
    },
    {
      title: 'BEL MES',
      company: 'Bharat Electronics Limited (BEL)',
      period: '2025 - Completed',
      image: bel,
      description: 'Developed the Document Management and Inventory Management modules end to end with React.js and Python FastAPI, including versioning and JWT role-based access. Deployed on Azure with PostgreSQL, Nginx as a reverse proxy, and Azure Monitor with Log Analytics.',
      tags: ['React.js', 'FastAPI', 'Azure', 'JWT', 'PostgreSQL', 'Nginx'],
      impact: 'Document and inventory modules deployed on Azure',
    },
    {
      title: 'Logistics Management System',
      company: 'Buhler Group',
      period: '2025 - Completed',
      image: buhler,
      description: 'Developed enterprise-grade mobile application for logistics operations using React Native. Implemented complex algorithms for route optimization and real-time GPS tracking with high-performance requirements.',
      tags: ['React Native', 'GPS Tracking', 'Cross-platform', 'API Testing', 'Mobile'],
      impact: '40% improvement in logistics efficiency',
    },
    {
      title: 'Toolcrib Management System',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: '2025 - Completed',
      image: toolcrib,
      description: 'Engineered and maintained robust, enterprise-level tool management system with 43 distinct user roles and comprehensive permission management. Designed and implemented scalable backend architecture using Python FastAPI with PostgreSQL.',
      tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Manual Testing', 'Load Testing'],
      impact: '35% expected improvement in operational efficiency',
    },
    {
      title: 'Automated Gauge Calibration Management',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: '2025 - Completed',
      image: calibration,
      description: 'Developed a full stack web app for calibration scheduling and tracking, with an HTML, CSS, and JavaScript frontend and a Python backend exposed through RESTful APIs. Deployed on AWS with MySQL, automated email notifications through SES and Lambda, and CloudWatch for monitoring.',
      tags: ['Python', 'AWS', 'MySQL', 'Lambda', 'SES', 'CloudWatch'],
      impact: 'Automated calibration scheduling and email alerts',
    },
    {
      title: 'Inspect Pro',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: '2025 - Completed',
      image: inspectpro,
      description: 'Architected sophisticated mobile application handling concurrent connections to 20+ Bluetooth Low Energy devices. Developed hybrid data processing system combining automated sensor data with manual inspection entries.',
      tags: ['React Native', 'Bluetooth Low Energy', 'Data Processing', 'Automation'],
      impact: '40% reduction in inspection processing time',
    },
    {
      title: 'Statistical Process Control (SPC) Platform',
      company: 'Tesa India',
      period: '2025 - Completed',
      image: spc,
      description: 'Developed comprehensive full-stack SPC software for industrial quality management with complex data processing capabilities. Built high-performance frontend using React with interactive data visualization and real-time chart rendering.',
      tags: ['React', 'FastAPI', 'Bluetooth', 'Data Visualization', 'API Testing', 'Postman'],
      impact: 'Successfully deployed and in active use',
    },
    {
      title: 'AgroVista',
      company: 'Academic Project',
      period: '2024',
      image: agrovista,
      description: 'Engineered comprehensive full-stack e-commerce platform with complex business logic and real-time data processing. Developed scalable frontend using React.js with advanced search functionality and secure payment integration.',
      tags: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'Third-party APIs', 'Testing'],
      impact: '30% improvement in profit margins',
    },
    {
      title: 'Web Aura Startup',
      company: 'Founder',
      period: '2025 - Present',
      image: webaura,
      description: 'Founded startup focused on delivering custom web and mobile solutions. Building innovative products using modern tech stack.',
      tags: ['React', 'React Native', 'Python', 'Entrepreneurship', 'Product Development'],
      impact: 'Portfolio: web-aura.github.io',
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'var(--bg)',
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
        borderTop: '1px solid var(--border-strong)',
        flexDirection: isMobile ? 'row' : 'row',
        width: '100%'
      }}>
        <h1 style={{ 
          color: 'var(--text)', 
          fontSize: isMobile ? '42px' : isTablet ? '70px' : '100px', 
          fontWeight: '400',
          margin: 0,
          lineHeight: '1'
        }}>
          Work
        </h1>
        <div style={{ 
          color: 'var(--text-muted)', 
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
        width: '100%',
        alignItems: 'stretch'
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
              boxSizing: 'border-box',
              height: '100%'
            }}
          >
            {/* Image Container */}
            <div style={{
              width: '100%',
              height: isMobile ? '200px' : isTablet ? '240px' : '280px',
              overflow: 'hidden',
              marginBottom: isMobile ? '12px' : '16px',
              position: 'relative',
              borderRadius: '4px',
              flexShrink: 0
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
                color: 'var(--text)', 
                fontSize: isMobile ? '18px' : isTablet ? '22px' : '24px', 
                fontWeight: '400',
                margin: '0 0 6px 0',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>

              <p style={{ 
                color: 'var(--text-body)', 
                fontSize: isMobile ? '13px' : '14px',
                lineHeight: '1.6',
                margin: '0 0 12px 0',
                minHeight: isMobile ? 'auto' : isTablet ? '84px' : '96px'
              }}>
                {project.description}
              </p>

              {/* Impact Box */}
              <div style={{
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
                padding: isMobile ? '8px 12px' : '10px 14px',
                marginBottom: '12px',
                borderRadius: '4px',
                flexShrink: 0,
                minHeight: isMobile ? 'auto' : '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <p style={{ 
                  color: 'var(--accent)', 
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
                marginBottom: '12px',
                flexShrink: 0,
                minHeight: isMobile ? 'auto' : '32px',
                alignContent: 'flex-start'
              }}>
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span 
                    key={idx}
                    style={{
                      background: 'var(--accent-tag)',
                      color: 'var(--accent)',
                      padding: isMobile ? '3px 8px' : '4px 10px',
                      fontSize: isMobile ? '10px' : '11px',
                      borderRadius: '3px',
                      whiteSpace: 'nowrap',
                      height: 'fit-content'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Spacer to push meta info to bottom */}
              <div style={{ flex: '1' }}></div>

              {/* Meta Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                paddingTop: '10px',
                borderTop: '1px solid var(--border)',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '6px' : '0',
                flexShrink: 0
              }}>
                <span style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: isMobile ? '11px' : '12px',
                  wordBreak: 'break-word'
                }}>
                  {project.company}
                </span>
                <span style={{ 
                  color: 'var(--text-muted)', 
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