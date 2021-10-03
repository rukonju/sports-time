import React from 'react';
import { Card, Col } from 'react-bootstrap';

const LaTeam = (props) => {
    const {strTeam,strLeague,strFacebook,strDescriptionEN,strInstagram,strStadium,strStadiumDescription,strStadiumLocation,strStadiumThumb,strTeamBadge,strTeamBanner,strTwitter,strWebsite,strYoutube}=props.team;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strTeamBadge} roundedCircle  />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strWebsite?strWebsite:'No website'}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default LaTeam;