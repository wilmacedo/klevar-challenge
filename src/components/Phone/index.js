import React, { useEffect, useState } from 'react';

import {
  Button,
  CardContainer,
  CardContent,
  Container,
  Gradient
} from './styles';

import PhoneImage from '../../assets/phone.png'

import { api } from '../../services';

const Phone = ({ response, wallet }) => {
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const intervalTime = 3 * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoUpdate && address) {
        api.balance(address)
          .then(response => {
            const { status, data, error } = response;

            if (!error && status === 200) {
              setBalance(data);
            }
          });
      }
    }, intervalTime);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, [autoUpdate, address]);

  useEffect(() => setBalance(response), [response])
  useEffect(() => setAddress(wallet), [wallet]);

  return (
    <Container>
      <img src={PhoneImage} alt="Phone" />
      <Gradient />
      <CardContainer>
        <CardContent>
          {balance ? (
            <strong>{balance.Confirmed}</strong>
          ) : (
            <p>Waiting for Wallet...</p>
          )}
          <span style={{ marginBottom: 10 }}>Confirmed</span>

          {balance ? (
            <strong>{balance.Unconfirmed}</strong>
          ) : (
            <p>Waiting for Wallet...</p>
          )}
          <span>Unconfirmed</span>

          <Button
            disabled={!autoUpdate}
            onClick={() => setAutoUpdate(!autoUpdate)}
          >Auto Update</Button>
        </CardContent>
      </CardContainer>
    </Container>
  );
}

export default Phone;