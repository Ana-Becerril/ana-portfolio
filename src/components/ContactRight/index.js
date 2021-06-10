import React from 'react';
import styles from './style.module.css';
import Modal from '../Modal'
import { useState } from 'react';
import { send } from 'emailjs-com';


const ContactRight = () => {

        const [show, setShow] = useState(false);
        return (
        <>
            <div className={styles.parent}>

                <form>
                    <input type="text" className={styles.fname} value="Name"></input>
                    <input type="text" className={styles.fmail} value="Email"></input>
                    <input type="text" className={styles.fbody} value=""></input>
                </form>
                <button className={styles.DVersion}>Get in touch</button>
                <button onClick={() => setShow(true)} className={styles.MVersion}>Contact Form</button>
                <Modal onClose={() => setShow(false)} show={show} className={styles.modal} />
            </div>

        </>
        )
    };

    export default ContactRight;