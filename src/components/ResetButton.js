import React from 'react';
import styled from 'styled-components/macro';

const Button = styled.button`
  display: block;
  width: 100%;
  text-transform: uppercase;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  margin-top: auto;
  padding: 1.25rem;
  border: none;
  border-radius: .75rem;
  cursor: pointer;
  transition: .1s ease-in-out;

  &:hover, &:focus {
    color: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.bg};
  }
`;

const ResetButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      {props.value}
    </Button>
  )
}

export default ResetButton;