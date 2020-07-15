import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <div className='skill'>
          <div className='skill-name'>HTML</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>CSS3</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>Javascript</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>React</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>Ruby on Rails</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>SQL</div>
          <div className='skill-bar'>
            <div className='skill-per' per='90'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
