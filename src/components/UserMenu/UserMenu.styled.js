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
