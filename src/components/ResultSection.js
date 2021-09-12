import React, { useContext } from 'react';
import styled from 'styled-components/macro'
import ValueDisplay from './ValueDisplay';
import ResetButton from './ResetButton';
import { DataContext } from './CalculatorContainer';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background: ${props => props.theme.colors.dark};
  border-radius: 1.25rem;
  
  @media screen and (min-width: 767px) {
    padding: 3.75rem;
  }
`;


const InputSection = () => {
  const { tip, setTip, bill, setBill, people, setPeople } = useContext(DataContext);

  const calculateTotal = () => {
    let currTotal = bill / people;
    return currTotal;
  }

  const calculateTip = () => {
    let currTip = (bill * (tip / 100)) / people;
    return currTip;
  }

  const resetValues = () => {
    setTip('');
    setBill('');
    setPeople('');

    console.log('reset')
  }

  return (
    <Container>
      <ValueDisplay title="Tip Amount" total={calculateTip()}/>
      <ValueDisplay title="Total" total={calculateTotal()}/>
      <ResetButton value="Reset" onClick={resetValues}/>
    </Container>
  )
}

export default InputSection;