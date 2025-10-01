import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SchrodingersHunt.css';
import lotkaVolterraFormula from '../assets/lotka-volterra-formula.png';

const SchrodingersHunt = () => {
  const navigate = useNavigate();
  
  return (
    <div className="schrodingers-hunt-page">
      <div className="schrodingers-hunt-header">
        <button 
          onClick={() => navigate('/')}
          className="schrodingers-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="schrodingers-hunt-title">Schrödinger's Hunt</h1>
        <p className="schrodingers-hunt-subtitle">A simulation exploring how quantum-inspired predator behavior alters predator-prey ecosystem dynamics.</p>
      </div>
      
      <div className="schrodingers-hunt-content">
        <div className="schrodingers-container">
          <div className="schrodingers-project-overview">
            <h3>Project Overview</h3>
            <p>
              <i>Schrödinger's Hunt</i> is a simulation-based study that investigates how quantum-inspired predator behaviour alters predator-prey ecosystem
                dynamics and was based on the materials taught in my Computational Modelling and Simulations class. Built from the foundation of the <strong>Lotka-Volterra 
                predator-prey model</strong>, this project introduces a novel extension where predator hunting efficiency is influenced by principles of quantum mechanics,
                such as superposition and probabilistic state transitions.
            </p><br></br>
            <p>
              The central research question was:
            </p>
            <p>
              <strong>"How would predator-prey interactions change if predator behaviours were influenced by quantum mechanics principles?"</strong>
            </p>
          </div>
          
          <div className="schrodingers-solution-approach">
            <h3>Model Extension</h3>
            <p>
              In the classical Lotka-Volterra model, prey <i><strong>H</strong></i> grows at a natural rate and is reduced through predation, while predator <i><strong>P</strong></i> survival
              depends on consuming prey. In <i>Schrödinger's Hunt</i>, this interaction is modified by a quantum factor <i><strong>Q(t)</strong></i> which dynamically 
              alters predation success rates.
            </p><br></br>
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
          
          <div className="schrodingers-technical-details">
            <h3>Assumptions</h3>
            <ul className="assumptions-list">
              <li>Predator and prey are uniformly distributed in their environment.</li>
              <li>Quantum principles can directly influence predator decision-making or huntin ability.</li>
              <li>Environmental conditions remain constant.</li>
              <li>Populations are internally homogeneous (no genetic/behavioural differences)</li>
            </ul>
          </div>

          <div className="schrodingers-key-findings">
             <h3>Key Findings</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchrodingersHunt;
