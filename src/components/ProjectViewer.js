import React from 'react';
import { Row, Col, Button, Form, FloatingLabel, ButtonGroup, Container, FormControl, ListGroup } from 'react-bootstrap';

import '../App.css';

function ProjectViewer() {
    return(  
        <Container>
            <div>
                <Row>
                    <Col>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Hardware Sets">
                                <Form.Select aria-label="Floating label select example">
                                    <option value="1">HW Set 1</option>
                                    <option value="2">HW Set 2</option>
                                    <option value="3">HW Set 3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Quantity">
                                <Form.Control type="email" placeholder="" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="center">
                        <Button size="lg" variant="outline-success">Check In</Button>
                        <Button size="lg" variant="outline-info">Check Out</Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <FloatingLabel controlId="floatingSelect" label="Add user">
                        <Form.Select aria-label="Floating label select example">
                            <option value="1">Rushi</option>
                            <option value="2">Alejandro</option>
                            <option value="3">Nghi</option>
                            <option value="4">Kevin</option>
                            <option value="5">Ian</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>
                    <Col className="center">
                        <Button size="lg" variant="outline-dark">Add User</Button>
                    </Col>

                </Row>
            </div>
        </Container>            
    );
}

export default ProjectViewer;