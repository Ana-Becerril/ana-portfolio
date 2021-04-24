import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home' 
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import styles from './style/routes.module.css';
import particles from './particle.js';
import Particles from 'react-particles-js';


const Routes = () =>
(
   <div className={styles.RouterContainer}>
      <div id="particles-js"></div>

      <div class={styles.Particles}>
         <Particles
         params={particles}
         className="particle"
         />
      </div>

      <HashRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
         </Switch>
      </HashRouter>
   </div>
);
export default Routes;