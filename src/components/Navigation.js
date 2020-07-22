import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className='ui menu navbar'>
        <a className='active left floated item' href='/#'>
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
        <a className='item' href='/#'>
          Writing
        </a>
      </div>
    );
  }
}

export default Navigation;
