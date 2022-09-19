import React from 'react'
import Row from 'react-bootstrap/Row';
import CreatureCard from './CreatureCard';

const CreatureList = ({creatures}) => {
  return (
    <Row>
      {creatures.map((creature) => <CreatureCard creature={creature} key={creature.id} />)}
    </Row>
  );
};

export default CreatureList;