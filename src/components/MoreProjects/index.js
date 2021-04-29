import React from 'react';
import styles from './style.module.css'
import TnwD from '../../images/tnwd.png'

const MoreProjects = () => (

    <div className={styles.parent}>
        <div className={styles.projectOne}>
        <div className={styles.title}>TNW Responsive Clone</div>
        <img src={TnwD} className={styles.tnwd}/>
        </div>
    </div>

);

export default MoreProjects;