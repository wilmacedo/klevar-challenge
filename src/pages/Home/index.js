import React, { useState } from 'react';

import {
  Button,
  Container, InputContainer
} from './styles';

import Navbar from '../components/Navbar';

const Home = () => {
  const [wallet, setWallet] = useState(null);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Get a balance of<br />Bitcoin Wallet.</h1>
        <span>Inform the identification of bitcoin wallet and<br />click <strong>Get Now</strong> to view balance.</span>
        <InputContainer>
          <input
            type="text"
            placeholder="Wallet ID"
            value={wallet || ''}
            onChange={event => {
              if (!isNaN(event.target.value)) setWallet(event.target.value);
            }}
          />
          <Button>Get Now</Button>
        </InputContainer>
      </Container>
    </>
  );
}

export default Home;