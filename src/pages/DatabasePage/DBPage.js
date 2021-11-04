import React, { useEffect, useState } from "react";
import { Row, Col, Table, Container } from "react-bootstrap";
import Spacer from "react-spacer";
import "./DBPage.css";

const DBPage = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.slice(0, 5));
      });
  }, []);

  const displayTable = (food, index) => {
    return (
      <tr key={index}>
        <td>{food.description}</td>
        <td>{food.fdcId}</td>
        <td>{food.publicationDate}</td>
        <td>
          <a
            href="https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_foundation_food_csv_2020-10-30.zip"
            download={food.description}
          >
            Download {food.fdcId}.zip
          </a>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Spacer height="28px" />
          <h1>Sources</h1>
        </Row>
        <Row>
          <Spacer height="35px" />
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
              <tbody>{foods.map(displayTable)}</tbody>
            </Table>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default DBPage;
