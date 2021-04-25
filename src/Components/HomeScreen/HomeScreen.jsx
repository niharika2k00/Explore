
import React, { useState, useEffect } from 'react';
import { Dropdown, Row, Col, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../STYLES/homescreen.css';



const HomeScreen = () => {

    const [show, setShow] = useState(false)

    var settings;
    const [slider, setslider] = useState(settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    })

    var width = window.innerWidth;

    useEffect(() => {
        console.log(width);
        if (width < 580) {     // <----- Responsive for VIEWPORT
            console.log("if cond working");
            setslider(settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
            })
        }
    }, []);

    console.log(show)


    return (
        <div>
            <section>
                < div className="jumbotron" >
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="title">
                                <h1>Lorem Ipsum Dolor</h1>
                            </div>

                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Suspendisse luctus ligula quis urna commodo, et pharetra lacus faucibus.</p>

                            <section className="Button" Style={{ marginLeft: "2rem", paddingLeft: "2rem" }}>
                                <a className="Button-btn" Style={{ marginLeft: "2rem", paddingLeft: "2rem" }} href="/">Design </a>
                            </section>
                        </Col>
                    </Row>
                </div>
            </section>


            {/* <div className={`filterdropdown ${show ? 'show' : ''}`}>This is a dropdown div.</div> */}


            <Container>
                <section>
                    <Row id="gap_top">
                        <Col md={2} xs={12}>
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Popular
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Lorem</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Ipsum</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Dolor</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>


                        <Col md={2} xs={12}>
                            <section className=" ml-auto  CarouButton">
                                <a className="carouButton-btn">
                                    Motivational </a>
                            </section>
                        </Col>

                        <Col md={1} xs={12}>
                            <section className=" ml-auto  CarouButton">
                                <a className="carouButton-btn">
                                    Memes </a>
                            </section>
                        </Col>

                        <Col md={1} xs={12}>
                            <section className=" ml-auto  CarouButton">
                                <a className="carouButton-btn">
                                    Food </a>
                            </section>
                        </Col>

                        <Col md={1} xs={12}>
                            <section className=" ml-auto  CarouButton">
                                <a className="carouButton-btn">
                                    Travel </a>
                            </section>
                        </Col>

                        <Col md={1} xs={12}>
                            <section className=" ml-auto  CarouButton" >
                                <a className="carouButton-btn" Style={{ padding: "8px 4rem" }}>
                                    Art </a>
                            </section>
                        </Col>

                        <Col md={2} xs={12}>
                            <section className=" ml-auto  CarouButton">
                                <a className="carouButton-btn">
                                    Global News </a>
                            </section>
                        </Col>



                        {/* <Col md={8} xs={12}>
                            <div className="slidergap">
                                <Slider {...slider}>
                                    <div>
                                        <section className=" ml-auto  CarouButton">
                                            <a className="carouButton-btn">
                                                Memes </a>
                                        </section>
                                    </div>                                 
                                </Slider>
                            </div>
                        </Col> */}


                        <Col md={2} xs={12} id="filterflex" >
                            <section className="Button">
                                <a className="Button-btn" href="/" style={{ marginTop: "1px " }}>
                                    <i class="fas fa-filter"></i>Filter </a>
                            </section>
                            {/*  <section className=" ml-auto  FilterButton">
                                <a className="filterButton-btn" onClick={() => setShow(!show)}>
                                    <i class="fas fa-filter"></i>Filter</a>
                            </section> */}
                        </Col>
                    </Row>
                </section>



                <section  >
                    <Row id="gap_top">
                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row id="gap_top">
                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className="card" Style={{ width: "18rem" }}>
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div class="d-flex justify-content-end">
                                    <div>
                                        <i class="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i class="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </section>




            </Container>

        </div>
    )
}

export default HomeScreen
