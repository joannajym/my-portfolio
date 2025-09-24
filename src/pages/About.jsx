import React from 'react';
import './About.css';
import profileImage from '../assets/profile-photo.jpg'; // Your profile photo

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-intro">
            <h1 className="profile-name">Joanna Moy</h1>
            <h2 className="profile-title">Computer Science Graduate</h2>
            <p className="profile-bio">
              A Computer Science graduate passionate about data science, data analysis, 
              and UI/UX design. I love transforming complex data into meaningful insights 
              and creating intuitive user experiences through web development.
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="profile-details">
          <div className="detail-card">
            <h3>Education</h3>
            <ul>
              <li>Bachelor of Computer Science - Monash University (2022-2024)</li>
              <li>Specialisation: Data Science</li>
              <li>Minor: Business Information Systems & Cybersecurity</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Skills Highlight</h3>
            <ul>
              <li>Data Science & Analysis (Python, R, statistical modeling)</li>
              <li>Data Visualization & Dashboard creation</li>
              <li>UI/UX Design & User Research</li>
              <li>Full-stack web development (React, Node, MongoDB)</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>Interests</h3>
            <ul>
              <li>Data Science & Machine Learning applications</li>
              <li>Interactive data visualization</li>
              <li>User Experience research and design</li>
              <li>Web development and digital solutions</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;