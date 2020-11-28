import React,{useState} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom'


export default function LoginForm() {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [isLoggedIn,setisLoggedIn] =useState(false)
    const handleLogin = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://blackhatsr.herokuapp.com/accounts/api/login/',
            headers: {
                'Content-Type': 'application/json'
                
                }, 
            data: {
              username:username,
              password:password,
            }
          }).then(response=>{
              console.log(response);
              localStorage.setItem("token",response.data.token);
              localStorage.setItem("username",response.data.username);
              setisLoggedIn(true);
          }).catch(error=>{
              console.log(error);
          });
          
      
    }
    if(isLoggedIn)
    {
      return <Redirect to = "/landingloggedin" /> 
    }
    return (
       
        
        <div>
    <Form className="form-fields">
        <FormGroup row>
            <Label for="exampleUsername">User Name</Label>
            <Input  onChange={e => setusername(e.target.value)}   type="text" name="username" id="exampleUsername" placeholder="username" />
        </FormGroup>
       
        
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input onChange={e => setpassword(e.target.value)}   type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
       
        <Button onClick={handleLogin} color="primary">Log In</Button>
    </Form>
        </div>
    )
}
