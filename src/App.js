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
          

        </Switch>
     </Router>
      
    </div>
  );
}

export default App;
