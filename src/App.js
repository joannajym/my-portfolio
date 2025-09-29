import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import DinerFinder from './projects/DinerFinder';
import HPCSelect from './projects/HPCSelect';
import SchrodingersHunt from './projects/SchrodingersHunt';
import WeatheredGameOfOz from './projects/WeatheredGameOfOz';
import COVID19ProsocialBehaviour from './projects/COVID19ProsocialBehaviour';
import NLPNetworkAnalysis from './projects/NLPNetworkAnalysis';
import PhishingWebsiteClassification from './projects/PhishingWebsiteClassification';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/diner-finder" element={<DinerFinder />} />
          <Route path="/hpc-select" element={<HPCSelect />} />
          <Route path="/schrodingers-hunt" element={<SchrodingersHunt />} />
          <Route path="/weathered-game-of-oz" element={<WeatheredGameOfOz />} />
          <Route path="/covid-prosocial-behaviour" element={<COVID19ProsocialBehaviour />} />
          <Route path="/nlp-network-analysis" element={<NLPNetworkAnalysis />} />
          <Route path="/phishing-website-classification" element={<PhishingWebsiteClassification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;