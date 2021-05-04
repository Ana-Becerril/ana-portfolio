import { faStackpath } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './style.module.css'

const Project = ({ title, image, imageMobile, description, year, stack, stackTwo, stackThree, isBlack = false}) => (

    <div className={styles.parent}>
            <div className={styles.mokupContainer}>
                <img alt="mockup" src={image} className={styles.mokup} />
                <img alt="mockup" src={imageMobile} className={styles.mokupMobile} />
            </div>
            <div className= {styles.infoContainer}>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.titleProject}>{title}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className= {styles.year}>{year}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className= {styles.infoProject}>{description}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className= {styles.stackContainer}>
                    <div className={styles.stackTitle}>Stack:</div>
                    <div className={styles.stackList}>
                        <div className={styles.stack}>{stack}</div>
                        <div className={styles.stack}>{stackTwo}</div>
                        <div className={styles.stack}>{stackThree}</div>

                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonGithub}>REPOSITORY</div>
                    <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonLive}>LIVE DEMO</div>
                </div>
        </div>
    </div>

);

export default Project;