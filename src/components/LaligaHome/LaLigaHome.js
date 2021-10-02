import React from 'react';
import { Card, Col } from 'react-bootstrap';

const LaLigaHome = (props) => {
    
    const{strTeam,strTeamBadge,strDescriptionEN}=props.team;
    return (
         <div>
            <Col>
            <Card data-aos="fade-up" data-aos-duration="3000">
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>{strDescriptionEN.slice(0,200)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div> 

    );
};

export default LaLigaHome;