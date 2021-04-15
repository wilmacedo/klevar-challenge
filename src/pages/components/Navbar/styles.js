import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Content = styled.div`
  padding: 20px 30px 0;
  max-width: 1120px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1140px) {
    max-width: 1120px;
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
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