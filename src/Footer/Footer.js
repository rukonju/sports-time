import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-secondary">
            <Container>
                <Row className="p-4">
                    <Col sm={2}>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </Col>
                    <Col sm={2}>
                    <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </Col>
                    <Col sm={2}>
                    <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </Col>
                </Row>
                <p className="mb-0">website create by Rukon</p>
            </Container>
        </div>
    );
};

export default Footer;