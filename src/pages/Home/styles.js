import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 25% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 100px 10% 0;
  }

  @media (max-width: 1024px) {
    padding: 50px 100px 0;
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
  background-color: ${props => !props.load ? props.theme.primary : darken(.15, props.theme.primary)};
  color: ${props => !props.load ? props.theme.light : darken(.15, props.theme.light)};
  font-size: 16px;
  cursor: pointer;
  transition: .2s ease;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 1px 6px ${props => transparentize(.1, props.theme.primary)};
  }
`;

export const BallonContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  position: relative;
  margin-top: 10px;
	background: ${props => transparentize(.5, props.theme.dark)};
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.light};
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 22px solid transparent;
    border-bottom-color: ${props => transparentize(.5, props.theme.dark)};
    border-top: 0;
    margin-left: -51px;
    margin-top: -22px;
  }
`;