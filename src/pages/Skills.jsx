import React, { useRef, useState, useEffect } from 'react';
import './Skills.css';
import pythonIcon from '../assets/skills-icons/python-icon.png';
import javaIcon from '../assets/skills-icons/java-icon.png';
import javascriptIcon from '../assets/skills-icons/javascript-icon.png';
import html5Icon from '../assets/skills-icons/html5-icon.png';
import css3Icon from '../assets/skills-icons/css3-icon.png';
import rProjectIcon from '../assets/skills-icons/r-project-icon.png';
import numpyIcon from '../assets/skills-icons/numpy-icon.png';
import pandasIcon from '../assets/skills-icons/pandas-icon.png';
import powerBiIcon from '../assets/skills-icons/power-bi-icon.png';
import tableauIcon from '../assets/skills-icons/tableau-icon.png';
import reactIcon from '../assets/skills-icons/react-icon.png';
import nodejsIcon from '../assets/skills-icons/nodejs-icon.png';
import mongodbIcon from '../assets/skills-icons/mongodb-icon.png';
import sqlIcon from '../assets/skills-icons/sql-icon.png';
import microsoftAccessIcon from '../assets/skills-icons/microsoft-access-icon.png';
import microsoftExcelIcon from '../assets/skills-icons/microsoft-excel-icon.png';
import gitIcon from '../assets/skills-icons/git-icon.png';
import linuxIcon from '../assets/skills-icons/linux-icon.png';
import sapIcon from '../assets/skills-icons/sap-icon.png';
import vegaLiteIcon from '../assets/skills-icons/vega-lite-icon.png';
import figmaIcon from '../assets/skills-icons/figma-icon.png';
import nextjsIcon from '../assets/skills-icons/nextjs-icon.png';

const Skills = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState(new Set());

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

  // Animation setup for category titles and skill cards
  useEffect(() => {
    const categoryTitles = document.querySelectorAll('.category-title');
    const skillCards = document.querySelectorAll('.skill-item');

    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.categoryIndex, 10);
            setVisibleCategories((prev) => new Set([...prev, index]));
            categoryObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.cardIndex;
            setVisibleCards((prev) => new Set([...prev, index]));
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    categoryTitles.forEach((title) => {
      categoryObserver.observe(title);
    });

    skillCards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      categoryTitles.forEach((title) => {
        categoryObserver.unobserve(title);
      });
      skillCards.forEach((card) => {
        cardObserver.unobserve(card);
      });
    };
  }, []);

  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'R', icon: rProjectIcon }
      ]
    },
    {
      name: 'Data Science',
      skills: [
        { name: 'NumPy', icon: numpyIcon },
        { name: 'Pandas', icon: pandasIcon },
        { name: 'Power BI', icon: powerBiIcon },
        { name: 'Tableau', icon: tableauIcon },
        { name: 'Vega-lite', icon: vegaLiteIcon },
        { name: 'Microsoft Excel', icon: microsoftExcelIcon }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'ReactJS', icon: reactIcon },
        { name: 'NodeJS', icon: nodejsIcon },
        { name: 'NextJS', icon: nextjsIcon },
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'HTML5', icon: html5Icon },
        { name: 'CSS3', icon: css3Icon },
        { name: 'Figma', icon: figmaIcon }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL (Oracle)', icon: sqlIcon },
        { name: 'Microsoft Access', icon: microsoftAccessIcon }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: gitIcon },
        { name: 'Linux', icon: linuxIcon },
        { name: 'SAP S/4 HANA', icon: sapIcon }
      ]
    }
  ];


  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 
          ref={titleRef}
          className={`skills-section-title ${isTitleVisible ? 'animate' : ''}`}
        >
          Skills
        </h2>
        <p 
          ref={subtitleRef}
          className={`skills-section-subtitle ${isSubtitleVisible ? 'animate' : ''}`}
        >
          Technology stacks I work with
        </p>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-group">
              <h3 
                className={`category-title ${visibleCategories.has(categoryIndex) ? 'slide-from-left' : ''}`}
                data-category-index={categoryIndex}
              >
                {category.name}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const cardIndex = `${categoryIndex}-${skillIndex}`;
                  return (
                    <div 
                      key={skillIndex} 
                      className={`skill-item ${visibleCards.has(cardIndex) ? 'slide-from-top' : ''}`}
                      data-card-index={cardIndex}
                    >
                      <div className="skill-icon-container">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="skill-icon-img"
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;