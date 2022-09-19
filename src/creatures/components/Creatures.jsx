import React, { useEffect, useState } from 'react';
import CreatureList from './CreatureList';
import CreatureService from '../service/CreatureService';
import Container from 'react-bootstrap/Container';

const creatureService = new CreatureService();

const Creatures = () => {
    
const [data,setData] = useState([]);

const getCreatures = async () => {
const data = await creatureService.getCreatures();
   setData(data);
};

useEffect(() => {
     getCreatures();
}, []); 

  return (
    <Container>
       <CreatureList creatures={data} />
    </Container>
  )
}

export default Creatures;