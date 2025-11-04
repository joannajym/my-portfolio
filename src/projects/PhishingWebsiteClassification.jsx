import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhishingWebsiteClassification.css';

const PhishingWebsiteClassification = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('methodology');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="phishing-classification-page">
      <main className="phishing-classification-content">
        <div className="phishing-navigation">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="phishing-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="phishing-breadcrumb">
            <span className="phishing-breadcrumb-item" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>Projects</span>
            <span className="phishing-breadcrumb-separator">{'>'}</span>
            <span className="phishing-breadcrumb-current">Phishing Website Classification</span>
          </div>
        </div>
        
        <h1 className="phishing-classification-title">Phishing Website Classification</h1>
        
        {/* Main Layout - Two Column */}
        <div className="phishing-main-layout">
          {/* Project Overview Section - Left Column */}
          <div className="phishing-project-overview">
            <p>
              This project was developed for my Data Analytics coursework to gain practical experience with <strong>machine learning classification</strong> techniques 
              and <strong>cybersecurity</strong> applications. The aim was to build and compare multiple supervised learning models to accurately identify and classify 
              phishing websites, which pose significant threats to online security and user privacy.
            </p>
            <p>
              Using a comprehensive dataset of website features, I implemented and evaluated several machine learning algorithms including <strong>Decision Trees, 
              Random Forest, Support Vector Machines (SVM), and Naive Bayes</strong>. The project focused on feature engineering, model selection, and performance 
              evaluation to determine the most effective approach for phishing detection.
            </p>
            <p>
              The analysis included detailed evaluation metrics such as accuracy, precision, recall, F1-score, and confusion matrices to assess each model's 
              performance. This project demonstrates practical application of machine learning in cybersecurity and provides insights into the effectiveness 
              of different classification approaches for detecting malicious websites.
            </p>
            
            <div className="phishing-technologies">
              <h4>Technologies Used</h4>
              <div className="phishing-tech-tags">
                <span className="phishing-tech-tag">R</span>
                <span className="phishing-tech-tag">Machine Learning</span>
                <span className="phishing-tech-tag">Decision Trees</span>
                <span className="phishing-tech-tag">Random Forest</span>
                <span className="phishing-tech-tag">SVM</span>
                <span className="phishing-tech-tag">Naive Bayes</span>
              </div>
            </div>
          </div>

          {/* Tabbed Container Section - Right Column */}
          <div className="phishing-tabbed-section">
            <div className="phishing-tab-container">
              <div className="phishing-tab-headers">
                <button 
                  className={`phishing-tab-header ${activeTab === 'methodology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                >
                  Methodology
                </button>
                <button 
                  className={`phishing-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
                <button 
                  className={`phishing-tab-header ${activeTab === 'outcomes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outcomes')}
                >
                  Project Outcomes
                </button>
              </div>
              
              <div className="phishing-tab-content">
                {activeTab === 'methodology' && (
                  <div className="phishing-tab-panel">
                    <div className="methodology-subsection">
                      <h4>1. Data Collection & Preprocessing</h4>
                      <ul>
                        <li>Used a phishing website dataset containing URL, domain, and content-based features from the UCI Machine Learning Repository.</li>
                        <li>Cleaned and prepared the data by removing missing values, outliers, and low-variance attributes.</li>
                        <li>Conducted exploratory data analysis (EDA) using boxplots and summary statistics to identify skewed and extreme features.</li>
                        <li>Split the dataset into <strong>70% training</strong> and <strong>30% testing</strong> sets for model development and evaluation.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>2. Feature Engineering</h4>
                      <ul>
                        <li>Selected and refined relevant features such as URL structure, domain age, and page content indicators related to phishing detection.</li>
                        <li>Applied <strong>feature scaling and normalisation</strong> for models sensitive to magnitude differences (e.g., ANN and SVM).</li>
                        <li>Performed <strong>feature importance analysis</strong> later to determine which attributes contributed most to accurate classification.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>3. Model Development</h4>
                      <ul>
                        <li>Built and compared several classification algorithms to detect phishing websites:</li>
                        <ul>
                          <li><strong>Decision Tree (rpart)</strong>: For interpretable, rule-based classification.</li>
                          <li><strong>Naive Bayes (e1071)</strong>: For probabilistic predictions based on feature independence.</li>
                          <li><strong>Bagging and Boosting</strong>: Ensembles to improve accuracy and reduce overfitting.</li>
                          <li><strong>Random Forest</strong>: For multi-tree learning.</li>
                          <li><strong>Artificial Neural Network (ANN)</strong>: For non-linear pattern detection.</li>
                          <li><strong>Support Vector Machine (SVM): For high-dimensional data classification.</strong></li>
                        </ul>
                        <li>Used <strong>cross-validation</strong> and grid search tuning for Decision Tree, ANN, and SVM to optimise performance.</li>
                      </ul>
                    </div>
                    
                    <div className="methodology-subsection">
                      <h4>4. Model Evaluation</h4>
                      <ul>
                        <li>Assessed models using <strong>accuracy, precision, recall, and F1-score</strong> metrics.</li>
                        <li>Generated <strong>confusion matrices</strong> to examine misclassificattions between phishing and legitimate sites.</li>
                        <li>Compared model performance using <strong>ROC curves and AUC values</strong> to evaluate discrimination ability.</li>
                        <li>Analysed <strong>false positive</strong> (legitimate sites flagged as phishing) and <strong>false negative</strong> (phishing sites missed) rates to discuss practical cybersecurity implications.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'findings' && (
                  <div className="phishing-tab-panel">
                    <div className="insights-subsection">
                      <h4>1. Model Performance</h4>
                      <ul>
                        <li>Among all seven models, <strong>Boosting</strong> and <strong>Artificial Neural Network (ANN)</strong> achieved the <strong>highest accuracy (~72.2%)</strong>, demonstrating the strong predictive ability of ensemble and neural approaches.</li>
                        <li><strong>ANN</strong> produced the <strong>highest AUC value (0.7599)</strong>, showing the best ability to distinguish phishing and neural approaches.</li>
                        <li><strong>Decision Tree</strong> achieved <strong>0.7202 accuracy</strong> and <strong>0.7415 AUC</strong>, balancing good interpretability with strong performance.</li>
                        <li><strong>Random Forest</strong> followed closely <strong>(0.6960 accuracy, 0.7334 AUC)</strong>, offering consistent but slightly lower results.</li>
                        <li><strong>Bagging (0.6908 accuracy)</strong> and <strong>SVM (0.6926 accuracy)</strong> showed moderate performance, while <strong>Naive Bayes (0.6494 accuracy)</strong> served as a baseline model.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>2. ROC and Discrimination Analysis</h4>
                      <ul>
                        <li>AUC values across models confirmed good classification performance, led by <strong>ANN (0.7599), Decision Tree (0.7415), Random Forest (0.7334), and Boosting (0.7305).</strong></li>
                        <li>The ROC curves demonstrated that ANN most effectively separated phishing from legitimate websites.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>3. Feature Importance</h4>
                      <ul>
                        <li>Top features across Decision Tree, Bagging, Random Forest, and Boosting models included <strong>A01, A18, and A23</strong>, consistently ranked as the most important predictors.</li>
                        <li>These features correspond to <strong>URL, domain, and content-based characteristics,</strong> proving that a combination of technical and structural signals was essential for accurate classification.</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>4. Classification Trade-offs</h4>
                      <ul>
                        <li><strong>Ensemble models (Boosting, Random Forest) and ANN</strong> achieved the strongest overall results.</li>
                        <li><strong>Decision Tree</strong> maintained competitive accuracy while providing valuable interpretability.</li>
                        <li><strong>SVM</strong> delivered good precision but lower recall and AUC, while Naive Bayes served as a simple baseline.</li>
                      </ul>
                    </div>

                    <div className="insights-subsection">
                      <h4>5. Error Analysis</h4>
                      <ul>
                        <li>False positives often came from legitimate websites with irregular or complex URL patterns or minimal page content.</li>
                        <li>False negatives typically occurred in sophisticated phishing sites closely resembling real domains.</li>
                        <li>The report noted that combining URL, content, and domain/SSL features reduced both error types.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'outcomes' && (
                  <div className="phishing-tab-panel">
                    <div className="outcomes-subsection">
                      <h4>1. Data Handling and Preparation</h4>
                      <ul>
                        <li>Processed and prepared a phishing website dataset from the UCI Machine Learning Repository, consisting of URL, domain, and content-based features.</li>
                        <li>Cleaned the dataset by removing missing values, low-variance and zero-variance attributes, and outliers.</li>
                        <li>Split data into 70% training and 30% testing subsets to ensure fair model evaluation.</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>2. Model Development and Training</h4>
                      <ul>
                        <li>Implemented and compared seven machine learning algorithms — Decision Tree, Naive Bayes, Bagging, Boosting, Random Forest, Artificial Neural Network (ANN), and Support Vector Machine (SVM).</li>
                        <li>Applied cross-validation and hyperparameter tuning for Decision Tree, ANN, and SVM to optimise model performance.</li>
                        <li>Conducted training using R packages such as rpart, randomForest, adabag, nnet, and e1071.</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>3. Feature Analysis and Interpretation</h4>
                      <ul>
                        <li>Conducted feature importance analysis across tree-based and ensemble models to identify the most predictive variables.</li>
                        <li>Found that features A01, A18, and A23 consistently ranked highest, corresponding to critical phishing indicators related to URL composition, domain behaviour, and page structure.</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>4. Performance Evaluation</h4>
                      <ul>
                        <li>Evaluated models using accuracy, precision, recall, F1-score, ROC curves, and AUC metrics.</li>
                        <li>Boosting and ANN achieved the highest accuracy (~0.722), with ANN showing the strongest AUC (0.7599).</li>
                        <li>Decision Tree performed competitively while remaining easily interpretable.</li>
                      </ul>
                    </div>

                    <div className="outcomes-subsection">
                      <h4>5. Error and Stability Analysis</h4>
                      <ul>
                        <li>Analysed misclassification trends using confusion matrices and model diagnostics.</li>
                        <li>Found that false positives came from legitimate but irregular URLs, while false negatives stemmed from realistic phishing sites.</li>
                        <li>Cross-validation confirmed stable generalisation with minimal overfitting across all tuned models.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section - Bottom of Page */}
        <div className="phishing-classification-container">
          <div className="phishing-classification-documentation-section">
            <h3>Project Documentation</h3>
            <p>Explore the complete project documentation and detailed analysis:</p>
            <div className="pdf-container">
              <iframe 
                src={`${process.env.PUBLIC_URL}/Phishing%20Website%20Classification.pdf`}
                width="100%"
                height="800px"
                title="Phishing Website Classification Documentation"
                className="pdf-iframe"
              />
            </div>
            <a 
              href={`${process.env.PUBLIC_URL}/Phishing%20Website%20Classification.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="phishing-document-link"
            >
              Open PDF in Full Screen →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhishingWebsiteClassification;
