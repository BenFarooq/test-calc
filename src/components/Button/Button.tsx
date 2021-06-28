import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 32px;

  border-radius: 16px;

  color: #ffffff;
  font-size: 14px;
  line-height: 34px;
  font-family: sans-serif;

  background: ${props => props.disabled ? "#999999" : "#000000"};

  border: none;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

