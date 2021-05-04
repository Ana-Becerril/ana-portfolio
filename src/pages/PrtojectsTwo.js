import React from 'react';
import styles from '../style/projectstwo.module.css'
import Project from '../components/Project'
import TnwD from '../images/tnwd.png'
import TnwM from '../images/tnwm.png'
import PortfolioD from '../images/portfoliod.png'
import PortfolioM from '../images/portfoliom.png'

const ProjectsTwo = ({isBlack, imageMobile}) =>


  (
    <div className={styles.projectsContainer}>
    <div className={styles.projectsList}>
      <Project
      isBlack={isBlack}
      title="TNW Clone"
      image={TnwD}
      imageMobile={TnwM}/>
      </div>
    </div>

    );


export default ProjectsTwo;


//