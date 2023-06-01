import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  margin-left: 10px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;
