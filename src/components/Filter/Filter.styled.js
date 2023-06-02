import styled from 'styled-components';

export const Container = styled.div`
display: block;
border: 2px solid #0047ab;
padding: 20px;
margin-top: 10px;
margin-bottom: 20px;
width: 360px;
border-radius: 3px;
`;

export const Label = styled.label`
display: block;
font-size: 18px;
font-weight: 500;
margin-bottom: 5px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: #0047ab 0px 0px 0px 2px;
  }
`;