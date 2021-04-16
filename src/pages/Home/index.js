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
import { Loader } from '../../components/Loader';

import { api } from '../../services';

const Home = () => {
  const [wallet, setWallet] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const buttonName = 'Get Now';

  const handleBallon = () => document.getElementById('ballon').animate([
    { opacity: 0, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible' },
    { opacity: 1, visibility: 'visible' },
    { opacity: 1, visibility: 'visible' },
    { opacity: 1, visibility: 'visible' },
    { opacity: 1, visibility: 'visible' },
    { opacity: 0, visibility: 'hidden' },
  ], { duration: 5 * 1000 });

  const fetchBalance = () => {
    if (!wallet || loading) return;
    if (!validate(wallet)) {
      handleBallon();
      return;
    }

    setLoading(true);
    api.balance(wallet)
      .then(response => {
        const { status, data, error } = response;

        if (!error && status === 200) {
          setResponse(data);
        } else {
          handleBallon();
        }
        setLoading(false);
      });
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
            <Button
              load={loading}
              onClick={fetchBalance}
            >
              {loading ? (
                <Loader><div /><div /></Loader>
              ) : buttonName}
            </Button>
          </InputContainer>
          <BallonContainer id="ballon">Please, provide a valid Wallet Address.</BallonContainer>
        </div>
        <Phone response={response} wallet={wallet} />
      </Container>
    </>
  );
}

export default Home;