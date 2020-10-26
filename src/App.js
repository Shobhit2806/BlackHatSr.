import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Landing-Page/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
