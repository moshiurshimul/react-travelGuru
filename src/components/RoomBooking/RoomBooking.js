import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import './RoomBooking.css';
import room1 from '../../Image/Rectangle26.png'
import room2 from '../../Image/Rectangle27.png'
import room3 from '../../Image/Rectangle28.png'
import { userContext } from '../../App';

const RoomBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // User sign out
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
            // Sign-out successful.
            const signOutUser = {name: '', email: ''}; 
            setLoggedInUser(signOutUser);
            })
          .catch(function(error) {
            // An error happened.
            });
    }
    return (
        <div>
           <Container className="main-search-container">
               <Row>
                   <Col>
                    <h5 className="user-welcome-h5">Hello, {loggedInUser.name}!!</h5> <Button onClick={handleSignOut} className="btn btn-warning">Log Out</Button>
                   <h3>Choose Your Stay</h3>
                   <Container className="room-container">
                       <Row>
                           <Col> <img className="room-image" src={room1} alt=""/> </Col>
                           <Col className="right-side">
                           <h5 className="room-title text-warning">Light bright airy stylish apt & safe peaceful stay</h5>
                           <p className="room-details">Wifi <br/> Air conditioning <br/> Kitchen <br/> 4 guests <br/> 2 beds</p>
                           </Col>
                       </Row>
                   </Container>
                   <Container className="room-container">
                       <Row>
                           <Col> <img className="room-image" src={room2} alt=""/> </Col>
                           <Col className="right-side">
                           <h5 className="room-title text-warning">Light bright airy stylish apt & safe peaceful stay</h5>
                           <p className="room-details">Wifi <br/> Air conditioning <br/> Kitchen <br/> 4 guests <br/> 2 beds</p>
                           </Col>
                       </Row>
                   </Container>
                   <Container className="room-container">
                       <Row>
                           <Col> <img className="room-image" src={room3} alt=""/> </Col>
                           <Col className="right-side">
                           <h5 className="room-title text-warning">Light bright airy stylish apt & safe peaceful stay</h5>
                           <p className="room-details">Wifi <br/> Air conditioning <br/> Kitchen <br/> 4 guests <br/> 2 beds</p>
                           </Col>
                       </Row>
                   </Container>
                   </Col>
               </Row>
            </Container> 
        </div>
    );
};

export default RoomBooking;