import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  font-size: 18px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &.active {
    color: #0047ab;
  }

  &:hover,
  &:focus {
    color: #0047ab;
    transform: scale(1.25);
  }
`;
