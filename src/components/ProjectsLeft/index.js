import React from 'react';
import styles from './style.module.css'
import ApodD from '../../images/apodd.png'

const ProjectsLeft = () => (

    <div className={styles.parent}>
        <div className={styles.projectOne}>
        <img src={ApodD} className={styles.apodd}/>
        </div>
    </div>

);

export default ProjectsLeft;