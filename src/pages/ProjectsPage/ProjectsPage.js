import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Form,
  Container,
  Button,
  ButtonGroup,
  Modal
} from "react-bootstrap";
import ProjectViewer from "../../components/ProjectViewer";
import "./ProjectsPage.css";
import Spacer from "react-spacer";
const axios = require('axios');

function Projects(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [username, setUsername] = useState('');

  useEffect(() => {
    getUsername();
  }, []);

  const url = "http://barons461-backend.herokuapp.com/"
  const getUsername = () => {
    axios.get(url)
    .then((response) => {
      const theUsername = response.data["Hello"];
      console.log(response);
      console.log(theUsername);
      setUsername(theUsername);
    }).catch(error => console.error(`Error: ${error}`));
  }

  return (
    <Container className="mt-5">
      <div>
        <Row>
          <Spacer height="18px" />
        </Row>
        <Row>
          <h1>Welcome {props.username}</h1>
          <Spacer height="28px" />
        </Row>
        <Row>
          <Col style={{ marginRight: 75 }}>
            <div class="projects-table">
              <h2>Projects</h2>
              <Table className="table" striped bordered hover size="md">
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
                        <Button variant="outline-primary" onClick={handleShow}>
                          Open
                        </Button>
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
          </Col>
          <Col>
            <div class="create-project">
              <h2>Create Project</h2>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Project ID</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button>Create</Button>
              </Form>
            </div>
          </Col>
          <Modal
            dialogClassName="modal-90w"
            size="lg"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header>
              <Modal.Title>Project 1</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ProjectViewer />
            </Modal.Body>
          </Modal>
        </Row>
        <Row>
          <div>
            <h1>{username}</h1>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Projects;
