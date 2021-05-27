import React from 'react';
import About from './About'
import Projects from './Projects';
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Animista, { AnimistaTypes } from 'react-animista'
import Contact from './Contact';


const Home = () =>
(
      <div>
            <div id="particles-js"></div>
            <div id="home" className={styles.homeContainer}>
                  <HomeMain />
                  <Animista iterationCount={300} duration="1s" type={AnimistaTypes.SLIDE_BCK_BOTTOM}>
                        <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon} />
                  </Animista>
            </div>
            <div>
                  <About />
            </div>
            <div>
                  <Projects />
            </div>
            <div>
                  <Contact/>
            </div>

      </div>


);


export default Home;