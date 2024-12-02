import { useState, useRef } from 'react';
import styles from '../styles/About.module.css';
import { 
  FaPython, FaJava, FaJs, FaDatabase,
  FaReact, FaNode, FaDocker, FaGitAlt, FaAws 
} from 'react-icons/fa';
import { 
  SiDjango, SiTensorflow, SiMongodb, 
  SiLangchain, SiOpenai, SiPostgresql, 
  SiHtml5, SiCss3, SiFirebase, SiWindows,
  SiLinux, SiPandas, SiNumpy, SiFlask,
  SiMlflow
} from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';
import { HiDownload } from 'react-icons/hi';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const tabSectionRef = useRef(null);

  const scrollToTabs = () => {
    tabSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Languages': [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> }
    ],
    'Frameworks/Libraries': [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Node.js', icon: <FaNode /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: null },
      { name: 'Seaborn', icon: null },
      { name: 'NetworkX', icon: <TbNetwork /> }
    ],
    'AI & ML Tools': [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'LangGraph', icon: null },
      { name: 'MLflow', icon: <SiMlflow /> },
      { name: 'LlamaIndex', icon: null },
      { name: 'Ollama', icon: null },
      { name: 'OpenAI API', icon: <SiOpenai /> }
    ],
    'Tools & Technologies': [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Windows', icon: <SiWindows /> },
      { name: 'Linux', icon: <SiLinux /> }
    ]
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Greater Noida Institute of Technology',
      duration: '2021 - 2025'
    }
  ];

  const experience = [
    {
      role: 'AI/ML  Intern',
      company: 'SSBI Digital',
      duration: 'Sept 2024 - Present',
      points: [
        'Developed and deployed AI-powered chatbots using LangChain and OpenAI API',
        'Implemented embedding-based search systems for improved data retrieval',
        'Optimized machine learning models and AI agents for better performance',
        'Created optimized Reterival Based (RAG) systems for better data retrieval',
        'Worked on providing Generative AI solutions'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Orglens',
      duration: 'Sept 2024 - Present',
      points: [
        'Built scalable web application backends using Django',
        'Implemented automated testing procedures reducing bug detection time by 40%',
        'Collaborated with cross-functional teams to deliver features on schedule',
        'Worked on Organizational Network Analysis using NetworkX',
        'Developed AI Agents using OpenAI API and LangChain'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Digivista Infotech',
      duration: 'May 2024 - Aug 2024',
      points: [
        'Build scalable web applications using Python and Next.js',
        'Used tools like ABBYY FlexiCapture for automating data capture from scanned documents',
        'Worked on Document Understanding and Retrieval',
        'Created multiple ML models for automating data capture from scanned documents'
      ]
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'skills':
        return (
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={styles.skillCategory}>
                <h3>{category}</h3>
                <div className={styles.skillTags}>
                  {skillList.map(skill => (
                    <span key={skill.name} className={styles.skillTag}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <h3>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.duration}>{edu.duration}</p>
              </div>
            ))}
          </>
        );
      case 'experience':
        return (
          <>
            {experience.map((exp, index) => (
              <div key={index} className={styles.experienceCard}>
                <div className={styles.experienceHeader}>
                  <h3>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.duration}>{exp.duration}</p>
                </div>
                <ul className={styles.experiencePoints}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.header}>
        <h1>A Little Bit About Me</h1>
        <h2>Hello, I'm Chitresh!</h2>
      </div>

      <div className={styles.content}>
        <section className={styles.introSection}>
          <p>
            I am a passionate and driven college student currently interning in the field of AI and software development. 
            My work focuses on integrating advanced machine learning models, AI agents, and automation tools to create innovative solutions that streamline processes and enhance user experiences.
          </p>
          
          <div className={styles.buttonGroup}>
            <a 
              href="/Chitresh_Gyanani_Resume.pdf" 
              download
              className={styles.resumeButton}
            >
              Download Resume
              <HiDownload className={styles.downloadIcon} />
            </a>
            <button 
              onClick={scrollToTabs}
              className={styles.viewMoreButton}
            >
              View More
              <span className={styles.viewMoreIcon}>↓</span>
            </button>
          </div>
        </section>

        <section ref={tabSectionRef} className={styles.tabSection}>
          <div className={styles.tabHeader}>
            <button
              className={`${styles.tabButton} ${activeTab === 'experience' ? styles.active : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'skills' ? styles.active : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'education' ? styles.active : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
          <div className={styles.tabContent}>
            {renderTabContent()}
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
