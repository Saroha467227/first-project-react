import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero 
        title="Master DSA Like a Pro!"
        subtitle="Practice coding problems • Visualize algorithms • Smart revision"
        buttonText="Start Learning"
      />
      <Features />
      <Footer />
    </div>
  );
}

export default App;