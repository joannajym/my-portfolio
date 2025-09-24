import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { FiFilter } from 'react-icons/fi';
import './Projects.css';

// Sample project data
const projects = [
  {
    title: "Diner Finder",
    description: "A dynamic programming-based optimisation for fast food site placement.",
    tags: ["Python"],
    year: "2023",
    id: "diner-finder"
  },
  {
    title: "HPC Select",
    description: "A dynamic programming-based optimisation for post-pandemic HPC facility placement.",
    tags: ["Python"],
    year: "2023",
    id: "hpc-select"
  },
  {
    title: "Schrödinger's Hunt",
    description: "A simulation exploring how quantum-inspired predator behaviour alters predator-prey ecosystem dynamics.",
    tags: ["Python", "Jupyter"],
    year: "2024",
    id: "schrodingers-hunt"
  },
  {
    title: "The Weathered Game of Oz",
    description: "A strategic board game simulation exploring resource management and environmental adaptation in a dynamic ecosystem.",
    tags: ["Python", "Jupyter"],
    year: "2024",
    id: "weathered-game-of-oz"
  },
  {
    title: "COVID-19 Prosocial Behaviour Analysis",
    description: "A data analysis project in R examining behavioural trends related to COVID-19 using statistical and visual methods.",
    tags: ["R"],
    year: "2024",
    id: "covid-prosocial-behaviour"
  },
  {
    title: "Phishing Website Classification",
    description: "A machine learning-based R project to classify phishing websites using multiple surpervised learning models and evaluate their performance.",
    tags: ["R"],
    year: "2024",
    id: "phishing-website-classification"
  },
  {
    title: "NLP and Network Analysis",
    description: "An NLP and network analysis project using R to cluster blog articles and visualise term-document relationships through graphs and corpus modeling.",
    tags: ["R"],
    year: "2024",
    id: "nlp-network-analysis"
  },
  {
    title: "Visualising Melbourne's Public Transportation",
    description: "A comprehensive Tableau dashboard analysing transportation trends across Victoria.",
    tags: ["Tableau"],
    year: "2024"
  },
  {
    title: "Visualising the Australian Bushfires",
    description: "A visual exploration of the 2019–2020 Australian bushfires using geospatial intensity mapping.",
    tags: ["Vega-lite", "HTML", "CSS"],
    year: "2024"
  },
  {
    title: "Castly",
    description: "A full-stacked web application enabling secure, transparent digital elections for university clubs.",
    tags: ["ReactJS", "NodeJS", "JavaScript", "MongoDB", "ChartJS", "HTML", "CSS", "Figma"],
    year: "2024"
  },
  {
    title: "Quick Invoice",
    description: "A mobile solution for fast and efficient invoice creation on Android devices.",
    tags: ["Java", "Android Studio"],
    year: "2023"
  },
  {
    title: "GradCoord",
    description: "A streamlined scheduling solution for university graduate research teams.",
    tags: ["Figma"],
    year: "2023"
  },
  {
    title: "EcoWise",
    description: "A smart home management and energy monitoring platform.",
    tags: ["Figma"],
    year: "2023"
  },
  {
    title: "Business Case for Implementing Enterprise Systems",
    description: "A strategic ERP business case evaluating system options, costs, and implementation plans for enterprise-wide digital transformation.",
    tags: ["ERP"],
    year: "2023"
  }
];

const Projects = () => {
  const projectsRef = useRef(null);
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Get unique filters
  const years = [...new Set(projects.map(p => p.year))].sort();
  const languages = [...new Set(projects.flatMap(p => p.tags))].sort();

  // Filter logic
  const filteredProjects = projects.filter(project => {
    const yearMatch = selectedYears.length === 0 || selectedYears.includes(project.year);
    const langMatch = selectedLanguages.length === 0 || 
                     project.tags.some(tag => selectedLanguages.includes(tag));
    return yearMatch && langMatch;
  });

  // Handle project click
  const handleProjectClick = (project) => {
    if (project.id === "diner-finder") {
      navigate('/diner-finder');
    } else if (project.id === "hpc-select") {
      navigate('/hpc-select');
    } else if (project.id === "schrodingers-hunt") {
      navigate('/schrodingers-hunt');
    } else if (project.id === "weathered-game-of-oz") {
      navigate('/weathered-game-of-oz');
    } else if (project.id === "covid-prosocial-behaviour") {
      navigate('/covid-prosocial-behaviour');
    } else if (project.id === "nlp-network-analysis") {
      navigate('/nlp-network-analysis');
    } else if (project.id === "phishing-website-classification") {
      navigate('/phishing-website-classification');
    } else {
      // For other projects, you can add more functionality later
      console.log("Clicked on project:", project.title);
    }
  };

  // Animation setup
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    
    projectCards?.forEach(card => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, [filteredProjects]);

  const toggleFilter = (type, value) => {
    if (type === 'year') {
      setSelectedYears(prev =>
        prev.includes(value) 
          ? prev.filter(y => y !== value) 
          : [...prev, value]
      );
    } else {
      setSelectedLanguages(prev =>
        prev.includes(value)
          ? prev.filter(l => l !== value)
          : [...prev, value]
      );
    }
  };

  const clearFilters = () => {
    setSelectedYears([]);
    setSelectedLanguages([]);
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">An archive collection of my university projects</p>
        
        {/* Filter Button */}
        <div className="filter-wrapper">
          <button 
            className={`filter-toggle ${(selectedYears.length > 0 || selectedLanguages.length > 0) ? 'active' : ''}`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter className="filter-icon" />
            <span>Filter by</span>
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="filter-dropdown">
              <div className="filter-section">
                <h4>Year</h4>
                {years.map(year => (
                  <label key={year} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedYears.includes(year)}
                      onChange={() => toggleFilter('year', year)}
                    />
                    {year}
                  </label>
                ))}
              </div>

              <div className="filter-section">
                <h4>Programming Language</h4>
                {languages.map(lang => (
                  <label key={lang} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(lang)}
                      onChange={() => toggleFilter('language', lang)}
                    />
                    {lang}
                  </label>
                ))}
              </div>

              {(selectedYears.length > 0 || selectedLanguages.length > 0) && (
                <button className="clear-filters" onClick={clearFilters}>
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => handleProjectClick(project)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-header">
              <span className="project-year">{project.year}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;