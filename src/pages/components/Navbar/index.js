import React from 'react';

import Logo from '../../../assets/logo.png';

import {
  Button,
  Container,
  Content,
  LogoContainer
} from './styles';

const Navbar = () => (
  <Container>
    <Content>
      <LogoContainer>
        <img src={Logo} alt="wallet." />
        <h2>wallet.</h2>
      </LogoContainer>
      <a href="http://github.com/wilmacedo/klever-challenge" target="_blank" rel="noreferrer">
        <Button>
          Source Code
      </Button>
      </a>
    </Content >
  </Container>
);

export default Navbar;