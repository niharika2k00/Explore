
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import '../../STYLES/navbar.css';
import ExploreLOGO from '../../Assets/explorelogo1.png';
import LOGO from '../../Assets/logo-top.webp';
import { useLocation } from 'react-router-dom'



const Navbar_top = ({ match, history }) => {

    // console.log("MATCH : ", match);
    // console.log("HISTORY : ", history);

    const location = useLocation();
    const modify_url = location.pathname;
    console.log(location.pathname);  // /post/:id

    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" style={{ padding: ".6rem", marginbottom: "0" }} >

                <LinkContainer to="/"><Navbar.Brand id="nav_head">
                    {(modify_url === "/post/:id") ? <img id="explore" src={ExploreLOGO} alt="lol" />
                        :
                        <img src={LOGO} id="prodigy" alt="lol" />
                    }
                </Navbar.Brand></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navItems">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/uploadpost">Post</Nav.Link>
                        <Nav.Link href="#link">Design</Nav.Link>
                    </Nav>

                    <Form inline>
                        <Nav.Link href="#link" className="modiflink" ><i class="fas fa-search" id="icoSearch"></i>Sign In</Nav.Link>
                        <section className="Button">
                            <a className="Button-btn" href="/"> Sign Up </a>
                        </section>
                    </Form>
                </Navbar.Collapse>

            </Navbar>
        </header >
    )
}

export default Navbar_top;
