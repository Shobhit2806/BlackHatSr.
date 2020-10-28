import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './signup.css'


export default function SignupForm() {
    return (
        <div>
    <Form className="form-fields">
         <FormGroup row>
            <Label for="exampleEmail">UserName</Label>
            <Input  type="text" name="username" id="exampleUsername" placeholder="username" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Input  type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup row>
            <Label for="exampleName">First Name</Label>
            <Input  type="text" name="first_name" id="exampleName" placeholder="First Name"/>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleLastName">Last Name</Label>
            <Input  type="text" name="last_name" id="exampleName" placeholder="Last Name"/>
        </FormGroup>
        
        <FormGroup row>
            <Label for="examplePassword">Password</Label>
            <Input   type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword">Confirm Password</Label>
            <Input  type="password" name="confirm_password" id="exampleConfirmPassword" placeholder="Confirm password" />
        </FormGroup>
        <Button color="primary">Sign Up</Button>
    </Form>
        </div>
    )
}
