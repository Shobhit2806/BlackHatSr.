import React from 'react'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navbar.css'
//import logo from './images/logo.svg'

function Appbar () {
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
      <Nav.Link href="#deets"><span className="navbar-content">Login</span></Nav.Link>
      <Nav.Link href="#deets"><span className="navbar-content">Signup</span></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default Appbar