import React from 'react';
import styles from '../style/projectstwo.module.css'
import Project from '../components/Project'
import EggD from '../images/eggd.png'
import EggM from '../images/eggm.png'

const stacks= [{title: "JavaScript"}, { title: "CSS"}];
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
      stackList={stacks}
      description= "A breakfast restaurant page with client-side which allows users to toggle between the restaurant shop page, menu, and contact information."/>
      </div>
    </div>

    );


export default ProjectsTwo;


//