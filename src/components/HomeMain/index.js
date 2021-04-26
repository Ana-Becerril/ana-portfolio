import React from 'react';
import styles from './style.module.css';

const HomeMain = () => (

    <div className={styles.greettingContainer} >
        <div className={styles.greetting}>
            <div className={styles.firstLine}> Hello! </div>
            <div className={styles.secondLine}> I'm Ana Becerril</div>
            <div className={styles.thirdLine}> Frontend Developer </div>
        </div>
    </div>

);

export default HomeMain;