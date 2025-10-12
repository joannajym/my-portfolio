import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Faire.css';

const Faire = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faire-page">
      <header className="faire-header">
        <button 
          onClick={() => navigate('/')}
          className="faire-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="faire-title">Faire</h1>
        <p className="faire-subtitle">A hackathon project for the Women in Technology - Future in Focus Hackathon</p>
      </header>
      
      <main className="faire-content">
        <div className="faire-container">
          {/* Project Overview Section */}
          <div className="faire-project-overview">
            <h3>Project Overview</h3>
            <p>
              Faire was developed as part of the Women in Technology - Future in Focus Hackathon, 
              focusing on creating innovative solutions that address real-world challenges faced by 
              women in technology and society at large. This project represents a collaborative effort 
              to build meaningful technology that can make a positive impact.
            </p>
            <p>
              The hackathon provided an excellent opportunity to work with like-minded individuals, 
              learn new technologies, and tackle complex problems within a time-constrained environment. 
              Faire embodies the spirit of innovation and collaboration that defines the Women in Technology community.
            </p>
          </div>

          {/* Hackathon Context Section */}
          <div className="faire-hackathon-context">
            <h3>Hackathon Context</h3>
            <p>
              The Women in Technology - Future in Focus Hackathon brought together talented individuals 
              from diverse backgrounds to create solutions that address current and future challenges. 
              The event emphasized the importance of diversity in technology and provided a platform 
              for women to showcase their technical skills and innovative thinking.
            </p>
            <p>
              Participants were challenged to think critically about the role of technology in shaping 
              the future, with particular emphasis on creating inclusive and accessible solutions that 
              benefit broader communities.
            </p>
          </div>

          {/* Technical Approach Section */}
          <div className="faire-technical-approach">
            <h3>Technical Approach</h3>
            <p>
              During the hackathon, our team focused on rapid prototyping and iterative development, 
              adapting quickly to feedback and new insights as they emerged. The project leveraged 
              modern web technologies and best practices to create a robust and user-friendly solution.
            </p>
            <p>
              The development process emphasized collaboration, with team members contributing their 
              unique skills and perspectives to create a well-rounded final product that addressed 
              the hackathon's core objectives.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="faire-key-features">
            <h3>Key Features</h3>
            <ul className="faire-features-list">
              <li>Innovative solution addressing real-world challenges</li>
              <li>User-centered design approach</li>
              <li>Scalable architecture for future enhancements</li>
              <li>Accessibility considerations throughout development</li>
              <li>Collaborative development process</li>
              <li>Integration of modern web technologies</li>
            </ul>
          </div>

          {/* Impact and Learning Section */}
          <div className="faire-impact-learning">
            <h3>Impact and Learning</h3>
            <p>
              Participating in the Women in Technology - Future in Focus Hackathon was an incredibly 
              valuable experience that provided insights into collaborative development, time management 
              under pressure, and the importance of diverse perspectives in technology development.
            </p>
            <p>
              The project not only contributed to the hackathon's objectives but also provided an 
              opportunity to network with other women in technology, learn from experienced mentors, 
              and gain hands-on experience with rapid prototyping and team-based development.
            </p>
          </div>

          {/* Future Development Section */}
          <div className="faire-future-development">
            <h3>Future Development</h3>
            <p>
              The hackathon served as a starting point for Faire, with potential for further development 
              and refinement. The collaborative nature of the project and the innovative approach taken 
              during the hackathon provide a strong foundation for continued work on this solution.
            </p>
            <p>
              Future iterations could include enhanced functionality, expanded user base, and integration 
              with additional technologies to further the project's impact and reach.
            </p>
          </div>

          {/* Team and Collaboration Section */}
          <div className="faire-team-collaboration">
            <h3>Team and Collaboration</h3>
            <p>
              This project was developed as part of a collaborative team effort during the hackathon. 
              The diverse backgrounds and skill sets of team members contributed to the project's success, 
              demonstrating the value of inclusive and collaborative development practices.
            </p>
            <p>
              The experience highlighted the importance of effective communication, shared vision, and 
              mutual support in achieving project goals within the constraints of a hackathon environment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faire;

