import React from 'react';
import styled from 'styled-components';


// Stylizacao do card
const CardContainer = styled.div`
  padding: 20px;
  background-color: #ffffff; /* Branco */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #000000; /* Preto */
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #0000ff; /* Azul */
  }

  h2 {
    font-size: 1.5rem;
    color: #0000ff; /* Azul */
  }

  p {
    font-size: 1rem;
    color: #000000; /* Preto */
  }
`;

//Componente dos personagens
const Card = ({ title, image, description }) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;