import React from 'react';
import styles from '../style/projects.module.css'
import Project from '../components/Project'
import ApodD from '../images/apodd.png'
import ApodM from '../images/apodm.png'

const stacks= [{title: "JavaScript"}, { title: "CSS"}];

const Projects = () =>

  (
      <div className={styles.projectsContainer}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.projectsList}>
        <Project
        title="APOD NASA"
        image={ApodD}
        imageMobile={ApodM}
        year="2021"
        stacksList={stacks}
        description= "A web site that show the Astronomy Picture Of the Day by the NASA. By clicking on the button, the page displays the image with its respective title and description. The images are really awesome."/>
        </div>
      </div>
    );


export default Projects;