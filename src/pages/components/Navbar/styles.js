import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;

  img {
    height: 60px;
    width: auto;
  }

  h2 {
    color: white;
    padding-left: 5px;
    font-size: 30px;
  }
`;

export const Button = styled.div`
  padding: 15px 20px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.light};
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    box-shadow: 0 1px 6px ${props => transparentize(.1, props.theme.primary)};
  }
`;