import React from 'react';
import styles from './style.module.css';


const Modal = props => {

    if (!props.show) {
        return null
    }

    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.parent}>
                    <form>
                        <input type="text" className={styles.fname} value="Name"></input>
                        <input type="text" className={styles.fmail} value="Email"></input>
                        <input type="text" className={styles.fbody} value=""></input>
                    </form>
                    <button className={styles.DVersion}>Get in touch</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;