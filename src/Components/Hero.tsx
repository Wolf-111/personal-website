import React from 'react';
import landingLogo from '../images/landing-logo.png';
import '../App.css';

const Hero = () => {
  return (
    <div className='container-fluid hero'>
      <div className='hero-content row'>
          <img className='hero-image' src={landingLogo} />
        <div className='hero-text col-lg'>
          <h1 className='hero-title '>Brandon Dalbec</h1>
          <p className='hero-subtitle'>Software Developer</p>
          <div className='hero-buttons'>
            <button className='hero-button'>Portfolio</button>
            <button className='hero-button'>About Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
