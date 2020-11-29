import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navbar.css'
import './nblogout.css'
//import logo from './images/logo.svg'



function AppbarLogout () {

    const handleLogout = ()=>{
        localStorage.removeItem("token");
    }
  return (
    <div>
    <Navbar className="navbar-main" collapseOnSelect expand="lg">
  <Navbar.Brand href="#home"><span className="navbar-title">BlackHatSr.</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto content">
      <Nav.Link href="#features"><span className="navbar-content">What we Do?</span></Nav.Link>
      <Nav.Link href="#pricing"><span className="navbar-content">Why Us?</span></Nav.Link>
      <Nav.Link href="#pricing"><span className="navbar-content">Contact Us</span></Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="/login"><button onClick={handleLogout} className="lgb"><b>Logout</b></button></Nav.Link>
     
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default AppbarLogout;