import React from 'react'
import { Card } from "react-bootstrap";
import './MenuItem.css'

function MenuItem(props) {
  return (
    <div>
      <Card className="card-container">
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title className= "dish-title-name" onClick={ () => {
            props.dishSelect(props.dish)
            
          }}>{props.dish.name}</Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <strong className="price">Price: ${props.dish.price}</strong><br></br>
          <strong>Label: {props.dish.label}</strong>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem