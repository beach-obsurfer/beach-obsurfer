import React from "react";
import { Card } from "react-bootstrap";
import surficon from '../image/surf.svg';
import beachicon from '../image/beach.svg';
import peticon from '../image/pet.svg';
import coffeeicon from '../image/coffee.svg';

const Beach = ({ title, image, player }) => {
  return (
    <Card>
      <Card.Img src={image} alt={title} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <ul>
          <li>
            <img src={surficon} alt="surf icon" className="card-icon surf-icn" />
          </li>
          <li>
            <img src={beachicon} alt="beach icon" className="card-icon beach-icn" />
          </li>
          <li>
            <img src={peticon} alt="pet icon" className="card-icon pet-icn" />
          </li>
          <li>
            <img src={coffeeicon} alt="coffee icon" className="card-icon coffee-icn" />
          </li>
        </ul>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Beach;
