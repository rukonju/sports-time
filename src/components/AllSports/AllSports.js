import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useSports from '../../hooks/useSports';
import AllSport from '../AllSport/AllSport';

const AllSports = () => {
    const [sports]=useSports();
    
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    sports.map(sport=><AllSport key={sport.idSport} sport={sport}></AllSport>)
                }
            </Row>
        </Container>    
    );
};

export default AllSports;