import React, { useState } from 'react';
import EventLighting from './Event Lighting';
import WebDevelopment from './Web Development';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { label: 'Event Lighting', value: 'Event Lighting' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Video Editing', value: 'Video Editing' },
  ];

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const renderSelectedComponent = () => {
    switch (activeButton) {
      case 'Event Lighting':
        return <EventLighting />;
      /*case 'Web Development':
        return <WebDevelopment />;*/
      default:
        return null;
    }
  };

  return (
    <div className="about-page">
      <div className="section-select flex-container">
        {buttons.map((button) => (
          <input
            key={button.value}
            type="button"
            className={`selection-button ${activeButton === button.value ? 'active' : ''}`}
            value={button.label}
            title={button.label}
            onClick={() => handleButtonClick(button.value)}
          />
        ))}
      </div>
      {renderSelectedComponent()}
      <Loader type="pacman" />
    </div>
  );
};

export default About;
