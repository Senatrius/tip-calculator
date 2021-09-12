import React, { useState, createContext } from 'react';
import styled from 'styled-components/macro'
import InputSection from './InputSection';
import ResultSection from './ResultSection';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 3.25rem 2.5rem;
  background: ${props => props.theme.colors.container};
  border-radius: 2.5rem 2.5rem 0 0;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    padding: 3.25rem 3.25rem 3.25rem 5rem;
    border-radius: 2.5rem;
    align-items: stretch;
  }
`;

export const DataContext = createContext(null);

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  return (
    <DataContext.Provider value={{ bill, setBill, tip, setTip, people, setPeople }}>
      <Container>
        <InputSection />
        <ResultSection />
      </Container>
    </DataContext.Provider>
  )
}

export default Calculator;