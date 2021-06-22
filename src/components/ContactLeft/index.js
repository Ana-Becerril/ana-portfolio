import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare,faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';



const ContactLeft = () => (
    <>
    <div className={styles.parent}>
        <div className={styles.title}> Say Hello!</div>
        <p className={styles.body}> ⭐If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it. You can contact me via mail or simply click on the social media icon. Let's connect⭐</p>
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
        <a href="https://wa.me/525585516701">
            <FontAwesomeIcon icon ={faWhatsappSquare} className={styles.whatsappIcon}/>
        </a>
        </div>
        <p className={styles.or}> Or </p>
        <a href="mailto:anabecdev@gmail.com?subject=Mail%20from%20Ana's%20Portfolio&body=Hi%2C%20Ana!%0D%0A">
        <button className={styles.buttonMail}> Send a mail </button>
        </a>
    </div>
    </>
);

export default ContactLeft;