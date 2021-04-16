import { darken, transparentize } from 'polished';
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

export const CardContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 44px;
  background-color: ${props => darken(.07, props.theme.background)};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 15px;
  height: 210px;
  width: 79%;
`;

export const CardContent = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.light};
  }

  p {
    font-size: 24px;
    font-weight: 300;
    color: ${props => transparentize(.8, props.theme.light)};
  }

  strong {
    font-size: 40px;
    color: ${props => props.theme.light};
  }
`;

export const Button = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.disabled ? 'transparent' : props.theme.primary};
  border: 1px solid ${props => !props.disabled ? 'transparent' : props.theme.primary};
  color: ${props => props.theme.light};
  font-size: 16px;
  cursor: pointer;
  transition: .2s ease;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 1px 6px ${props => transparentize(.75, props.theme.primary)};
  }
`;