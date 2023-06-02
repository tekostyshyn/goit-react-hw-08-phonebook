import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid #0047ab;
  border-radius: 3px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #0047ab;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  color: #0047ab;
  font-size: 16px;
`;
