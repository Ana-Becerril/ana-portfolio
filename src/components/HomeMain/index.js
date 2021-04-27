import React from 'react';
import styles from './style.module.css';
import TypeAnimation from '../TypeAnimation'

const HomeMain = () => (

    <div className={styles.greettingContainer} >
        <div className={styles.greetting}>
            <div className={styles.firstLine}> Hello! </div>
            <div className={styles.secondLine}> I'm Ana Becerril</div>
            <div className={styles.thirdLine}> 
            <TypeAnimation/>
            </div>
        </div>
    </div>

);

export default HomeMain;