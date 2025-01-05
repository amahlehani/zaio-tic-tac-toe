import React from 'react';
import { Container } from './Home.styled';
import { Title, Subtitle } from '../../styles/General.styled';
import Button from '../../components/Button/Button';


function Home() {
  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button>Play Now</Button>
    </Container>
  )
}

export default Home