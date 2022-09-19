import React, { useState, useEffect } from 'react';
import BCard from "react-bootstrap/Card";
import { Link, useParams } from 'react-router-dom';
import CreatureService from '../service/CreatureService';

const IndividualCreature = () => {
    
    const [creature, setCreature] = useState(null);
    const params = useParams();

    const creatureService = new CreatureService();

    useEffect(() => {
        const getCreatureById = async (id) => {
            try {
                const response = await creatureService.getCreatureById(id);
                setCreature(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);              
            }
        }
        if (params?.id) {
            getCreatureById(params.id);
        }
    }, [params]);

  return (
    creature && (
        <>
            <h1>{creature.name}</h1>
            <BCard.Img
                src={creature.image}
                loading="lazy"
                alt={creature.name}
              />
            <p>{creature.description}</p>
            <Link to="/">Retour</Link>
        </>
    )
  )
}

export default IndividualCreature;