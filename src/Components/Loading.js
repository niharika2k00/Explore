

import React from 'react';
import { Spinner } from 'react-bootstrap';

const Load = () => {


    return (
        <div>
            <Spinner animation="grow" variant="danger" style={{ width: '80px', height: '80px', margin: '4rem auto', display: 'block' }}>
                <span className="sr-only" >Loading...</span>
            </Spinner>
        </div>
    )
}

export default Load;
