import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className='ui menu'>
        <div className='logo' href='/#'>
          <h4>Gustave</h4>
        </div>
        <ul className='nav-links'>
          <li>
            <a className='item' href='/#'>
              Skills
            </a>
          </li>
          <li>
            <a className='item' href='/#'>
              Portfolio
            </a>
          </li>
          <li>
            <a className='item' href='/#'>
              Contact
            </a>
          </li>
          <li>
            <a className='item' href='/#'>
              Writing
            </a>
          </li>
        </ul>
        <div className='burger'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
