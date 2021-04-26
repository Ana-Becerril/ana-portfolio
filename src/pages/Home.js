import React from 'react';
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain'
import NavBar from '../components/NavBar';

const Home = ()=>
(
  <div className={styles.homeContainer}>
               <NavBar />
               <HomeMain />
         </div>
  
);


export default Home;