
import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import "../../App.css";
import {
    FacebookShareButton,
    FacebookIcon,

    WhatsappShareButton,
    WhatsappIcon,

    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { useLocation } from 'react-router-dom';



const Post_body = ({ ID, card_body, USER, set_USER, }) => {

    const location = useLocation();
    // const URL = location.pathname;
    var width = window.innerWidth;
    const URL = window.location.href;     // full url of the site
    console.log(URL);



    return (
        <div className="post-body">

            <Row className="share_btn" >
                <div>
                    <FacebookShareButton className="btn btn-primary btn-floating m-1 btn-lg icon-facebook" url={URL} title="TPP" source="" >
                        < FacebookIcon size={38} round={true} />
                    </FacebookShareButton>

                    <LinkedinShareButton className="btn btn-primary btn-floating m-1 btn-lg icon-linkedin" url={URL} title="TPP" source="" >
                        < LinkedinIcon size={38} round={true} />
                    </LinkedinShareButton>

                    < WhatsappShareButton url={URL} title="Go and Check Out Our Post... " separator=" " className="btn btn-primary btn-floating m-1 btn-lg icon-whatsapp" >
                        <WhatsappIcon size={38} round={true} />
                    </WhatsappShareButton>
                </div>
            </Row>


            {(width <= 450) ?
                (  //  FOR MOBILE VIEW
                    <div>
                        <div>
                            <p className="post_titles">
                                <i className="fas fa-user" style={{ fontSize: "2rem", paddingRight: ".5rem" }} ></i> <b>Posted by {card_body.Display_Name} {" "} </b>
                            </p>
                        </div>

                        <div style={{ fontWeight: "bold" }} className="postedDate" >
                            <i className="far fa-calendar-alt" style={{ fontSize: "1.4rem", paddingRight: ".7rem" }}  ></i>
                        Posted On {card_body.Posted_On}
                        </div>
                    </div>
                ) :

                (   //  FOR DESKTOP VIEW
                    <div className="d-flex justify-content-between" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }} >
                        <div>
                            <p className="post_titles">
                                <i className="fas fa-user" style={{ fontSize: "1.4rem", paddingRight: ".5rem" }} ></i> <b>Posted by {card_body.Display_Name} {" "} </b>
                            </p>
                        </div>

                        <div style={{ fontWeight: "bold" }} className="postedDate" >
                            <i className="far fa-calendar-alt" style={{ fontSize: "1.4rem", paddingRight: ".7rem" }}  ></i>
                        Posted On  {card_body.Posted_On}
                        </div>
                    </div>
                )
            }


            <p className="post_subtitles" >
                <b>Topic : </b>{card_body.Topic}
            </p >

            <p className="post_subtitles">
                <b>Title : </b> {card_body.Title}
            </p>

            <p className="post_subtitles">
                <b>Description : </b> <br /> {card_body.Description}
            </p>


            <section className="Button">
                <Link to="/">
                    <button className="Button-btn" style={{ margin: '3rem 0px' }} >
                        BACK
                </button>
                </Link>
            </section>

        </div >

    )
}

export default Post_body;
