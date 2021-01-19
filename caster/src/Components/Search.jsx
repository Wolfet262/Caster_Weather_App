import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { API_URL, KEY } from "../apiInfo";

const Search = ({onSearch}) => {
  const [city, setCity] = useState("");

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Ex. Maimi, Fl"
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
