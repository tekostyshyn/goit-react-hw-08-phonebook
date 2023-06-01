import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  color: #2a363b;
  height: 30px;
  width: 100px;
  font-size: 18px;
  border-radius: 4px;
  border-color: transparent;

  &.active {
    color: #0047ab;
  }

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: #ffffff;
  }
`;
