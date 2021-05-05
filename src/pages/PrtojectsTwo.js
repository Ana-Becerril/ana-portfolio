import React from 'react';
import styles from '../style/projectstwo.module.css'
import Project from '../components/Project'
import EggD from '../images/eggd.png'
import EggM from '../images/eggm.png'

const ProjectsTwo = ({isBlack, imageMobile}) =>


  (
    <div className={styles.projectsContainer}>
    <div className={styles.projectsList}>
      <Project
      isBlack={isBlack}
      title="Eggcellent Restaurant"
      image={EggD}
      imageMobile={EggM}
      year="2021"
      description= "A web site that show the Astronomy Picture Of the Day by the NASA. By clicking on the button, the page displays the image with its respective title and description. The images are really awesome."
      stack="⭐JavaScript"
      stackTwo="⭐CSS"/>
      </div>
    </div>

    );


export default ProjectsTwo;


//