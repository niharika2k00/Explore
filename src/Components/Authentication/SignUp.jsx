
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container, Form } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/authentication.scss';
import app from "../../Firebase/Firebase.js";
import { useHistory } from "react-router-dom";



const SignUp = ({ type, setSignUp, setLogin, name, setName, email, setEmail, password, setPassword, confirmpass, setConfirmpass, USER, setUSER }) => {

    const history = useHistory();


    const signUp_Handler = async (e) => {
        e.preventDefault();
        console.log("Successfully Signed Up");
        console.log("Email : ", email);
        console.log("Password : ", password);

        if (password !== confirmpass) {
            console.log("Wrong password");
            alert("Wrong password.Password dont Match");
        }
        else {
            try {
                const result = await app.auth().createUserWithEmailAndPassword(email, password);
                console.log(result);
                await result.user.updateProfile({
                    displayName: name
                });
                console.log("Name : ", result.user.displayName);
                setSignUp(false);
                // history.push("/");
            } catch (error) {
                alert(error);
                console.log(error);
                setSignUp(false);
            }
        }
    };



    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                // alert("Currently Registered User " + user.displayName);
                console.log(user.displayName);
                // setPersonName(user.displayName);
                setUSER(true);
            } else {
                console.log('No User');
                setUSER(false);
            }
        });
    }, [])


    return (
        <div className="SignUppop-up">
            <div className="SignUpinput-box">
                <CancelIcon onClick={() => setSignUp(false)} className="cross-btn" />
                {/* <h5>Register yourself to Share your thoughts :</h5> */}

                <h1 className="loginhead"> Sign Up </h1>

                {/* {msg && <Mess variant='danger'>{msg}</Mess>}
                    {error && <Mess variant='danger'>{error}</Mess>}
                    {loading && <Load />} */}


                <Form onSubmit={signUp_Handler} id="login_form">
                    <Form.Group controlId='name'>
                        {/* <Form.Label><b>Name </b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='name'
                            placeholder='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        {/* <Form.Label><b>Email Address</b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='email'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='password'>
                        {/* <Form.Label><b>Password</b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmpassword'>
                        {/* <Form.Label><b>Confirm Password</b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='password'
                            placeholder='confirm password'
                            value={confirmpass}
                            onChange={(e) => setConfirmpass(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <div className="btncenter">
                        <Button type='submit' variant='danger' >
                            <b style={{ fontSize: "14px" }}>Register</b>
                        </Button>
                    </div>
                </Form>


                <Row className='py-3'>
                    <Col style={{ color: "black" }}>
                        Already Have An Account ?{' '}
                        <Link /* to={redirect ? `/login?redirect=${redirect}` : '/login'} */
                            onClick={() => {
                                setSignUp(false);
                                setLogin(true);
                            }}
                        >
                            Sign In
                        </Link>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default SignUp;
