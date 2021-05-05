
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import '../../STYLES/uploadShot.scss';
import POPUP from '../Popup/Popup.js';
import SETTING from '../Popup/PopupSetting.js';
import firebase from 'firebase';


const UploadShot_Screen = () => {

    const db = firebase.firestore();
    const store = firebase.storage();

    const [popup, setPopup] = useState(false);
    const [setting, setsettingPopup] = useState(false);
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');
    const [topic, setTopic] = useState(' ');
    const [img, setImg] = useState(null);
    const [URL, setURL] = useState(null);
    const [files, setFiles] = useState([]);
    const [files_link, setFiles_Link] = useState([]);


    // SETTING METHOD 
    const Setting_handler = async (e) => {
        e.preventDefault();
        console.log("setting handler executed");

        try {
            const UploadImage = store.ref(`Images/Cover_pics/${img.name}`).put(img);
            // Syntx :  UploadImage.on(string , snapshot  , error  , callback )
            UploadImage.on("state_Change_success",
                snapshot => { },
                function error(err) {
                    console.log(err);
                },
                async () => {
                    const url = await store.ref("Images/Cover_pics").child(img.name).getDownloadURL();
                    console.log("URL = ", url);
                    setURL(url);

                    const USER = firebase.auth().currentUser;
                    await db.collection('USER_INFO').doc(USER.uid).collection('POSTS').add({
                        Topic: topic,
                        Title: title,
                        Cover_Image: url,
                        Description: description,
                        Files: files_link,
                        Posted_On: new Date()
                    })
                }
            )
            setsettingPopup(false);
        }

        catch (error) {
            alert(error);
            console.log(error);
        }

    };


    // MULTIPLE IMAGE UPLOAD METHOD
    const MultipleFile_Onchange = (e) => {
        const tempFiles = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            tempFiles.push(newFile);
        }
        setFiles(tempFiles);
    };


    const Upload_multi = (e) => {
        e.preventDefault();
        const promises = [];
        setFiles_Link([]);

        files.forEach(file => {
            const uploadTask =
                firebase.storage().ref().child(`Files/${file.name}`).put(file);
            promises.push(uploadTask);
            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot => { },
                // function error(err) { console.log(error); }
                error => console.log(error.code),
                async () => {
                    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                    console.log(downloadURL);
                    setFiles_Link((link) => [...link, downloadURL])  //...spread operator--> to set the prev files and add new index with it. 

                    console.log("Files Link Array = ", files_link);
                }
            );
        });
        Promise.all(promises)
            .then(() => alert('All files uploaded'))
            .catch(err => console.log(err.code));
    };


    const Description_handler = (e) => {
        e.preventDefault();
        console.log("desc added");
        setPopup(false);
    };

    // FINAL UPLOAD(submit) POST METHOD
    const PostSubmit_Handler = () => {

    };




    return (
        <div>
            <Container className="self_container ">
                <h1 className="loginhead" >POST</h1>

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
                                        img={img}
                                        setImg={setImg}
                                        URL={URL}
                                        setURL={setURL}
                                        Setting_handler={Setting_handler}
                                    />
                                }
                                <div className='file file--upload'>
                                    <label onClick={() => setsettingPopup(true)}>
                                        <i className="fas fa-cogs ico_big"></i>
                                    </label>
                                </div>
                            </Form.Group>


                            <Form.Group controlId='title'>
                                {/* Multiple Images Upload */}
                                <Form.Label><b>Upload Image <i class="fas fa-cloud-upload-alt ico_big"></i><span style={{ color: 'crimson' }}>*</span> </b></Form.Label>
                                <div class="d-flex justify-content-around">
                                    <div className='file file--upload'>
                                        <label for='input-file'>
                                            <i className="fas fa-images ico_big" ></i>
                                        </label>
                                        <input id='input-file' type='file' multiple onChange={MultipleFile_Onchange} />
                                        <button onClick={Upload_multi}>Upload</button>
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
                                    <div className='file file--upload'>
                                        <label for='text' onClick={() => setPopup(true)}>
                                            <i class="fas fa-text-height ico_big"></i>
                                        </label>
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
