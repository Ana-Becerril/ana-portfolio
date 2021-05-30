import React from 'react';
import styles from './style.module.css';


const ContactRight = () => (
    <>
    <div className={styles.parent}>
    
    <form>
    <input type="text" className={styles.fname} value="Name"></input>
    <input type="text" className={styles.fmail} value="Email"></input>
    <input type="text" className={styles.fbody} value=""></input>
    </form>
    <button className={styles.DVersion}>Get in touch</button>
    <button className={styles.MVersion}>Contact Form</button>
    </div>

    </>
);

export default ContactRight;