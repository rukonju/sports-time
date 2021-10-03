import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import LaTeam from '../LaTeam/LaTeam';

const LaTeams = () => {
    const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    teams.map(team=> <LaTeam key={team.idTeam} team={team}></LaTeam>)
                }
            </Row>
        </Container>
    );
};

export default LaTeams;