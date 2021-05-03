import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const ContactLeft = () => (
    <>
    <div className={styles.parent}>
        <div className={styles.title}> Say Hello!</div>
        <p className={styles.body}> ⭐If you have any queries/ideas/projects, feel free to let me know. You can contact me via the Contact Form or simply click on the social media icon if you are more comfortable there.⭐</p>
        <div className={styles.iconsBar}>
            <FontAwesomeIcon icon ={faGithubSquare} className={styles.githubIcon}/>
            <FontAwesomeIcon icon ={faLinkedin} className={styles.linkedinIcon}/>
            <FontAwesomeIcon icon ={faTwitterSquare} className={styles.twitterIcon}/>
        </div>
    </div>
    </>
);

export default ContactLeft;