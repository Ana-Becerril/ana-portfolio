import React from 'react';
import styles from '../style/projects.module.css'
import ProjectsLeft from '../components/ProjectsLeft'
import ProjectsRight from '../components/ProjectsRight'

const Projects = () =>

  (
      <div className={styles.projectsContainer}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.projectsList}>
        <ProjectsLeft/>
        <ProjectsRight/>
        </div>
      </div>
    );


export default Projects;