import React from 'react';
import styles from '../style/projects.module.css'
import ProjectsLeft from '../components/ProjectsLeft'
import ProjectsRight from '../components/ProjectsRight'

const Projects = () =>

  (
      <div className={styles.projectsContainer}>
        <ProjectsLeft/>
        <ProjectsRight/>
      </div>
    );


export default Projects;