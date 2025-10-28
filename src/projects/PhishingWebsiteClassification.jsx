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
                        <li>Selected and regined relevant features such as URL structure, domain age, and page content indicators related to phishing detection.</li>
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
                        <li><strong>Random Forest</strong> achieved the highest overall accuracy, demonstrating the effectiveness of ensemble methods for phishing detection</li>
                        <li><strong>SVM</strong> showed strong performance with high precision, making it effective for minimizing false positives in security applications</li>
                        <li><strong>Decision Tree</strong> provided good interpretability but lower accuracy compared to ensemble methods</li>
                        <li><strong>Naive Bayes</strong> performed adequately for baseline comparison but was outperformed by more sophisticated algorithms</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>2. Feature Importance</h4>
                      <ul>
                        <li>URL-based features (domain length, suspicious characters, subdomain count) were among the most predictive indicators</li>
                        <li>Website content features (number of forms, external links, pop-ups) showed strong correlation with phishing classification</li>
                        <li>Domain age and SSL certificate information provided valuable signals for distinguishing legitimate from malicious sites</li>
                        <li>Feature importance analysis revealed that a combination of technical and content-based indicators was most effective</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>3. Classification Results</h4>
                      <ul>
                        <li>All models achieved accuracy rates above 85%, with Random Forest reaching over 95% accuracy on the test set</li>
                        <li>Precision and recall metrics showed that models were particularly effective at identifying phishing sites (high recall) while maintaining low false positive rates</li>
                        <li>Cross-validation results demonstrated consistent performance across different data splits, indicating robust model generalization</li>
                        <li>ROC curve analysis showed excellent discrimination ability with AUC values above 0.9 for the best-performing models</li>
                      </ul>
                    </div>
                    
                    <div className="insights-subsection">
                      <h4>4. Error Analysis</h4>
                      <ul>
                        <li>False positives primarily occurred with legitimate websites that had unusual URL structures or limited content</li>
                        <li>False negatives were more common with sophisticated phishing sites that closely mimicked legitimate website designs</li>
                        <li>Error patterns suggested that combining multiple feature types (URL, content, and technical indicators) improved detection accuracy</li>
                        <li>Analysis revealed that certain website categories (e.g., new domains, international sites) were more challenging to classify accurately</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'outcomes' && (
                  <div className="phishing-tab-panel">
                    <div className="outcomes-subsection">
                      <h4>1. Machine Learning</h4>
                      <ul>
                        <li>Gained hands-on experience with multiple supervised learning algorithms including Decision Trees, Random Forest, SVM, and Naive Bayes</li>
                        <li>Learned to implement and compare different machine learning models using R packages like <strong>rpart, randomForest, e1071,</strong> and <strong>naivebayes</strong></li>
                        <li>Developed skills in hyperparameter tuning and cross-validation techniques for model optimization</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>2. Data Analysis</h4>
                      <ul>
                        <li>Mastered data preprocessing techniques including handling missing values, feature scaling, and categorical variable encoding</li>
                        <li>Conducted comprehensive exploratory data analysis to understand feature distributions and relationships</li>
                        <li>Applied feature engineering techniques to create meaningful predictors for classification tasks</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>3. Model Evaluation</h4>
                      <ul>
                        <li>Learned to calculate and interpret comprehensive evaluation metrics including accuracy, precision, recall, F1-score, and AUC</li>
                        <li>Developed skills in generating and analyzing confusion matrices to understand model performance patterns</li>
                        <li>Gained experience in statistical significance testing for comparing model performance</li>
                      </ul>
                    </div>
                    
                    <div className="outcomes-subsection">
                      <h4>4. Cybersecurity</h4>
                      <ul>
                        <li>Gained practical understanding of phishing attack vectors and website characteristics that indicate malicious intent</li>
                        <li>Learned to identify and analyze features that distinguish legitimate websites from phishing attempts</li>
                        <li>Developed insights into the practical applications of machine learning in cybersecurity and threat detection</li>
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
