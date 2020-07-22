import React from 'react';

import SkillBar from 'react-skillbars';

const skillsOne = [
  { type: 'HTML', level: 85 },
  { type: 'CSS', level: 80 },
  { type: 'JavaScript', level: 75 },
];
const skillsTwo = [
  { type: 'React', level: 70 },
  { type: 'Ruby/Rails', level: 70 },
  { type: 'SQL', level: 75 },
];
const colors = {
  bar: '#333333',
  title: {
    text: '#fff',
    background: '#ff5c33',
  },
};

class Skills extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <div className='sectionLinks'>
          <h1>Skills</h1>
        </div>
        <div className='eight wide column'>
          <SkillBar skills={skillsOne} height={40} colors={colors} />
        </div>
        <div className='eight wide column'>
          <SkillBar skills={skillsTwo} height={40} colors={colors} />
        </div>
      </div>
    );
  }
}

export default Skills;
