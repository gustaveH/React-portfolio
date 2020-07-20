import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='ui three column grid'>
        <div className='column'>
          <div className='ui segment'>
            <img src={require('../images/stocks.png')} alt='Stock App' />
          </div>
        </div>
        <div className='column'>
          <div className='ui segment'>
            <img src={require('../images/denwize.png')} alt='Denwize LLC' />
          </div>
        </div>
        <div className='column'>
          <div className='ui segment'>
            <img src={require('../images/pictureApp.png')} alt='Pic App' />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
