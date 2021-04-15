import React from 'react';

import Logo from '../../../assets/logo.png';

import {
  Button,
  Container,
  LogoContainer
} from './styles';

const Navbar = () => (
  <Container>
    <LogoContainer>
      <img src={Logo} alt="wallet." />
      <h2>wallet.</h2>
    </LogoContainer>
    <Button>Source Code</Button>
  </Container>
);

export default Navbar;