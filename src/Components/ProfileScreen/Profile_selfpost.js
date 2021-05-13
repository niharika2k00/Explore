
import React from 'react';




const Profile_selfpost = () => {



    return (
        <div>
            {loading ? <LOAD /> :
                items.length !== 0 ?
                    (
                        <section className="rowTopgap" >

                            <Row style={{ padding: "3rem auto" }} >
                                {/* array of objects is mapped ------ [{} {} {}] */}
                                {items.map(card => (
                                    <Col key={card.id} sm={12} md={4} lg={4} xl={4} className="hovercard" style={{ padding: "2rem .6rem", margin: "0rem" }}>
                                        <EACH_CARD
                                            ID={card.id}
                                            each_cardObj={card}
                                        />
                                    </Col>
                                ))}
                            </Row>

                        </section>
                    ) : null
            }
        </div>
    )
}

export default Profile_selfpost;
