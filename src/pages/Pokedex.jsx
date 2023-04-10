import React, { useState, useEffect } from 'react';
import { getPokemonDetails } from '../components/fetchAPI';
import PokemonImage from '../components/PokemonImage';

function Pokedex(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const [showLimit, setShowLimit] = useState(20);

  useEffect(() => {
    getPokemonDetails(props.pokemonId)
      .then(response => {
        const results = response.results;
        const names = results.map(result => result.name);
        setPokemonList(names);
        console.log(pokemonList);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.pokemonId]);
  
  const showMorePokemon = () => {
    setShowLimit(20 + showLimit);
  };


  return (
    <div>
      {pokemonList.length > 0 ? (
        <ul>
          {pokemonList.slice(0, showLimit).map((name, index) => (
            <div>
                <li key={index}>{name}</li>
                <PokemonImage name={name} />
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => showMorePokemon()}>Show more</button>
    </div>
  );
}

export default Pokedex;