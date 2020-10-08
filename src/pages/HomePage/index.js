import React from "react";
import { Link } from "react-router-dom";
import { selectrequestData } from "../../store/requestData/selectors";
import { useSelector } from "react-redux";
import { Card, Button, CardColumns, Container, Col } from "react-bootstrap";

export default function HomePage() {
  const requestData = useSelector(selectrequestData);
  return (
    <>
      <Container as={Col} md={{ span: 15, offset: 1 }} className="mt-5">
        <Link to="/new_care_request">
          {" "}
          <Button>Add a Request</Button>
        </Link>

        <CardColumns>
          {requestData.requestData.map((request, i) => {
            return (
              <Card key={i} className="mt-5">
                <Card.Header>{request.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Link to={`/request/${request.name}`}>
                    {" "}
                    <Button variant="primary">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
}
