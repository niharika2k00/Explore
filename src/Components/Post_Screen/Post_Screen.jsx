
import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../../App.css";
import "../../STYLES/postscreen.css";
// import ReactDOM from 'react-dom';
// import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
import { Carousel } from '3d-react-carousal';
import firebase from 'firebase';
import app from "../../Firebase/Firebase.js";
import CARD_BODY from './Post_body.js';
import { useLocation } from 'react-router-dom';
import moment from 'moment';



const Post_Screen = ({ history, USER, set_USER, items, setItems, fetched_Data }) => {

    const db = firebase.firestore();
    const USER_DET = firebase.auth().currentUser;
    const location = useLocation();


    const modify_url = location.pathname;
    const url_postId = modify_url.substring(modify_url.lastIndexOf('/') + 1)

    // console.log(url_postId);


    useEffect(() => {
        if (Object.keys(USER).length !== 0) {
            fetched_Data();
        }
    }, [USER]);


    useEffect(() => {
        console.log(items);
    }, [items, set_USER]);



    // CAROUSAL IMAGES LINKS PUSHED IN TO AN ARRAY 
    const carou_links = [];
    items.map(each_post => (

        url_postId === each_post.id ? (
            each_post.Files.map((url) => {

                var a = <img src={url} />
                carou_links.push(a);
            })
        ) : []

    ));

    // console.log(carou_links);





    let slides = [
        <img src='https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' alt='Album one' data-action="https://facebook.github.io/react/" />,
        <img src='https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' alt='Album two' data-action="http://passer.cc" />,
        <img src='https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' alt='Album three' data-action="https://doce.cc/" />,
        <img src='https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' alt='Album four' data-action="http://tw.yahoo.com" />,
        <img src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' alt='Album one' data-action="https://facebook.github.io/react/" />
    ];



    const date = new Date();
    const addingDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`  // 12 May, 2021

    let now = new Date();
    var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:MM:SS');
    // console.log(addingDate) // Output: 2020-07-21 07:24:06


    return (
        <div>

            {items.length !== 0 ? (

                <Container className="self_container ">
                    <Row className="justify-content-center">

                        {/*  <StyleRoot>
                        <Coverflow
                            displayQuantityOfSide={2}
                            infiniteScroll
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
                       </StyleRoot> */}


                        <Carousel slides={carou_links} autoplay={false} interval={2000} id="carousal" />

                    </Row>


                    {/* items  --- > [{} {} {}]  , obj are of each post  */}
                    <Row className="row_center">
                        {items.map(body => (

                            url_postId === body.id ?
                                (
                                    < CARD_BODY
                                        ID={body.id}
                                        card_body={body}
                                        USER={USER}
                                        set_USER={set_USER}
                                    />
                                ) : []
                        ))}
                    </Row>

                </Container>)
                : null}

        </div>
    )

};

export default Post_Screen;
