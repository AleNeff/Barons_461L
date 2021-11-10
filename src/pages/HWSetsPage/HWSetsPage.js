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
import "./HWSetsPage.css";
import Spacer from "react-spacer";

function HWSets() {
  const randID = () => {
    return Math.random() * 1000000;
  };

  const [HW, setHW] = useState([]);

  useEffect(() => {
    fetch("https://barons461-backend.herokuapp.com/hwSets/get_all")
      .then((res) => res.json())
      .then((data) => {
        setHW(data); 
      });
  }, []);

  // const [HW, setHW] = useState([
  //   { id: randID(), name: "HW Set 1", capacity: 500, available: 200 },
  //   { id: randID(), name: "HW Set 2", capacity: 700, available: 200 },
  //   { id: randID(), name: "HW Set 3", capacity: 900, available: 300 }
  // ]);

  const deleteHW = (id) => {
    setHW(HW.filter((item) => item.id !== id));
  };

  // const [name, setName] = useState("");
  // const [cap, setCap] = useState("");

  // onClick={() => deleteHW(hw.id)}
  const displayHW = (hw) => {
    return (
      <tr key={hw.Name}>
        <td>{hw.Name}</td>
        <td>{hw.Capacity}</td>
        <td>{hw.Availability}</td>
        {/* <td>
          <ButtonGroup aria-label="btnGroup">
            <Button variant="outline-danger" >
              Delete
            </Button>
          </ButtonGroup>
        </td> */}
      </tr>
    );
  };

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
                <tbody>{HW.map(displayHW)}</tbody>
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
                  <Form.Control
                    type="text"
                    // onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control
                    type="text"
                    // onChange={(e) => setCap(e.target.value)}
                  />
                </Form.Group>

                {/* <Button
                  onClick={() =>
                    setHW([
                      ...HW,
                      {
                        id: randID(),
                        name: name,
                        capacity: cap,
                        available: 200
                      }
                    ])
                  }
                >
                  Create
                </Button> */}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HWSets;
