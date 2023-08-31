import { useState } from 'react';
import EventLighting from './Event Lighting';
import './index.scss';

const About = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className='about-page'>
      <div className='section-select flex-container'>
        <input
          type='button'
          className={`selection-button ${activeButton === 'Event Lighting' ? 'active' : ''}`}
          value='Event Lighting'
          title='Event Lighting'
          onClick={() => handleButtonClick('Event Lighting')}
        />
        <input
          type='button'
          className={`selection-button ${activeButton === 'Web Development' ? 'active' : ''}`}
          value='Web Development'
          title='Web Development'
          onClick={() => handleButtonClick('Web Development')}
        />
        <input
          type='button'
          className={`selection-button ${activeButton === 'Video Editing' ? 'active' : ''}`}
          value='Video Editing'
          title='Video Editing'
          onClick={() => handleButtonClick('Video Editing')}
        />
      </div>
      <EventLighting />
    </div>
  );
};

export default About;
