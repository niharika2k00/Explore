
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container, Form } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/authentication.scss';



const Login = ({ setLogin, setSignUp }) => {



    return (
        <div className="SignUppop-up">
            <div className="SignUpinput-box">
                <CancelIcon onClick={() => setLogin(false)} className="cross-btn" />

                <h1 className="loginhead"> Login </h1>

                <Form /* onSubmit={submitHandler} */ id="login_form">

                    <Form.Group controlId='email'>
                        {/* <Form.Label><b>Email Address</b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='email'
                            placeholder='email'
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='password'>
                        {/* <Form.Label><b>Password</b></Form.Label> */}
                        <Form.Control
                            className="form_box"
                            type='password'
                            placeholder='password'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <div className="btncenter">
                        <Button type='submit' variant='danger' >
                            <b style={{ fontSize: "14px" }}>Log In</b>
                        </Button>
                    </div>
                </Form>


                <hr></hr>

                <h2 className="subheading">
                    {" "}
                    <span> or login with </span>{" "}
                </h2>


                <ul class="social-network social-circle">
                    <li> <a id="facebooklog" class="icon-facebook"> <i class="fab fa-facebook-f"></i>   </a></li>
                    <li><a id="googlelog" class="icon-google"><i class="fab fa-google"></i></a></li>
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
