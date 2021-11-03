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
import Cookies from "js-cookie";

const axios = require('axios');

const url = 'https://barons461-backend.herokuapp.com'

async function getProjects(current_user) {
  const res = await axios.get(`${url}/project/get_all`, {
    params: {
      current_user: current_user
    }
  })
  .then (function (response) {
    return response;
  })

  return res;
}





function Projects(props) {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    let result = await getProjects(Cookies.get('user-token'));
    console.log(result["data"]);
    setProjects(result["data"]);
  }, [])


  function renderProjects(project, index) {
    return (
      <tr key={index}>
        <td>{project.project_name}</td>
        <td>{project.project_description}</td>
        <td>{project.project_id}</td>
        <td>
          <ButtonGroup aria-label="btnGroup">
            <Button variant="outline-primary" onClick={handleShow}>Open</Button>
            <Button variant="outline-danger">Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    );
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
                  {projects.map(renderProjects)}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col className="center">
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
      </div>
    </Container>
  );
}

export default Projects;
