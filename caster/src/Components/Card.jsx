import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ datetime, description, low_temp, max_temp, icon }) => {
  const date = new Date(datetime);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://api.weatherbit.io/v2.0/forecast/daily?${icon}`}
      />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <p>Min: {low_temp}</p>
        <p>Max: {max_temp}</p>
        <button varient="primary"></button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
