import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import googleicon from '../../Icon/google.png';
import fbicon from '../../Icon/fb.png';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    // User Context 
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // User State
    const [user, setUser] = useState({
        isSignIn: false,
        newUser: false,
        name: '',
        email:'',
        password:''
    });

    // Redirecting user to history
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Login using Google (Google Provider)
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email} = result.user;
            const signInUser = {isSignIn: true, name: displayName, email: email};
            setUser(signInUser);
            setLoggedInUser(signInUser);
            history.replace(from);
          })
          .catch(function(error) {
            // Handle Errors here.
            // ...
          });
    } 

    // Login using Facebook (FB Provide)

    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(result => {
            const user = result.user;
            const {displayName, email} = user;
            const signInUser = {isSignIn: true, name: displayName, email:email};
            setUser(signInUser);
            setLoggedInUser(signInUser);
            history.replace(from);
            // console.log(user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            const errorMessage = error.message;
            alert(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            alert(email);
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            alert(credential);
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
            setLoggedInUser(newUserInfo);
        }
    }

    // New user creating with firebase
    const newUserFormSubmit = (e) => {
        if(user.email && user.password) {
            firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                newUserNameUpdate(user.name);
                const signInUser = { isSignIn: true }
                setUser(signInUser);
                history.replace(from);
            })
            .catch(error => {
                // Handle Errors here.
                var errorMessage = error.message;
                alert(errorMessage);
              });
        }
        e.preventDefault();
    }

    // New user Name Update
    const newUserNameUpdate = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        })
        .then(() => {})
        .catch((error) => {
        // An error happened.
        });
    }

    // Old user login with firebase
    const returnUserFormSubmit = (e) => {
        if(user.email && user.password) {
            firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const signInUser = { isSignIn: true }
                setUser(signInUser);
                const {displayName, email} = res.user;
                const formSignUser = {name:displayName, emai:email}
                setLoggedInUser(formSignUser);
                history.replace(from);
            })
            .catch(function(error) {
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
            e.preventDefault();
        }
    }
    // Create New User / Sign Up Button
    const createAccountButton = () => {
        const userInfo = {...user};
        userInfo.newUser = true;
        setUser(userInfo);
        // console.log(user)
    }

    // Old user login button
    const loginButton = () => {
        const userInfo = {...user};
        userInfo.newUser = false;
        setUser(userInfo);
    }
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                {(user.newUser === true) ? (
                    <Form onSubmit={newUserFormSubmit}>
                        <h4>Create an account</h4>
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
                            Create an account
                        </Button>
                        <p style={{textAlign:"center",marginTop:"20px"}}>Already have an account?<Button className="text-warning create-account-btn" onClick={loginButton}>Login</Button></p>
                    </Form>
                ) : (
                    <Form onSubmit={returnUserFormSubmit}>
                        <h4>Login</h4>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter Email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="warning btn-block" type="submit">
                            Login
                        </Button>
                        <p style={{textAlign:"center",marginTop:"20px"}}>Don't have an account?<Button className="text-warning create-account-btn" onClick={createAccountButton}>Create an account</Button></p>
                    </Form>
                )}
                </div>
                <hr/>
                <div className="login-btn">
                    <Button variant="outline-secondary btn-block" onClick={handleGoogleSignIn}><img src={googleicon} alt=""/> Continue With Google</Button>
                    <Button variant="outline-secondary btn-block" onClick={handleFbSignIn}><img src={fbicon} alt=""/>Continue With Facebook</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;