import React from 'react';
import { Card } from 'react-bootstrap';
import { API_URL, KEY } from "../apiInfo";


const WeatherCard = async () => {

  const date = new Date('');
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        variant="top"
        src={``}
      />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <p>
          {date.toLocaleDateString()} 
        </p>
        <p>Min: {}</p>
        <p>Max: {}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
