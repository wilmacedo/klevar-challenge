import React, { useState } from 'react';

import {
  Button,
  CardContainer,
  CardContent,
  Container,
  Gradient
} from './styles';

import PhoneImage from '../../../assets/phone.png'

const Phone = ({ balance }) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <Container>
      <img src={PhoneImage} alt="Phone" />
      <Gradient />
      <CardContainer>
        <CardContent>
          {buttonState ? (
            <strong>500000</strong>
          ) : (
            <p>Waiting for Wallet...</p>
          )}
          <span>Balance</span>
          <Button
            disabled={!buttonState}
            onClick={() => setButtonState(!buttonState)}
          >Auto Update</Button>
        </CardContent>
      </CardContainer>
    </Container>
  );
}

export default Phone;