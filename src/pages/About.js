import React from 'react';
import styles from '../style/about.module.css'
import AboutLeft from '../components/AboutLeft'
import AboutRight from '../components/AboutRight'


const About = () =>

  (
    <div id="about" className={styles.aboutContainer}>
          <AboutLeft/>
          <AboutRight/>
      </div>
    );


export default About;