
import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import '../../App.css';
import '../../STYLES/homescreen.css';



const HomeScreen = () => {

    /* const [show, setShow] = useState(false)

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

    console.log(show) */


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
                        </Col>
                    </Row>
                </div>
            </section>


            {/* <div className={`filterdropdown ${show ? 'show' : ''}`}>This is a dropdown div.</div> */}


            <Container className="self_container-Bottomgap">
                <section>
                    <Row id="gap_top">

                        <div className="d-flex flex-wrap justify-content-around">
                            <div>
                                <section className="Button">
                                    <a className="Button-btn" href="/" style={{ marginTop: "1px " }}>
                                        Popular </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Motivational </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Memes </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Food </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Travel </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Art </a>
                                </section>
                            </div>

                            <div>
                                <section className=" ml-auto  CarouButton">
                                    <a href=" " className="carouButton-btn">
                                        Global News </a>
                                </section>
                            </div>

                            <div>
                                <section className="Button">
                                    <a className="Button-btn" href="/" style={{ marginTop: "1px " }}>
                                        <i className="fas fa-filter"></i>Filter </a>
                                </section>
                            </div>

                        </div>


                        {/* Codes for the Slider-----Carousal */}
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


                        {/* <Col md={2} xs={12} id="filterflex" >                                                     
                             <section className=" ml-auto  FilterButton">
                                <a className="filterButton-btn" onClick={() => setShow(!show)}>
                                    <i class="fas fa-filter"></i>Filter</a>
                            </section> 
                        </Col> */}
                    </Row>

                </section>



                <section>
                    <Row id="gap_top">
                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <i className="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i className="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
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

                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <i className="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i className="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Row id="gap_top">
                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <i className="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i className="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <i className="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i className="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} xs={12} className="hovercard" style={{ padding: "0px 10px" }}>
                            {/* {`/post/${post._id}`} */}
                            < div className="card " >
                                <Link to='/post/:id'>
                                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <div>
                                        <i className="fas fa-heart" style={{ padding: "2px 2px 2px 1rem", color: "crimson" }} ></i>68 {' '}
                                    </div>

                                    <div>
                                        <i className="fas fa-eye" style={{ padding: "2px 2px 2px 1rem " }}></i>3.2K {' '}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </section>

            </Container>

        </div >
    )
}

export default HomeScreen;
