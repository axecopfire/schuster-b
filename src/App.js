import React from 'react';
import './App.css';
import ParticleComp from './components/particles';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ParticleComp />
    </div>
  );
}

export default App;
