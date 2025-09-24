import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HPCSelect.css';

const HPCSelect = () => {
  const navigate = useNavigate();
  const [selectedSections, setSelectedSections] = useState([]);
  const [totalOccupancy, setTotalOccupancy] = useState(0);
  const [memo, setMemo] = useState([]);
  const [n, setN] = useState(8);
  const [m, setM] = useState(5);

  // Default occupancy probability from the example
  const defaultOccupancy = [
    [31, 54, 94, 34, 12],
    [26, 25, 24, 16, 87],
    [39, 74, 50, 13, 82],
    [42, 20, 81, 21, 52],
    [30, 43, 19, 5, 47],
    [37, 59, 70, 28, 15],
    [2, 16, 14, 57, 49],
    [22, 38, 9, 19, 99]
  ];

  const [occupancyProbability, setOccupancyProbability] = useState(JSON.parse(JSON.stringify(defaultOccupancy)));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Implement the select_sections algorithm
  const selectSections = () => {
    const newMemo = Array(n).fill().map(() => Array(m).fill(0));
    let path = Array(n).fill().map(() => Array(m).fill(null));
    
    // Initialise first row
    for (let j = 0; j < m; j++) {
      newMemo[0][j] = occupancyProbability[0][j];
      path[0][j] = [-1, -1]; // Start of path
    }
    
    // Fill memo table
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let minVal = Infinity;
        let minPrevJ = -1;
        
        // Check left, center, and right from previous row
        for (let k = Math.max(0, j-1); k <= Math.min(m-1, j+1); k++) {
          if (newMemo[i-1][k] < minVal) {
            minVal = newMemo[i-1][k];
            minPrevJ = k;
          }
        }
        
        newMemo[i][j] = occupancyProbability[i][j] + minVal;
        path[i][j] = [i-1, minPrevJ];
      }
    }
    
    // Find the minimum value in the last row
    let minTotal = Infinity;
    let minJ = -1;
    for (let j = 0; j < m; j++) {
      if (newMemo[n-1][j] < minTotal) {
        minTotal = newMemo[n-1][j];
        minJ = j;
      }
    }
    
    // Backtrack to find the path
    const newSelectedSections = [];
    let currentJ = minJ;
    for (let i = n-1; i >= 0; i--) {
      newSelectedSections.unshift([i, currentJ]);
      if (i > 0) {
        currentJ = path[i][currentJ][1];
      }
    }
    
    setSelectedSections(newSelectedSections);
    setTotalOccupancy(minTotal);
    setMemo(newMemo);
    
    return [minTotal, newSelectedSections];
  };

  // Generate a random grid
  const generateRandomGrid = () => {
    const newGrid = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < m; j++) {
        row.push(Math.floor(Math.random() * 101));
      }
      newGrid.push(row);
    }
    setOccupancyProbability(newGrid);
    setSelectedSections([]);
    setTotalOccupancy(0);
    setMemo([]);
  };

  // Reset grid to default values
  const resetGrid = () => {
    setOccupancyProbability(JSON.parse(JSON.stringify(defaultOccupancy)));
    setSelectedSections([]);
    setTotalOccupancy(0);
    setMemo([]);
  };

  // Handle cell click to edit values
  const handleCellClick = (i, j) => {
    const newValue = prompt('Enter new occupancy value (0-100):', occupancyProbability[i][j]);
    if (newValue !== null) {
      const numValue = parseInt(newValue);
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
        const newGrid = [...occupancyProbability];
        newGrid[i][j] = numValue;
        setOccupancyProbability(newGrid);
      } else {
        alert('Please enter a number between 0 and 100');
      }
    }
  };

  return (
    <div className="hpc-select-page">
      <header className="hpc-select-header">
        <button 
          onClick={() => navigate('/')}
          className="hpc-back-button"
        >
          ← Back to Portfolio
        </button>
        <h1 className="hpc-select-title">HPC Select</h1>
        <p className="hpc-select-subtitle">A dynamic programming-based optimisation for post-pandemic HPC facility placement with social distancing constraints</p>
      </header>
      
      <main className="hpc-select-content">
        <div className="hpc-container">
          {/* HPC Facility Placement Visualiser - Moved to top */}
          <div className="hpc-visualiser-section">
            <h3>HPC Facility Placement Visualiser</h3>
            
            <div className="hpc-visualiser-content">
              <div className="hpc-grid-container">
                <h4>Office Layout</h4>
                <p>Each cell represents a section with its occupancy probability</p>
                <div className="hpc-grid" style={{ gridTemplateColumns: `repeat(${m}, 1fr)` }}>
                  {occupancyProbability.map((row, i) => 
                    row.map((cell, j) => (
                      <div
                        key={`${i}-${j}`}
                        className={`hpc-cell ${selectedSections.some(sec => sec[0] === i && sec[1] === j) ? 'hpc-selected' : ''}`}
                        onClick={() => handleCellClick(i, j)}
                        style={{
                          backgroundColor: memo.length > 0 && memo[i] && memo[i][j] !== undefined
                            ? `rgb(${Math.floor(memo[i][j] / Math.max(...memo.flat()) * 255)}, 255, ${Math.floor(memo[i][j] / Math.max(...memo.flat()) * 255)})`
                            : `rgb(255, ${255 - Math.floor(cell * 2.55)}, ${255 - Math.floor(cell * 2.55)})`,
                          color: memo.length > 0 && memo[i] && memo[i][j] !== undefined
                            ? 'black'
                            : (cell > 50 ? 'white' : 'black')
                        }}
                      >
                        {cell}
                      </div>
                    ))
                  )}
                </div>
                
                <div className="hpc-results">
                  <h4>Results</h4>
                  <p>Total Occupancy: <span className="hpc-result-value">{totalOccupancy || '-'}</span></p>
                  <p>Selected Sections: <span className="hpc-result-value">{selectedSections.length > 0 ? selectedSections.map(sec => `(${sec[0]}, ${sec[1]})`).join(', ') : '-'}</span></p>
                </div>
              </div>
              
              <div className="hpc-controls">
                <h4>Controls</h4>
                
                <div className="hpc-button-group">
                  <button onClick={selectSections} className="hpc-btn hpc-btn-primary">
                    Run Algorithm
                  </button>
                  <button onClick={resetGrid} className="hpc-btn">
                    Reset Grid
                  </button>
                  <button onClick={generateRandomGrid} className="hpc-btn hpc-btn-success">
                    Generate Random Grid
                  </button>
                </div>
                
                <div className="hpc-slider-container">
                  <label htmlFor="rows">Number of Rows: <span>{n}</span></label>
                  <input 
                    type="range" 
                    id="rows" 
                    min="4" 
                    max="15" 
                    value={n}
                    onChange={(e) => {
                      const newN = parseInt(e.target.value);
                      setN(newN);
                      const newGrid = [];
                      for (let i = 0; i < newN; i++) {
                        const row = [];
                        for (let j = 0; j < m; j++) {
                          row.push(Math.floor(Math.random() * 101));
                        }
                        newGrid.push(row);
                      }
                      setOccupancyProbability(newGrid);
                      setSelectedSections([]);
                      setTotalOccupancy(0);
                      setMemo([]);
                    }}
                  />
                </div>
                
                <div className="hpc-slider-container">
                  <label htmlFor="cols">Number of Columns: <span>{m}</span></label>
                  <input 
                    type="range" 
                    id="cols" 
                    min="3" 
                    max="10" 
                    value={m}
                    onChange={(e) => {
                      const newM = parseInt(e.target.value);
                      setM(newM);
                      const newGrid = [];
                      for (let i = 0; i < n; i++) {
                        const row = [];
                        for (let j = 0; j < newM; j++) {
                          row.push(Math.floor(Math.random() * 101));
                        }
                        newGrid.push(row);
                      }
                      setOccupancyProbability(newGrid);
                      setSelectedSections([]);
                      setTotalOccupancy(0);
                      setMemo([]);
                    }}
                  />
                </div>
                
                <div className="hpc-explanation">
                  <h4>How It Works</h4>
                  <p>
                    Each cell represents a section with its occupancy probability. The algorithm finds the optimal path 
                    by selecting one section from each row while minimizing total occupancy and maintaining adjacency constraints.
                  </p>
                  <p>
                    The recurrence relation is: <code>memo[i][j] = occupancy[i][j] + min(memo[i-1][j-1], memo[i-1][j], memo[i-1][j+1])</code>
                  </p>
                </div>
                

              </div>
            </div>
          </div>

          <div className="hpc-project-overview">
            <h3>Project Overview</h3>
            <p>
              In response to shifting office dynamics in the post-Covid era, this project focuses on identifying the 
              optimal location within a corporate building to install a new High-Performance Computing (HPC) facility. 
              With many office spaces now underutilised, the goal is to maximize space efficiency while minimising 
              disruption to existing employees.
            </p>
          </div>
          
          <div className="hpc-solution-approach">
            <h3>Solution Approach</h3>
            <p>
              First, we create a 2D array called memo, with dimensions n x m, to store the minimum total occupancy
              for removing i sections from the top j columns of the first i rows. We extracted the n and m values 
              from the occupancy_probability matrix.
            </p>
            <p>
              Next, the first row of the memo matrix is filled with the corresponding values from the occupancy_probability 
              matrix. This serves as a base case for the dynamic programming approach.
            </p>
            <p>
              For each subsequent row of the occupancy_probability matrix, the function iterates over each section 
              in the row and considers three possible options for selecting a section to remove: the section directly 
              above, the section diagonally above and to the left, and the section diagonally above and to the right.
            </p>
            <p>
              The function calculates the minimum total occupancy for each option, then it adds the occupancy probability 
              of the current section to the minimum, and stores those values in the corresponding cell of the memo matrix. 
              Additionally, the function also keeps track of which option was chosen for each cell, by appending the index 
              of the chosen section to the select_sections list.
            </p>
            <p>
              Once all the cells in the memo matrix have been filled, the function finds the minimum value in the last row 
              of the memo matrix, which represents the minimum total occupancy rate for a set of n sections. The corresponding 
              set of sections is then extracted from the select_sections list and returned, along with the minimum total 
              occupancy rate as a tuple.
            </p>
          </div>
          
          <div className="hpc-technical-details">
            <h3>Technical Details</h3>
            <h4>Time Complexity</h4>
            <p>O(n × m) where n is the number of rows and m is the number of columns</p>
            
            <h4>Space Complexity</h4>
            <p>O(n × m) for storing DP table and backtracking information</p>
            
            <h4>Input</h4>
            <p><strong>occupancy_probability:</strong> A list of lists with columns of length 'm' and rows of length 'n'.</p>
            <p>occupancy_probability[i][j] is an integer number between 0 and 100  which represents the occupancy 
              probability for a section located at rows 'i' and column 'j'.</p>
            
            <h4>Output</h4>
            <p>Optimal section locations and minimum total occupancy score</p>
          </div>
          
          {/* Algorithm Implementation Section */}
          <div className="hpc-code-section">
            <h3>Algorithm Implementation</h3>
            <pre className="hpc-pre">
{`def select_sections(occupancy_probability):
    n = len(occupancy_probability)      # Length of occupacny_probability
    m = len(occupancy_probability[0])   # Width of occupancy_probability
    
    memo = [[None for j in range(m)] for i in range(n)]     # Initialises memo and elements in memo table to None
    memo[0] = occupancy_probability[0]  # Sets first row of memo to first row of occupancy_probability

    select_sections = []    # Initialises empty list used to keep track of sections selected

    # Iterates over remaining rows and columns of memo
    for i in range(1, n):
        for j in range(m):
            options = []    # Creates a list of options

            # If current element is not in left-most column, then append element that is above to the left to options
            if j > 0:
                options.append(memo[i-1][j-1])
            options.append(memo[i-1][j])

            # If current element is not in right-most column, the append element that is above to the right to options
            if j < m-1:
                options.append(memo[i-1][j+1])

            min_option = min(options)   # Finds smallest value in options and assign it to min_option
            memo[i][j] = occupancy_probability[i][j] + min_option   # Sets current element in memo to the sum of occupancy_probability at current position

            # Checls if smallest value in memo equal to element directly above to the left of current element
            if min_option == memo[i-1][j-1]:
                # Tuple is added to select_sections to record this path
                select_sections.append((i-1, j-1))
            
            # Checks if smallest value is equal to element directly above the current element
            elif min_option == memo[i-1][j]:
                # Tuple is added to select_sections to record this path
                select_sections.append((i-1, j))

            # If neither two conditions are true, smallest value is equal to the element directly above to the right of current element
            else:
                select_sections.append((i-1, j+1))

    # Determines minimum value in last row of memo and assigns it to min_total_occupancy
    min_total_occupancy = min(memo[n-1])

    # Returns minimal total occupancy and section locations
    return min_total_occupancy, select_sections`}
            </pre>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default HPCSelect;
