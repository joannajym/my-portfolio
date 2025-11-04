import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NLPNetworkAnalysis.css';

const NLPNetworkAnalysis = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('methodology');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="nlp-network-page">
      <main className="nlp-network-content">
        <div className="nlp-network-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="nlp-network-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="nlp-network-breadcrumb">
            <span className="nlp-network-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="nlp-network-breadcrumb-separator">{'>'}</span>
            <span className="nlp-network-breadcrumb-current">NLP Network and Analysis</span>
          </div>
        </div>
        
        <h1 className="nlp-network-title">NLP and Network Analysis</h1>
        
        {/* Main Layout - Two Column */}
        <div className="nlp-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="nlp-project-overview">
            <p>
              This project was developed as part of my Data Analytics coursework to gain practical experience with <strong>Natural Language Processing (NLP)</strong> and <strong>network analysis</strong> using R. The aim was to build a corpus of diverse documents, preprocess the text, and explore relationships both 
              between documents and between the words themselves.
            </p>
            <p>
              For this analysis, I collected 15 blog articles across four topics: <strong>Food, Home, Lifestyle, and Travel</strong>. These documents were converted into machine-readable text and processed into a Document-Term Matrix (DTM) for further analysis.
            </p>
            
            <div className="nlp-technologies">
              <h4>Technologies Used</h4>
              <div className="nlp-tech-tags">
                <span className="nlp-tech-tag">R</span>
                <span className="nlp-tech-tag">NLP</span>
                <span className="nlp-tech-tag">Network Analysis</span>
                <span className="nlp-tech-tag">Text Mining</span>
                <span className="nlp-tech-tag">Hierarchical Clustering</span>
                <span className="nlp-tech-tag">Document-Term Matrix</span>
              </div>
            </div>
          </div>

          {/* Tabbed Container Section - Right Column */}
          <div className="nlp-tabbed-section">
            <div className="nlp-tab-container">
              <div className="nlp-tab-headers">
                <button 
                  className={`nlp-tab-header ${activeTab === 'methodology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                >
                  Methodology
                </button>
                <button 
                  className={`nlp-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
                <button 
                  className={`nlp-tab-header ${activeTab === 'outcomes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outcomes')}
                >
                  Project Outcomes
                </button>
              </div>
              
              <div className="nlp-tab-content">
                {activeTab === 'methodology' && (
                  <div className="nlp-tab-panel">
                    <div className="methodology-subsection">
                      <h4>1. Data Preparation & Preprocessing</h4>
                      <ul>
                        <li>Collected and converted <strong>15 blog posts</strong> into .txt files labeled by topic (Food, Home, Lifestyle, Travel).</li>
                        <li>Cleaned text using R (tm, SnowballC), including lowercased, removed stopwords, punctuation, and numbers, stripped whitespace, and stemmed words.</li>
                        <li>Constructed a <strong>Document-Term Matrix (DTM)</strong> and filtered sparse terms, yielding ~20 key tokens for analysis.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>2. Hierarchical Clustering</h4>
                      <ul>
                        <li>Computed <strong>consine similarity</strong> between documents and applied <strong>Ward.D2 linkage</strong> to build a dendrogram.</li>
                        <li>Compared clustering results to true topic labels and achieved <strong>26.67% accuracy (below the 33.33% baseline)</strong>, with <strong>kappa = 0.012</strong>, reflecting strong vocabulary overlap and limited dataset size rather than model error.</li>
                        <li>Results indicated that topic boundaries were blurred by shared terms across categories.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>3. Network Analysis</h4>
                      <ul>
                        <li><strong>Document Network:</strong> Built a graph of documents based on shared terms; <strong>Food02_CupofJo.txt</strong> and <strong>Travel05_MelbourneGirl.txt</strong> emerged as central hubs with broad thematic overlap.</li>
                        <li><strong>Token Netwrok:</strong> Created a co-occurence graph of terms; frequent tokens such as <i>make, take,</i> and <i>one</i> appeared as highly connected nodes.</li>
                        <li><strong>Bipartite Network:</strong> Formed a two-mode network linking documents and tokens, revealing clusters of documents tied together by shared vocabulary.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>4. Evaluation of Techniques</h4>
                      <ul>
                        <li>Clustering provided a <strong>broad thematic overview</strong> but lacked fine-grained category separation.</li>
                        <li>Network analysis delivered <strong>deeper structural insights</strong>, identifying central documents and terms more effectively.</li>
                        <li>Recommended enhancements: <strong>TF-IDF weighting, Named Entity Recognition (NER), and Topic Modelling (LDA)</strong> for stronger document discrimination.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'findings' && (
                  <div className="nlp-tab-panel">
                    <div className="insights-subsection">
                      <h4>1. Clustering Analysis</h4>
                      <ul>
                        <li>The hierarchical clustering produced a dendrogram, but the <strong>accuracy was 26.67%</strong>, which was lower than the <strong>no-information rate (33.33%).</strong></li>
                        <li>The <strong>kappa statistic was nearly zero (0.012)</strong>, showing almost no agreement between predicted and true categories.</li>
                        <li><strong>By category:</strong>
                          <ul>
                            <li>Food articles had moderate recognition (33.3% sensitivity, 100% specificity).</li>
                            <li>Home articles had slightly better performance (50% sensitivity, 69% specificity).</li>
                            <li>Lifestyle and Travel articles had poor detection (20% sensitivity).</li>
                          </ul>
                        </li>
                        <li>This showed that the model struggled because different topics shared <strong>overlapping vocabulary</strong> (e.g., travel blogs discussing food, lifestyle posts referencing home design).</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>2. Document Network</h4>
                      <ul>
                        <li>Central nodes in the network, such as <i>Food02_CupofJo.txt</i> and <i>Travel05_MelbourneGirl.txt</i>, connected widely across the graph.</li>
                        <li>These documents acted as hubs because they contained terms common to multiple themes (e.g., <i>eat, make, one</i>).</li>
                        <li>The visualisation showed <strong>clusters of thematically similar documents</strong> forming naturally, even when clustering algorithms underperformed.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>3. Token Network</h4>
                      <ul>
                        <li>Frequent connector words (<i>make, take, one</i>) occupied the <strong>central positions</strong> within the token co-occurence network.</li>
                        <li>Strong <strong>token-to-token relationships</strong> (visualised with thicker blue edges) revealed pairs of words that consistently appeared together in multiple documents, showing recurring phrases/themes in lifestyle and travel writing.</li>
                        <li>However, these high-frequency generic words <strong>reduced discriminatory power</strong>, which is why <strong>TF-IDF weighting</strong> or <strong>topic modelling (LDA)</strong> was suggested as an improvement.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>4. Bipartite Document–Token Network</h4>
                      <ul>
                        <li>The <strong>bipartite (two-mode) network</strong> clearly showed documents grouped around shared tokens, making sub-communities more apparent than in clustering.</li>
                        <li>Central tokens (<i>take, make,</i> and <i>one</i>) linked across multiple categories, while more specific terms (<i>coffee</i> or <i>paint</i>) highlighted topic-specific clusters (Food and Home respectively).</li>
                        <li>This reinforced that <strong>inter-topic connections</strong> and <strong>topic-specific language</strong> provided a richer, more interpretable structure than raw clustering.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>5. Comparing Clustering vs. Network Analysis</h4>
                      <ul>
                        <li>Clustering gave a <strong>rough thematic grouping</strong> but was too rigid, misclassifying many documents.</li>
                        <li><strong>Network analysis</strong> was more flexible, revealing nuanced relationships:
                          <ul>
                            <li>Which words <strong>connected different categories</strong>,</li>
                            <li>Which documents <strong>acted as bridges across themes</strong>, and</li>
                            <li>Which tokens <strong>dominated within-topic vs. across-topic use.</strong></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'outcomes' && (
                  <div className="nlp-tab-panel">
                    <div className="outcomes-subsection">
                      <h4>1. Text Preprocessing & NLP</h4>
                      <ul>
                        <li>Cleaned and standardised raw text using data using R (tm, SnowballC), applying tokenisation, stopword removal, and stemming for consistent analysis.</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>2. Statistical & Network Analysis</h4>
                      <ul>
                        <li>Built and interpreted <strong>hierarchical clustering, document networks, token networks</strong> and <strong>bipartite networks</strong> to explore relationships in text data.</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>3. Insight Generation</h4>
                      <ul>
                        <li>Compared <strong>clustering vs. network methods</strong>, identifying each approach's strengths, limitations, and areas for improvement (e.g. TF-IDF, LDA, NER).</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>4. Visualisation</h4>
                      <ul>
                        <li>Enhanced <strong>network visualisations</strong> with node sizing, colour gradients, and weighted edges to emphasise key connections and thematic clusters.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section - Bottom of Page */}
        <div className="nlp-network-container">
          <div className="nlp-network-documentation-section">
            <h3>Project Documentation</h3>
            <p>Explore the complete project documentation and detailed analysis:</p>
            <div className="pdf-container">
              <iframe 
                src={`${process.env.PUBLIC_URL}/NLP%20Network%20Analysis.pdf`}
                width="100%"
                height="800px"
                title="NLP and Network Analysis Documentation"
                className="pdf-iframe"
              />
            </div>
            <a 
              href={`${process.env.PUBLIC_URL}/NLP%20Network%20Analysis.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="nlp-document-link"
            >
              Open PDF in Full Screen →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NLPNetworkAnalysis;
