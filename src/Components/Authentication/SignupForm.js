import React,{useState} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './signup.css'
import axios from 'axios';

export default function SignupForm() {
    const [username,setusername] = useState('');
    const [first_name,setfirstname]=useState('');
    const [last_name,setlastname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [password2,setpassword2] = useState('');
    
    const handleSignup = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://blackhatsr.herokuapp.com/accounts/api/register/',
            headers: {
                'Content-Type': 'application/json'
                
                }, 
            data: {
              username:username,
              email:email,
              first_name:first_name,
              last_name:last_name,
              password:password,
              password2:password2
    
            }
          });
          console.log(username)
      
    }


    return (
        <div>
    <Form className="form-fields">
         <FormGroup row>
            <Label for="exampleEmail">UserName</Label>
            <Input  onChange={e => setusername(e.target.value)}  type="text" name="username" id="exampleUsername" placeholder="username" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={e => setemail(e.target.value)}  type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleName">First Name</Label>
            <Input onChange={e => setfirstname(e.target.value)} type="text" name="first_name" id="exampleName" placeholder="First Name"/>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleLastName">Last Name</Label>
            <Input onChange={e => setlastname(e.target.value)} type="text" name="last_name" id="exampleName" placeholder="Last Name"/>
        </FormGroup>
        
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input onChange={e => setpassword(e.target.value)}  type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword">Confirm Password</Label>
            <Input onChange={e => setpassword2(e.target.value)} type="password" name="confirm_password" id="exampleConfirmPassword" placeholder="Confirm password" />
        </FormGroup>
        <Button onClick={handleSignup} color="primary">Sign Up</Button>
    </Form>
        </div>
    )
}
