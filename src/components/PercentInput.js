import React, { useContext } from 'react';
import styled from 'styled-components/macro'
import { DataContext } from './CalculatorContainer';

const Wrapper = styled.fieldset`
  border: 0;
  position: relative;
  margin-bottom: 4rem;
`;

const Label = styled.legend`
  font-size: ${props => props.theme.fontSizes.labels};
  color: ${props => props.theme.colors.labelText};
  font-weight: 700;
`;

const Error = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.labels};
  color: ${props => props.theme.colors.error};
  font-weight: 700;
  transform: translateY(-2.5rem);
`;

const Grid = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  gap: 1.75rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
`;

const RadioBtn = styled.label`
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 1.25rem 2rem;
  font-size: ${props => props.theme.fontSizes.inputs};
  font-weight: 700;
  color: ${props => props.theme.colors.container};
  background: ${props => props.theme.colors.dark};
  cursor: pointer;
  border-radius: .75rem;
  transition: .1s ease-in-out;

  &:hover, &:focus {
    color: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.bg};
  }

  @media screen and (min-width: 767px) {
    padding: 1rem 2rem;
  }
`;

const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioBtn} {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
  }
`;

const TextInput = styled.input`
  width: 100%;
  padding: 1.25rem 2rem;
  text-align: right;
  border: 2px solid transparent;
  outline: transparent;
  border-radius: .75rem;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.activeInput};

  &::placeholder {
    text-align: right;
    color: ${props => props.theme.colors.primary};
  }

  &:focus-within {
    border: 2px solid ${props => props.theme.colors.secondaryText};
  }

  @media screen and (min-width: 767px) {
    font-size: ${props => props.theme.fontSizes.labels};
  }
`;

const PercentInput = (props) => {
  const { tip, setTip } = useContext(DataContext);

  const handleChange = e => {
    setTip(e.target.value)
  }

  return (
    <Wrapper>
      <Label>{props.labelText}</Label>
      {tip < 0 && <Error>{props.error}</Error>}
      <Grid>
        <RadioInput id="5" type="radio" name="percentage" value="5" checked={tip === "5"} onChange={handleChange}/>
        <RadioBtn htmlFor="5">5%</RadioBtn>
        <RadioInput id="10" type="radio" name="percentage" value="10" checked={tip === "10"} onChange={handleChange}/>
        <RadioBtn htmlFor="10">10%</RadioBtn>
        <RadioInput id="15" type="radio" name="percentage" value="15" checked={tip === "15"} onChange={handleChange}/>
        <RadioBtn htmlFor="15">15%</RadioBtn>
        <RadioInput id="25" type="radio" name="percentage" value="25" checked={tip === "25"} onChange={handleChange}/>
        <RadioBtn htmlFor="25">25%</RadioBtn>
        <RadioInput id="50" type="radio" name="percentage" value="50" checked={tip === "50"} onChange={handleChange}/>
        <RadioBtn htmlFor="50">50%</RadioBtn>
        <TextInput type="number" placeholder="Custom" min="0" value={tip} onInput={handleChange}/>
      </Grid>
    </Wrapper>
  )
}

export default PercentInput;