import '../css/App.css';
import React from 'react';
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
