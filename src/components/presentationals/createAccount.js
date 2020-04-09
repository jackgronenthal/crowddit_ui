import React from 'react'
import NavigationBar from '../containers/navbar'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';


export default props => {
    return (
        <div>
            <NavigationBar  />
            <div className="container" style={{marginTop: '3rem'}}>
            <Form onSubmit={e => { e.preventDefault(); props.createUser()}}>
                <FormGroup onBlur={ e => props.usernameBlur(e.target.value.trim()) }>
                    <Label for="exampleEmail">Username</Label>
                    <Input 
                        id="username-input" 
                        invalid = {props.validUsername === false && document.getElementById("username-input").value.trim() != ""} 
                        valid = {props.validUsername === true} />
                    {props.validUsername && <FormFeedback valid>Sweet! That username is available.</FormFeedback>}
                    {props.validUsername === false && <FormFeedback invalid>That username is invalid or already taken.</FormFeedback>}
                    <FormText>Usernames can contain lowercase and uppercase letters and numbers.</FormText>
                </FormGroup>
                <FormGroup onBlur={ e => props.passwordBlur(e.target.value.trim()) } >
                    <Label for="examplePassword">Password</Label>
                    <Input 
                        id="password-input" 
                        invalid = {props.validPassword === false && document.getElementById("password-input").value.trim() != ""} 
                        valid = {props.validPassword === true} />
                    {props.validPassword && <FormFeedback valid>Great! This is a valid password.</FormFeedback>}
                    {props.validPassword === false && <FormFeedback invalid>Oh no! That password is invalid. Please try again. </FormFeedback>}
                    <FormText>Passwords must contain at least one numeric character and 1 capital letter.</FormText>
                </FormGroup>
                <Button 
                    id='login-text-button'
                    secondary>
                        SIGN UP
                </Button>
            </Form>
            </div>
        </div>
    )
}