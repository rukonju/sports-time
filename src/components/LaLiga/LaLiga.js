import React from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import LaLigaHome from '../LaligaHome/LaLigaHome';

const LaLiga = () => {
    const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain');
    
    console.log(teams)
    return (
        <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                    teams.slice(1,5).map(team=><LaLigaHome key={team.idTeam} team={team}></LaLigaHome>) 
                    }
                </Row>
                <div data-aos="fade-up" className="d-grid gap-2 my-4">
                    <Button variant="secondary" size="lg">See All Laliga Teams</Button>
                </div>
            </Container>
    );
};

export default LaLiga;