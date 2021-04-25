import React from 'react';
import styles from './style.module.css';

const NavBar = () => (

    <div className={styles.navContainer} >
        <div className={styles.bar}>
            <div className= {styles.home}>HOME</div>
            <div className= {styles.about}>ABOUT</div>
            <div className= {styles.projects}>PROJECTS</div>
            <div className= {styles.contact}>CONTACT</div>
        </div>
    </div>








);

export default NavBar;