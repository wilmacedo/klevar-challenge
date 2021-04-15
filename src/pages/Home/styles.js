import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 25% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 150px 20% 0;
  }

  @media (max-width: 1024px) {
    padding: 150px 100px 0;
  }

  h1 {
    color: ${props => props.theme.light};
    font-size: 40px;
    margin-bottom: 15px;
  }

  span {
    color: ${props => transparentize(.25, props.theme.light)};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => transparentize(.9, props.theme.dark)};
  /* border: 1px solid ${props => props.theme.primary}; */
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
  margin-top: 30px;
  width: 300px;
  transition: .2s ease;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.light};
    font-size: 18px;

    &:hover, &:focus {
      border: none;
      outline: none;
    }
  }

  &:hover {
    box-shadow: 0 1px 6px ${props => transparentize(.8, props.theme.dark)};
  }
`;

export const Button = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.light};
  font-size: 16px;
  cursor: pointer;
  transition: .2s ease;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 1px 6px ${props => transparentize(.1, props.theme.primary)};
  }
`;

export const PhoneContainer = styled.div`
  position: relative;
`;

export const PhoneGradient = styled.div`
  position: absolute;
  bottom: 13px;
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(33,42,48,1) 100%);
`;

export const PhoneCard = styled.div`
  position: absolute;
  top: 55px;
  right: 44px;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 15px;
  height: 210px;
  width: 79%;
`;