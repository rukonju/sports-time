import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Sport = (props) => {
    const {strSport,strSportDescription,strSportThumb}=props.sport;
    return (
        <Col>
            <Card data-aos="fade-up" data-aos-duration="3000">
                <Card.Img variant="top" src={strSportThumb} />
                <Card.Body>
                <Card.Title>{strSport}</Card.Title>
                <Card.Text>{strSportDescription.slice(0,200)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Sport;