
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import '../../STYLES/uploadShot.scss';
import POPUP from '../Popup/Popup.js';
import SETTING from '../Popup/PopupSetting.js';


const UploadShot_Screen = () => {

    const [popup, setPopup] = useState(false);
    const [setting, setsettingPopup] = useState(false);

    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');



    return (
        <div>
            <Container className="self_container ">
                <h1 className="loginhead" >POST</h1>

                <Row className="justify-content-md-center  myrow">
                    <Col md={6} xs={12} >
                        <Form id="login_form" >

                            <Form.Group controlId='title'>
                                <Form.Label><b>Settings<span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                {
                                    setting && <SETTING
                                        type='setting'
                                        setsettingPopup={setsettingPopup}   /* true paasss */
                                        title={title}
                                        setTitle={setTitle}
                                    />
                                }
                                <div className='file file--upload'>
                                    <label onClick={() => setsettingPopup(true)}>
                                        <i className="fas fa-cogs ico_big"></i>
                                    </label>
                                </div>
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



                                    {/* --------------    POPUP  ------------ */}
                                    {
                                        popup && <POPUP
                                            type='addtxt'
                                            setPopup={setPopup}   /* true paasss */
                                            description={description}
                                            setDescription={setDescription}
                                        />
                                    }
                                    <div className='file file--upload'>
                                        <label for='text' onClick={() => setPopup(true)}>
                                            <i class="fas fa-text-height ico_big"></i>
                                        </label>
                                        {/* <input id='text' type='file' onClick={() => setPopup(true)} ></input> */}
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
