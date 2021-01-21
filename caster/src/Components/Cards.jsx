import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./Card.jsx";

const Cards = ({ weathers }) => {

  const arrWeathers = weathers.map((weather) => {
    return (
      <Card
        highTemp={weather.max_temp}
        lowTemp={weather.min_temp}
        date={weather.datetime}
        description={weather.weather.description}
        icon={weather.weather.icon}
      />
    );
  });
  return (
    <div className="cardList">
      <Col xs={5}>
        <Row>{arrWeathers}</Row>
      </Col>
    </div>
  );
};

export default Cards;
