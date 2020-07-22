import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='ui grid '>
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
