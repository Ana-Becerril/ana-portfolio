import React from 'react';
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain'
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Animista, { AnimistaTypes } from 'react-animista'


const Home = ()=>
(
  <div className={styles.homeContainer}>
               <NavBar />
               <HomeMain />
               <Animista iterationCount={300} duration="2s" type={AnimistaTypes.SLIDE_BCK_BOTTOM}>
               <FontAwesomeIcon icon ={faChevronDown} className={styles.arrowIcon}/>
               </Animista>
         </div>
  
);


export default Home;