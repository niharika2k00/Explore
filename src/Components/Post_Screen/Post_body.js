
import React from 'react';
import { Link } from 'react-router-dom';




const Post_body = ({ ID, card_body, USER, set_USER, }) => {




    return (
        <div>
            <div className="rowTopgap" style={{ marginTop: "5rem", paddingTop: "5rem" }}  >

                <div className="d-flex justify-content-between" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }} >
                    <div>
                        <p className="post_titles">
                            <i className="fas fa-user" style={{ fontSize: "1.4rem", paddingRight: ".5rem" }} ></i> <b>Posted by {card_body.Display_Name} {" "} </b>
                        </p>
                    </div>
                    <div style={{ fontWeight: "bold" }}  >
                        <i className="far fa-calendar-alt" style={{ fontSize: "1.4rem", paddingRight: ".7rem" }}></i>
                        Posted On  <p>{card_body.Posted_On} </p>
                    </div>
                </div>

                <p className="post_subtitles">
                    <b>Topic : </b>{card_body.Topic}
                </p>

                <p className="post_subtitles">
                    <b>Title : </b> {card_body.Title}
                </p>

                <p className="post_subtitles">
                    <b>Description : </b> <br /> {card_body.Description}
                </p>


                <section className="Button">
                    <Link to="/">
                        <button type="button" className="btn btn-danger " style={{ marginTop: '4rem' }} > <b> Back </b>   </button>
                    </Link>
                </section>

            </div>
        </div >
    )
}

export default Post_body;
