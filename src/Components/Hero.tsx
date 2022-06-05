import React from 'react';
import landingLogo from '../images/landing-logo.png';
import '../App.css';

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero-content row'>
        <img className='hero-image col-lg-12' src={landingLogo} />
        <div className='hero-text col-lg'>
          <h1>Brandon Dalbec</h1>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
