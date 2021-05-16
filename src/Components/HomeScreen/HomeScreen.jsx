
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import '../../App.css';
import '../../STYLES/homescreen.css';
import EACH_CARD from './HomePost_Card.js';
import firebase from 'firebase';
import app from "../../Firebase/Firebase.js";
import LOAD from '../Loading.js';



const HomeScreen = ({ USER, set_USER, allPost, setallPost, fetch_ALL_Users_Posts, loading, setLoading }) => {


    useEffect(() => {
        setLoading(true);
        // if (Object.keys(USER).length !== 0) {
        fetch_ALL_Users_Posts();
        // }
    }, []);


    useEffect(() => {
        console.log(allPost);
        setLoading(false);
    }, [allPost, set_USER]);

    var width = window.innerWidth;


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

                        {(width <= 450) ?

                            // ---------  DROPDOWN (mobile response)  -----------
                            (
                                <div className="d-flex flex-wrap justify-content-end">
                                    <div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Filter <i class="fas fa-filter"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Motivational</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Memes</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Art</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Global News</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Popular</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) :

                            // ---------  LINE (desktop mode response)  -----------
                            (
                                <div className="d-flex flex-wrap justify-content-evenly">
                                    <ul id="tab" >
                                        <li> <Link to="" >All </Link> </li>
                                        <li> <Link to="" >Popular </Link> </li>
                                        <li> <Link to="" > Motivational</Link> </li>
                                        <li> <Link to="" >Memes</Link> </li>
                                        <li> <Link to="" >Food </Link> </li>
                                        <li> <Link to="" >Travel </Link> </li>
                                        <li> <Link to="" > Art</Link> </li>
                                        <li> <Link to="" >Global News </Link> </li>
                                    </ul>
                                </div>
                            )
                        }

                    </Row>
                </section>


<<<<<<< HEAD

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
=======
                {loading ? <LOAD /> :
                    allPost.length !== 0 ?
                        (
                            <section style={{ padding: "1rem 0 ", margin: "1rem 0" }} >

                                <Row style={{ padding: "3rem auto" }} >
                                    {/* array of objects is mapped ------ [{} {} {}] */}
                                    {allPost.map(card => (
                                        <Col key={card.id} sm={12} md={6} lg={4} xl={4} className="hovercard" style={{ padding: "2rem .6rem", margin: "0rem" }}>
                                            <EACH_CARD
                                                ID={card.id}
                                                each_cardObj={card}
                                            />
                                        </Col>
                                    ))}
                                </Row>

                            </section>
                        ) : null
                }
>>>>>>> 97de15f0e4027fc93ffbb055ccb50ceb898a6a1a

            </Container>

        </div >
    )
}

export default HomeScreen;
