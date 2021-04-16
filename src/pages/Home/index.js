import React, { useState } from 'react';

import { validate } from 'bitcoin-address-validation';

import {
  BallonContainer,
  Button,
  Container,
  InputContainer
} from './styles';

import Navbar from '../../components/Navbar';
import Phone from '../../components/Phone';

import { api } from '../../services';

const Home = () => {
  const [wallet, setWallet] = useState(null);
  const buttonName = 'Get Now';

  const fetchBalance = () => {
    if (!wallet) return;
    if (!validate(wallet)) {
      document.getElementById('ballon').animate([
        { opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible' },
        { opacity: 1, visibility: 'visible' },
        { opacity: 1, visibility: 'visible' },
        { opacity: 1, visibility: 'visible' },
        { opacity: 1, visibility: 'visible' },
        { opacity: 0, visibility: 'hidden' },
      ], { duration: 5 * 1000 });

      return;
    }

    api.balance(wallet)
      .then(response => {
        const { status, data, error } = response;

        if (!error) {
          console.log('STATUS:', status);
          console.log('DATA:', data);
        } else {
          console.log(error);
        }
      })
  }

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
              placeholder="Wallet Address"
              value={wallet || ''}
              onChange={event => setWallet(event.target.value)}
            />
            <Button onClick={fetchBalance}>{buttonName}</Button>
          </InputContainer>
          <BallonContainer id="ballon">Please, provide a valid Wallet Address.</BallonContainer>
        </div>
        <Phone />
      </Container>
    </>
  );
}

export default Home;