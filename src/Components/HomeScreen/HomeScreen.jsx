
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import '../../App.css';
import '../../STYLES/homescreen.css';
import EACH_CARD from './HomePost_Card.js';
import firebase from 'firebase';
import app from "../../Firebase/Firebase.js";



const HomeScreen = ({ USER, set_USER, items, setItems, fetched_Data }) => {


    // const [name, setName] = useState('');

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [topic, setTopic] = useState('');

    useEffect(() => {
        if (Object.keys(USER).length !== 0) {
            fetched_Data();
        }
    }, [USER])


    useEffect(() => {
        console.log(items);
    }, [items, set_USER])




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



                {items.length !== 0 ? (

                    <section className="rowTopgap" >
                        {/* {loading ? < Load /> :                                       // <h2>Loading...</h2> */}
                        {/* error ? < Mess variant="danger" > {error}</Mess> :       //<h3>{error}</h3>  */}

                        <Row style={{ padding: "3rem auto" }} >
                            {/* array of objects is mapped ------ [{} {} {}] */}
                            
                            {items.map(card => (
                                <Col key={card.id} sm={12} md={4} lg={4} xl={4} className="hovercard" style={{ padding: "2rem .6rem", margin: "0rem" }}>
                                    <EACH_CARD
                                        ID={card.id}
                                        each_cardObj={card}
                                    />
                                </Col>
                            ))}
                        </Row>

                    </section>
                ) : []}

            </Container>

        </div >
    )
}

export default HomeScreen;
