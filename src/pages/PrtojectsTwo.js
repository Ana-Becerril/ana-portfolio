import React from 'react';
import styles from '../style/projectstwo.module.css'
import Project from '../components/Project'
import TnwD from '../images/tnwd.png'
import TnwM from '../images/tnwm.png'

const ProjectsTwo = ({isBlack, isCentered, imageMobile}) =>


  (
    <div className={styles.projectsContainer}>
    <div className={styles.projectsList}>
      <Project
      isBlack={isBlack}
      isCentered={isCentered}
      title="TNW Clone"
      image={TnwD}
      imageMobile={TnwM}/>
      </div>
    </div>

    );


export default ProjectsTwo;


//