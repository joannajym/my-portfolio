import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NLPNetworkAnalysis.css';

const NLPNetworkAnalysis = () => {
  const navigate = useNavigate();
  
  return (
    <div className="nlp-network-page">
      <div className="nlp-network-header">
        <button 
          onClick={() => {
            navigate('/', { state: { scrollTo: 'projects' } });
          }}
          className="nlp-network-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="nlp-network-title">NLP and Network Analysis</h1>
        <p className="nlp-network-subtitle">A natural language processing and network study of blogs on food, home, lifestyle, and travel</p>
      </div>
      
      <div className="nlp-network-content">
        <div className="nlp-network-container">
          <div className="nlp-network-project-overview">
            <h3>Project Overview</h3>
            <p>
              This project was developed as part of my Data Analytics coursework to gain practical experience with <strong>Natural Language Processing (NLP)</strong> and 
              <strong>network</strong> analysis using R. The aim was to build a corpus of diverse documents, preprocess the text, and explore relationships both 
              between documents and between the words themselves.
            </p><br></br>
            <p>
              For this analysis, I collected 15 blog articles across four topics: <strong>Food, Home, Lifestyle, and Travel</strong>. These documents were converted into machine-readable text and processed into a Document-Term Matrix (DTM) for further analysis.
            </p>
          </div>
          
          <div className="nlp-network-methodology">
            <h3>Methodology</h3>
            <div className="methodology-content">
              <div className="methodology-subsection">
                <h4>1. Data Preparation & Preprocessing</h4>
                <ul>
                  <li>Converted raw blog text into .txt files with clear identifiers</li>
                  <li>Applied text-cleaning steps in R: lowercasing, removing numbers, punctuation, and stopwords, stripping whitespace, and stemming words to their root forms</li>
                  <li>Constructed a DTM with ~20 tokens after filtering sparse terms</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>2. Hierarchical Clustering</h4>
                <ul>
                  <li>Built a dendrogram using cosine similarity between documents</li>
                  <li>Compared clustering results against true topic labels</li>
                  <li>Found an overall clustering accuracy of 26.67%, suggesting limited topic separation due to overlapping vocabulary across categories</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>3. Network Analysis</h4>
                <ul>
                  <li><strong>Document Network:</strong> Created a graph of documents based on shared terms. Central documents, such as <i>Food02_CupofJo.txt</i> and <i>Travel05_MelbourneGirl.txt</i>, were identified as hubs due to their broad thematic overlap</li>
                  <li><strong>Token Network:</strong> Constructed a co-occurrence network of terms. Common words like <i>make, take,</i> and <i>one</i> appeared as central nodes, indicating wide contextual use</li>
                  <li><strong>Bipartite Network:</strong> Built a two-mode network connecting documents to the tokens they contained, revealing clusters of documents bound together by shared key terms</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>4. Evaluation of Techniques</h4>
                <ul>
                  <li><strong>Clustering</strong> offered a thematic overview but struggled with nuanced category distinctions</li>
                  <li><strong>Network</strong> analysis provided deeper insights into specific connections, highlighting central terms and documents more effectively</li>
                  <li>Proposed improvements included using <strong>TF-IDF weighting, Named Entity Recognition (NER),</strong> and <strong>topic modelling (LDA)</strong> for better document discrimination</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="nlp-network-insights">
            <h3>Key Insights</h3>
            <div className="insights-content">
              <div className="insights-subsection">
                <h4>1. Clustering Analysis</h4>
                <ul>
                  <li>The hierarchical clustering produced a dendrogram, but the accuracy was 26.67%, which was lower than the no-information rate (33.33%)</li>
                  <li>The kappa statistic was nearly zero (0.012), showing almost no agreement between predicted and true categories</li>
                  <li><strong>By category:</strong>
                    <ul>
                      <li>Food articles had moderate recognition (33.3% sensitivity, 100% specificity)</li>
                      <li>Home articles had slightly better performance (50% sensitivity, 69% specificity)</li>
                      <li>Lifestyle and Travel articles had poor detection (20% sensitivity)</li>
                    </ul>
                  </li>
                  <li>This showed that the model struggled because different topics shared overlapping vocabulary (e.g., travel blogs discussing food, lifestyle posts referencing home design)</li>
                </ul>
              </div>
              
              <div className="insights-subsection">
                <h4>2. Document Network</h4>
                <ul>
                  <li>Central nodes in the network, such as <i>Food02_CupofJo.txt</i> and <i>Travel05_MelbourneGirl.txt</i>, connected widely across the graph</li>
                  <li>These documents acted as hubs because they contained terms common to multiple themes (e.g., <i>eat, make, one</i>)</li>
                  <li>The visualisation showed clusters of thematically similar documents forming naturally, even when clustering algorithms underperformed</li>
                </ul>
              </div>
              
              <div className="insights-subsection">
                <h4>3. Token Network</h4>
                <ul>
                  <li>Frequent connector words (<i>make, take, one</i>) dominated the central positions, showing their linguistic versatility across categories</li>
                  <li>Strong token-to-token relationships (visualised with thicker blue edges) revealed pairs of words that consistently appeared together in multiple documents, giving insight into recurring phrases/themes in lifestyle and travel writing</li>
                  <li>However, these high-frequency generic words reduced discriminatory power, which is why <strong>TF-IDF weighting</strong> or <strong>topic modelling</strong> was suggested as an improvement</li>
                </ul>
              </div>
              
              <div className="insights-subsection">
                <h4>4. Bipartite Document–Token Network</h4>
                <ul>
                  <li>Visualisation clearly showed how documents grouped around shared tokens, making sub-communities more apparent than in clustering</li>
                  <li>Central tokens like <i>take, make,</i> and <i>one</i> linked across multiple categories, while more specific terms (like <i>coffee</i> or <i>paint</i>) highlighted topic-specific clusters (Food and Home respectively)</li>
                  <li>This reinforced that network analysis provided a richer, more interpretable structure than raw clustering</li>
                </ul>
              </div>
              
              <div className="insights-subsection">
                <h4>5. Comparing Clustering vs. Network Analysis</h4>
                <ul>
                  <li>Clustering gave a rough thematic grouping but was too rigid, misclassifying many documents</li>
                  <li>Network analysis was more flexible, revealing nuanced relationships:
                    <ul>
                      <li>Which words connected different categories</li>
                      <li>Which documents acted as bridges across themes</li>
                      <li>Which tokens dominated within-topic vs. across-topic use</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="nlp-network-outcomes">
            <h3>Outcomes & Skills Gained</h3>
            <div className="outcomes-content">
              <div className="outcomes-subsection">
                <h4>1. Text Preprocessing & NLP</h4>
                <ul>
                  <li>Learned to clean and standardise text data using R (<strong>tm, SnowballC</strong>)</li>
                </ul>
              </div>
              
              <div className="outcomes-subsection">
                <h4>2. Statistical & Network Analysis</h4>
                <ul>
                  <li>Built and interpreted clustering models, document networks, token networks, and bipartite networks</li>
                </ul>
              </div>
              
              <div className="outcomes-subsection">
                <h4>3. Insight Generation</h4>
                <ul>
                  <li>Compared clustering and network approaches, identifying strengths, weaknesses, and potential improvements</li>
                </ul>
              </div>
              
              <div className="outcomes-subsection">
                <h4>4. Visualisation</h4>
                <ul>
                  <li>Enhanced network graphs with features like node size, colour, and weighted edges to highlight key structures</li>
                </ul>
              </div>
            </div>
          </div>
          
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLPNetworkAnalysis;
