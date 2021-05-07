import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';





const NavBar = () => (

    <div className={styles.navContainer} >
        <div className={styles.bar}>
            <div className= {styles.home}>
            <Link spy smooth to="home">HOME</Link>
            </div>
            <div className= {styles.about}>
            <Link spy smooth to="about">ABOUT</Link>
            </div>
            <div className= {styles.projects}>
            <Link spy smooth to="projects">PROJECTS</Link>
            </div>
            <div className= {styles.contact}>
            <Link spy smooth to="contact">CONTACT</Link>   
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