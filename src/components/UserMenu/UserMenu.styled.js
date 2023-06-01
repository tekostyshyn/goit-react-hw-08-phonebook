import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 600;
  height: 30px;
  font-size: 18px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  gap: 5px;
  background-color: transparent;
  font-size: 18px;
  color: #0047ab;
  font-weight: 600;
  border-radius: 4px;
  border-color: transparent;

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: #ffffff;
  }
`;
