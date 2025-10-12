import React from 'react';
import BlurText from '../components/BlurText';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import Waves from '../components/Waves';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* Wave Background */}
      <Waves
        lineColor="#f3b0c4"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={0}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Content */}
      <div className="home-content">
        <BlurText
          text="My Virtual Space"
          className="home-title"
          delay={250}
          animateBy="words"
          direction="top"
          stepDuration={0.6}
        />

        <TypeWriter
          text="Hi! Welcome to my virtual portfolio."
          className="home-subtext"
          delay={2}
          speed={50}
        />
        
        <TypeWriter
          text="Feel free to explore this space :)"
          className="home-subtext"
          delay={4.5}
          speed={50}
        />
      </div>

      {/* Scroll Prompt - positioned outside content to avoid blur */}
      <div className="scroll-prompt-container">
        <p className="scroll-prompt">Scroll</p>
        <p className="scroll-prompt">-`♡´-</p>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay-bottom"></div>
    </section>
  );
};

export default Home;