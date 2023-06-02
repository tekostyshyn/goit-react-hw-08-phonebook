import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  margin-top: 5px;
  border-radius: 3px;
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: #0047ab 0px 0px 0px 2px;
  }
`;

export const Span = styled.span`
  color: #0047ab;
`;

export const Button = styled.button`
  width: 160px;
  height: 38px;
  margin-top: 15px;
  background-color: #0047ab;
  border-radius: 3px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
