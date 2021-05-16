
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../STYLES/profile.css';
import '../../App.css';
import EACH_CARD from '../HomeScreen/HomePost_Card.js';
import LOAD from '../Loading.js';



const About = ({ USER, set_USER, user_Posts, setUser_Posts, fetch_USER_Posts, loading, setLoading }) => {

    useEffect(() => {
        setLoading(true);
        if (Object.keys(USER).length !== 0) {
            fetch_USER_Posts();
        }
    }, [USER]);


    useEffect(() => {
        console.log(user_Posts);
        setLoading(false);
    }, [user_Posts, set_USER]);



    return (
        <Container >

            <Row className="rowTopgap">
                <Col md={6} className="profilecontainer" >
                    <img
                        src={USER.Profile_Pic}
                        className="rounded-circle proimg"
                        alt=" "
                        width="180rem"
                        height="180rem"
                    />
                </Col>

                <Col md={6} >
                    <div className="user_data">
                        <h2>{USER.Name} </h2>
                        <p >Kolkata, INDIA</p>
                        <p >{USER.Email}</p>
                    </div>
                </Col>
            </Row>

            <section  >
                <div className="d-flex justify-content-evenly" id="line"  >
                    <div className="subtopic"  > <Link to="/profile" > SHOTS </Link> </div>
                    <div className="subtopic"> <Link to=" " >LIKED SHOTS </Link> </div>
                    <div className="subtopic"> <Link to=" " >COLLECTION  </Link> </div>
                    <div className="subtopic"> <Link to="/about" > ABOUT</Link> </div>
                </div>
            </section>

            <hr></hr>

            <section>
                <Row className="justify-content-md-center rowTopgap" >
                    <Col md={6} xs={12} sm={11} >
                        {/* <Loginform_Container> */}
                        <h2 className="loginhead" >ABOUT</h2>


                        <Form /* onSubmit={submitHandler} */ id="about">
                            <Form.Group controlId='name'>
                                <Form.Label><b>Name</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='name'
                                    placeholder=' name'
                                    value={USER.Name}
                                // onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label><b>Email Address</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='email'
                                    placeholder=' email'
                                    value={USER.Email}
                                // onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='password'
                                    placeholder='password'
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmpassword'>
                                <Form.Label><b>Country</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='country'
                                    placeholder='country'
                                // value={confirmpass}
                                // onChange={(e) => setConfirmpass(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group controlId='confirmpassword'>
                                        <Form.Label><b>State</b></Form.Label>
                                        <Form.Control
                                            className="form_box"
                                            type='state'
                                            placeholder='state'
                                        // value={confirmpass}
                                        // onChange={(e) => setConfirmpass(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId='confirmpassword'>
                                        <Form.Label><b>City</b></Form.Label>
                                        <Form.Control
                                            className="form_box"
                                            type='city'
                                            placeholder='city'
                                        // value={confirmpass}
                                        // onChange={(e) => setConfirmpass(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>
                        </Form>
                        {/* </Loginform_Container> */}
                    </Col>
                </Row>





            </section>





        </Container>
    )
}

export default About;
