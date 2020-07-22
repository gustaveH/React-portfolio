import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Portfolio</h1>
        <div className='ui grid'>
          <div className='row'>
            <div className='eight wide column'>
              <img src={require('../images/denwize.png')} alt='Stock App' />
            </div>
            <div className='eight wide column'>
              <img src={require('../images/stocks.png')} alt='Denwize LLC' />
            </div>
          </div>
          <div className='row'>
            <div className='eight wide column'>
              <img src={require('../images/pictureApp.png')} alt='Pic App' />
            </div>
            <div className='eight wide column'>
              <img src={require('../images/blog.png')} alt='Pic App' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
