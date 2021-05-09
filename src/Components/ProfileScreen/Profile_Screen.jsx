
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../STYLES/profile.css';



const Profile_Screen = () => {


    return (
        <div>
            <Container >

                <Row className="rowTopgap">
                    <Col md={6} className="profilecontainer" >
                        <img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="rounded-circle proimg"
                            alt=" "
                            width="180rem"
                            height="180rem"
                        />
                    </Col>

                    <Col md={6} >
                        <div className="user_data">
                            <h2>Niharika Dutta</h2>
                            <p >Kolkata, INDIA</p>
                            <section className="EditButton">
                                <a className="edit-btn" href="/">Edit Profile</a>
                                <a className="edit-btn" href="/">...</a>
                            </section>
                        </div>
                    </Col>
                </Row>


                <section>
                    <Row className="pro_catagory">
                        <Col md={2}>LIKED SHOTS 1K</Col>
                        <Col md={2}>COLLECTION 4</Col>
                        <Col md={2}>SHOTS 0</Col>
                        <Col md={2}>ABOUT</Col>
                    </Row>
                </section>

                <hr></hr>

                <section>
                    <Row className="rowTopgap">
                        <Col md={4} sm={12} >
                            <div className="card" style={{ width: "18rem" }} className="pro_card">
                                <div className="card-body">
                                    <h5 className="card-title">Upload your first shot</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tellus pellentesque.</p>
                                    <section className="Button">
                                        <a className="Button-btn" href="/uploadpost" style={{ marginTop: "1px " }}>
                                            Upload Shot </a>
                                    </section>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </section>







            </Container >
        </div>


    )
}

export default Profile_Screen;
