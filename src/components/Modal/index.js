import React from 'react';
import styles from './style.module.css';


const Modal = props => {

    if (!props.show) {
        return null
    }
//hacer un botón que cierre el modal
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.parent}>
                <div className={styles.closebContainer}>
                <button className={styles.closeb} onClick={props.onClose}>X</button>
                </div>
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