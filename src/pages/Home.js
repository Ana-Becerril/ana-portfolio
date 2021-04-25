import React from 'react';
import styles from '../style/home.module.css'
import particles from '../constants/particle.js'
import Particles from 'react-particles-js';
import HomeMain from '../components/HomeMain/index.js'

const Home = ()=>
(
  <div className={styles.HomeContainer}>
      <div id="particles-js">
      </div>
      <div class={styles.Particles}>
         <Particles
         params={particles}
         className="particle"
         />
         </div>
         
</div>
  
);


export default Home;