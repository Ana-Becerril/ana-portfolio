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

                <form onSubmit={onSubmit}>
                    <input 
                    type="text" 
                    className={styles.fname} 
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    >
                    </input>
                    <input 
                    type="text" 
                    className={styles.fmail} 
                    value="Email"
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}>
                    </input>
                    <input 
                    type="text" 
                    className={styles.fbody} 
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    >
                    </input>
                </form>
                <button className={styles.DVersion}>Get in touch</button>
                <button onClick={() => setShow(true)} className={styles.MVersion}>Contact Form</button>
                <Modal onClose={() => setShow(false)} show={show} className={styles.modal} />
            </div>

        </>
        )
    };

    export default ContactRight;