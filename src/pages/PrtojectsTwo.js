import React from 'react';
import styles from '../style/projectstwo.module.css'
import Project from '../components/Project'
import TnwD from '../images/tnwd.png'

const ProjectsTwo = () =>

  (
    <div className={styles.projectsContainer}>
    <div className={styles.projectsList}>
      <Project
      title="TNW Clone"
      image={TnwD}/>
      </div>
    </div>

    );


export default ProjectsTwo;