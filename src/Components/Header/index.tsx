import React from 'react';
import brand from './../../assets/logo.svg';
import { Container, Wrapper } from './styles';


export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={brand} alt="dt.money"/>
        <button>Nova Transação</button>
      </Wrapper>
    </Container>
  );
};
