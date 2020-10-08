import React, { useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { setRequest } from "../../store/requestData/actions";
import { useDispatch } from "react-redux";
import {  Link} from "react-router-dom";

export default function HomePage() {
  const [name, setName] = useState("");
  const [careType, setCareType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [status, setStatus] = useState("open");
  const dispatch = useDispatch();
  const handler = () => {
    console.log(name, careType, startDate, endDate, additionalInfo, status);
    dispatch(
      setRequest(name, careType, startDate, endDate, additionalInfo, status)
    );
  };

  return (
    <div>
      <h1 className="header"> add a new request</h1>
      <Container as={Col} md={{ span: 4, offset: 4 }} className="container_details mt-5">
        <Form.Row>
          <Col>
            {" "}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group as={Col} controlId="KindOfCare">
              <Form.Label>Kind of care</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setCareType(e.target.value);
                }}
              >
                <option>Choose</option>
                <option>Household</option>
                <option>Medical</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Additional Information</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={additionalInfo}
                onChange={(e) => {
                  setAdditionalInfo(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center mt-3"> <Link to="/" >
          {" "}
          <Button variant="dark" onClick={handler}>Submit</Button>
        </Link></Form.Row>
       
      </Container>
    </div>
  );
}
