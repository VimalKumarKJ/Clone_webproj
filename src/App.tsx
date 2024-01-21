import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureCols from './components/FeatureSpecs'
import FeatureTabs from './components/FeaturesTab';
import Banner from './components/Banner';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <FeatureCols/>
      <FeatureTabs/>
      <Banner/>
      <Blog/>
    </div>
  );
}

export default App;
