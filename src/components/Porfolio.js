import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <div className='sectionLinks'>
          <h1>Portflio</h1>
        </div>
        <div className='ui four column'>
          <div className='column'>
            <div className='ui segment'>
              <img src={require('../images/denwize.png')} alt='Stock App' />
            </div>
          </div>
          <div className='column'>
            <div className='ui segment'>
              <img src={require('../images/stocks.png')} alt='Denwize LLC' />
            </div>
          </div>
          <div className='column'>
            <div className='ui segment'>
              <img src={require('../images/pictureApp.png')} alt='Pic App' />
            </div>
          </div>
          <div className='column'>
            <div className='ui segment'>
              <img src={require('../images/blog.png')} alt='Pic App' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
