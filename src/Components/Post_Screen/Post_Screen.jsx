import React, { useState, useEffect } from "react";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../STYLES/postscreen.css";
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';



const Post_Screen = () => {
    return (
        <div>
            <Container className="self_container ">
                <Row className="justify-content-center">
                    {/* <Col md={8} className="justify-content-center"> */}
                    <StyleRoot>
                        <Coverflow
                            displayQuantityOfSide={2}
                            infiniteScroll
                            /*  navigation
                             enableHeading */
                            navigation={false}
                            enableHeading={false}
                            media={{
                                '@media (max-width: 900px)': {
                                    width: '900px',
                                    height: '100px'
                                },
                                '@media (min-width: 900px)': {
                                    width: '900px',
                                    height: '350px'
                                },
                                '@media (max-width: 400px)': {
                                    width: '25rem',
                                    height: '10rem'
                                }
                            }}
                        >

                            <img src='https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Album one' data-action="https://facebook.github.io/react/" />
                            <img src='https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80' alt='Album two' data-action="http://passer.cc" />
                            <img src='https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1111&q=80' alt='Album three' data-action="https://doce.cc/" />
                            <img src='https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Album four' data-action="http://tw.yahoo.com" />
                            <img src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Album one' data-action="https://facebook.github.io/react/" />
                            <img src='https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Album two' data-action="http://passer.cc" />
                            <img src='https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80' alt='Album three' data-action="https://doce.cc/" />
                            <img src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='Album four' data-action="http://tw.yahoo.com" />

                        </Coverflow>
                    </StyleRoot>
                    {/* </Col> */}
                </Row>


                <Row className="row_center">
                    <div className="rowTopgap ">
                        <p className="post_titles">
                            <b>Author :  Niharika Dutta{" "} </b>
                        </p>
                        <p className="post_subtitles">
                            <b>Title : </b> Lorem Ipsum Dollerop.
                        </p>
                        <p className="post_subtitles">
                            <b>Description : </b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris nunc, maximus
                            vitae quam ut, imperdiet ultrices quam. Suspendisse id turpis a ex volutpat ultrices.
                             Mauris vel elementum justo, nec ullamcorper mi. Etiam suscipit, lectus nec placerat
                              tincidunt.
                        </p>

                        <section className="Button">
                            <a className="Button-btn" href="/"> Back </a>
                        </section>

                    </div>
                </Row>


            </Container>
        </div>
    );
};

export default Post_Screen;
