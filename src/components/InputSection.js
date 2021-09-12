import React from 'react';
import styled from 'styled-components/macro'
import BillInput from './BillInput';
import PercentInput from './PercentInput';
import CustomerInput from './CustomerInput';

const Container = styled.main`
  width: 100%;
  height: auto;

  padding: 0 0.75rem;

  @media screen and (min-width: 767px) {
    margin-right: 4rem;
    padding: 1.5rem 0.75rem;
  }
`;

const InputSection = (props) => {
  return (
    <Container>
      <BillInput labelText="Bill" icon={process.env.PUBLIC_URL + "/icons/icon-dollar.svg"} error="Can't be 0.00" />
      <PercentInput labelText="Select Tip %" error="Can't be empty" />
      <CustomerInput labelText="Amount of People" icon={process.env.PUBLIC_URL + "/icons/icon-person.svg"} error="Can't be zero" />
    </Container>
  )
}

export default InputSection;