import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Carousel from "react-bootstrap/Carousel";
import Card from './cardd'
import Trees from "../../assets/images/tree.png";
import Graph2 from "../../assets/images/graph.jpg";
import Dsa from "../../assets/images/dsa.jpeg";
import './carousel.css'
import Appbar from '../common/Navbar'
import Footer from '../Landing-Page/Footer'
import ChooseTrack from './ChooseTrack'

export default function Caru(){
return(
   <div className="carou">
   <div>
   <Appbar />
   </div>
   <Carousel>
    <Carousel.Item>
    <img src={Dsa} className="imgg1" />
    
    </Carousel.Item>
    <Carousel.Item>
    <Link to="/graph"><img src={Graph2} className="imgg2" /></Link>
    
    </Carousel.Item>
    <Carousel.Item>
    <Link to="/treee"><img src={Trees} className="imgg3" /></Link>
    
    </Carousel.Item>
   </Carousel><br/>
   <div>
   <ChooseTrack />
   </div>
   <div><Footer /></div>
   </div>
);

}
