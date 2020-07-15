import '../css/App.css';
import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Porfolio';
import Contact from './Contact';
import Footer from './Footer';
import LandingPage from './LandingPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <LandingPage />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
