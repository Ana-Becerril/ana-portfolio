import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home' 
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NavBar from './components/NavBar/index'


const Routes = () =>
(
      <HashRouter>
         <NavBar/>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
         </Switch>
      </HashRouter>
   
);
export default Routes;