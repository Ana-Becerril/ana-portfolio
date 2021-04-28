import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const AboutRight = () => (

    <div className={styles.parent}>
        <div className={styles.console}>
            <div className={styles.header}>
                <div className={styles.circlesContainer}>
                <FontAwesomeIcon icon ={faCircle} className={styles.redCircle}/>
                <FontAwesomeIcon icon ={faCircle} className={styles.yellowCircle}/>
                <FontAwesomeIcon icon ={faCircle} className={styles.greenCircle}/>
                </div>
            </div>
            <div className={styles.body}>
                <p> Hi my name is Ana. I enjoy beautiful and functional web design.
Among my main technical skills are HTML / CSS / JS / UX/ Responsive Design / Photoshop.
 </p>
            </div>
        </div>
    </div>

);

export default AboutRight;