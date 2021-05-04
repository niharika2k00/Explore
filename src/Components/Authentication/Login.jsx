
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container, Form } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/authentication.scss';
import app from "../../Firebase/Firebase.js";
import firebase from "firebase";



const Login = ({ setLogin, setSignUp, email, setEmail, password, setPassword }) => {



    // LOGIN / SIGNIN handler  -----> for exsisting user
    const Login_handler = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
            console.log(userCredential);
            const User = userCredential.user;
            console.log(User.displayName);
            setLogin(false);

        } catch (error) {
            alert(error);
            console.log(error);
            setLogin(false);
        }
    };


    const signInWithFacebook = () => {
        console.log("Facebook authentication executing");
        const facebookprovider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(facebookprovider)
            .then((result) => {
                const user = result.user;
                console.log(result);
                setLogin(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(error);
            });

    };



    const signInWithGoogle = async () => {
        console.log("Google authentication executing");
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        try {
            const google = await firebase.auth().signInWithPopup(googleProvider);
            // ----  for local storage(optional)  ----
            const Person = google.user;
            const data = {
                Name: google.user.displayName,
                Email: google.user.email,
                Picture: google.additionalUserInfo.profile.picture,
                Verify: google.additionalUserInfo.profile.verified_email
            }
            localStorage.setItem('Person', JSON.stringify(data));
            console.log(data);
        }
        catch (error) {
            console.log(error);
            const errorMessage = error.message;
            console.log(errorMessage);
        }
        setLogin(false);
    };



    /*  app.signInWithPopup(googleProvider).then((res) => {
                console.log(res.user);
    
            }).catch((error) => {
                console.log(error.message)
            }) */


    return (
        <div className="SignUppop-up">
            <div className="SignUpinput-box">
                <CancelIcon onClick={() => setLogin(false)} className="cross-btn" />
                <h1 className="loginhead"> Login </h1>

                <Form onSubmit={Login_handler} id="login_form">
                    <Form.Group controlId='email'>
                        <Form.Control
                            className="form_box"
                            type='email'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Control
                            className="form_box"
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <div className="btncenter">
                        <Button type='submit' variant='danger' >
                            <b style={{ fontSize: "14px" }}>Log In</b>
                        </Button>
                    </div>
                </Form>


                <h2 className="subheading">
                    {" "}
                    <span> or login with </span>{" "}
                </h2>


                <ul class="social-network social-circle">
                    <li > <a onClick={signInWithFacebook} id="facebooklog" class="icon-facebook"> <i class="fab fa-facebook-f"></i>   </a></li>
                    <li ><a onClick={signInWithGoogle} id="googlelog" class="icon-google"><i class="fab fa-google"></i></a></li>
                </ul>

                <Row className='py-3'>
                    <Col style={{ color: "black" }}>
                        Don't Have An Account ? {" "}
                        <Link onClick={() => {
                            setSignUp(true);
                            setLogin(false);
                        }}>
                            Register
                        </Link>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Login;
