import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import portfolioLogo from '../assets/portfolio-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  useEffect(() => {
    // Only handle scroll-based navigation when on the main portfolio page
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sections, location.pathname]);

  // Don't render navbar on DinerFinder page
  if (location.pathname === '/diner-finder') {
    return null;
  }

  return (
    <nav className="navbar">
      <ScrollLink 
        to="home" 
        smooth={true} 
        duration={500} 
        className={`logo-link ${activeSection === 'home' ? 'active' : ''}`}
        spy={true}
        offset={-80}
        onSetActive={() => setActiveSection('home')}
      >
        <img 
          src={portfolioLogo} 
          alt="Home" 
          className="logo" 
          style={{ cursor: 'pointer' }}
        />
      </ScrollLink>

      <div className="nav-links">
        {['about', 'projects', 'skills', 'contact'].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            spy={true}
            offset={-80}
            onSetActive={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;