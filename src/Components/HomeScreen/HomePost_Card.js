

import React from 'react';
import { Link } from 'react-router-dom';



const Post_Card = ({ ID, each_cardObj }) => {


    // console.log(each_cardObj);


    return (
        <div>
            < div className="card " style={{ backgroundColor: "rgba(255, 255, 255, 0.496)", width: "100%" }}>
                <Link to={`/post/${ID}`} >
                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        className="card-img-top"
                        alt="..."
                        width="10rem"
                        heigth="8rem"
                    />
                </Link>

                <div className="card_overlay" >
                    <div className="overlay_text" style={{ color: "black" }}>
                        {each_cardObj.Title}
                        {/* <div className="d-flex justify-content-end" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }} > */}
                        <i className="fas fa-heart" style={{ padding: "2px 2px 1px 1rem", color: "crimson" }} ></i>68 {' '}
                        <i className="fas fa-eye" style={{ padding: "2px 2px 1px 1rem ", color: "black" }}></i>3.2K {' '}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post_Card;
