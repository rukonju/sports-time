import React from 'react';
import {  Col, Image } from 'react-bootstrap';

const StadiumHome = (props) => {
    const{strStadiumThumb}=props.stadium;
    return (
        <Col>
            <div>
            <Image src={strStadiumThumb} rounded width="100%" />
            </div>
        </Col>      
    );
};

export default StadiumHome;