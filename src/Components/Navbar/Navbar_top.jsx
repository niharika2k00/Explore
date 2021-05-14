
import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../STYLES/navbar.css';
import ExploreLOGO from '../../Assets/explorepng.png';
import { useLocation } from 'react-router-dom'
import SIGNUP_POPUP from '../Authentication/SignUp.jsx';
import Login from '../Authentication/Login.jsx';
import app from "../../Firebase/Firebase.js";



const Navbar_top = ({ match, history, signUp, setSignUp, login, setLogin, USER, set_USER, name, setName, email, setEmail, password, setPassword, confirmpass, setConfirmpass }) => {


    const location = useLocation();
    const modify_url = location.pathname;
    // console.log(location.pathname);  // /post/:id


    const handle_LogOut = () => {
        app.auth().signOut();
        console.log("Successfully Logged out ", name);
        set_USER({});
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
                        <Nav.Link  > <Link to="/" className="modiflink" >Home</Link></Nav.Link>
                        <Nav.Link  ><Link to="/uploadpost" className="modiflink"  >Post</Link></Nav.Link>
                        <Nav.Link  > <Link to="/profile" className="modiflink"  >Profile</Link></Nav.Link>
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
                            set_USER={set_USER}
                        />
                    }

                    {/* <h5 onClick={() => setLogin(true)} id="signinbtn">Sign in </h5> */}

                    {Object.keys(USER).length !== 0 ?

                        (<section className="Button">
                            <button
                                className="Button-btn"
                                onClick={() => handle_LogOut()}
                                style={{ marginRight: "1rem" }}
                            >
                                Log Out
                            </button>
                        </section>
                        )

                        :

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
