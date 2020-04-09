import React, { useState } from 'react';
import { Button, Modal, Container, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Blob from './blob'

const ModalExample = (props) => {
  const {
    className
  } = props;

  console.log(props)

  return (
    <Container>
        <Modal isOpen={props.modal} toggle={props.toggle} className={className} centered>
            <div className="row" style={{height: 350}}>
                <div className="col-sm-3" id="login-gradient-box"></div>
                <div className="col" style={{marginLeft: '1rem'}}>
                    <div className="row" id="login-text">Sign in</div>
                    <div className="row" style={{paddingTop: '1rem'}}>
                        <Form onSubmit={ e => { e.preventDefault(); props.login({
                            username: document.getElementById('inputUsername').value, 
                            password: document.getElementById('inputPassword').value
                            }) }}>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Username</Label>
                                <Input type="username" name="username" id="inputUsername" placeholder="Username" />
                  
                            </FormGroup>
                            <FormGroup>
                                <Label for="inputPassword" hidden>Password</Label>
                                <Input type="password" name="password" id="inputPassword" placeholder="Password" />
                            </FormGroup>
                            {!props.invalidLoginAttempt && <Button style={{height: '2rem'}} id='login-text-button'>SIGN IN</Button>}
                            <Alert 
                            color="danger"
                            isOpen={props.invalidLoginAttempt}
                            toggle={() => { props.dismissLoginAttemptAlert() }}>
                                Invalid username or password</Alert>
                        </Form>
                    </div>
                    <div className="row" style={{fontSize: "small", paddingTop: '1rem'}}>
                        <p> New to Crowddit? </p>
                        <a href="http://localhost:3000/createUser" style={{paddingLeft: '0.5rem', fontWeight: "bold"}}> SIGN UP </a>
                    </div>
                </div>
            </div>
        </Modal>
    </Container>
  );
}

export default ModalExample;