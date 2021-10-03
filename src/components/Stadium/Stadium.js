import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import StadiumHome from '../StadiumHome/StadiumHome';

const Stadium = () => {
    const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    teams.slice(0,8).map(std=> <StadiumHome stadium={std}></StadiumHome>)
                }
            </Row>
            <div data-aos="fade-up" className="d-grid gap-2 my-4">
                <Button variant="secondary" size="lg">See All Stadium</Button>
            </div>
        </Container>
    );
};

export default Stadium;