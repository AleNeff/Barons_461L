import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Form,
  Container,
  Button,
  ButtonGroup,

} from "react-bootstrap";
import ProjectViewer from "../../components/ProjectViewer";
import "./ProjectsPage.css";
import Spacer from "react-spacer";
import Cookies from "js-cookie";
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import axios from "axios";

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

async function getSets() {
  const res = await axios.get(`${url}/hwSets/get_all`);
  return res;
}

async function createProject(name, desc, id, owner) {
  console.log(name, desc, id, owner);
  const params = JSON.stringify({
    "project_name": name,
    "project_description": desc,
    "project_id": id,
    "project_owner": owner
  })
  const res = await axios.post(`${url}/project/create`, params, {
    "headers": {
      "content-type": "application/json",
    }
  })
  console.log(res);
  window.location.reload();
}

async function deleteProject(owner, id) {
  console.log(owner, id)
  const params = JSON.stringify({
    "current_user": owner,
    "project_id": id
  });
  const res = await axios.post(`${url}/project/delete_id`, params, {
    "headers": {
      "content-type": "application/json",
    }
  })
  if (res["data"] === -1) {
    alert("You are not authorized to delete this!")
  }
  window.location.reload();
}

async function joinProject(id, user) {
  console.log(id, user);
  const params = {
    current_user: user,
    project_id: id,
    user_name: user
  }

  const res = await axios.post(`${url}/project/add_user`, params)
  console.log(res);
  window.location.reload()
}

function MyModal(props) {
  console.log(props.project.project_id)

  return (
    <Modal onRequestClose={props.onRequestClose} effect={Effect.ScaleUp}>
      <h1>{props.project.project_name}</h1>
      <br/>
      <ProjectViewer project={props.project} hwsets={props.hwsets}/>
      <br/>
      <Button onClick={ModalManager.close}>Close</Button>
    </Modal>
  )
}


function Projects(props) {
  const [projectName, setProjectName] = useState();
  const [projectDesc, setProjectDesc] = useState();
  const [projectID, setProjectID] = useState();
  const [projects, setProjects] = useState([]);
  const [hwsets, setHWSets] = useState([]);

  

  useEffect(async () => {
    let result = await getProjects(Cookies.get('user-token'));
    let sets = await getSets();
    console.log(result["data"]);
    console.log(sets["data"]);

    setProjects(result["data"]);
    setHWSets(sets["data"]);
  }, [])


  function openModal(project, hwsets) {
    ModalManager.open(<MyModal project={project} hwsets={hwsets} onRequestClose={() => true}/>)
  }

  function renderProjects(project, index) {
    return (
      <tr key={index}>
        <td>{project.project_name}</td>
        <td>{project.project_description}</td>
        <td>{project.project_id}</td>
        <td>{project.checked_out["HWSet1"]}</td>
        <td>{project.checked_out["HWSet2"]}</td>
        <td>{project.checked_out["HWSet3"]}</td>
        <td>
          <ButtonGroup aria-label="btnGroup">
            <Button variant="outline-primary" onClick={() => openModal(project, hwsets)}>Open</Button>
            {/* <Button variant="outline-danger" onClick={() => deleteProject(Cookies.get('user-token'), project.project_id)}>Delete</Button> */}
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
          <h1>Welcome {Cookies.get('user-token')}</h1>
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
                    <th>HW Set 1</th> 
                    <th>HW Set 2</th> 
                    <th>HW Set 3</th> 
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
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" onChange={(e) => setProjectName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control type="text" onChange={(e) => setProjectDesc(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project ID</Form.Label>
                  <Form.Control type="text" onChange={(e) => setProjectID(e.target.value)}/>
                </Form.Group>
                <Button onClick={() => createProject(projectName, projectDesc, projectID, Cookies.get('user-token'))}>Create</Button>
              </Form>
            </div>
          </Col>
          <Col className="center">
            <div class="create-project">
              <h2>Join Project</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Project ID</Form.Label>
                  <Form.Control type="text" onChange={(e) => setProjectID(e.target.value)}/>
                </Form.Group>
                <Button onClick={() => joinProject(projectID, Cookies.get('user-token'))}>Join</Button>
              </Form>
            </div>
          </Col>


        </Row>
      </div>
    </Container>
  );
}

export default Projects;
