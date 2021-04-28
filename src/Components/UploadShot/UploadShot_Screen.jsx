
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import '../../STYLES/uploadShot.scss';
import POPUP from '../Popup/Popup.jsx';


const UploadShot_Screen = () => {

    const [popup, setPopup] = useState(false);



    return (
        <div>
            <Container className="self_container ">
                <h1 className="loginhead" >POST</h1>

                <Row className="justify-content-md-center  myrow">
                    <Col md={6} xs={12} >
                        <Form id="login_form" >
                            {/* <Form.Group controlId='name'>
                                <Form.Label><b>Name  <span style={{ color: 'crimson' }}>*</span></b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='name'
                                    placeholder="user name"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group> */}

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label><b>Topic  <span style={{ color: 'crimson' }}>*</span></b></Form.Label>
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
                                <Form.Label><b>Title <span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='title'
                                    placeholder='add a title'
                                // value={title}
                                // onChange={(e) => settitle(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><b>Description</b></Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>


                            <Form.Group controlId='title'>
                                <Form.Label><b>Upload Image <i class="fas fa-cloud-upload-alt ico_big"></i><span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                <div class="d-flex justify-content-around">
                                    <div className='file file--upload'>
                                        <label for='input-file'>
                                            <i className="fas fa-images ico_big" ></i>
                                        </label>
                                        <input id='input-file' type='file' />
                                    </div>




                                    {
                                        popup && <POPUP
                                            type='addtxt'
                                            setPopup={setPopup}   /* true paasss */
                                        />
                                    }
                                    <div className='file file--upload'>
                                        <label for='text'>
                                            <i class="fas fa-text-height ico_big"></i>
                                        </label>
                                        <input id='text' type='file' onClick={() => setPopup(true)} ></input>
                                    </div>
                                </div>
                            </Form.Group>

                            <Button type='submit' variant='danger' style={{ marginTop: "1rem" }}>
                                <b style={{ fontSize: "16px" }}>Submit Post</b>
                            </Button>

                        </Form>
                    </Col>


                </Row>
            </Container>
        </div >
    )
}

export default UploadShot_Screen;
