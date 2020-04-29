import React from "react";
import Card from "react-bootstrap/Card";

const Beach = ({ key, title, image, player }) => {
  return (
    <div id={key}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Beach description</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Beach;
