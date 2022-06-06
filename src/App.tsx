import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import About from './Components/About';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Portfolio />
      <About />
    </React.Fragment>
  );
}

export default App;
