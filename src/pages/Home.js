import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao carregar dados');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 style={{ color: '#0000ff', textAlign: 'center' }}>Personagens de Rick and Morty</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.map((character) => (
          <Card 
            key={character.id} 
            title={character.name} 
            image={character.image} 
            description={`Status: ${character.status}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;