import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <footer>
          <p>
            <a
              href='https://www.gustavehabimana.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              With
              <span role='img' aria-label='green-heart'>
                💚
              </span>
              by Gustave
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
