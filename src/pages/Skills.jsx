import React from 'react';
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
import vegaLiteIcon from '../assets/skills-icons/vega-lite-icon.png'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'HTML5', icon: html5Icon },
        { name: 'CSS3', icon: css3Icon },
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
        { name: 'Vega-lite', icon: vegaLiteIcon }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'ReactJS', icon: reactIcon },
        { name: 'NodeJS', icon: nodejsIcon },
        { name: 'MongoDB', icon: mongodbIcon }
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
        { name: 'Microsoft Excel', icon: microsoftExcelIcon },
        { name: 'SAP S/4 HANA', icon: sapIcon }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-section-title">Skills</h2>
        <p className="skills-section-subtitle">Technologies I work with</p>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-group">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-icon-container">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="skill-icon-img"
                      />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;