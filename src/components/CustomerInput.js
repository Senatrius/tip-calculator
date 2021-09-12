import React, { useContext } from 'react';
import styled from 'styled-components/macro'
import { DataContext } from './CalculatorContainer';

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.labels};
  color: ${props => props.theme.colors.labelText};
  font-weight: 700;
  margin-bottom: 4rem;

  @media screen and (min-width: 767px) {
    margin-bottom: unset;
  }
`;

const Icon = styled.img`
  position: absolute;
  max-width: 100%;
  height: 2.5rem;

  top: 5.5rem;
  left: 2.5rem;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.25rem 2rem;
  background: ${props => props.theme.colors.activeInput};
  margin-top: 1rem;
  text-align: right;
  border: 2px solid transparent;
  outline: transparent;
  border-radius: .75rem;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};

  &:focus-within {
    border: 2px solid ${props => props.theme.colors.secondaryText};
  }
`;

const Error = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.labels};
  color: ${props => props.theme.colors.error};
  font-weight: 700;
`;

const CustomerInput = (props) => {
  const { people, setPeople } = useContext(DataContext);

  return (
    <Label>
      {props.labelText}
      {people === 0 && <Error>{props.error}</Error>}
      <Icon src={props.icon} alt="" />
      <Input type="number" min="1" step="1" value={people} onInput={e => setPeople(Math.abs(e.target.value))}/>
    </Label>
  )
}

export default CustomerInput;