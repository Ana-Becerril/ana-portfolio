import React from 'react';
import styles from '../style/contact.module.css'
import ContactLeft from '../components/ContactLeft'
import ContactRight from '../components/ContactRight'

const Contact= () =>
  ( <>
      <div className={styles.contactContainer}>
        
          <ContactLeft/>
          <ContactRight/>
      </div>
      </>
    );


export default Contact;