import React from 'react';
import { Col, Row } from 'react-bootstrap'
import Card from "./Card.jsx"

const Cards = ({ weathers }) => {
    return (
        <Row>
            {weathers.map(({datetime, description, weather}) => (
                <Col key={datetime}>
                    <Card
                    highTemp={data.max_temp}
                    lowTemp={data.min_temp}
                    date={data.datetime}
                    description={data.weather.description}
                    icon={data.weather.icon} />
                </Col>
            ))}
        </Row>
    );
}

export default Cards;