import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home' 
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Routes = () =>
(
   <>
      <HashRouter>
      <Switch>
           <Route exact path = "/" component = {Home} />
           <Route path = "/about" component = {About} />
           <Route path = "/projects" component = {Projects} />
           <Route path = "/contact" component = {Contact} />
     </Switch>
   </HashRouter>
</>
);
export default Routes;
//
//return (
//   <div className={styles.rootContainer}>
//     <HashRouter>
//       <Switch>
//         <Route exact path="/" component={Auth} />
//         <Route path="/dashboard" component={Home} />
//         <Route path="/business/raw_materials" component={RawMaterialsListComponent} />
//       </Switch>
//     </HashRouter>
//   </div>
// );
//};
//
//Routes.propTypes = {
 //logIn: Proptypes.func.isRequired,
//};
//
//const mapStateTopProps = dispatch => ({
// logIn: loginParams => dispatch(logIn(loginParams)),
//});
//
//export default connect(null, mapStateTopProps)(Routes);
//
//