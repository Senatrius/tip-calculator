import React from 'react';
import styled from 'styled-components/macro'

const Heading = styled.h1`
  max-width: 12rem;
  letter-spacing: 1.25rem;
  font-size: ${props => props.theme.fontSizes.inputs};
  color: ${props => props.theme.colors.labelText};
  text-align: center;
  transform: translateX(1.25rem);
  white-space: pre;
  margin: 5rem 0 4rem 0;

  @media screen and (min-width: 767px) {
    margin: 0 0 8rem 0;
  }
`;

const Title = () => {
  return (
    <Heading>SPLI<br/>TTER</Heading>
  )
}

export default Title;