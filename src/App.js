import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import { initAnalytics } from './utils/analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Identity from './components/Identity';
import HomeGrounds from './components/HomeGrounds';
import Rivalry from './components/Rivalry';
import History from './components/History';
import Alumni from './components/Alumni';
import TechnicalTeam from './components/TechnicalTeam';
import Teams from './components/Teams';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize analytics
    initAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          <SEO />
          <Navbar />
          <Hero />
          <About />
          <Identity />
          <HomeGrounds />
          <Rivalry />
          <History />
          <Alumni />
          <TechnicalTeam />
          <Teams />
          <Gallery />
          <Calendar />
          <Contact />
          <Legacy />
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;

