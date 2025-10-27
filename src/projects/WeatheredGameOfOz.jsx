import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WeatheredGameOfOz.css';

const WeatheredGameOfOz = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('questions');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="weathered-game-page">
      <main className="weathered-game-content">
        <div className="weathered-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="weathered-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="weathered-breadcrumb">
            <span className="weathered-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="weathered-breadcrumb-separator">{'>'}</span>
            <span className="weathered-breadcrumb-current">Weathered Game of Oz</span>
          </div>
        </div>
        
        <h1 className="weathered-game-title">The Weathered Game of Oz</h1>
        
        {/* Main Layout - Two Column */}
        <div className="weathered-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="weathered-project-overview">
            <p>
              <i>The Weathered Game of Oz</i> is a simulation that extends the classic <strong>"Land of Oz" Markov chain weather model</strong>. The original model
              simulates weather patterns (Sunny, Rainy, Snowy) using fixed transition probabilities. This project introduces the impacts
              of <strong>urbanisation</strong> and <strong>deforestation</strong> on weather variability and regional socio-economic outcomes.
            </p>
            <p>
              The simulation uses a transition matrix influenced by human activity and integrates <strong>Gillespie Algorithms</strong>, <strong>Monte Carlo Simulations</strong>, 
              and <strong>Game Theory</strong> to explore: (1) how human development alters weather over time, and (2) how different regions adapt to these changes via strategic
              decision-making. Key outcomes include weather pattern evolution, agriculture and trade analysis, and migration policy strategies using Nash equilibrium.
            </p>
            
            <div className="weathered-technologies">
              <h4>Technologies Used</h4>
              <div className="weathered-tech-tags">
                <span className="weathered-tech-tag">Python</span>
                <span className="weathered-tech-tag">Jupyter</span>
                <span className="weathered-tech-tag">NumPy</span>
                <span className="weathered-tech-tag">Matplotlib</span>
              </div>
            </div>
          </div>

          {/* Tabbed Container Section - Right Column */}
          <div className="weathered-tabbed-section">
            <div className="weathered-tab-container">
              <div className="weathered-tab-headers">
                <button 
                  className={`weathered-tab-header ${activeTab === 'questions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('questions')}
                >
                  Modelling Questions
                </button>
                <button 
                  className={`weathered-tab-header ${activeTab === 'model' ? 'active' : ''}`}
                  onClick={() => setActiveTab('model')}
                >
                  Model Extension
                </button>
                <button 
                  className={`weathered-tab-header ${activeTab === 'techniques' ? 'active' : ''}`}
                  onClick={() => setActiveTab('techniques')}
                >
                  Key Techniques Showcased
                </button>
                <button 
                  className={`weathered-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
              </div>
              
              <div className="weathered-tab-content">
                {activeTab === 'questions' && (
                  <div className="weathered-tab-panel">
                    <p>
                      The project was designed to answer two central research questions:
                    </p>
                    <div className="questions-subsection">
                      <h4>Question 1</h4>
                      <p>
                        How do human activities like urbanisation and deforestation influence weather patterns in the Land of Oz over time?
                      </p>
                    </div>
                    <div className="questions-subsection">
                      <h4>Question 2</h4>
                      <p>
                        How do these changing weather patterns affect the socio-economic status?
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'model' && (
                  <div className="weathered-tab-panel">
                    <div className="implementation-subsection">
                      <h4>1. Dynamic Transitions</h4>
                      <ul>
                        <li>Transition probabilities between weather states are no longer fixed</li>
                        <li>They become functions of urbanisation (U) and deforestation (D) levels:
                          <ul>
                            <li><strong>Urbanisation</strong> increases the probability of Sunny weather and decreases Snowy weather</li>
                            <li><strong>Deforestation</strong> increases the probability and variability of Rainy weather</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="implementation-subsection">
                      <h4>2. Socio-Economic Module</h4>
                      <ul>
                        <li>Weather sequences directly impact quantitative measures of Agricultural Output, Trade Volume, and Population Size</li>
                      </ul>
                    </div>
                    
                    <div className="implementation-subsection">
                      <h4>3. Strategic Interaction</h4>
                      <ul>
                        <li>Regions are modelled as rational actors in a game</li>
                        <li>Choosing strategies (e.g., Invest in Irrigation, Form Trade Alliances, Manage Migration) to maximise their payoff based on the predicted weather and actions of other regions</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'techniques' && (
                  <div className="weathered-tab-panel">
                    <div className="techniques-subsection">
                      <h4>1. Gillespie Algorithm</h4>
                      <ul>
                        <li>Used to simulate the stochastic interactions between human activities and weather transitions</li>
                        <li>Modelling how urbanisation and deforestation alter transition probabilities over time</li>
                      </ul>
                    </div>
                    
                    <div className="techniques-subsection">
                      <h4>2. Monte Carlo Simulation</h4>
                      <ul>
                        <li>Used to generate thousands of possible weather scenarios based on the modified model</li>
                        <li>Allowing for statistical analysis of their socio-economic consequences</li>
                      </ul>
                    </div>
                    
                    <div className="techniques-subsection">
                      <h4>3. Game Theory</h4>
                      <ul>
                        <li>Applied to model the strategic decision-making of three different regions as they compete or cooperate in response to environmental changes</li>
                        <li>Determining optimal strategies for resource allocation, trade, and migration management</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'findings' && (
                  <div className="weathered-tab-panel">
                    <div className="findings-subsection">
                      <h4>1. Weather Simulation</h4>
                      <ul>
                        <li>The Gillespie simulation demonstrated that <strong>increased urbanisation raises the probability of Sunny weather states</strong> by amplifying local heat retention and reducing albedo effects.</li>
                        <li>Conversely, <strong>deforestation increased both the frequency and volatility of Rainy weather</strong> due to disrupted hydrological cycles and reduced canopy cover.</li>
                        <li>These findings highlight how human-driven environmental changes can alter natural weather transitions within the Markov framework of the Land of Oz model.</li>
                      </ul>
                    </div>
                    
                    <div className="findings-subsection">
                      <h4>2. Socio-Economic Analysis</h4>
                      <ul>
                        <li>The Monte Carlo simulations revealed that <strong>agricultural output and trade volume remained stable</strong> across varying weather conditions, suggesting adaptive economic resilience.</li>
                        <li>However, <strong>population size displayed significant variability</strong>, indicating that migration serves as the dominant socio-economic response to environmental stressors.</li>
                        <li>These results imply that while economic systems can stabilise under changing climates, demographic shifts are more reactive and volatile.</li>
                      </ul>
                    </div>
                    
                    <div className="findings-subsection">
                      <h4>3. Strategic Analysis</h4>
                      <ul>
                        <li>Game theory analysis identified <strong>"Manage Migration"</strong> as the Nash Equilibrium strategy for all regions.</li>
                        <li>This strategy yielded the highest collective payoff by stabilising population fluctuations and mitigating socio-economic risks caused by weather variability.</li>
                        <li>The result underscores the systemic importance of migration management as a universal and optimal policy in dynamic environmental conditions.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section - Bottom of Page */}
        <div className="weathered-container">

          <div className="weathered-documentation-section">
            <h3>Project Documentation</h3>
            <p>Explore the complete project documentation and detailed analysis:</p>
            <div className="pdf-container">
              <iframe 
                src={`${process.env.PUBLIC_URL}/Weathered%20Game%20of%20Oz.pdf`}
                width="100%"
                height="800px"
                title="Weathered Game of Oz Documentation"
                className="pdf-iframe"
              />
            </div>
            <a 
              href={`${process.env.PUBLIC_URL}/Weathered%20Game%20of%20Oz.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="weathered-document-link"
            >
              Open PDF in Full Screen →
            </a>
            <div className="source-code-section">
              <h4>Source Code</h4>
              <div className="source-code-container">
                <iframe 
                  src={`${process.env.PUBLIC_URL}/The%20Weathered%20Game%20of%20Oz%20Source%20Code.html`}
                  width="100%"
                  height="600px"
                  title="Weathered Game of Oz Source Code"
                  className="source-code-iframe"
                />
              </div>
              <a 
                href={`${process.env.PUBLIC_URL}/The%20Weathered%20Game%20of%20Oz%20Source%20Code.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="weathered-document-link"
              >
                Open Notebook in Full Screen →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatheredGameOfOz;
