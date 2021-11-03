import React, { useState } from "react";
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
import "./HWSetsPage.css";
import Spacer from "react-spacer";

function HWSets() {

  return (
    <Container className="mt-5">
      <div>
        <Row>
          <Spacer height="18px" />
        </Row>
        <Row>
          <Spacer height="28px" />
        </Row>
        <Row>
          <Col style={{ marginRight: 75 }}>
            <div class="projects-table">
              <h2>Hardware Sets</h2>
              <Table className="table" striped bordered hover size="md">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Capacity</th>
                    <th>Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HW Set 1</td>
                    <td>500</td>
                    <td>200</td>
                    <td>
                      <ButtonGroup aria-label="btnGroup">
                        <Button variant="outline-danger">Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>HW Set 2</td>
                    <td>700</td>
                    <td>200</td>
                    <td>
                      <ButtonGroup aria-label="btnGroup">
                        <Button variant="outline-danger">Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>HW Set 3</td>
                    <td>900</td>
                    <td>300</td>
                    <td>
                      <ButtonGroup aria-label="btnGroup">
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
              <h2>Create HW Set</h2>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                
                <Button>Create</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HWSets;
