import React from "react";
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const DEFAULT_IMAGE_POSITION = "top";

const CreatureCard = ({ creature }) => {
  return (
      <Col className="my-3">
          <Link to={`/creature/${creature.id}`}>
          <Card>
            <BCard.Header as="small">{creature.id}</BCard.Header>
            <BCard.Body>
              <BCard.Img
                variant={DEFAULT_IMAGE_POSITION}
                src={creature.image}
                loading="lazy"
                alt={creature.name}
              />
              <BCard.Title>{creature.name}</BCard.Title>
            </BCard.Body>
            </Card>
          </Link>
      </Col>
  );
};

export default CreatureCard;