
import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import '../../STYLES/navbar.css';
import ExploreLOGO from '../../Assets/explorepng.png';
import { useLocation } from 'react-router-dom'
import SIGNUP_POPUP from '../Authentication/SignUp.jsx';
import Login from '../Authentication/Login.jsx';
import app from "../../Firebase/Firebase.js";



const Navbar_top = ({ match, history }) => {

    const location = useLocation();
    const modify_url = location.pathname;
    // console.log(location.pathname);  // /post/:id


    const [signUp, setSignUp] = useState(false);
    const [login, setLogin] = useState(false);

    const [USER, setUSER] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    // const [personName, setPersonName] = useState(''); // @type string






    const handle_LogOut = () => {
        app.auth().signOut();
        console.log("Successfully Logged out ", name);
        setUSER(false);
        // history.push("/register");
    };



    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" style={{ padding: ".6rem", marginbottom: "0" }} >

                <LinkContainer to="/"><Navbar.Brand id="nav_head">
                    {(modify_url === "/post/:id") ? <img id="explore" src={ExploreLOGO} alt="lol" />
                        :
                        <img src={ExploreLOGO} id="explore" alt="lol" />
                    }
                </Navbar.Brand></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navItems">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/uploadpost">Post</Nav.Link>
                        <Nav.Link href="#link">Design</Nav.Link>
                    </Nav>

                    {/* --------------  LOGIN  POPUP   -- for exsisting user------------ */}
                    {
                        login && <Login
                            type='logIn'
                            setLogin={setLogin}
                            setSignUp={setSignUp}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            name={name}
                            setPassword={setPassword}
                        />
                    }

                    {/* --------------  SIGNUP  POPUP -- for new user ------------ */}
                    {
                        signUp && <SIGNUP_POPUP
                            type='signUp'
                            setSignUp={setSignUp}
                            setLogin={setLogin}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            confirmpass={confirmpass}
                            setConfirmpass={setConfirmpass}
                            USER={USER}
                            setUSER={setUSER}
                        />
                    }

                    {/* <h5 onClick={() => setLogin(true)} id="signinbtn">Sign in </h5> */}

                    {USER ?
                        (<section className="Button">
                            <button
                                className="Button-btn"
                                onClick={() => handle_LogOut()}
                                style={{ marginRight: "1rem" }}
                            >
                                Log Out
                            </button>
                        </section>
                        ) :

                        (<section className="Button">
                            <button
                                className="Button-btn"
                                onClick={() => setSignUp(true)}
                                style={{ marginRight: "1rem" }}
                            >
                                Sign In
                                </button>
                        </section>
                        )
                    }

                </Navbar.Collapse>

            </Navbar>
        </header >
    )
}

export default Navbar_top;
