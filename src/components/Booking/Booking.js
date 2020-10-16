import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    return (
        <div className="booking-page">
            <Container>
                <Row>
                    <Col style={{marginTop:"30px"}}>
                    <h2>Want To Book Your Travel?</h2>
                    <p>You can learn a lot about yourself through travelling. You can observe how you feel beeing far from your country. You will find out how you feel about your homeland. You will realise how you really feel about foreign people. You will find out how much you know/do not know about the world. You will be able to observe how you react in completely new situations. You will test your language, orientational and social skills. You will not be the same person after returning home.</p>
                    </Col>
                    <Col>
                        <div className="booking-form">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control as="select">
                                        <option>Dhaka</option>
                                        <option>Mymensingh</option>
                                        <option>Rajshahi</option>
                                        <option>Chittagong</option>
                                        <option>Sylhet</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control as="select">
                                    <option>Cox's Bazar</option>
                                    <option>Rangamati</option>
                                    <option>Sajek Valley</option>
                                    <option>Sreemangal</option>
                                    <option>Sundarban</option>
                                    </Form.Control>
                                </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="exampleForm">
                                                <Form.Label>From</Form.Label>
                                                <Form.Control type="date" name="dob" placeholder="Start Date" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="exampleForm">
                                                <Form.Label>To</Form.Label>
                                                <Form.Control type="date" name="dob" placeholder="End Date" />
                                            </Form.Group>
                                        </Col> 
                                    </Row>
                                    <Link to="/search"><Button type="submit" className="booking-form-btn btn-block" >Start Booking</Button></Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;