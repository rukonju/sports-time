import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const AllSport = (props) => {
    const {strSport,strSportThumb,strSportIconGreen,strSportDescription}=props.sport
    return (
        
  
        <Col>
            <Card>
                <Card.Img variant="top" src={strSportThumb} roundedCircle  />
                <Card.Body>
                    <Card.Title><Image src={strSportIconGreen} rounded height="50px" />{strSport}</Card.Title>
                    <Card.Text>
                        {strSportDescription.slice(0,250)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
  

    );
};

export default AllSport;