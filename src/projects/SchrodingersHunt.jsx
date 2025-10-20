import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchrodingersHunt.css';
import lotkaVolterraFormula from '../assets/lotka-volterra-formula.png';

const SchrodingersHunt = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('model');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="schrodingers-hunt-page">
      <main className="schrodingers-hunt-content">
        <div className="schrodingers-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="schrodingers-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="schrodingers-breadcrumb">
            <span className="schrodingers-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="schrodingers-breadcrumb-separator">{'>'}</span>
            <span className="schrodingers-breadcrumb-current">Schrödinger's Hunt</span>
          </div>
        </div>
        
        <h1 className="schrodingers-hunt-title">Schrödinger's Hunt</h1>
        
        {/* Main Layout - Two Column */}
        <div className="schrodingers-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="schrodingers-project-overview">
            <p>
              <i>Schrödinger's Hunt</i> is a simulation-based study that investigates how quantum-inspired predator behaviour alters predator-prey ecosystem
                dynamics and was based on the materials taught in my Computational Modelling and Simulations class. Built from the foundation of the <strong>Lotka-Volterra 
                predator-prey model</strong>, this project introduces a novel extension where predator hunting efficiency is influenced by principles of quantum mechanics,
                such as superposition and probabilistic state transitions.
            </p>
            <p>
              The central research question was:
            </p>
            <p>
              <strong>"How would predator-prey interactions change if predator behaviours were influenced by quantum mechanics principles?"</strong>
            </p>
            
            <div className="schrodingers-technologies">
              <h4>Technologies Used</h4>
              <div className="schrodingers-tech-tags">
                <span className="schrodingers-tech-tag">Python</span>
                <span className="schrodingers-tech-tag">Jupyter</span>
              </div>
            </div>
          </div>

          {/* Tabbed Container Section - Right Column */}
          <div className="schrodingers-tabbed-section">
            <div className="schrodingers-tab-container">
              <div className="schrodingers-tab-headers">
                <button 
                  className={`schrodingers-tab-header ${activeTab === 'model' ? 'active' : ''}`}
                  onClick={() => setActiveTab('model')}
                >
                  Model Extension
                </button>
                <button 
                  className={`schrodingers-tab-header ${activeTab === 'assumptions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('assumptions')}
                >
                  Assumptions
                </button>
                <button 
                  className={`schrodingers-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
              </div>
              
              <div className="schrodingers-tab-content">
                {activeTab === 'model' && (
                  <div className="schrodingers-tab-panel">
                    <p>
                      In the classical Lotka-Volterra model, prey <i><strong>H</strong></i> grows at a natural rate and is reduced through predation, while predator <i><strong>P</strong></i> survival
                      depends on consuming prey. In <i>Schrödinger's Hunt</i>, this interaction is modified by a quantum factor <i><strong>Q(t)</strong></i> which dynamically 
                      alters predation success rates.
                    </p>
                    <img 
                      src={lotkaVolterraFormula} 
                      alt="Lotka-Volterra Formula" 
                      className="formula-image"
                    />
                    <ul className="parameter-list">
                      <li><strong>r</strong>: prey intrinsic growth rate</li>
                      <li><strong>α</strong>: baseline predation rate</li>
                      <li><strong>b</strong>: predator conversion efficiency</li>
                      <li><strong>m</strong>: predator mortality rate</li>
                      <li><strong>Q(t)</strong>: time-varying quantum behavioral factor (e.g., oscillatory or probabilistic)</li>
                    </ul>
                    <p>
                      This formulation would allow predator efficiency to fluctuate non-deterministically, introducing uncertainty introduces
                      ecosystem stability.
                    </p>
                  </div>
                )}
                
                {activeTab === 'assumptions' && (
                  <div className="schrodingers-tab-panel">
                    <ul className="assumptions-list">
                      <li>Predator and prey are uniformly distributed in their environment.</li>
                      <li>Quantum principles can directly influence predator decision-making or huntin ability.</li>
                      <li>Environmental conditions remain constant.</li>
                      <li>Populations are internally homogeneous (no genetic/behavioural differences)</li>
                    </ul>
                  </div>
                )}
                
                {activeTab === 'findings' && (
                  <div className="schrodingers-tab-panel">
                    <div className="findings-content">
                      <div className="findings-subsection">
                        <h4>1. Quantum fluctuations destabalise dynamics</h4>
                        <ul>
                          <li>At low frequencies of Q(t), population cycles remain smooth and resemble classical oscillations</li>
                          <li>At higher frequencies, predator-prey interactions become chaotic, with sharper oscillations and instability</li>
                        </ul>
                      </div>
                      
                      <div className="findings-subsection">
                        <h4>2. Initial conditions matter</h4>
                        <ul>
                          <li>High prey populations buffer against extinction risk</li>
                          <li>Scenarios with many predators and few prey quickly collapse due to overconsumption, regardless of quantum efficiency</li>
                        </ul>
                      </div>
                      
                      <div className="findings-subsection">
                        <h4>3. Ecosystem resilience varies</h4>
                        <ul>
                          <li>Balanced starting populations allow quantum variability without destabilising the system</li>
                          <li>Imbalanced conditions amplify extinction risks</li>
                        </ul>
                      </div>
                      
                      <div className="findings-subsection">
                        <h4>4. Steady-state analysis</h4>
                        <ul>
                          <li>Quantum influence shifts classical nullclines and equilibrium points</li>
                          <li>Ecosystems under quantum-driven predator behaviour may not converge to fixed points but instead exhibit persistent oscillations or limit cycles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Jupyter Notebook Section - Bottom of Page */}
        <div className="schrodingers-container">
          <div className="schrodingers-notebook-section">
            <h3>Jupyter Notebook Analysis</h3>
            <p>Explore the complete analysis and code implementation:</p>
            <iframe 
              src={`${process.env.PUBLIC_URL}/Schr%C3%B6dinger's%20Hunt.html`}
              width="100%"
              height="800px"
              title="Schrodinger's Hunt Notebook"
              className="notebook-iframe"
            />
            <a 
              href={`${process.env.PUBLIC_URL}/Schr%C3%B6dinger's%20Hunt.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="schrodingers-notebook-link"
            >
              Open Notebook in Full Screen →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchrodingersHunt;
