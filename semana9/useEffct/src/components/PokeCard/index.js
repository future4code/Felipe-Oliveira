import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const pokemom = pokemon;
  return (
    <div>
      <p>{pokemom.name}</p>
      <p>{pokemom.weight} Kg</p>
      {pokemom.types && <p>{pokemom.types[0].type.name}</p>}
      {pokemom.sprites && (
        <img src={pokemom.sprites.front_default} alt={pokemom.name} />
      )}
    </div>
  );
}
export default PokeCard;
