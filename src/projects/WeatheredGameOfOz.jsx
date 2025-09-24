import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeatheredGameOfOz.css';

const WeatheredGameOfOz = () => {
  const navigate = useNavigate();
  
  return (
    <div className="weathered-game-page">
      <div className="weathered-game-header">
        <button 
          onClick={() => navigate('/')}
          className="weathered-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="weathered-game-title">The Weathered Game of Oz</h1>
        <p className="weathered-game-subtitle">A strategic board game simulation exploring resource management and environmental adaptation in a dynamic ecosystem.</p>
      </div>
      
      <div className="weathered-game-content">
        <div className="weathered-container">
          <div className="weathered-project-overview">
            <h3>Project Overview</h3>
            <p>
              <i>The Weathered Game of Oz</i> is a simulation that extends the classic <strong>"Land of Oz" Markov chain weather model</strong>. The original model
              simulates weather patterns (Sunny, Rainy, Snowy) using fixed transition probabilities. This project introduces the impacts
              of <strong>urbanisation</strong> and <strong>deforestation</strong> on weather variability and regional socio-economic outcomes. 
            </p><br></br>
            <p>
              The simulation uses a transition matrix influenced by human activity and integrates <strong>Gillespie Algorithms</strong>, <strong>Monte Carlo Simulations</strong>, 
              and <strong>Game Theory</strong> to explore: (1) how human development alters weather over time, and (2) how different regions adapt to these changes via strategic
              decision-making. Key outcomes include weather pattern evolution, agriculture and trade analysis, and migration policy strategies using Nash equilibrium.
            </p>
          </div>
          
          <div className="weathered-solution-approach">
            <h3>Modelling Questions</h3>
            <p>
              The project was designed to answer two central research questions:
            </p>
            <p>
              1. How do human activities like urbanisation and deforestation influence weather patterns in the Land of Oz over time?
            </p>
            <p>
              2. How do these changing weather patterns affect the socio-economic status?
            </p>
          </div>
          
          <div className="weathered-technical-details">
            <h3>Key Techniques Showcased</h3>
            <div className="techniques-content">
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
          </div>

          <div className="weathered-implementation-details">
            <h3>Model Extension</h3>
            <div className="implementation-content">
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
          </div>

          <div className="weathered-key-findings">
            <h3>Key Findings</h3>
            <div className="findings-content">
              <div className="findings-subsection">
                <h4>1. Weather Simulation</h4>
                <ul>
                  <li>The Gillespie simulation visually demonstrated that urbanisation leads to prolonged sunny periods</li>
                  <li>Deforestation increases the frequency and unpredictability of rainy weather</li>
                </ul>
              </div>
              
              <div className="findings-subsection">
                <h4>2. Socio-Economic Analysis</h4>
                <ul>
                  <li>Monte Carlo results revealed that Agricultural Output and Trade Volume remained relatively stable under varying weather</li>
                  <li>Population Size showed high variability, indicating that migration is a primary response to environmental stress</li>
                </ul>
              </div>
              
              <div className="findings-subsection">
                <h4>3. Strategic Analysis</h4>
                <ul>
                  <li>Game theory analysis found that the Nash Equilibrium strategy for all regions was to "Manage Migration"</li>
                  <li>This aligns with the Monte Carlo results, highlighting migration management as the most critical and universally beneficial policy for maintaining socio-economic stability in the face of changing weather patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="weathered-conclusion">
            <h3>Conclusion</h3>
            <p>
              Working on this project really opened my eyes to how interconnected our world is. What started as a simple extension of the classic weather model turned into something much more complex. I discovered that when we change the environment through urbanisation and deforestation, we're not just affecting the weather, we're completely changing how regions need to think about survival and cooperation.
            </p>
            <p>
              The most surprising result was that <strong>migration management</strong> kept coming up as the best strategy for everyone. I ran thousands of simulations using Monte Carlo methods, and every time, the game theory analysis showed that managing population movement was more important than trying to optimise agriculture or trade. It makes sense when you think about it. If the weather becomes unpredictable, people need to be able to move to where conditions are better, rather than being stuck in one place.
            </p>
            <p>
              This project made me realize how relevant these concepts are to real-world challenges like climate change and urban planning. The findings suggest that instead of focusing on rigid policies, we should be building flexible systems that can adapt as conditions change. It's fascinating how a simple weather simulation can reveal insights about human behavior and policy-making that could actually help communities become more resilient in the face of environmental uncertainty.
            </p>
          </div>

          <div className="weathered-documentation-section">
            <h3>Project Documentation</h3>
            <p>Explore the complete project documentation and detailed analysis:</p>
            <div className="pdf-container">
              <iframe 
                src="/Weathered Game of Oz.pdf"
                width="100%"
                height="800px"
                title="Weathered Game of Oz Documentation"
                className="pdf-iframe"
              />
            </div>
            <div className="source-code-section">
              <h4>Source Code</h4>
              <div className="source-code-container">
                <iframe 
                  src="/The Weathered Game of Oz Source Code.html"
                  width="100%"
                  height="600px"
                  title="Weathered Game of Oz Source Code"
                  className="source-code-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatheredGameOfOz;
