import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import googleicon from '../../Icon/google.png';
import fbicon from '../../Icon/fb.png';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(function(error) {
            // Handle Errors here.
            // ...
          });
    } 
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <Form>
                        <h4>Login</h4>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="warning btn-block" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
                <hr/>
                <div className="login-btn">
                    <Button variant="outline-secondary btn-block" onClick={handleGoogleSignIn}><img src={googleicon} alt=""/> Continue With Google</Button>
                    <Button variant="outline-secondary btn-block"><img src={fbicon} alt=""/>Continue With Facebook</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;