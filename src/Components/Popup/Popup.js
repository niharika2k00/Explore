
import React from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import '../../STYLES/popup.css';




const Popup = ({ type, setPopup }) => {

    const AddNote = () => {
        console.log("Text added....");
    }


    return (
        <div>
            <div className="pop-up">
                <div className="input-box">
                    <CancelIcon onClick={() => setPopup(false)} className="cross-btn" />
                    <h5>Project Description :</h5>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Form>

                    <button onClick={() => AddNote()}>
                        Add Text
                    </button>


                </div>
            </div>
        </div >
    )
}

export default Popup
