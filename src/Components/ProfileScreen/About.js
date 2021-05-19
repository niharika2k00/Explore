
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../STYLES/profile.css';
import '../../App.css';
import firebase from 'firebase';
import EACH_CARD from '../HomeScreen/HomePost_Card.js';
import LOAD from '../Loading.js';



const About = ({ USER, set_USER, user_Posts, setUser_Posts, fetch_USER_Posts, loading, setLoading, country, setCity, city, setCountry, setState, state }) => {

    const db = firebase.firestore();


    useEffect(() => {
        setLoading(true);
        if (Object.keys(USER).length !== 0) {
            fetch_USER_Posts();
        }
    }, [USER]);


    useEffect(() => {
        setLoading(false);
    }, [user_Posts, set_USER]);



    const about_submit_Handler = async (e) => {
        e.preventDefault();
        console.log("Email : ", country);

        try {
            // --------- Putting into DB --------
            const USER_CURRENT = firebase.auth().currentUser;
            console.log(USER_CURRENT);
            const About = {
                Country: country,
                City: city,
                State: state
            }
            console.log(About);
            await db.collection('users').doc(USER_CURRENT.uid).collection('about').add(About)
            alert("Message summited Successfully!");
        }
        catch (error) {
            console.log(error);
        }
    }







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
                        <p >{USER.Email}</p>
                        {
                            city && country ?
                                (<p >{city}{' , '} {country}  </p>)
                                : <p>Please complete the details</p>
                        }
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


                        <Form onSubmit={about_submit_Handler} id="about">
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

                            {/*  <Form.Group controlId='password'>
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='password'
                                    placeholder='password'
                                ></Form.Control>
                            </Form.Group> */}

                            <Form.Group controlId='confirmpassword'>
                                <Form.Label><b>Country</b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='country'
                                    placeholder='country'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
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
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
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
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>
                                <div id="centerSubmit">
                                    <button type="submit" className="btn btn-dark"
                                        style={{ marginTop: '3rem', justifyContent: "center", alignItems: "center" }} >Submit</button>
                                </div>
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
