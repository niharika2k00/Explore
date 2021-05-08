
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import '../../STYLES/uploadShot.scss';
import POPUP from '../Popup/Popup.js';
import LOAD from '../Loading.js';
import SETTING from '../Popup/PopupSetting.js';
import firebase from 'firebase';


const UploadShot_Screen = () => {

    const db = firebase.firestore();
    const store = firebase.storage();

    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);
    const [setting, setsettingPopup] = useState(false);
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');
    const [topic, setTopic] = useState(' ');
    const [img, setImg] = useState(null);
    const [URL, setURL] = useState(null);
    const [files, setFiles] = useState([]);
    const [files_link, setFiles_Link] = useState([]);






    // SETTING METHOD --- (inside PopupSetting.js)
    const Setting_handler = async (e) => {
        e.preventDefault();
        console.log("setting handler executed");
        setsettingPopup(false);
    };


    // ----------   MULTIPLE IMAGE UPLOAD METHOD     -----------
    const MultipleFile_Onchange = async (e) => {
        e.preventDefault();
        console.log("multiple_onchange execute");
        const tempFiles = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            tempFiles.push(newFile);
        }
        setFiles(tempFiles);
    };


    const Upload_multi = async () => {
        const promises = [];
        const Multi_array = [];
        setFiles_Link([]);

        console.log('starting loop');
        for (let i = 0; i < files.length; i++) {
            console.log('inside loop before uploading', i);
            const uploadTask = firebase.storage().ref().child(`Files/${files[i].name}`).put(files[i]);
            const MultidownloadURL = await store.ref().child(`Files/${files[i].name}`).getDownloadURL();
            console.log("MultidownloadURL = ", MultidownloadURL);
            Multi_array.push(MultidownloadURL);
        }
        console.log('Array = ', Multi_array);
        return Multi_array;
    }




    // ----------   SINGLE IMAGE UPLOAD METHOD     -----------
    const Img_handle = (e) => {
        if (e.target.files[0])
            setImg(e.target.files[0]);
    };


    const Upload_single = async () => {
        try {
            // const UploadImage = store.ref(`Images/Cover_pics/${img.name}`).put(img);

            // Syntx :  UploadImage.on(string , snapshot  , error  , callback )          
            /*  UploadImage.on("state_Change_success",
                 snapshot => { },
                 function error(err) {
                     console.log(err);
                 },
                 async () => {
                     const url = await store.ref("Images/Cover_pics").child(img.name).getDownloadURL();
                     console.log("URL = ", url);
                     setURL(url);             
                 }
             ) */

            // const downloadURL = await store.ref("Images/Cover_pics").child(img.name).getDownloadURL();
            const downloadURL = await store.ref().child(`Images/Cover_pics/${img.name}`).getDownloadURL();
            console.log(downloadURL);
            return downloadURL;
        }

        catch (error) {
            alert(error);
            console.log(error);
            // return 0;
        }
    }




    const Description_handler = (e) => {
        e.preventDefault();
        console.log("description added");
        setPopup(false);
    };




    // -----------------    FINAL UPLOAD(submit) POST HANDLER   --------------------
    const PostSubmit_Handler = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const SINGLE = await Upload_single();
            console.log("SINGLE ", URL)
            await Upload_multi();
            // console.log("MULTIPLE ", MULTIPLE)

            const USER = firebase.auth().currentUser;
            await db.collection('USER_INFO').doc(USER.uid).collection('POSTS').add({
                Topic: topic,
                Title: title,
                // Cover_Image: SINGLE,
                Description: description,
                // Files: MULTIPLE,
                Posted_On: new Date()
            });

            console.log("Succesfully POST submitted");
            setLoading(false);
        }

        catch (error) {
            console.log(error);
        }
    };




    return (
        <div>
            <Container className="self_container ">
                <h1 className="loginhead" >POST</h1>

                {
                    loading ? <LOAD /> :
                        <Row className="justify-content-md-center  myrow">
                            <Col md={6} xs={12} >
                                <Form id="login_form" onSubmit={PostSubmit_Handler} >

                                    <Form.Group controlId='title'>
                                        <Form.Label><b>Settings<span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                        {
                                            setting && <SETTING
                                                type='setting'
                                                setsettingPopup={setsettingPopup}   /* true paasss */
                                                title={title}
                                                setTitle={setTitle}
                                                topic={topic}
                                                setTopic={setTopic}
                                                Setting_handler={Setting_handler}
                                                Img_handle={Img_handle}
                                            />
                                        }

                                        <div className='file file--upload' >
                                            <label onClick={() => setsettingPopup(true)}>
                                                <i className="fas fa-cogs ico_big"></i>
                                            </label>
                                        </div>
                                    </Form.Group>


                                    <Form.Group controlId='title'>
                                        {/* Multiple Images Upload */}
                                        <Form.Label><b>Upload Image <i class="fas fa-cloud-upload-alt ico_big"></i><span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                        <div class="d-flex justify-content-between">

                                            <div>
                                                <div className='file file--upload'>
                                                    <label for='input-file'>
                                                        <i className="fas fa-images ico_big" ></i>
                                                    </label>
                                                    <input id='input-file' type='file' multiple onChange={MultipleFile_Onchange} />
                                                </div>
                                                <p style={{ color: 'black', marginLeft: "1rem" }}>Images</p>
                                            </div>



                                            {/* --------------    POPUP  ------------ */}
                                            {
                                                popup && <POPUP
                                                    type='addtxt'
                                                    setPopup={setPopup}   /* true paasss */
                                                    description={description}
                                                    setDescription={setDescription}
                                                    Description_handler={Description_handler}
                                                />
                                            }
                                            <div>
                                                <div className='file file--upload'>
                                                    <label for='text' onClick={() => setPopup(true)}>
                                                        <i class="fas fa-text-height ico_big"></i>
                                                    </label>
                                                </div>
                                                <p style={{ color: 'black', marginLeft: "1rem" }}>Text</p>
                                            </div>


                                        </div>
                                    </Form.Group>

                                    <Button type='submit' variant='danger' disabled={loading} style={{ marginTop: "1rem" }} id="centerbtn" >
                                        <b style={{ fontSize: "16px" }}>Submit Post</b>
                                    </Button>
                                </Form>
                            </Col>


                        </Row>
                }


            </Container>
        </div >
    )
}

export default UploadShot_Screen;
