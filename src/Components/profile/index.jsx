import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../STYLES/profile.css";
import "../../STYLES/homescreen.css";
import "../../App.css";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import EACH_CARD from "../home/card";
import LOAD from "../Loading.js";

const Profile_Screen = ({
  USER,
  set_USER,
  user_Posts,
  setUser_Posts,
  fetch_USER_Posts,
  loading,
  setLoading,
  city,
  country,
  state,
  fetch_About,
  about,
  setAbout,
}) => {
  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    if (Object.keys(USER).length !== 0) {
      fetch_USER_Posts();
      fetch_About();
      console.log(USER);
    } else {
      history.push("/");
    }
  }, [USER]);

  useEffect(() => {
    console.log(user_Posts);
    setLoading(false);
  }, [user_Posts, set_USER]);

  useEffect(() => {
    if (about && about.length !== 0) {
      console.log(about);
      console.log(about[0].City);
    } else {
      console.log("not running");
    }
  }, [about]);

  return (
    <div>
      <Container>
        <Row className="rowTopgap">
          <Col md={6} className="profilecontainer">
            <img
              src={USER.Profile_Pic}
              className="rounded-circle proimg"
              alt=" "
              width="180rem"
              height="180rem"
            />
          </Col>

          <Col md={6}>
            <div className="user_data">
              <h2>{USER.Name} </h2>
              <p>{USER.Email}</p>
              {about && about.length !== 0 ? (
                <p>
                  {about[0].City}
                  {" , "} {about[0].Country}{" "}
                </p>
              ) : (
                <p>Please complete the details ...</p>
              )}
            </div>
          </Col>
        </Row>

        <section>
          <div className="d-flex justify-content-evenly" id="line">
            <div className="subtopic">
              {" "}
              <Link to="/profile"> SHOTS </Link>{" "}
            </div>
            <div className="subtopic">
              {" "}
              <Link to="/likedshots">LIKED SHOTS </Link>{" "}
            </div>
            {/* <div className="subtopic"> <Link to="/collection" >COLLECTION  </Link> </div> */}
            <div className="subtopic">
              {" "}
              <Link to="/about"> ABOUT</Link>{" "}
            </div>
          </div>
        </section>

        <hr></hr>

        <section>
          <section className="rowTopgap">
            <h2 className="profile_head">SHOTS</h2>
            <Row style={{ padding: "3rem auto" }}>
              <Col md={4} sm={12} style={{ paddingTop: "2rem" }}>
                <div
                  className="card"
                  style={{ width: "90%" }}
                  className="pro_card">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ textShadow: "2px 1px", fontSize: "1.4rem" }}>
                      Upload your shot
                    </h5>
                    <p className="card-text">
                      Upload Shots based on your life experience .......{" "}
                    </p>
                    <section className="Button">
                      <a
                        className="Button-btn"
                        href="/uploadpost"
                        style={{ marginTop: "1px" }}>
                        Upload Shot{" "}
                      </a>
                    </section>
                  </div>
                </div>
              </Col>

              {loading ? (
                <LOAD />
              ) : user_Posts.length !== 0 ? (
                user_Posts.map((card) => (
                  <Col
                    key={card.id}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    className="hovercard"
                    style={{ padding: "2rem .6rem", margin: "0rem" }}>
                    <EACH_CARD ID={card.id} each_cardObj={card} USER={USER} />
                  </Col>
                ))
              ) : null}
            </Row>
          </section>
        </section>
      </Container>
    </div>
  );
};

export default Profile_Screen;