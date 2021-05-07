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
    <button>Get in touch</button>

    </div>

    </>
);

export default ContactRight;