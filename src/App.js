import React from 'react';
import './styles/App.css';
import ParticleComp from './components/particles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ParticleComp />
    </div>
  );
}

export default App;
