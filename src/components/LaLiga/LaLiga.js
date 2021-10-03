import React from 'react';
import { Container, Row,Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTeams from '../../hooks/useTeams';
import LaLigaHome from '../LaligaHome/LaLigaHome';

const LaLiga = () => {
    const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain');
    
    console.log(teams)
    if (teams.length){
        return (
            <Container>
                    <Row xs={1} md={4} className="g-4">
                        {
                        teams.slice(1,5).map(team=><LaLigaHome key={team.idTeam} team={team}></LaLigaHome>) 
                        }
                    </Row>
                    <div data-aos="fade-up" className="d-grid gap-2 my-4">
                    <Link to="/la_liga">
                        <Button variant="secondary" size="lg">See All Teams</Button>
                    </Link>
                    
                </div>
            </Container>
        );
    }
    else{
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    
};

export default LaLiga;