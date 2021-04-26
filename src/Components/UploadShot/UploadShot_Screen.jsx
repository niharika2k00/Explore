
import React from 'react';
import { Dropdown, Row, Col, Container, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import '../../STYLES/uploadShot.scss';


const UploadShot_Screen = () => {
    return (
        <div>
            <Container className="self_container ">

                <h1 className="loginhead" >POST</h1>

                <Row className="justify-content-md-center  myrow">

                    <Col md={6} xs={12} >
                        <Form id="login_form" >
                            <Form.Group controlId='name'>
                                <Form.Label><b>Name  <span style={{ color: 'crimson' }}>*</span></b></Form.Label>
                                <Form.Control
                                    className="form_box"
                                    type='name'
                                    placeholder="user name"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

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
                                <Form.Label><b>Upload Image <span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                <Form.File
                                    id="exampleFormControlFile1"
                                    className="upload_style"
                                    label="File input"
                                />
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
