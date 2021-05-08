

import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/popup.css';
import firebase from 'firebase';




const Popup = ({ type, setsettingPopup, title, setTitle, setTopic, topic, Setting_handler, Img_handle }) => {

    const db = firebase.firestore();
    const store = firebase.storage();





    return (
        <div>
            <div className="pop-up">
                <div className="input-box" /* onSubmit={Setting_handler} */>
                    <CancelIcon onClick={() => setsettingPopup(false)} className="cross-btn" />
                    <h5 style={{ color: "#f99459" }} >ENTER THE DETAILS : </h5>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label><b>Project Topic  <span style={{ color: 'crimson' }}>*</span></b></Form.Label>
                                <Form.Control as="select" className="form_box" onChange={(e) => setTopic(e.target.value)} value={topic}>
                                    <option>Memes</option>
                                    <option>Motivational</option>
                                    <option>Food</option>
                                    <option>Art</option>
                                    <option>Travel</option>
                                    <option>Global News</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='title'>
                                <Form.Label><b>Project Title <span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='title'
                                    placeholder='add a title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <div className="card" Style="width: 18rem;" className="pro_card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Upload Cover Picture</h5> */}
                                    <Form>
                                        <Form.Group style={{ color: "black" }} >
                                            <Form.File
                                                id="exampleFormControlFile1"
                                                label="Upload Cover Picture"
                                                onChange={Img_handle}
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <div className="btncenter">
                        <Button type='button' variant='danger' onClick={Setting_handler}  >
                            <b style={{ fontSize: "14px" }}>SAVE</b>
                        </Button>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Popup
