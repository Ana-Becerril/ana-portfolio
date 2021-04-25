import React from 'react';
import styles from '../style/home.module.css'
import HomeMain from '../components/HomeMain/index.js'
import NavBar from '../components/NavBar';

const Home = ()=>
(
  <div className={styles.homeContainer}>
               <NavBar />
         </div>
  
);


export default Home;