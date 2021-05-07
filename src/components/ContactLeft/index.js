import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';



const ContactLeft = () => (
    <>
    <div className={styles.parent}>
        <div className={styles.title}> Say Hello!</div>
        <p className={styles.body}> ⭐If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it. You can contact me via the Contact Form or simply click on the social media icon. Let's connect⭐</p>
        <div className={styles.iconsBar}>
        <a href="https://github.com/Ana-Becerril">
            <FontAwesomeIcon icon ={faGithubSquare} className={styles.githubIcon}/>
        </a>
            <FontAwesomeIcon icon ={faLinkedin} className={styles.linkedinIcon}/>
            <FontAwesomeIcon icon ={faTwitterSquare} className={styles.twitterIcon}/>
        </div>
    </div>
    </>
);

export default ContactLeft;