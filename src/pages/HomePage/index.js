import React from "react";
import { Link } from "react-router-dom";
import { selectrequestData } from "../../store/requestData/selectors";
import { useSelector } from "react-redux";
import {
  Card,
  Button,
  CardColumns,
  Container,
  Col,
  Form,
} from "react-bootstrap";
import "./homePage.css";

export default function HomePage() {
  const requestData = useSelector(selectrequestData);
  return (
    <>
      <h1 className="header">optimal cooperation in healthcare</h1>
      <Container as={Col} md={{ span: 15, offset: 1 }} className="mt-5">
        <CardColumns>
          {requestData.requestData.map((request, i) => {
            return (
              <Card key={i} className="mt-5">
                <Card.Header>{request.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{request.careType}</Card.Title>
                  <Card.Text>
                    <strong>Start Date: </strong>{request.startDate}<br></br>
                    <strong>End Date: </strong>{request.endDate}<br></br>
                  </Card.Text>
                  <Link to={`/request/${request.name}`}>
                    {" "}
                    <Button variant="outline-dark">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        <Form.Row className="justify-content-md-center mt-5">
          <Link to="/new_care_request">
            {" "}
            <Button variant="dark">Add a Request</Button>
          </Link>
        </Form.Row>
      </Container>
    </>
  );
}
