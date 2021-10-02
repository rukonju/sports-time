import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import useSports from '../../hooks/useSports';
import Sport from '../Sport/Sport';

const Sports = () => {
    const [sports]=useSports();
    return (
        
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                    sports.slice(1,5).map(sport=><Sport key={sport.idSport} sport={sport}></Sport>) 
                    }
                </Row>
                <div data-aos="fade-up" className="d-grid gap-2 my-4">
                    <Button variant="secondary" size="lg">See All Sports</Button>
                </div>
            </Container>
    
    )        
};

export default Sports;