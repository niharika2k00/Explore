
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/authentication.scss';
import app from "../../Firebase/Firebase.js";
import firebase from 'firebase';
// import { useHistory } from "react-router-dom";



const SignUp = ({ type, setSignUp, setLogin, name, setName, email, setEmail, password, setPassword, confirmpass, setConfirmpass, USER, set_USER }) => {

    // const history = useHistory();
    const db = firebase.firestore();


    const signUp_Handler = async (e) => {
        e.preventDefault();
        console.log("Successfully Signed Up");
        console.log("Email : ", email);
        console.log("Password : ", password);

        if (password !== confirmpass) {
            console.log("Wrong password");
            alert("Wrong password.Password dont Match");
            return;
        }

        try {
            // ----------- SignUp   --------
            const result = await app.auth().createUserWithEmailAndPassword(email, password);
            console.log(result);
            await result.user.updateProfile({
                displayName: name
            });
            console.log("Name : ", result.user.displayName);
            setSignUp(false);
            // history.push("/");

            // --------- Putting into DB --------
            const USER_CURRENT = firebase.auth().currentUser;
            console.log(USER_CURRENT);
            const User_obj = {
                Name: name,
                Email: email,
                CreatedAt: new Date(),
                Provider: "Custom"
            }
            console.log(User_obj);
            await db.collection('users').doc(USER_CURRENT.uid).set(User_obj)
            alert("Message summited Successfully!");
            setName('');
            setEmail('');
            setConfirmpass('');
            setPassword('');
        }
        catch (error) {
            alert(error);
            console.log(error);
            setSignUp(false);
        }
    };



    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.displayName, " , ", user.uid);
                const User_Obj = {
                    Name: user.displayName,
                    Email: user.email,
                    UID: user.uid
                };
                console.log(User_Obj);
                set_USER(User_Obj);

            } else {
                console.log('No User');
                set_USER({});
            }
        });
    }, []);


    return (
        <div className="SignUppop-up">
            <div className="SignUpinput-box">
                <CancelIcon onClick={() => setSignUp(false)} className="cross-btn" />

                <h1 className="loginhead"> Sign Up </h1>


                <Form onSubmit={signUp_Handler} className="login_form">
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

                    <Form.Group style={{ color: "black" }} >
                        <Form.File
                            // id="exampleFormControlFile1"
                            label="Upload Profile Picture"
                            style={{ fontSize: "1.0rem" }}
                            // onChange={Img_handle}
                            required
                        />
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
                            to="#"
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
