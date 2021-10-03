import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import EngTeam from '../EngTeam/EngTeam';

const EngTeams = () => {
    const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    teams.map(team=> <EngTeam key={team.idTeam} team={team}></EngTeam>)
                }
            </Row>
        </Container>
    );
};

export default EngTeams;