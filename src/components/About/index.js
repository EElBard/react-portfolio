import EventLighting from './Event Lighting';
import './index.scss';

const About = () => {
    return (
        <div className='about-page'>
            <div className='section-select flex-container'>
                <input type='button' activeclassname='active' className='selection-button' value='Event Lighting' title='Event Lighting'></input>
                <input type='button' activeclassname='active' className='selection-button' value='Web Development' title='Web Development'></input>
                <input type='button' activeclassname='active' className='selection-button' value='Video Editing' title='Video Editing'></input>
            </div>
            <EventLighting />
        </div>
    )
}

export default About;