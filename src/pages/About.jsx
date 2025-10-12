import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import profileImage from '../assets/profile-photo.jpg';
import ProfileCard from '../components/ProfileCard';
import GradientText from '../components/GradientText';
import { FiMapPin } from 'react-icons/fi';

const About = () => {
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const profileCardRef = useRef(null);
  const tabsRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isTabsVisible, setIsTabsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          titleObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
          introObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const profileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProfileVisible(true);
          profileObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const tabsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTabsVisible(true);
          tabsObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    if (profileCardRef.current) {
      profileObserver.observe(profileCardRef.current);
    }

    if (tabsRef.current) {
      tabsObserver.observe(tabsRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (introRef.current) {
        introObserver.unobserve(introRef.current);
      }
      if (profileCardRef.current) {
        profileObserver.unobserve(profileCardRef.current);
      }
      if (tabsRef.current) {
        tabsObserver.unobserve(tabsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Me Title */}
        <h1 
          ref={titleRef}
          className={`about-title ${isTitleVisible ? 'animate' : ''}`}
        >
          About Me
        </h1>
        
        {/* Content Wrapper */}
        <div className="about-content-wrapper">
          {/* Introduction Text */}
          <div ref={introRef} className="about-intro-text">
            <div className={`intro-greeting ${isIntroVisible ? 'slide-in' : ''}`}>
              <GradientText
                colors={['#78a1fd', '#ea55a8', '#bfd4fe', '#d6e6fd', '#fbcaee', '#78a1fd']}
                animationSpeed={6}
                showBorder={false}
              >
                Hi, I'm
              </GradientText>
            </div>
            <p className={`intro-name ${isIntroVisible ? 'slide-in' : ''}`}>Joanna Moy</p>
            <div className={`intro-location ${isIntroVisible ? 'slide-in' : ''}`}>
              <FiMapPin className="location-icon" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
            <p className={`intro-description ${isIntroVisible ? 'slide-in' : ''}`}>
              A Computer Science graduate specialised in Data Science with a passion for 
              analysing and modeling data. With a background in cybersecurity and business 
              information systems, I bring a well-rounded perspective to solving complex problems. 
              My interests span across web development, UI/UX design, and data analytics—creating 
              meaningful insights and beautiful, intuitive experiences.
            </p>
          </div>
          
          {/* Profile Card */}
          <div ref={profileCardRef} className={`profile-card-container ${isProfileVisible ? 'slide-up' : ''}`}>
            <ProfileCard avatarUrl={profileImage} />
          </div>
        </div>

        {/* Tabs Section */}
        <div ref={tabsRef} className={`tabs-section ${isTabsVisible ? 'fade-in' : ''}`}>
          <div className="tabs-navigation">
            <button 
              className={`tab-button tab-button-left ${activeTab === 'education' ? 'active' : ''} ${isTabsVisible ? 'slide-in' : ''}`}
              onClick={() => setActiveTab(activeTab === 'education' ? null : 'education')}
            >
              Education
            </button>
            <button 
              className={`tab-button tab-button-bottom ${activeTab === 'skills' ? 'active' : ''} ${isTabsVisible ? 'slide-in' : ''}`}
              onClick={() => setActiveTab(activeTab === 'skills' ? null : 'skills')}
            >
              Highlighted Skills
            </button>
            <button 
              className={`tab-button tab-button-right ${activeTab === 'interests' ? 'active' : ''} ${isTabsVisible ? 'slide-in' : ''}`}
              onClick={() => setActiveTab(activeTab === 'interests' ? null : 'interests')}
            >
              Interests
            </button>
          </div>

          {activeTab && (
            <div className="tabs-content">
            {activeTab === 'education' && (
              <div className="tab-panel">
                <div className="education-item">
                  <h3>Bachelor of Computer Science</h3>
                  <p className="education-institution">Monash University</p>
                  <p className="education-date">2022 - 2024</p>
                  <p className="education-details">Specialising in Data Science; Minoring in Business Information Systems and Cybersecurity</p>
                  <ul className="education-highlights">
                    <li>Relevant Coursework: Data Analytics, Data Visualisation, Computational Modelling and Simulation, Modelling for Data Analysis, Databases, Business Information Analysis, Systems Development, Real-time Enterprise Systems</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="tab-panel">
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul>
                      <li>Python</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>R</li>
                      <li>SQL (Oracle)</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Data Science & Analytics</h3>
                    <ul>
                      <li>NumPy, Pandas</li>
                      <li>Tableau</li>
                      <li>Vega-lite</li>
                      <li>Power BI</li>
                      <li>Microsoft Excel</li>
                      <li>Microsoft Access</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Web Development</h3>
                    <ul>
                      <li>ReactJS</li>
                      <li>NodeJS</li>
                      <li>NextJS</li>
                      <li>HTML & CSS</li>
                      <li>MongoDB</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Tools & Technologies</h3>
                    <ul>
                      <li>Git</li>
                      <li>Linux</li>
                      <li>SAP S/4 HANA</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="tab-panel">
                <div className="interests-grid">
                  <div className="interest-item">
                    <h3>🎨 UI/UX Design</h3>
                  </div>
                  <div className="interest-item">
                    <h3>📊 Data Visualisation</h3>
                  </div>
                  <div className="interest-item">
                    <h3>🔒 Cyber Security</h3>
                  </div>
                  <div className="interest-item">
                    <h3>🌐 Web Development</h3>
                  </div>
                </div>
              </div>
            )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;