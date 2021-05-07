import React from 'react';
import styles from '../style/contact.module.css'
import ContactLeft from '../components/ContactLeft'
import ContactRight from '../components/ContactRight'

const Contact= () =>
  ( <>
      <div id="contact" className={styles.contactContainer}>
      <div className={styles.title}>CONTACT</div>
      <div className={styles.contactParent}>
          <ContactLeft/>
          <ContactRight/>
          </div>
      </div>
      </>
    );


export default Contact;