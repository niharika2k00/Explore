

import React, { useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../STYLES/profile.css';
import '../../STYLES/homescreen.css';
import '../../App.css';
import EACH_CARD from '../HomeScreen/HomePost_Card.js';
import LOAD from '../Loading.js';



const Liked_Shots = ({ USER, set_USER, user_Posts, setUser_Posts, fetch_USER_Posts, loading, setLoading, country, setCity, city, setCountry, setState, state, fetch_About, about,
    setAbout }) => {

    // const db = firebase.firestore();




    useEffect(() => {
        if (Object.keys(USER).length !== 0) {
            fetch_About();
        }
    }, [USER]);



    useEffect(() => {
        if (about && about.length !== 0) {
            console.log(about);
            console.log(about[0].City)
        }
        else { console.log("not running"); }
    }, [about]);





    return (
        <Container >

            <Row className="rowTopgap">
                <Col md={6} className="profilecontainer" >
                    <img
                        src={USER.Profile_Pic}
                        className="rounded-circle proimg"
                        alt=" "
                        width="180rem"
                        height="180rem"
                    />
                </Col>

                <Col md={6} >
                    <div className="user_data">
                        <h2>{USER.Name} </h2>
                        <p >{USER.Email}</p>
                        {
                            (about && about.length !== 0) ?
                                (<p >{about[0].City}{' , '} {about[0].Country}  </p>)
                                : <p>Please complete the details ...</p>
                        }
                    </div>
                </Col>
            </Row>

            <section  >
                <div className="d-flex justify-content-evenly" id="line"  >
                    <div className="subtopic"  > <Link to="/profile" > SHOTS </Link> </div>
                    <div className="subtopic"> <Link to="/likedshots" >LIKED SHOTS </Link> </div>
                    {/* <div className="subtopic"> <Link to="/collection" >COLLECTION  </Link> </div> */}
                    <div className="subtopic"> <Link to="/about" > ABOUT</Link> </div>
                </div>
            </section>

            <hr></hr>

            <section>
                {/* <h2 className="profile_head" >LIKED SHOTS</h2> */}
                <Row className="justify-content-md-center rowTopgap" style={{ width: "100%", height: "40rem" }}>

                    {loading ? <LOAD /> :
                        user_Posts.length !== 0 ?
                            (
                                user_Posts.map(card => (
                                    <Col key={card.id} sm={12} md={4} lg={4} xl={4} className="hovercard" style={{ padding: "2rem .6rem", margin: "0rem" }}>
                                        <EACH_CARD
                                            ID={card.id}
                                            each_cardObj={card}
                                            USER={USER}
                                        />
                                    </Col>
                                ))
                            ) : null
                    }
                </Row>

            </section>





        </Container >
    )
}

export default Liked_Shots;
