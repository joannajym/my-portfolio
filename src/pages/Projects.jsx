import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import './Projects.css';

// Sample project data
const projects = [
  {
    title: "Diner Finder",
    description: "A dynamic programming-based optimisation for fast food site placement.",
    tags: ["Python", "JavaScript", "ReactJS"],
    year: "2023",
    id: "diner-finder"
  },
  {
    title: "HPC Select",
    description: "A dynamic programming-based optimisation for post-pandemic HPC facility placement.",
    tags: ["Python", "JavaScript", "ReactJS"],
    year: "2023",
    id: "hpc-select"
  },
  {
    title: "Schrödinger's Hunt",
    description: "A simulation exploring how quantum-inspired predator behaviour alters predator-prey ecosystem dynamics.",
    tags: ["Python", "Jupyter", "NumPy", "Matplotlib", "SciPy"],
    year: "2024",
    id: "schrodingers-hunt"
  },
  {
    title: "The Weathered Game of Oz",
    description: "A simulation exploring resource management and environmental adaptation in a dynamic ecosystem.",
    tags: ["Python", "Jupyter", "NumPy", "Matplotlib"],
    year: "2024",
    id: "weathered-game-of-oz"
  },
  {
    title: "COVID-19 Prosocial Behaviour Analysis",
    description: "A data analysis project in R examining behavioural trends related to COVID-19 using statistical and visual methods.",
    tags: ["R", "Statistical Modelling", "Data Visualisation"],
    year: "2024",
    id: "covid-prosocial-behaviour"
  },
  {
    title: "Phishing Website Classification",
    description: "A machine learning-based R project to classify phishing websites using multiple surpervised learning models and evaluate their performance.",
    tags: ["R", "Machine Learning", "Decision Trees", "Random Forest", "SVM", "Naive Bayes"],
    year: "2024",
    id: "phishing-website-classification"
  },
  {
    title: "NLP and Network Analysis",
    description: "An NLP and network analysis project using R to cluster blog articles and visualise term-document relationships through graphs and corpus modeling.",
    tags: ["R", "NLP", "Network Analysis", "Text Mining", "Hierarchical Clustering", "Document-Term Matrix"],
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
    title: "Faire",
    description: "A hackathon project designed to make digital learning more accessible for students with dyslexia.",
    tags: ["HTML", "CSS", "JavaScript", "NextJS", "ReactJS"],
    year: "2025",
    id: "faire"
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
    year: "2023",
    id: "business-case-enterprise-systems"
  }
];

const Projects = () => {
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

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
    } else if (project.id === "faire") {
      navigate('/faire');
    } else if (project.id === "business-case-enterprise-systems") {
      navigate('/business-case-enterprise-systems');
    } else {
      // For other projects, you can add more functionality later
      console.log("Clicked on project:", project.title);
    }
  };

  // Animation setup for title and subtitle
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

    const subtitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSubtitleVisible(true);
          subtitleObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (subtitleRef.current) {
      subtitleObserver.observe(subtitleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (subtitleRef.current) {
        subtitleObserver.unobserve(subtitleRef.current);
      }
    };
  }, []);

  // Animation setup for project cards using IntersectionObserver
  useEffect(() => {
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    
    if (!projectCards) return;

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCards((prev) => new Set([...prev, index]));
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    projectCards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      projectCards.forEach((card) => {
        cardObserver.unobserve(card);
      });
    };
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

  // Helper function to get animation class based on grid position
  const getAnimationClass = (index) => {
    // Get grid container
    const gridContainer = projectsRef.current?.querySelector('.projects-grid');
    if (!gridContainer) return 'slide-from-bottom';

    // Get the computed grid column count
    const gridComputedStyle = window.getComputedStyle(gridContainer);
    const gridColumnCount = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;

    // Determine which column the card is in (0-indexed)
    const columnIndex = index % gridColumnCount;

    if (columnIndex === 0) {
      return 'slide-from-left';
    } else if (columnIndex === gridColumnCount - 1) {
      return 'slide-from-right';
    } else {
      return 'slide-from-bottom';
    }
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="section-header">
        <h2 
          ref={titleRef}
          className={`section-title ${isTitleVisible ? 'animate' : ''}`}
        >
          Projects
        </h2>
        <p 
          ref={subtitleRef}
          className={`section-subtitle ${isSubtitleVisible ? 'animate' : ''}`}
        >
          An archive collection of my university projects
        </p>
        
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
            data-index={index}
            className={`project-card ${visibleCards.has(index) ? getAnimationClass(index) : ''}`}
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