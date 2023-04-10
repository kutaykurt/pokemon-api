import axios from "axios";
import { useEffect, useState } from "react";

function PokemonImage(props) {
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      const fetchImageUrl = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
        const data = response.data;
        setImageUrl(data.sprites.front_default);
      };
      fetchImageUrl();
    }, [props.name]);
  
    return (
      <img src={imageUrl} alt={props.name} />
    );
  }
  
export default PokemonImage;