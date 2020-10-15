import React, { useState } from 'react';
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
    // User State
    const [user, setUser] = useState({
        isSignIn: false,
        newUser: false,
        name: '',
        email:'',
        password:''
    });

    // Login using Google
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email} = result.user;
            const signInUser = {
                isSignIn: true,
                name: displayName,
                email: email
            }
            setUser(signInUser);
          })
          .catch(function(error) {
            // Handle Errors here.
            // ...
          });
    } 

    // Login Using Email & Password form 

    const handleBlur = (e) => {
        let isFieldmValid = true;
        if(e.target.name === 'email'){
            isFieldmValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password') {
            if(e.target.value.length < 6) {
                alert('Password must be more than 6 characters')
            }

            isFieldmValid = e.target.value.length > 6;
            
        }
        if(isFieldmValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleFormSubmit = (e) => {
        if(user.email && user.password) {
            firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password) 
            .catch(error => {
                // Handle Errors here.
                var errorMessage = error.message;
                alert(error.message);
              });
        }
        e.preventDefault();
    }

    const handleCreateAccount = () => {
        const userInfo = {...user};
        userInfo.newUser = true;
        setUser(userInfo);
        console.log(user)
    }
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <Form onSubmit={handleFormSubmit}>
                        <h4>{(user.newUser === true) ? 'Create an account' : 'Login'} </h4>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Your Name" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter Email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="warning btn-block" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p style={{textAlign:"center", marginTop:"20px"}}>Don't have a account? <button className="text-warning create-account-btn" onClick={handleCreateAccount}>Create an account</button> </p>
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