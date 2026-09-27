import { useState, useEffect } from 'react';
import vinod from '../assets/vinod.jpg';
import { 
  FaReact, 
  FaPython, 
  FaDatabase, 
  FaMobile, 
  FaDocker, 
  FaGit, 
  FaGithub,
  FaBluetooth,
  FaAws,
  FaLinux,
  FaUsers,
  FaBrain,
  FaCogs,
  FaShieldAlt,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiFastapi, 
  SiPostgresql, 
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPostman, 
  SiAndroid, 
  SiIos,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiKubernetes,
  SiGitlab,
  SiNginx,
  SiExpo,
  SiLangchain
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbTestPipe } from 'react-icons/tb';

const Profile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const experience = [
    {
      title: 'Project Associate - 1',
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: 'Dec 2025 - Present',
      type: 'FULL TIME',
      duration: 'Ongoing'
    },
    {
   
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: 'Jul 2025 - Nov 2025',
      type: 'GRADUATE APPRENTICE',
      duration: '4 Months'
    },
    {
    
      company: 'Central Manufacturing Technology Institute (CMTI)',
      period: 'Jan 2025 - Jul 2025',
      type: 'INTERNSHIP',
      duration: '6 Months'
    }
  ];

  const technicalSkills = [
    { 
      category: 'Backend & APIs', 
      icon: <FaPython />,
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'RESTful APIs', icon: <SiFastapi /> },
        { name: 'JWT Auth', icon: <FaShieldAlt /> },
        { name: 'Microservices', icon: <FaCogs /> }
      ] 
    },
    { 
      category: 'Frontend Development', 
      icon: <FaReact />,
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> }
      ] 
    },
    { 
      category: 'Mobile Development', 
      icon: <FaMobile />,
      skills: [
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Expo', icon: <SiExpo /> },
        { name: 'Android', icon: <SiAndroid /> },
        { name: 'iOS', icon: <SiIos /> },
        { name: 'Bluetooth Low Energy', icon: <FaBluetooth /> }
      ] 
    },
    { 
      category: 'Databases', 
      icon: <FaDatabase />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'MySQL', icon: <SiMysql /> }
      ] 
    },
    { 
      category: 'Cloud Platforms', 
      icon: <FaAws />,
      skills: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'EC2', icon: <FaAws /> },
        { name: 'S3', icon: <FaAws /> },
        { name: 'RDS', icon: <FaAws /> },
        { name: 'Lambda', icon: <FaAws /> },
        { name: 'API Gateway', icon: <FaAws /> },
        { name: 'SES', icon: <FaAws /> },
        { name: 'CloudWatch', icon: <FaAws /> },
        { name: 'Azure', icon: <VscAzure /> },
        { name: 'Azure Functions', icon: <VscAzure /> },
        { name: 'Azure SQL', icon: <VscAzure /> },
        { name: 'Blob Storage', icon: <VscAzure /> },
        { name: 'Azure Monitor', icon: <VscAzure /> },
        { name: 'App Insights', icon: <VscAzure /> }
      ] 
    },
    { 
      category: 'DevOps & Infrastructure', 
      icon: <FaDocker />,
      skills: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Nginx', icon: <SiNginx /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'CI/CD', icon: <FaGit /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'Shell Scripting', icon: <FaTerminal /> },
        { name: 'GitLab', icon: <SiGitlab /> }
      ] 
    },
    { 
      category: 'AI Technologies', 
      icon: <FaBrain />,
      skills: [
        { name: 'RAG', icon: <FaBrain /> },
        { name: 'LLM Integration', icon: <FaBrain /> },
        { name: 'Generative AI', icon: <FaBrain /> },
        { name: 'LangChain', icon: <SiLangchain /> },
        { name: 'LangGraph', icon: <SiLangchain /> },
        { name: 'Chatbots', icon: <FaBrain /> }
      ] 
    },
    { 
      category: 'Leadership', 
      icon: <FaUsers />,
      skills: [
        { name: 'Team Leadership', icon: <FaUsers /> },
        { name: 'Requirements Gathering', icon: <FaUsers /> },
        { name: 'Solution Architecture', icon: <FaCogs /> }
      ] 
    },
    { 
      category: 'Testing & QA', 
      icon: <TbTestPipe />,
      skills: [
        { name: 'Manual Testing', icon: <TbTestPipe /> },
        { name: 'Cross-Browser Testing', icon: <TbTestPipe /> },
        { name: 'Load Testing', icon: <TbTestPipe /> },
        { name: 'API Testing (Postman)', icon: <SiPostman /> },
      ] 
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'var(--bg)',
      padding: isMobile ? '100px 20px 50px 20px' : isTablet ? '110px 35px 50px 35px' : '120px 50px 50px 50px',
      boxSizing: 'border-box',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '50px' : isTablet ? '70px' : '100px',
        paddingTop: isMobile ? '20px' : '40px',
        borderTop: '1px solid var(--border-strong)',
        position: 'relative'
      }}>
        <h1 style={{ 
          color: 'var(--text)', 
          fontSize: isMobile ? '48px' : isTablet ? '64px' : '80px',
          fontWeight: '400',
          margin: 0,
          lineHeight: '1',
          marginBottom: isMobile ? '10px' : '20px'
        }}>
          Profile
        </h1>
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '-25px' : '-40px',
          right: 0,
          width: '100%',
          height: '1px',
          background: 'var(--border-strong)'
        }}></div>
      </div>

      {/* Content Section - Name + Title + Image */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '60px' : isTablet ? '80px' : '100px',
        position: 'relative',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '30px' : '0'
      }}>
        {/* Left Side - Name and Title */}
        <div style={{ flex: 1 }}>
        <h2 style={{ 
            color: 'var(--text)', 
            fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px', 
            fontWeight: '400',
            margin: '0 0 15px 0',
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Vinod Oguboyina
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px', 
            fontWeight: '300',
            margin: 0
          }}>
            Full Stack Cloud Engineer
          </p>
        </div>

        {/* Right Side - Image */}
        <div style={{
          width: isMobile ? '100%' : isTablet ? '280px' : '350px',
          height: isMobile ? '300px' : isTablet ? '280px' : '350px',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: isMobile ? '8px' : '0'
        }}>
          <img
            src={vinod}
            alt="Vinod Oguboyina"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />
        </div>
      </div>

      {/* Experience Section */}
      <div style={{ 
        marginBottom: isMobile ? '70px' : isTablet ? '90px' : '120px',
        maxWidth: '1400px'
      }}>
        <h2 style={{ 
          color: 'var(--text)', 
          fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px', 
          fontWeight: '400',
          marginBottom: isMobile ? '30px' : isTablet ? '40px' : '50px',
          letterSpacing: '1px'
        }}>
          Experience
        </h2>
        
        {experience.map((exp, index) => (
          <div key={index} style={{
            paddingBottom: isMobile ? '25px' : isTablet ? '32px' : '40px',
            marginBottom: isMobile ? '25px' : isTablet ? '32px' : '40px',
            borderBottom: index !== experience.length - 1 ? '1px solid var(--border)' : 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '15px' : '0'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                color: 'var(--text)', 
                fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px', 
                fontWeight: '400',
                margin: '0 0 12px 0'
              }}>
                {exp.company}
              </h3>
              <p style={{ 
                color: 'var(--text-soft)', 
                fontSize: isMobile ? '15px' : isTablet ? '16px' : '18px',
                margin: '0 0 8px 0'
              }}>
                {exp.title}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '15px', 
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  color: 'var(--text-muted)',
                  fontSize: isMobile ? '10px' : '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  {exp.type}
                </span>
                <span style={{
                  color: 'var(--accent)',
                  fontSize: isMobile ? '10px' : '12px',
                  letterSpacing: '1px'
                }}>
                  {exp.duration}
                </span>
              </div>
            </div>
            <div style={{ 
              color: 'var(--text-muted)', 
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
              textAlign: isMobile ? 'left' : 'right',
              minWidth: isMobile ? 'auto' : '200px'
            }}>
              {exp.period}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <div style={{ 
        marginBottom: isMobile ? '70px' : isTablet ? '90px' : '120px',
        maxWidth: '1400px'
      }}>
        <h2 style={{ 
          color: 'var(--text)', 
          fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px', 
          fontWeight: '400',
          marginBottom: isMobile ? '30px' : isTablet ? '40px' : '50px',
          letterSpacing: '1px'
        }}>
          Technical Skills
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '35px' : isTablet ? '40px' : '50px'
        }}>
          {technicalSkills.map((category, index) => (
            <div key={index}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: isMobile ? '15px' : '20px'
              }}>
                <span style={{ 
                  fontSize: isMobile ? '18px' : '20px', 
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {category.icon}
                </span>
                <h3 style={{ 
                  color: 'var(--text-soft)', 
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
                  fontWeight: '400',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: isMobile ? '1px' : '2px'
                }}>
                  {category.category}
                </h3>
              </div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '8px' : '12px'
              }}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} style={{
                    color: 'var(--text)',
                    fontSize: isMobile ? '13px' : '15px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}>
                    <span style={{ 
                      fontSize: isMobile ? '12px' : '14px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div style={{
        paddingTop: isMobile ? '30px' : isTablet ? '40px' : '50px',
        borderTop: '1px solid var(--border)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1400px',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '25px' : '0'
        }}>
          <div>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
              margin: '0 0 10px 0',
              wordBreak: 'break-word'
            }}>
              vinodoguboyina123@gmail.com
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
              margin: 0
            }}>
              +91-7207026931
            </p>
          </div>
          <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
              margin: '0 0 10px 0'
            }}>
             
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
              margin: 0
            }}>
              <a href="https://web-aura.github.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                web-aura.github.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;