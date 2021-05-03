import React from 'react';
import styles from './style.module.css'

const Project = ({ title, image, imageMobile, isBlack = false, isCentered = false }) => (

    <div style={{ width: isCentered ? '100%' : '50%' }} className={styles.parent}>
        <div className={styles.projectOne}>
            <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.titleProject}>{title}</div>
            <div className={styles.mokupContainer}>
                <img alt="mockup"src={image} className={styles.mokup} />
                <img alt="mockup"src={imageMobile} className={styles.mokupMobile} />
            </div>
            <div className={styles.buttonsContainer}>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonGithub}>REPOSITORY</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonLive}>LIVE DEMO</div>
            </div>
        </div>
    </div>

);

export default Project;