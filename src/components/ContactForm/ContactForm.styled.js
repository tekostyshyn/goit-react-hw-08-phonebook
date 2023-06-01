import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 400px;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  padding: 5px;
  width: 200px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  font-size: 16px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;
