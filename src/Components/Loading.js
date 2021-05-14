

import React from 'react';
import { Spinner } from 'react-bootstrap';

const Load = () => {


    return (
        <div>
            <Spinner animation="grow" variant="danger" style={{ width: '70px', height: '70px', margin: '4rem auto', display: 'block' }}>
                <span className="sr-only" style={{ color: " black" }} >Loading...</span>
            </Spinner>
            <h6 style={{ justifyContent: "center", alignItems: "center" }} >Loading ....</h6>
        </div >
    )
}

export default Load;
