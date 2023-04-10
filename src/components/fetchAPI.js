import axios from 'axios';

export const getPokemonDetails = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
  return response.data;
}