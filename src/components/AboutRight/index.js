import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const AboutRight = () => (

    <div className={styles.parent}>
        <div className={styles.title}>ABOUT ME</div>
        <div className={styles.console}>
            <div className={styles.header}>
                <div className={styles.circlesContainer}>
                <FontAwesomeIcon icon ={faCircle} className={styles.redCircle}/>
                <FontAwesomeIcon icon ={faCircle} className={styles.yellowCircle}/>
                <FontAwesomeIcon icon ={faCircle} className={styles.greenCircle}/>
                </div>
            </div>
            <div className={styles.body}>
                <p> 👋Hi, I'm Ana Becerril a Frontend Developer helping to make the digital world a pleasant and user-friendly place through the use of technologies 👩‍💻.  One of my great passions is making interfaces that are attractive and usable for anyone.  I learn easily (and I continue to do so), discipline and perseverance are values ​​that define me.  If you like what you see, contact me.⭐
                </p>
            </div>
        </div>
    </div>

);

export default AboutRight;