import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';




const NavBar = () => (

    <div className={styles.navContainer} >
        <div className={styles.bar}>
            <div className= {styles.home}>HOME</div>
            <div className= {styles.about}>ABOUT</div>
            <div className= {styles.projects}>PROJECTS</div>
            <div className= {styles.contact}>CONTACT</div>
        </div>
        <div className={styles.iconsBar}>
            <FontAwesomeIcon icon ={faGithubSquare} className={styles.githubIcon}/>
            <FontAwesomeIcon icon ={faLinkedin} className={styles.linkedinIcon}/>
            <FontAwesomeIcon icon ={faTwitterSquare} className={styles.twitterIcon}/>
        </div>
    </div>
);

export default NavBar;