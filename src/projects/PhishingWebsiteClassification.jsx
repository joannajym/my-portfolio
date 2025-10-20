import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PhishingWebsiteClassification.css';

const PhishingWebsiteClassification = () => {
  const navigate = useNavigate();
  
  return (
    <div className="phishing-classification-page">
      <div className="phishing-classification-header">
        <button 
          onClick={() => {
            navigate('/', { state: { scrollTo: 'projects' } });
          }}
          className="phishing-classification-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="phishing-classification-title">Phishing Website Classification</h1>
        <p className="phishing-classification-subtitle">A machine learning-based R project to classify phishing websites using multiple supervised learning models and evaluate their performance</p>
      </div>
      
      <div className="phishing-classification-content">
        <div className="phishing-classification-container">
          <div className="phishing-classification-project-overview">
            <h3>Project Overview</h3>
            <p>
              This project was developed for my Data Analytics coursework to gain practical experience with <strong>machine learning classification</strong> techniques 
              and <strong>cybersecurity</strong> applications. The aim was to build and compare multiple supervised learning models to accurately identify and classify 
              phishing websites, which pose significant threats to online security and user privacy.
            </p><br></br>
            <p>
              Using a comprehensive dataset of website features, I implemented and evaluated several machine learning algorithms including <strong>Decision Trees, 
              Random Forest, Support Vector Machines (SVM), and Naive Bayes</strong>. The project focused on feature engineering, model selection, and performance 
              evaluation to determine the most effective approach for phishing detection.
            </p><br></br>
            <p>
              The analysis included detailed evaluation metrics such as accuracy, precision, recall, F1-score, and confusion matrices to assess each model's 
              performance. This project demonstrates practical application of machine learning in cybersecurity and provides insights into the effectiveness 
              of different classification approaches for detecting malicious websites.
            </p>
          </div>
          
          <div className="phishing-classification-methodology">
            <h3>Methodology</h3>
            <div className="methodology-content">
              <div className="methodology-subsection">
                <h4>1. Data Collection & Preprocessing</h4>
                <ul>
                  <li>Collected and preprocessed a dataset containing website features relevant to phishing detection</li>
                  <li>Handled missing values, outliers, and data quality issues using R data manipulation techniques</li>
                  <li>Performed exploratory data analysis to understand feature distributions and correlations</li>
                  <li>Split the dataset into training and testing sets for model evaluation</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>2. Feature Engineering</h4>
                <ul>
                  <li>Analyzed and selected relevant features for phishing detection including URL characteristics, domain information, and website content indicators</li>
                  <li>Applied feature scaling and normalization to ensure consistent model performance across different algorithms</li>
                  <li>Conducted feature importance analysis to identify the most predictive variables</li>
                  <li>Created derived features and handled categorical variables through appropriate encoding techniques</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>3. Model Development</h4>
                <ul>
                  <li>Implemented <strong>Decision Tree</strong> classifier using recursive partitioning for interpretable rule-based classification</li>
                  <li>Built <strong>Random Forest</strong> ensemble model to improve prediction accuracy and reduce overfitting</li>
                  <li>Developed <strong>Support Vector Machine (SVM)</strong> with different kernel functions for high-dimensional classification</li>
                  <li>Applied <strong>Naive Bayes</strong> classifier for probabilistic classification based on feature independence assumptions</li>
                  <li>Used cross-validation techniques to optimize hyperparameters and prevent overfitting</li>
                </ul>
              </div>
              
              <div className="methodology-subsection">
                <h4>4. Model Evaluation</h4>
                <ul>
                  <li>Calculated comprehensive performance metrics including accuracy, precision, recall, and F1-score for each model</li>
                  <li>Generated confusion matrices to analyze classification errors and identify patterns in misclassification</li>
                  <li>Conducted statistical significance tests to compare model performance differences</li>
                  <li>Performed ROC curve analysis and calculated AUC values to assess model discrimination ability</li>
                  <li>Analyzed false positive and false negative rates to understand practical implications for cybersecurity applications</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="phishing-classification-insights">
            <h3>Key Insights</h3>
            <div className="insights-content">
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
          </div>
          
          <div className="phishing-classification-outcomes">
            <h3>Outcomes & Skills Gained</h3>
            <div className="outcomes-content">
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
          </div>
          
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhishingWebsiteClassification;
