import '../css/App.css';
import image from '../images/profile.jpg';
import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <div className='six wide column'>
          <img className='profilePic' alt='/#' src={image}></img>
        </div>
        <div className='ten wide column'>
          <div className='about-me'>
            <h1>Hello,</h1>
            <p className='intro'>
              My name is Gustave Habimana and I am a Software Engineer with a
              passion for creating friendly and responsive applications. I have
              been in the tech industry for 2 years now. I love to learn new
              technologies while continuing to perfect the current best
              practices. My current languages are JavaScript, ReactJS, Ruby on
              Rails, SQL, Html , CSS3 but I am always up for the challenge of
              learning more. I am looking to collaborate with others on new
              projects in order expand my skill set or help someone else reach
              their dreams through my passion for coding.
            </p>
            <button className='ui teal button'>Resume</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
