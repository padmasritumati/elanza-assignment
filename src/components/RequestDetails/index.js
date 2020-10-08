import React from "react";
import { useSelector } from "react-redux";
import { selectrequestData } from "../../store/requestData/selectors";
import { useParams, Link } from "react-router-dom";
import { Container, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {filterRequestData} from "../../store/requestData/actions"

export default function RequestDetais() {
  const { name } = useParams();
  const dispatch = useDispatch();

  const requestData = useSelector(selectrequestData);
  const detailsOfRequest = requestData.requestData.find((request) => {
    if (request.name == name) return true;
    else return false;
  });

  const handler = () => {
    const filteredData = requestData.requestData.filter((request) => request.name !== name );
    dispatch(filterRequestData(filteredData))
  };

  return (
    <div>
      <h1 className="header">request detailed page</h1>
      <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1>{detailsOfRequest.name}</h1>
        <h3>Start date: {detailsOfRequest.startDate}</h3>
        <h3>End date: {detailsOfRequest.endDate}</h3>
        <h3>Additional Information: {detailsOfRequest.additionalInfo}</h3>
        <h3>status: {detailsOfRequest.status}</h3>
        <Link to="/">
          {" "}
          <Button variant="dark" onClick={handler}>
            Accept Request
          </Button>
        </Link>
      </Container>
    </div>
  );
}
