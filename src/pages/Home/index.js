import React, { useState } from 'react';

import {
  Button,
  Container,
  InputContainer,
  PhoneCard,
  PhoneContainer,
  PhoneGradient
} from './styles';

import Navbar from '../components/Navbar';
import Phone from '../../assets/phone.png';

const Home = () => {
  const [wallet, setWallet] = useState(null);
  const buttonName = 'Get Now';

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1>Get a balance of<br />Bitcoin Wallet.</h1>
          <span>Inform the identification of bitcoin wallet and<br />click <strong>{buttonName}</strong> to view balance.</span>
          <InputContainer>
            <input
              type="text"
              placeholder="Wallet ID"
              value={wallet || ''}
              onChange={event => {
                if (!isNaN(event.target.value)) setWallet(event.target.value);
              }}
            />
            <Button>{buttonName}</Button>
          </InputContainer>
        </div>
        <PhoneContainer>
          <img src={Phone} alt="Phone" />
          <PhoneGradient />
          <PhoneCard />
        </PhoneContainer>
      </Container>
    </>
  );
}

export default Home;