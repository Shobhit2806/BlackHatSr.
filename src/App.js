import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './Components/Landing-Page/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import ChooseTrack from './Components/LandingLoggedIn/ChooseTrack';
import Beginner from './Components/Beginner/begin';
import Caru from './Components/LandingLoggedIn/carousel'
import Graph from './Components/LandingLoggedIn/graph'
import Trees from './Components/LandingLoggedIn/trees'
// ..
AOS.init();
function App() {
  return (
    <div className="App">
      
     <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/landingloggedin' component={ChooseTrack} />     
          <Route path="/beginner" component={Beginner} />
          <Route path="/be" component={Caru} />
          <Route path="/graph" component={Graph} />  
          <Route path="/treee" component={Trees} />  
          
        </Switch>
     </Router>
  
   
      
    </div>
    
  );
}

export default App;
