import React, { useState, useEffect } from "react";
import "@/css/PokemonComponent.css";


function PokemonComponent() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDatos = async () => {
      setLoading(true)
      const controller = new AbortController();
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      };

      try {

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20", options);
        const data = await res.json();

        let detailsList = [];

        // Para cada Pokémon, hacemos una petición para obtener sus detalles
        for (const p of data.results) {
          try {
            const resDetail = await fetch(p.url, options);
            const details = await resDetail.json();
            detailsList.push(details);
          } catch (error) {
            console.error(`Error al obtener detalles de ${p.name}:`, error);
          }
        }

        setPokemons(detailsList);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch abortado");
        } else {
          console.error("Error al obtener datos:", err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDatos();


     return () => {
      console.log("Componente desmontado");
    };

  }, []);

  return (
    <>

      {loading ? <p className="Loading">Cargando...</p> :
        <div className="pokemon-list">
          {pokemons.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>}
    </>
  );
}

export default PokemonComponent;

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        loading="lazy"
      />
      <p>
        <strong>Altura:</strong> {pokemon.height} cm
      </p>
      <p>
        <strong>Peso:</strong> {pokemon.weight} kg
      </p>
      <div className="pokemon-types">
        <strong>Tipos:</strong>
        {pokemon.types.map((item, i) => (
         
          <PokemonType key={i} {...item.type} />
        ))}
      </div>
    </div>
  );
}

function PokemonType({ name }) {
  return <span className="pokemon-type">{name}</span>;
}