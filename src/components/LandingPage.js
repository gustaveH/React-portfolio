import React from 'react';
import '../css/App.css';
import Navigation from './Navigation';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className='ui menu navbar'>
          <a className='active item' href='/#'>
            About me
          </a>
          <a className='item' href='/#'>
            Skills
          </a>
          <a className='item' href='/#'>
            Portfolio
          </a>
          <a className='item' href='/#'>
            Contact
          </a>
        </div>
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
