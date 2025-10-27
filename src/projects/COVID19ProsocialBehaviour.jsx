import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './COVID19ProsocialBehaviour.css';

const COVID19ProsocialBehaviour = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('methodology');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="covid-prosocial-page">
      <main className="covid-prosocial-content">
        <div className="covid-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="covid-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="covid-breadcrumb">
            <span className="covid-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="covid-breadcrumb-separator">{'>'}</span>
            <span className="covid-breadcrumb-current">COVID-19 Prosocial Behaviour Analysis</span>
          </div>
        </div>
        
        <h1 className="covid-prosocial-title">COVID-19 Prosocial Behaviour Analysis</h1>
        
        {/* Main Layout - Two Column */}
        <div className="covid-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="covid-project-overview">
            <p>
              This project was developed for my Data Analytics coursework and examined how social, psychological, and demographic factors influenced prosocial behaviours
              during the early stages of the COVID-19 pandemic. Using survey data from the <strong>PsyCorona</strong> baseline study (40,000 participants, 52 variables), the analysis 
              focused on identifying predictors of four key prosocial behaviours:
            </p>
            <ul>
              <li>Helping others affected by COVID-19</li>
              <li>Donating to support those in need</li>
              <li>Protecting vulnerable groups even at personal expense</li>
              <li>Making personal sacrifices to prevent virus transmission</li>
            </ul>
            <p>
              While the survey had a global scope, I conducted a focused analysis on <strong>Indonesia</strong> and compared findings with other countries and with a cluster of socioeconomically similar nations (Malaysia, Singapore, Thailand, Vietnam, and the Philippines).
            </p>
            
            <div className="covid-technologies">
              <h4>Technologies Used</h4>
              <div className="covid-tech-tags">
                <span className="covid-tech-tag">R</span>
                <span className="covid-tech-tag">Statistical Modelling</span>
                <span className="covid-tech-tag">Data Visualisation</span>
              </div>
            </div>
          </div>

          {/* Tabbed Container Section - Right Column */}
          <div className="covid-tabbed-section">
            <div className="covid-tab-container">
              <div className="covid-tab-headers">
                <button 
                  className={`covid-tab-header ${activeTab === 'methodology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                >
                  Methodology
                </button>
                <button 
                  className={`covid-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
                <button 
                  className={`covid-tab-header ${activeTab === 'outcomes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outcomes')}
                >
                  Project Outcomes
                </button>
              </div>
              
              <div className="covid-tab-content">
                {activeTab === 'methodology' && (
                  <div className="covid-tab-panel">
                    <div className="methodology-subsection">
                      <h4>1. Data Preparation & Descriptive Analysis</h4>
                      <ul>
                        <li>Worked with a 40,000-row dataset containing demographic, psychological, and behavioural attributes</li>
                        <li>Performed data cleaning, transformation, and handling of missing values</li>
                        <li>Produced descriptive statistics and visualisations (boxplots, histograms) to highlight patterns in:
                          <ul>
                            <li>Social contact</li>
                            <li>Loneliness</li>
                            <li>Life satisfaction</li>
                            <li>Boredom</li>
                            <li>Conspiracy beliefs</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>2. Regression Modelling</h4>
                      <ul>
                        <li>Built linear regression models in R to identify predictors of four prosocial behaviours:
                          <ul>
                            <li>Helping others suffering from COVID-19</li>
                            <li>Donating to those affected</li>
                            <li>Protecting vulnerable groups at personal cost</li>
                            <li>Making personal sacrifices to prevent the spread of the virus</li>
                          </ul>
                        </li>
                        <li>Compared predictive factors between Indonesia and the rest of the world</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>3. Comparative & Clustering Analysis</h4>
                      <ul>
                        <li>Analysed differences between:
                          <ul>
                            <li>Indonesia vs. other countries</li>
                            <li>Indonesia vs. a cluster of similar countries (Malaysia, Singapore, Thailand, Vietnam, Philippines)</li>
                          </ul>
                        </li>
                        <li>Used socioeconomic and health indicators for clustering with k-means:
                          <ul>
                            <li>GDP per capita</li>
                            <li>Population density</li>
                            <li>HDI (Human Development Index)</li>
                            <li>Political stability</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'findings' && (
                  <div className="covid-tab-panel">
                    <div className="insights-subsection">
                      <h4>1. Indonesia-Specific Findings</h4>
                      <ul>
                        <li><strong>Helping others (c19ProSo01):</strong> Driven by boredom, support for reporting suspected cases, and mandatory vaccination support, suggesting that both social restlessness and trust in collective health measures encouraged helping behaviours.</li>
                        <li><strong>Donations (c19ProSo02):</strong> Influenced by happiness, avoidance of crowded spaces, and support for public health actions, pointing to a positive mindset and community-oriented attitudes as drivers of financial generosity.</li>
                        <li><strong>Protecting vulnerable groups (c19ProSo03):</strong> Linked to in-person social contact, feelings of exclusion, and even conspiracy beliefs, indicating that both social responsibility and scepticism could motivate protective action.</li>
                        <li><strong>Personal sacrifices (c19ProSo04):</strong> Strongly tied to feelings of being left out, handwashing and quarantine behaviours, and reporting cases, showing that both social disconnection and commitment to personal hygiene measures translated into willingness to sacrifice.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>2. Cross-Country Comparisons</h4>
                      <ul>
                        <li>In other countries, demographic and digital factors were more influential:
                          <ul>
                            <li>Online contact with friends was a major driver of donations</li>
                            <li>Self-quarantine behaviours strongly predicted protecting vulnerable groups</li>
                            <li>Education and age were more consistently significant than in Indonesia</li>
                          </ul>
                        </li>
                        <li>This contrast highlighted how Indonesia's predictors were more community-based and experiential, while other nations leaned on digital connectedness and formal education as enablers of prosocial actions.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>3. Cluster Analysis (Indonesia, Malaysia, Singapore, Thailand, Vietnam, Philippines)</h4>
                      <ul>
                        <li>The cluster split into three groups:
                          <ul>
                            <li><strong>Indonesia, Vietnam, Philippines (red cluster):</strong> Lower GDP and HDI, moderate political stability. Predictors here aligned with community bonds and cultural collectivism.</li>
                            <li><strong>Malaysia, Thailand (blue cluster):</strong> Middle-ground socioeconomic indicators. Predictors reflected a blend of personal and digital engagement.</li>
                            <li><strong>Singapore (green cluster):</strong> High GDP, HDI, and political stability. Behaviours were strongly influenced by structural capacity and institutional trust.</li>
                          </ul>
                        </li>
                        <li>These results showed that socioeconomic context reshapes which factors matter most: lower-income clusters rely on cultural and community bonds, while higher-income contexts see digital access and systemic trust playing larger roles.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'outcomes' && (
                  <div className="covid-tab-panel">
                    <div className="outcomes-subsection">
                      <h4>1. Data Wrangling & Visualisation</h4>
                      <ul>
                        <li>Cleaned, structured, and visualised large-scale survey data in R using functions like summary(), boxplots, and histograms</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>2. Statistical Modelling</h4>
                      <ul>
                        <li>Built and interpreted linear regression models to uncover significant predictors of behaviours across different groups</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>3. Comparative & Clustering Analysis</h4>
                      <ul>
                        <li>Applied clustering techniques with external indicators to uncover meaningful regional similarities</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>4. Insight Generation</h4>
                      <ul>
                        <li>Translated quantitative results into actionable insights about how culture, digital engagement, and socioeconomic factors shape prosocial responses in crises</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section - Bottom of Page */}
        <div className="covid-prosocial-container">
          <div className="covid-prosocial-documentation-section">
            <h3>Project Documentation</h3>
            <p>Explore the complete project documentation and detailed analysis:</p>
            <div className="pdf-container">
              <iframe 
                src={`${process.env.PUBLIC_URL}/COVID-19%20Pro-social%20Behaviour%20Analysis.pdf`}
                width="100%"
                height="800px"
                title="COVID-19 Prosocial Behaviour Analysis Documentation"
                className="pdf-iframe"
              />
            </div>
            <a 
              href={`${process.env.PUBLIC_URL}/COVID-19%20Pro-social%20Behaviour%20Analysis.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="covid-document-link"
            >
              Open PDF in Full Screen →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default COVID19ProsocialBehaviour;
