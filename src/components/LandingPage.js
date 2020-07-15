import React from 'react';
import '../css/App.css';
import Navigation from './Navigation';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='ui LandingPage'>
          <h1 className='landing'>Landing Page!</h1>
          <div className='green-button'>
            <button className='ui green button'>Enter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
