import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './Components/Landing-Page/Home';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Beginner from './Components/Beginner/begin';
import Intermediate from './Components/Intermediate/intermediate';
import Advanced from './Components/Advanced/advanced';
import Caru from './Components/LandingLoggedIn/carousel'
import Graph from './Components/LandingLoggedIn/graph'
import Trees from './Components/LandingLoggedIn/trees'

import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();
function App() {
  return (
    <div className="App">
      
     <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path="/beginner" component={Beginner} /> 
          <Route path="/intermediate" component={Intermediate}/> 
          <Route path="/advanced" component={Advanced}/> 
          <Route path='/landingloggedin' component={Caru} />     
          <Route path="/graph" component={Graph} />  
          <Route path="/treee" component={Trees} />  
          
        </Switch>
     </Router>
  
   
      
    </div>
    
  );
}

export default App;
