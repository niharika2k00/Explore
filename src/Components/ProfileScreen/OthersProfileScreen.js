

import React, { useEffect, useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../STYLES/profile.css';
import '../../STYLES/homescreen.css';
import '../../App.css';
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import EACH_CARD from '../HomeScreen/HomePost_Card.js';
import LOAD from '../Loading.js';




const OthersProfileScreen = ({ USER, set_USER, allPost, setallPost, fetch_ALL_Users_Posts, loading, setLoading }) => {

    const db = firebase.firestore();
    const location = useLocation();


    const modify_url = location.pathname;
    const url_postId = modify_url.substring(modify_url.lastIndexOf('/') + 1)


    /*  useEffect(() => {      
         if (Object.keys(USER).length !== 0) {
            
         }
         else {
             history.push('/');
         }
     }, [USER]); */


    console.log(url_postId)

    const [other, setOther] = useState([]);
    const [about, setAbout] = useState([]);

    // FETCHING DETAILS OF THE CORRESPONDING POST'S USER------- for profile
    const otherUserDetails = async () => {
        if (Object.keys(USER).length !== 0) {

            /*  db.collection('users').doc(url_postId).get()
                 .then(snapshot => {
                     setOther(snapshot.data());
                     console.log(snapshot.data())
                 }) */

            const a = await db.collection('users').doc(url_postId).get()
            const getResponse = a.data();
            setOther(getResponse)
            console.log(getResponse)
        }
        else {
            console.log("Currently No User Logged In. ")
        }
    };



    const otherUserAbout = () => {
        if (Object.keys(USER).length !== 0) {
            db.collection('users').doc(url_postId).collection('about').onSnapshot(snapshot => {
                const ABOUT = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                console.log(ABOUT[0]);
                setAbout(ABOUT[0])
            })

        }
        else {
            console.log("Currently No User Logged In. ")
        }
    };



    useEffect(() => {
        otherUserDetails();
        otherUserAbout();
        console.log(other)
    }, [])














    return (
        <div>
            <div>
                <Container >
                    <Row className="rowTopgap">
                        <Col md={6} className="profilecontainer" >
                            {
                                other && Object.keys(other).length !== 0 && other.Picture ?
                                    (
                                        <img
                                            src={other.Picture}
                                            className="rounded-circle proimg"
                                            alt=" "
                                            width="180rem"
                                            height="180rem"
                                        />
                                    )
                                    :
                                    (<img
                                        src={other.Profile_Image}
                                        className="rounded-circle proimg"
                                        alt=" "
                                        width="180rem"
                                        height="180rem"
                                    />)
                            }

                        </Col>

                        <Col md={6} >
                            <div className="user_data">
                                <h2>{other.Name} </h2>
                                <p >{other.Email}</p>
                                <p> City : {about.City} </p>
                                <p> State : {about.State} </p>
                                <p> Country : {about.Country} </p>

                            </div>
                        </Col>
                    </Row>

                </Container >
            </div>
        </div>
    )
}

export default OthersProfileScreen;
