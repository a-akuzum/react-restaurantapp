import React from 'react'
import { Card } from "react-bootstrap";
import './DishDetail.css'

function DishDetail(props) {
  return (
    <div>
      <Card className="card-container2">
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title> {props.dish.name} </Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <strong className="price">Price: ${props.dish.price}</strong>
          <br></br>
          <strong>Label: {props.dish.label}</strong>
          <br></br>
          <strong>Category: {props.dish.category}</strong>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DishDetail