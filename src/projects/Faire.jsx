import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Faire.css';

const Faire = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('methodology');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faire-page">
      <main className="faire-content">
        <div className="faire-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="faire-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="faire-breadcrumb">
            <span className="faire-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="faire-breadcrumb-separator">{'>'}</span>
            <span className="faire-breadcrumb-current">Faire</span>
          </div>
        </div>
        
        <h1 className="faire-title">Faire</h1>
        
        {/* Main Layout - Two Column */}
        <div className="faire-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="faire-project-overview">
            <p>
              Faire is an easy-to-use Learning Management System (LMS) designed to enhance engagement for students with dyslexia. Unlike traditional 
              LMS platforms like Moodle or Blackboard, Faire integrates accessibility-focused features such as a PDF transcriber, dyslexia-friendly 
              font toggles, text-to-speech, and adjustable audio/visual settings. The platform allows students to customise their learning environment, 
              such as adjusting font size, contrast, or enabling dark mode, ensuring that course material is readable, navigable, and inclusive. 
              Built with Next.js and prototyped in Figma, Faire demonstrates how technology can directly address real-world learning barriers.
            </p>
            
            <div className="faire-technologies">
              <h4>Technologies Used</h4>
              <div className="faire-tech-tags">
                <span className="faire-tech-tag">HTML</span>
                <span className="faire-tech-tag">CSS</span>
                <span className="faire-tech-tag">JavaScript</span>
                <span className="faire-tech-tag">NextJS</span>
                <span className="faire-tech-tag">ReactJS</span>
              </div>
            </div>
            
            {/* Tabbed Container */}
            <div className="faire-tab-container">
              <div className="faire-tab-headers">
                <button 
                  className={`faire-tab-header ${activeTab === 'methodology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                >
                  Methodology
                </button>
                <button 
                  className={`faire-tab-header ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  Key Features
                </button>
                <button 
                  className={`faire-tab-header ${activeTab === 'future' ? 'active' : ''}`}
                  onClick={() => setActiveTab('future')}
                >
                  Future Development
                </button>
              </div>
              
              <div className="faire-tab-content">
                {activeTab === 'methodology' && (
                  <div className="faire-tab-panel">
                    <div className="methodology-subsection">
                      <ul>
                        <li>Brainstormed ideas during the first 2 hours of the hackathon; decided to focus on accessibility for students with dyslexia.</li>
                        <li>Designed the prototype in <strong>Figma</strong> to visualise layout, user flows, and accessibility features.</li>
                        <li>Developed the MVP using <strong>Next.js</strong>, implementing key front-end and back-end features.</li>
                        <li>Utilised Softgen AI to generate initial code skeletons, then refined manually for aesthetics and functionality.</li>
                        <li>Focused on rapid iteration and structured task allocation to meet tight 48-hour deadlines.</li>
                        <li>Prioritised <strong>user experience and accessibility</strong> in all design and implementation decisions.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div className="faire-tab-panel">
                    <div className="insights-subsection">
                      <ul>
                        <li><strong>PDF Transcriber:</strong> Upload lecture notes, automatically transcribe content for dyslexic-friendly reading.</li>
                        <li><strong>Text-to-Speech:</strong>Enables course material to be read aloud for students with visual impairments or reading difficulties.</li>
                        <li><strong>Dyslexia-Friendly Font Toggle:</strong> Switch all text to OpenDyslexia font for better readability.</li>
                        <li><strong>Customisable Learning Environment:</strong> Adjust font size, contrast, dark mode, motion reduction, and audio settings.</li>
                        <li><strong>Translation Feature (Prototype Stage):</strong> International students can translate course content to preferred languages.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'future' && (
                  <div className="faire-tab-panel">
                    <div className="outcomes-subsection">
                      <ul>
                        <li>Fully implement translation API for real-time multilingual support.</li>
                        <li>Integrate backend database schema with Firebase to store user preferences and uploaded content.</li>
                        <li>Expand accessibility options (e.g., more fonts, advanced audio controls).</li>
                        <li>Conduct user testing with dyslexic students to refine UX and improve feature usability.</li>
                        <li>Explore scaling the platform for broader educational institutions and diverse neurodivergent learners.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column Container */}
          <div className="faire-visualization">
            <h3>Project Highlights</h3>
            <div className="faire-preview-image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/Faire.png`}
                alt="Faire Project Preview"
                className="faire-preview-image"
              />
            </div>
            <a 
              href="https://fairelms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="faire-demo-button"
            >
              Demo
            </a>
            <div className="faire-visualization-container">
              <div className="faire-highlights">
                <div className="faire-highlight-item">
                  <h4>1st Place Winner</h4>
                  <p>Faire <strong>won 1st place</strong> at the Women in Technology – Future in Focus Hackathon 2025, excelling in innovation, technical execution, impact, UX, and presentation.</p>
                </div>
                
                <div className="faire-highlight-item">
                  <h4>Accessibility Focus</h4>
                  <p>Designed specifically to address the unique learning barriers faced by students with dyslexia, making education more inclusive and accessible.</p>
                </div>
                
                <div className="faire-highlight-item">
                  <h4>Rapid Development</h4>
                  <p>Built and prototyped within a 48-hour timeframe, demonstrating effective collaboration and agile development practices.</p>
                </div>
                
                <div className="faire-highlight-item">
                  <h4>User-Centered Design</h4>
                  <p>Every feature was designed with the end-user in mind, prioritizing accessibility, usability, and a positive learning experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faire;

