import React from 'react';
import '../css/App.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='ui LandingPage'>
        <h1 className='landing'>Landing Page!</h1>
        <div className='green-button'>
          <button className='ui green button'>Enter</button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
