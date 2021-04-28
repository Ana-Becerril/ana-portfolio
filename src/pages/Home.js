import React from 'react';
import About from './About'
import Projects from './Projects';
import particles from '../constants/particle.js'
import Particles from 'react-particles-js';
import NavBar from '../components/NavBar/index'
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Animista, { AnimistaTypes } from 'react-animista'


const Home = () =>
(
      <div>
            <div id="particles-js"></div>
            <div className={styles.particle}>
                  <Particles params={particles} className="particle" />
                  <NavBar />
            </div>
            <div className={styles.homeContainer}>
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

      </div>


);


export default Home;