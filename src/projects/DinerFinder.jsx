import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DinerFinder.css';

const DinerFinder = () => {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(2);
  const [sites, setSites] = useState('3, 2, 3, 4, 1, 2');
  const [results, setResults] = useState({ revenue: 0, selectedSites: [] });
  const [siteList, setSiteList] = useState([3, 2, 3, 4, 1, 2]);
  const [activeTab, setActiveTab] = useState('tech');

  // Dynamic programming algorithm implementation
  const restaurantFinder = (d, site_list) => {
    const count = site_list.length;

    const total_revenue = new Array(count).fill(0);
    const last_selected = new Array(count).fill(-1);
    
    if (d === 0 && site_list.reduce((sum, val) => sum + val, 0) <= 0) {
      return [0, []];
    }
    
    for (let i = 0; i < count; i++) {
      let select_revenue = site_list[i];
      if (i - d - 1 >= 0) {
        select_revenue += total_revenue[i - d - 1];
      }
      
      if (i === 0) {
        total_revenue[i] = Math.max(0, site_list[i]);
        if (site_list[i] > 0) {
          last_selected[i] = i;
        }
      } else {
        if (total_revenue[i - 1] > select_revenue) {
          total_revenue[i] = total_revenue[i - 1];
        } else {
          total_revenue[i] = select_revenue;
          last_selected[i] = i;
        }
      }
    }
    
    const selected_sites = [];
    let i = count - 1;

    while (i >= 0) {
      if (last_selected[i] !== -1) {
        selected_sites.push(last_selected[i] + 1);
        i = i - d - 1;
      } else {
        i -= 1;
      }
    }
    
    selected_sites.reverse();

    return [total_revenue[count - 1], selected_sites];
  };

  const calculateOptimalSites = () => {
    const siteArray = sites.split(',').map(s => parseInt(s.trim()));
    if (siteArray.some(isNaN)) {
      alert('Please enter valid numbers for site revenues');
      return;
    }
    
    setSiteList(siteArray);
    const [totalRevenue, selectedSites] = restaurantFinder(distance, siteArray);
    setResults({ revenue: totalRevenue, selectedSites });
  };

  const generateRandomExample = () => {
    const numSites = Math.floor(Math.random() * 10) + 5; // 5 to 14 sites
    const newDistance = Math.floor(Math.random() * 3) + 2; // d between 2 and 4
    
    const newSiteList = [];
    for (let i = 0; i < numSites; i++) {
      newSiteList.push(Math.floor(Math.random() * 9) + 1); // Revenue between 1 and 9
    }
    
    setDistance(newDistance);
    setSites(newSiteList.join(', '));
    setSiteList(newSiteList);
    
    const [totalRevenue, selectedSites] = restaurantFinder(newDistance, newSiteList);
    setResults({ revenue: totalRevenue, selectedSites });
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize with example values
    const [totalRevenue, selectedSites] = restaurantFinder(distance, siteList);
    setResults({ revenue: totalRevenue, selectedSites });
  }, []);

  return (
    <div className="diner-finder-page">
      <main className="diner-finder-content">
        <div className="diner-navigation animate-fade-in">
          <button 
            onClick={() => {
              navigate('/', { state: { scrollTo: 'projects' } });
            }}
            className="diner-back-button"
          >
            ← Back to Portfolio
          </button>
          <div className="diner-breadcrumb">
            <span 
              className="diner-breadcrumb-item"
              onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            >
              Projects
            </span>
            <span className="diner-breadcrumb-separator">&gt;</span>
            <span className="diner-breadcrumb-current">Diner Finder</span>
          </div>
        </div>
        <h1 className="diner-finder-title animate-slide-left animate-delay-1">Diner Finder</h1>
        
        {/* Two-column layout: Description and Highway Visualization */}
        <div className="diner-main-layout">
          {/* Project Overview Section */}
          <div className="diner-project-overview animate-slide-left animate-delay-2">
            <p>
              This project addresses a real-world optimisation problem: helping a fast food chain determine 
              the most profitable locations to open restaurants along a newly constructed freeway. 
              The company's policy prohibits opening two restaurants within 'd' kilometers of each other. 
              Hence, requiring an efficient and strategic selection of sites to maximise total revenue.
            </p>
            
            <div className="diner-technologies">
              <h4>Technologies Used</h4>
              <div className="diner-tech-tags">
                <span className="diner-tech-tag">Python</span>
                <span className="diner-tech-tag">JavaScript</span>
                <span className="diner-tech-tag">React</span>
              </div>
            </div>
            
            {/* Tabbed Container */}
            <div className="diner-tab-container">
              <div className="diner-tab-headers">
                <button 
                  className={`diner-tab-header ${activeTab === 'tech' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tech')}
                >
                  Technical Description
                </button>
                <button 
                  className={`diner-tab-header ${activeTab === 'solution' ? 'active' : ''}`}
                  onClick={() => setActiveTab('solution')}
                >
                  Solution Approach
                </button>
              </div>
              
              <div className="diner-tab-content">
                {activeTab === 'tech' && (
                  <div className="diner-tab-panel">
                    <div className="diner-detail-item">
                      <h5>Time Complexity</h5>
                      <p>O(N) where N is the number of potential locations</p>
                    </div>
                    
                    <div className="diner-detail-item">
                      <h5>Space Complexity</h5>
                      <p>O(N) for storing DP table and backtracking information</p>
                    </div>
                    
                    <div className="diner-detail-item">
                      <h5>Input</h5>
                      <p><strong>d (int):</strong> Represents the minimum number of miles between any two selected sites.</p>
                      <p><strong>site_list (List[int]):</strong> List of integers where each integer represents the annual revenue that a restaurant would generate if it were placed at a particular site.</p>
                    </div>
                    
                    <div className="diner-detail-item">
                      <h5>Output</h5>
                      <p>Optimal restaurant locations and total revenue score</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'solution' && (
                  <div className="diner-tab-panel">
                    <p>
                      First is the initialisation step, where we initialise 'count' to determine the number of sites and 
                      the DP arrays, where 'total_revenue[i]' will store the maximum revenue obtained considering the first 
                      i+1 sites, and 'last_selected' will help in backtracking the sites that were selected. If d = 0 and 
                      the total revenue from all sites is negative, then it's optimal to not select any sites.
                    </p>
                    <p>
                      The function then enters a DP loop that iterates through each site in the 'site_list' and makes the best 
                      decision for each site based on the estimated revenue from the previous sites. 'select_revenue' will be 
                      the revenue if site i is selected. So if site i is selected, we will also add the revenue from the best 
                      selection that excludes the next d sites. For the first site when i = 0, the maximum revenue is either 0 
                      (site is not selected) or the site's revenue if it's positive. For subsequent sites, the decision is 
                      between not selecting site i and taking the maximum revenue from the previous site, or selecting the site 
                      i and adding its revenue to the best revenue from the sites before the distance constraint.
                    </p>
                    <p>
                      The algorithm then backtracks the selected sites based on the results from the DP solution. It first checks 
                      which sites were selected, starting from the last site and moving backward. If site i was selected, it's 
                      added to selected_sites. The code skips d sites and continues backtracking due to the distance constraint.
                    </p>
                    <p>
                      The function then returns two values: the maximum revenue possible, and the list of selected sites. 
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Highway Visualization Section */}
          <div className="diner-visualization animate-slide-right animate-delay-2">
            <h3>Highway Visualisation</h3>
            <div className="diner-controls">
              <div className="diner-input-section">
              <div className="diner-input-group">
                <label htmlFor="distance" className="diner-label">Minimum Distance Between Restaurants (d)</label>
                <input 
                  type="number" 
                  id="distance" 
                  min="1" 
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="diner-input"
                />
              </div>
              <div className="diner-input-group">
                <label htmlFor="sites" className="diner-label">Site List (comma-separated revenue values)</label>
                <input 
                  type="text" 
                  id="sites" 
                  value={sites}
                  onChange={(e) => setSites(e.target.value)}
                  className="diner-input"
                />
              </div>
              <div className="diner-input-group">
                <button onClick={calculateOptimalSites} className="diner-calculate-btn">
                  Calculate Optimal Sites
                </button>
                <button onClick={generateRandomExample} className="diner-random-btn">
                  Generate Random Example
                </button>
              </div>
              </div>
            </div>
            
            {/* Combined container for visualization, results, and explanation */}
            <div className="diner-visualization-container">
              <div className="diner-highway-container">
                <div className="diner-highway" id="highway">
                  {/* Mile markers */}
                  {siteList.map((_, index) => (
                    <div key={`marker-${index}`} className="diner-mile-marker" style={{ left: `${(index / (siteList.length - 1)) * 100}%` }} />
                  ))}
                  {siteList.map((_, index) => (
                    <div key={`label-${index}`} className="diner-mile-label" style={{ left: `${(index / (siteList.length - 1)) * 100}%` }}>
                      {index}
                    </div>
                  ))}
                  
                  {/* Sites */}
                  {siteList.map((site, index) => (
                    <div 
                      key={`site-${index}`} 
                      className="diner-site" 
                      style={{ left: `${(index / (siteList.length - 1)) * 100}%` }}
                      title={`Site ${index}: Revenue ${site}`}
                    >
                      {site}
                    </div>
                  ))}
                  
                  {/* Restaurants */}
                  {results.selectedSites.map((siteIndex) => (
                    <div 
                      key={`restaurant-${siteIndex}`} 
                      className="diner-restaurant" 
                      style={{ left: `${(siteIndex / (siteList.length - 1)) * 100}%` }}
                      title={`Restaurant at site ${siteIndex} (Revenue: ${siteList[siteIndex]})`}
                    >
                      🍔
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="diner-results">
                <h3>Optimal Solution</h3>
                <div className="diner-revenue">Total Revenue: ${results.revenue}</div>
                <div>Selected Sites: <span>{results.selectedSites.join(', ')}</span></div>
              </div>
              
              {/* How It Works Section */}
              <div className="diner-explanation">
                <h3>How It Works</h3>
                <p>This solution uses dynamic programming to maximize revenue while ensuring no two selected restaurants are within <em>{distance}</em> kilometers of each other.</p>
                <p>The algorithm works by building a solution step-by-step, considering each site and making an optimal decision based on previous computations.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="diner-container">
          
          
          {/* Algorithm Implementation Section */}
          <div className="diner-code-section animate-slide-bottom animate-delay-3">
            <h3>Algorithm Implementation</h3>
            <pre className="diner-pre">
{`def restaurantFinder(d, site_list):
    count = len(site_list)  # Initialises count to hold total number of sites containing potential revenue values

    # Create arrays to hold our DP results and to backtrack
    total_revenue = [0] * count
    last_selected = [-1] * count
    
    # Case that checks if d = 0 and sum of all revenues is negative
    if d == 0 and sum(site_list) <= 0:
        # No sites chosen to maximise revenue
        return 0, []
    
    # Iterates through each site to calculate the max revenue when i-th site is considered
    for i in range(count):
        select_revenue = site_list[i]   # Initializes revenue for current site i
        
        # Checks if it's possible to choose the previous site such that d is maintained
        if i - d - 1 >= 0:
            # Adds total revenue from the previous site to select_revenue
            select_revenue += total_revenue[i-d-1]
        
        # Base case for the very first site
        # Checks if the revenue for this site is positive. If it is, site is chosen; otherwise, revenue is set to 0
        if i == 0:
            total_revenue[i] = max(0, site_list[i])
            if site_list[i] > 0:
                last_selected[i] = i

        else:
            # Checks if total revenue from not selecting current site is greater than revenue of selecting it
            if total_revenue[i-1] > select_revenue:
                # Total_revenue for current site i remains the same as the previous site
                total_revenue[i] = total_revenue[i-1]
            
            # Else, current site is selected
            else:
                total_revenue[i] = select_revenue
                last_selected[i] = i    # Current site marked as selected in last_selected list
    
    # Backtrack to get the list of selected sites
    selected_sites = []     # Initialises empty list to store list of selected restaurant sites
    i = count - 1   # Initialises i to the last site considered

    # Iterates backwards from last site to the first
    while i >= 0:
        # Checks if the site at index i was selected
        if last_selected[i] != -1:
            selected_sites.append(last_selected[i] + 1) # If site was selected, its index is added to selected_sites list
            i = i - d - 1   # Jumps to d+1 positions earlier in the list
        else:
            i -= 1  # If current site at i was not selected, move one position backward to previous site
        
    selected_sites.reverse()    # Reverse selected_sites to get correct order of selected sites

    # Returns maximum revenue possible and list of selected sites
    return total_revenue[-1], selected_sites`}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DinerFinder;
