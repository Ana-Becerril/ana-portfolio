import React from 'react';
import styles from '../style/projects.module.css'
import Project from '../components/Project'
import ApodD from '../images/apodd.png'
import EggD from '../images/eggd.png'


const Projects = () =>

  (
      <div className={styles.projectsContainer}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.projectsList}>
        <Project
        title="APOD NASA"
        image={ApodD}/>
        <Project
        title="Eggcellent Restaurant"
        image={EggD}/>
        </div>
      </div>
    );


export default Projects;