import React from 'react';
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain'
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


const Home = ()=>
(
  <div className={styles.homeContainer}>
               <NavBar />
               <HomeMain />
               <FontAwesomeIcon icon ={faSortDown} className={styles.arrowIcon}/>
         </div>
  
);


export default Home;