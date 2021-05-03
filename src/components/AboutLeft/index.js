import React from 'react';
import styles from './style.module.css'
import ProfileAna from '../../images/profileana.jpg'

const AboutLeft = () => (

    <div className={styles.parent}>
        <div className= { styles.photoContainer }>
        <img alt="Ana Picture" src={ProfileAna} className={styles.profileAna}/>
        </div>
    </div>

);

export default AboutLeft;