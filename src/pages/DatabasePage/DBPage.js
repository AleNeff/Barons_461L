import React from "react";
import { Row, Col, Table, Container } from "react-bootstrap";
import Spacer from "react-spacer";
import "./DBPage.css";

const DBPage = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Spacer height="100px" />
        </Row>
        <Col>
          <div className="projects-table">
            <Table className="table" striped bordered hover size="md">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Source 1</td>
                  <td>Koch and Sons</td>
                  <td>foo</td>
                  <td>foo.zip</td>
                </tr>
                <tr>
                  <td>Source 2</td>
                  <td>Steuber LLC</td>
                  <td>foo</td>
                  <td>foo.zip</td>
                </tr>
                <tr>
                  <td>Source 3</td>
                  <td>Konopelski Group</td>
                  <td>foo</td>
                  <td>foo.zip</td>
                </tr>
                <tr>
                  <td>Source 4</td>
                  <td>Harber Inc</td>
                  <td>foo</td>
                  <td>foo.zip</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default DBPage;
