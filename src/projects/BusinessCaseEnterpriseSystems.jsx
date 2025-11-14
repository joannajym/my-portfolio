import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessCaseEnterpriseSystems.css';

const BusinessCaseEnterpriseSystems = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('methodology');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="enterprise-prosocial-page">
      <main className="enterprise-prosocial-content">
        <div className="enterprise-navigation">
          <button
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="enterprise-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="enterprise-breadcrumb">
            <span
              className="enterprise-breadcrumb-item"
              onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            >
              Projects
            </span>
            <span className="enterprise-breadcrumb-separator">{'>'}</span>
            <span className="enterprise-breadcrumb-current">
              Business Case for Implementing Enterprise Systems
            </span>
          </div>
        </div>

        <h1 className="enterprise-prosocial-title">
          Business Case for Implementing Enterprise Systems
        </h1>

        <div className="enterprise-main-layout">
          <div className="enterprise-project-overview">
            <p>
              I developed this business case as part of an Enterprise Resource Planning (ERP) strategy
              module. The remit was to evaluate whether a mid-sized services organisation should move
              from fragmented legacy applications to a unified enterprise platform. The case captured the
              financial rationale, operating model shifts, and organisational change implications of
              adopting a modern ERP.
            </p>
            <p>
              The workstream combined stakeholder research, cost modelling, and implementation planning
              to compare three shortlisted ERP solutions. I framed each option against business goals such
              as revenue visibility, inventory accuracy, compliance confidence, and cross-functional
              collaboration.
            </p>
            <ul>
              <li>Mapped current-state processes and pain points across finance, procurement, and projects</li>
              <li>Quantified five-year total cost of ownership and benefits for SAP S/4HANA, Oracle Fusion, and Microsoft Dynamics 365</li>
              <li>Designed a phased roadmap covering technology, data, change, and governance milestones</li>
              <li>Built an executive-ready narrative with risks, mitigation actions, and value indicators</li>
            </ul>

            <div className="enterprise-technologies">
              <h4>Technologies & Techniques</h4>
              <div className="enterprise-tech-tags">
                <span className="enterprise-tech-tag">Microsoft Excel</span>
                <span className="enterprise-tech-tag">Power BI</span>
                <span className="enterprise-tech-tag">Stakeholder Interviews</span>
                <span className="enterprise-tech-tag">ERP Readiness Assessment</span>
              </div>
            </div>
          </div>

          <div className="enterprise-tabbed-section">
            <div className="enterprise-tab-container">
              <div className="enterprise-tab-headers">
                <button
                  className={`enterprise-tab-header ${activeTab === 'methodology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                >
                  Methodology
                </button>
                <button
                  className={`enterprise-tab-header ${activeTab === 'findings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('findings')}
                >
                  Key Findings
                </button>
                <button
                  className={`enterprise-tab-header ${activeTab === 'outcomes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outcomes')}
                >
                  Project Outcomes
                </button>
              </div>

              <div className="enterprise-tab-content">
                {activeTab === 'methodology' && (
                  <div className="enterprise-tab-panel">
                    <div className="methodology-subsection">
                      <h4>1. Current-State Diagnosis</h4>
                      <ul>
                        <li>Interviewed finance, operations, and IT leaders to surface integration gaps and compliance friction.</li>
                        <li>Documented 12 core business processes and value-stream maps to highlight duplication and manual touchpoints.</li>
                        <li>Created a capability heatmap ranking maturity across analytics, automation, and governance domains.</li>
                      </ul>
                    </div>

                    <div className="methodology-subsection">
                      <h4>2. Option Analysis & Financial Modelling</h4>
                      <ul>
                        <li>Defined evaluation criteria spanning functionality, scalability, vendor ecosystem, and implementation complexity.</li>
                        <li>Built five-year total cost of ownership models including licensing, integration, change management, and support.</li>
                        <li>Calculated tangible benefits (working-capital release, time savings) and strategic value (audit readiness, customer responsiveness).</li>
                      </ul>
                    </div>

                    <div className="methodology-subsection">
                      <h4>3. Roadmap & Change Strategy</h4>
                      <ul>
                        <li>Outlined a phased deployment plan with pilot, core rollout, and optimisation waves tied to measurable KPIs.</li>
                        <li>Crafted a change management plan covering stakeholder sponsorship, training paths, and communications cadence.</li>
                        <li>Produced risk registers with mitigation actions across data migration, vendor lock-in, and adoption fatigue.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'findings' && (
                  <div className="enterprise-tab-panel">
                    <div className="insights-subsection">
                      <h4>1. Financial Case</h4>
                      <ul>
                        <li><strong>SAP S/4HANA:</strong> Highest capability coverage but required a larger upfront investment and specialised skills.</li>
                        <li><strong>Microsoft Dynamics 365:</strong> Delivered the strongest ROI through bundled licensing and rapid deployment accelerators.</li>
                        <li><strong>Oracle Fusion:</strong> Balanced functionality but incurred higher integration and customisation costs.</li>
                        <li>All options surpassed the board&apos;s ROI hurdle rate within 30 months when productivity and compliance gains were included.</li>
                      </ul>
                    </div>

                    <div className="insights-subsection">
                      <h4>2. Operating Model Improvements</h4>
                      <ul>
                        <li>Consolidating finance, procurement, and project data reduced monthly close time by an estimated 35%.</li>
                        <li>Real-time dashboards eliminated manual reconciliations, freeing analysts for portfolio forecasting and scenario planning.</li>
                        <li>Automated approval workflows improved policy compliance and audit trails without adding headcount.</li>
                      </ul>
                    </div>

                    <div className="insights-subsection">
                      <h4>3. Change & Risk Insights</h4>
                      <ul>
                        <li>Adoption risk concentrated in regional offices with low digital literacy, requiring tailored training cohorts.</li>
                        <li>Data quality emerged as the top implementation risk; a data governance council and cleansing sprints were recommended.</li>
                        <li>Strong executive sponsorship and a benefits-tracking PMO were identified as critical success factors for the roadmap.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div className="enterprise-tab-panel">
                    <div className="outcomes-subsection">
                      <h4>1. Executive Decision Pack</h4>
                      <ul>
                        <li>Delivered a board-ready presentation summarising TCO, ROI, and qualitative differentiation between vendors.</li>
                      </ul>
                    </div>

                    <div className="outcomes-subsection">
                      <h4>2. Implementation Blueprint</h4>
                      <ul>
                        <li>Produced a 24-month roadmap with swim-lanes for technology workstreams, data migration, and change enablement.</li>
                      </ul>
                    </div>

                    <div className="outcomes-subsection">
                      <h4>3. Governance Toolkit</h4>
                      <ul>
                        <li>Created KPI scorecards, RACI charts, and benefit realisation dashboards to steer programme governance.</li>
                      </ul>
                    </div>

                    <div className="outcomes-subsection">
                      <h4>4. Risk Mitigation Playbook</h4>
                      <ul>
                        <li>Outlined mitigating actions for 18 identified risks, including contingency budgets and vendor escalation paths.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="enterprise-prosocial-container">
          <div className="enterprise-prosocial-documentation-section">
            <h3>Project Documentation</h3>
            <p>Review the executive summary, financial models, and implementation roadmap in full detail:</p>
            <div className="pdf-container">
              <iframe
                src={`${process.env.PUBLIC_URL}/Business%20Case%20ERP%20Systems.pdf`}
                width="100%"
                height="800px"
                title="Business Case ERP Systems Documentation"
                className="pdf-iframe"
              />
            </div>
            <a
              href={`${process.env.PUBLIC_URL}/Business%20Case%20ERP%20Systems.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="enterprise-document-link"
            >
              Open PDF in Full Screen →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessCaseEnterpriseSystems;
