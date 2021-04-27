import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home' 
import About from './pages/About'
import Projects from './pages/Projects'
import particles from './constants/particle.js'
import Particles from 'react-particles-js';
import styles from './style/routes.module.css'
import Contact from './pages/Contact'
import NavBar from './components/NavBar/index'


const Routes = () =>
(
      <HashRouter>
      <div id="particles-js">
      </div>
      <div className={styles.particle}>
         <Particles
         params={particles}
         className="particle"
         />
               <NavBar />
         </div>
         <Switch>
               <div className={styles.routerContainer}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </div>
         </Switch>
      </HashRouter>
   
);
export default Routes;