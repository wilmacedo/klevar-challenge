import React from 'react';

import {
  Card,
  Container,
  Gradient
} from './styles';

import PhoneImage from '../../../assets/phone.png'

const Phone = () => (
  <Container>
    <img src={PhoneImage} alt="Phone" />
    <Gradient />
    <Card />
  </Container>
);

export default Phone;