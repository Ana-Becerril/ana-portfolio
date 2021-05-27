import React from 'react';
import styles from './style.module.css'

const Project = ({ title, image, imageMobile, description, year, stacksList, isBlack = false, linkRepo, linkLive }) => {
    return (

        <div style={{ backgroundColor: isBlack ? 'rgb(236, 182, 2)' : 'black' }} className={styles.parent}>
            <div className={styles.mokupContainer}>
                <img alt="mockup" src={image} className={styles.mokup} />
                <img alt="mockup" src={imageMobile} className={styles.mokupMobile} />
            </div>
            <div className={styles.infoContainer}>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.titleProject}>{title}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.year}>{year}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.infoProject}>{description}</div>
                <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.stackContainer}>
                    <div style={{ color: isBlack ? 'black' : 'white' }} className={styles.stackTitle}>Stack:</div>
                    <div className={styles.stackList}>
                        {(stacksList && stacksList.length > 0) ? (
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
                <a href={linkRepo} style={{ color: isBlack ? 'black' : 'white' }} className= {`${styles.buttonGithub} ${styles.coolLink}`}>REPOSITORY</a>

                <div style={{ color: isBlack ? 'black' : 'white' }} className={`${styles.buttonLive} ${styles.coolLink}`}>LIVE DEMO</div>
                </div>
            </div>
        </div>

    );
}

export default Project;