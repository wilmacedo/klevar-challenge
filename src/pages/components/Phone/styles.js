import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Gradient = styled.div`
  position: absolute;
  bottom: 13px;
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(33,42,48,1) 100%);
`;

export const Card = styled.div`
  position: absolute;
  top: 55px;
  right: 44px;
  background-color: ${props => darken(.07, props.theme.background)};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 15px;
  height: 210px;
  width: 79%;
`;