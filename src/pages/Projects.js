import React from 'react';
import styles from '../style/projects.module.css'
import Project from '../components/Project'
import ApodD from '../images/apodd.png'
import ApodM from '../images/apodm.png'
import EggD from '../images/eggd.png'
import EggM from '../images/eggm.png'
import DrumD from '../images/drumd.png'
import DrumM from '../images/drumm.png'
import TnwD from '../images/tnwd.png'
import TnwM from '../images/tnwm.png'
import PortfolioD from '../images/portfoliod.png'
import PortfolioM from '../images/portfoliom.png'

const stacks= [{title: "JavaScript"}, { title: "CSS"}];

const Projects = () =>

  (
      <div id="projects" className={styles.projectsContainer}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.projectsList}>
        <Project
        title="APOD NASA"
        image={ApodD}
        imageMobile={ApodM}
        year="2021"
        stacksList={stacks}
        description= "A web site that show the Astronomy Picture Of the Day by the NASA. By clicking on the button, the page displays the image with its respective title and description. The images are really awesome."
        linkRepo="https://podnasa.netlify.app/"/>
        <Project
        isBlack
        title="Eggcellent Restaurante"
        image={EggD}
        imageMobile={EggM}
        year="2021"
        stacksList={stacks}
        description= "A breakfast restaurant page with client-side which allows users to toggle between the restaurant shop page, menu, and contact information."/>
          <Project
        title="Virtual Drum"
        image={DrumD}
        imageMobile={DrumM}
        year="2021"
        stacksList={stacks}
        description= "A virtual version of a drum. Each button contains a characteristic sound of this musical instrument, when pressing several buttons, these make a small melody. "/>
          <Project
        isBlack
        title="TNW Clone"
        image={TnwD}
        imageMobile={TnwM}
        year="2021"
        stacksList={stacks}
        description= "A pixel perfect responsive clone of the The Next Web website built with Grid and Flexbox. "/>
         <Project
        title="Alex's Portfolio"
        image={PortfolioD}
        imageMobile={PortfolioM}
        year="2020"
        stacksList={stacks}
        description= "A minimalist portfolio collaboratively built under the programming scheme in pairs  "/>
        </div>
      </div>
    );


export default Projects;