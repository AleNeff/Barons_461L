import React, { useState } from 'react';
import { Row, Table, Container, Button, ButtonGroup, Modal } from 'react-bootstrap';
import ProjectViewer from '../../components/ProjectViewer';
import "./ProjectsPage.css";


function Projects(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(  
        <Container className="mt-5">
            <div>
                <Row>
                    <h1>Welcome {props.username}</h1>
                </Row>
                <Row>
                    <div class="table">
                        <h2>Projects</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Project 1</td>
                                <td>foo</td>
                                <td>123</td>
                                <td>
                                    <ButtonGroup aria-label="btnGroup">
                                        <Button variant="outline-primary" onClick={handleShow}>Open</Button>
                                        <Button variant="outline-danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                                </tr>
                                <tr>
                                <td>Project 2</td>
                                <td>foo</td>
                                <td>456</td>
                                <td>
                                    <ButtonGroup aria-label="btnGroup">
                                        <Button variant="outline-primary">Open</Button>
                                        <Button variant="outline-danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                                </tr>
                                <tr>
                                <td>Project 3</td>
                                <td>foo</td>
                                <td>789</td>
                                <td>
                                    <ButtonGroup aria-label="btnGroup">
                                        <Button variant="outline-primary">Open</Button>
                                        <Button variant="outline-danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <Modal dialogClassName="modal-90w" size="lg" show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Project 1</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ProjectViewer/>
                        </Modal.Body>
                    </Modal>
                </Row>
            </div>
        </Container>        
        
    );
}

export default Projects;
