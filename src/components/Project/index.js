import { faStackpath } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './style.module.css'

const Project = ({ title, image, imageMobile, description, year, stacksList, stack, stackTwo, stackThree, isBlack = false}) => {
    return (

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
                        <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.stackTitle}>Stack:</div>
                        <div className={styles.stackList}>
                          {(stacksList && stacksList.length > 0 ) ? (
                            <>
                                {stacksList.map(item => {
                                    return (
                                        <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.stack}>⭐{item.title}</div>                                
                                    )
                                })}
                            </>      
                          ) : (<p>nothing here</p>)}
                        </div>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonGithub}>REPOSITORY</div>
                        <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.buttonLive}>LIVE DEMO</div>
                    </div>
            </div>
        </div>
    
    );
}

export default Project;