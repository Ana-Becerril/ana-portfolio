import React from 'react';
import styles from './style.module.css'

const Project = ({title, image, isBlack=false}) => (

    <div className={styles.parent}>
        <div className={styles.projectOne}>
            <div className={styles.titleProject}>{title}</div>
            <img src={image} className={styles.mokup} />
            <div className={styles.buttonsContainer}>
            <div className={styles.buttonGithub}>REPOSITORY</div>
            <div className={styles.buttonLive}>LIVE DEMO</div>
            </div>
        </div>
    </div>

);

export default Project;