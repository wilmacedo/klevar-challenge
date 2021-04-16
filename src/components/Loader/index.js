import { darken } from 'polished';
import styled from 'styled-components';

const size = 17;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 40px;

  div {
    margin: 2px 0 0 3px;
    position: absolute;
    border: 2px solid ${props => darken(.15, props.theme.light)};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }

  @keyframes ripple {
  0% {
    top: ${size}px;
    left: ${size}px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${size * 2}px;
    height: ${size * 2}px;
    opacity: 0;
  }
}
`;