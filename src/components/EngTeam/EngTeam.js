import React from 'react';
import { Facebook, Youtube, Twitter} from 'react-bootstrap-icons';
import { Button, Card, Col } from 'react-bootstrap';
const EngTeam = (props) => {
    const {strTeam,strLeague,strFacebook,strDescriptionEN,strInstagram,strStadium,strStadiumDescription,strStadiumLocation,strStadiumThumb,strTeamBadge,strTeamBanner,strTwitter,strWebsite,strYoutube}=props.team;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strTeamBanner} roundedCircle  />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <div className="text-decoration-none">
                        <a className="text-decoration-none m-3 d-block" href={strWebsite}  target="_black">{strWebsite} </a>
                        <a className="text-decoration-none m-3 " href={strTwitter}  target="_black"> <Twitter/> </a>
                        <a className="text-decoration-none m-3 " href={strYoutube}  target="_black"> <Youtube/> </a>
                        <a className="text-decoration-none m-3 " href={strFacebook} target="_black"><Facebook/> </a>
                        <div data-aos="fade-up" className="d-grid gap-2 my-4">
                    <Button variant="secondary" size="lg">See All Laliga Teams</Button>
                </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EngTeam;