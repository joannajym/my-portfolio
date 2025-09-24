import React from 'react';
import BlurReveal from '../components/BlurReveal';
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
        <BlurReveal
          text="My Virtual Space"
          className="home-title"
          delay={0.3}
          duration={1.5}
          blurAmount={6}
          revealDistance={60}
        />

        <BlurReveal
          text="Hi! Welcome to my virtual portfolio."
          className="home-subtext"
          delay={0.7}
          duration={1.4}
          blurAmount={4}
          revealDistance={40}
        />

        <BlurReveal
          text="Feel free to explore this space :)"
          className="home-subtext"
          delay={1.1}
          duration={1.4}
          blurAmount={4}
          revealDistance={40}
        />

        <div className="scroll-prompt-container">
          <p className="scroll-prompt">Scroll</p>
          <p className="scroll-prompt">-`♡´-</p>
        </div>
      </div>

      {/* Transition Overlay */}
      <div className="transition-overlay"></div>

      {/* Intro Section */}
      <div className="intro-section">
        <div className="intro-container">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Thank you for visiting my website! 
            Here, you can find archives of all the projects that I've worked on throughout my academic years. 
            I hope to continue making meaningful projects that sparks joy in my life.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Home;