import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";


const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <Row>
        <Col>
          <h1>Enter a City</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Ex. Miami, Fl"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check The Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default Search;
