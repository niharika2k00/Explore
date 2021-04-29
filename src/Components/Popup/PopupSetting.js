

import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/popup.css';




const Popup = ({ type, setsettingPopup }) => {

    const AddInfo = () => {
        console.log("Text added....");
    }


    return (
        <div>
            <div className="pop-up">
                <div className="input-box">
                    <CancelIcon onClick={() => setsettingPopup(false)} className="cross-btn" />
                    <h5>Enter the details:</h5>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label><b>Project Topic  <span style={{ color: 'crimson' }}>*</span></b></Form.Label>
                                <Form.Control as="select" className="form_box">
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
                                // value={title}
                                // onChange={(e) => settitle(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <div className="card" Style="width: 18rem;" className="pro_card">
                                <div className="card-body">
                                    <h5 className="card-title">Upload Cover Picture</h5>
                                    <Form>
                                        <Form.Group style={{ color: "black" }} >
                                            <Form.File id="exampleFormControlFile1" label="" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <button onClick={() => AddInfo()}>
                        Add Text
                    </button>


                </div>
            </div>
        </div >
    )
}

export default Popup
