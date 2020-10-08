import React from "react";
import { useSelector } from "react-redux";
import { selectrequestData } from "../../store/requestData/selectors";
import { useParams, Link, Route } from "react-router-dom";
import { Container, Col,Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterRequestData } from "../../store/requestData/actions";
import "../../pages/HomePage/homePage.css";

export default function RequestDetais() {
  const { name } = useParams();
  const dispatch = useDispatch();

  const requestData = useSelector(selectrequestData);
  const detailsOfRequest = requestData.requestData.find((request) => {
    if (request.name == name) return true;
    else return false;
  });

  const handler = () => {
    const filteredData = requestData.requestData.filter(
      (request) => request.name !== name
    );
    dispatch(filterRequestData(filteredData));
  };

  return (
    <div>
      <h1 className="header">request detailed page</h1>
      <Container
        as={Col}
        md={{ span: 6, offset: 3 }}
        className=" container_details mt-5"
      >
        <h1 align="center" className="mb-5">{detailsOfRequest.name}</h1>
        <p className="p">
          <strong>Kind of care needed {detailsOfRequest.careType}</strong>
        </p>
        <p className="p">
          <strong>Start date:</strong> {detailsOfRequest.startDate}
        </p>
        <p className="p">
          <strong>End date:</strong> {detailsOfRequest.endDate}
        </p>
        <p className="p">
          <strong>Additional Information:</strong>{" "}
          {detailsOfRequest.additionalInfo}
        </p>
        <p className="p">
          <strong>status:</strong> {detailsOfRequest.status}
        </p>
        <Row className="justify-content-md-center mt-5">
          <Link to="/">
            {" "}
            <Button variant="dark" onClick={handler}>
              Accept Request
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
