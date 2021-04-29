import React from 'react';
import styles from './style.module.css'
import EggD from '../../images/eggd.png'


const ProjectsRight = () => (

    <div className={styles.parent}>
        <div className={styles.projectOne}>
        <img src={EggD} className={styles.eggd}/>
        </div>
    </div>

);

export default ProjectsRight;