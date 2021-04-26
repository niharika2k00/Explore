
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import '../../STYLES/navbar.css';
import LOGO from '../../Assets/logo-top.webp';

const Navbar_top = () => {



    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" style={{ paddingLeft: "1.6rem", marginbottom: "0px" }} >
                {/* <Container> */}
                <LinkContainer to="/"><Navbar.Brand id="nav_head">
                    <img src={LOGO} alt="Prodigious People" />
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
                {/* </Container> */}
            </Navbar>
        </header >
    )
}

export default Navbar_top;
