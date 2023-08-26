import './index.scss';

const About = () => {
    return (
        <div className='about-page'>
            <div className='flex-container'>
                <input type='button' className='selection-button' value='Lighting' title='Lighting'></input>
                <input type='button' className='selection-button' value='Web Development' title='Web Development'></input>
                <input type='button' className='selection-button' value='Video Editing' title='Video Editing'></input>
            </div>
        </div>
    )
}

export default About;