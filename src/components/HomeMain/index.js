import React from 'react';
import particles from '../../constants/particle'
import Particles from 'react-particles-js';
import styles from './style.module.css';
import TypeAnimation from '../TypeAnimation'

const HomeMain = () => (
    <>
    <Particles params={particles} className={styles.particle}/>
    <div className={styles.greettingContainer} >
        <div className={styles.greetting}>
            <div className={styles.firstLine}> Hello! </div>
            <div className={styles.secondLine}> I'm Ana Becerril</div>
            <div className={styles.thirdLine}> 
            <TypeAnimation/>
            </div>
        </div>
    </div>
</>
);

export default HomeMain;