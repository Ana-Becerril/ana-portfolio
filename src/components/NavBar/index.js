import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';





const NavBar = () => (

    <div className={styles.navContainer} >
        <div className={styles.bar}>
            <div className={`${styles.home} ${styles.coolLink}`}>
            <Link spy smooth to="home"> <span className={styles.homeText}>HOME</span></Link>
            </div>
            <div className= {`${styles.about} ${styles.coolLink}`}>
            <Link spy smooth to="about"> <span className={styles.aboutText}>ABOUT</span></Link>
            </div>
            <div className= {`${styles.projects} ${styles.coolLink}`}>
            <Link spy smooth to="projects"><span className={styles.projectsText}>PROJECTS</span></Link>
            </div>
            <div className= {`${styles.contact} ${styles.coolLink}`}>
            <Link spy smooth to="contact"><span className={styles.contactText}>CONTACT</span></Link>   
            </div>
        </div>
        <div className={styles.iconsBar}>
        <a href="https://github.com/Ana-Becerril">
            <FontAwesomeIcon icon ={faGithubSquare} className={styles.githubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/anabecbel/">
            <FontAwesomeIcon icon ={faLinkedin} className={styles.linkedinIcon}/>
        </a>
        <a href="https://twitter.com/karenbecbel">
            <FontAwesomeIcon icon ={faTwitterSquare} className={styles.twitterIcon}/>
        </a>
        </div>
    </div>
);

export default NavBar;