
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import '../../App.css';
import '../../STYLES/homescreen.css';
import EACH_CARD from './HomePost_Card.js';
// import firebase from 'firebase';
// import app from "../../Firebase/Firebase.js";
import LOAD from '../Loading.js';
import { clone } from 'ramda';



const HomeScreen = ({ USER, set_USER, allPost, setallPost, fetch_ALL_Users_Posts, loading, setLoading }) => {

    // --------- FILTER FUNCTIONALITY ----------
    const [currentPost, setcurrentPost] = useState([]);
<<<<<<< HEAD
    // const [select, setSelect] = useState(false);

    const sort = (Topic) => {
        if (!Topic) {
            setcurrentPost(allPost);
        }
        else {
            // setSelect(true);
=======
    const [active,setActive]=useState("");
    const sort = (Topic) => {
       
        if (!Topic)
        {
            setcurrentPost(allPost);
             setActive("");   
        }
        else {
                
>>>>>>> b9057d924286595b23237b3e2764060c638e46ad
            let arr = clone(allPost);
            setActive(Topic);
            arr = arr.filter((obj) => obj.Topic === Topic);
            setcurrentPost(arr);
        }
    }

    useEffect(() => {
        setcurrentPost(allPost);
    }, [allPost])



    // FETCHING ALL THE POSTS OF ALL THE USERS
    useEffect(() => {
        setLoading(true);
        fetch_ALL_Users_Posts();
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
                                <h1>Every second of life is a New Exploration !!</h1>
                            </div>

                            <p className="lead">Lets explore art & travel experiences globally and gets motivated together in life
                            with the Prodigious Peoples new Explore section ......</p>
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
                                                <Dropdown.Item onClick={() => sort("")}  > <Link to="" >All </Link> </Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Motivational")}><Link to=""> Motivational</Link></Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Memes")} /* style={{ color: select ? "red" : "green" }} */> <Link to="">Memes</Link></Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Food")}><Link to="">Food </Link></Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Travel")}><Link to="">Travel </Link></Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Art")}><Link to=""> Art</Link></Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Global News")}><Link to="">Global News </Link> </Dropdown.Item>
                                                <Dropdown.Item onClick={() => sort("Popular")}><Link to="">Popular </Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) :

                            /* // ---------  LINE (desktop mode response)  ----------- */
                            (
                                <div className="d-flex flex-wrap justify-content-evenly">
                                    <ul id="tab" >
<<<<<<< HEAD
                                        <li onClick={() => sort("")}> <Link to="" >All </Link> </li>
                                        <li onClick={() => sort("Popular")}> <Link to="">Popular </Link> </li>
                                        <li onClick={() => sort("Motivational")}> <Link to=""> Motivational</Link> </li>
                                        <li onClick={() => sort("Memes")}> <Link to="">Memes</Link> </li>
                                        <li onClick={() => sort("Food")}> <Link to="">Food </Link> </li>
                                        <li onClick={() => sort("Travel")}> <Link to="">Travel </Link> </li>
                                        <li onClick={() => sort("Art")}> <Link to=""> Art</Link> </li>
                                        <li onClick={() => sort("Global News")}> <Link to="">Global News </Link> </li>
=======
                                        <li  onClick={() => sort("")}> <Link to=""  className={active===""?"active":""}>All </Link> </li>
                                        <li onClick={() => sort("Popular")}> <Link to="" className={active==="Popular"?"active":""}>Popular </Link> </li>
                                        <li onClick={() => sort("Motivational")}> <Link to="" className={active==="Motivational"?"active":""}> Motivational</Link> </li>
                                        <li onClick={() => sort("Memes")}> <Link to="" className={active==="Memes"?"active":""}>Memes</Link> </li>
                                        <li onClick={() => sort("Food")}> <Link to="" className={active==="Food"?"active":""}>Food </Link> </li>
                                        <li onClick={() => sort("Travel")}> <Link to="" className={active==="Travel"?"active":""}>Travel </Link> </li>
                                        <li onClick={() => sort("Art")}> <Link to="" className={active==="Art"?"active":""}> Art</Link> </li>
                                        <li onClick={() => sort("Global")}> <Link to="" className={active==="Global"?"active":""}>Global News </Link> </li>
>>>>>>> b9057d924286595b23237b3e2764060c638e46ad
                                    </ul>
                                </div>
                            )
                        }

                    </Row>
                </section>


                {loading && allPost.length !== 0 ? <LOAD /> :

                    (
                        <section style={{ padding: "1rem 0 ", margin: "1rem 0" }} >

                            <Row style={{ padding: "3rem auto" }} >
                                {currentPost.map(card => (
                                    (<Col key={card.id} sm={12} md={6} lg={4} xl={4} className="hovercard" style={{ padding: "2rem .6rem", margin: "0rem" }}>
                                        <EACH_CARD
                                            ID={card.id}
                                            each_cardObj={card}
                                            USER={USER}
                                        />
                                    </Col>)
                                ))}
                            </Row>
                        </section>
                    )
                }

            </Container>

        </div >
    )
}

export default HomeScreen;


