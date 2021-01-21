import React from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap'
import Cloudy from "../Img/cloudy.png";
import Clear from "../Img/day_clear.png";
import PartialCloud from "../Img/day_partial_cloud.png";
import Rain from "../Img/day_rain.png";
import Thunder from "../Img/day_rain_thunder.png";
import Snow from "../Img/snow.png";
import Wind from "../Img/wind.png";

const WeatherCard = ({ highTemp, lowTemp, date, description, icon }) => {
  let pic = {};

  if (icon === "t01d" || icon === "t02d" || icon === "t03d" || icon === "t04d" || icon === "t05d") {
    pic =  Thunder 
    console.log(icon)
  } else if (
    icon === "d01d" ||
    icon === "d02d" ||
    icon === "d03d" ||
    icon === "r01d" ||
    icon === "r02d" ||
    icon === "r03d" ||
    icon === "r04d" ||
    icon === "r05d" ||
    icon === "r06d" ||
    icon === "f01d"
  ) {
    pic =  Rain ;
  } else if (
    icon === "s01d" ||
    icon === "s02d" ||
    icon === "s03d" ||
    icon === "s04d" ||
    icon === "s05d" ||
    icon === "s06d"
  ) {
    pic =  Snow ;
  } else if (
    icon === "a01d" ||
    icon === "a03d" ||
    icon === "a05d" ||
    icon === "a06d" ||
    icon === "c02d" ||
    icon === "c03d"
  ) {
    pic =  PartialCloud ;
  } else if (icon === "c01d") {
    pic =  Clear ;
  } else if (icon === "c04d" || icon === "u00d") {
    pic =  Cloudy ;
  } else if (icon === "a02d" || icon === "a04d") {
    pic =  Wind ;
  }
  
console.log(pic, icon)
  return (
    <Card style={{ width: "19%" }}>
      <Card.Img variant="top" src={ pic } />
      <Card.Body>
        <ListGroup variant="flush">

        </ListGroup>
        <ListGroup.Item>{date}</ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>Low: {lowTemp} </ListGroup.Item>
        <ListGroup.Item>High: {highTemp}</ListGroup.Item>
       
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
