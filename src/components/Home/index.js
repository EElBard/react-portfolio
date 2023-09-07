import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-e.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useInsertionEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = "than,".split('')
  const jobArray = "Web Developer.".split('')

  useInsertionEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (<>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
        <img src={LogoTitle} alt="e" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={17} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={21} />
        </h1>
        <h2>Frontend Developer / Lighting Designer / Video Editor</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home