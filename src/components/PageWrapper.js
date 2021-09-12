import React from 'react';
import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
  max-width: 92rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageWrapper = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default PageWrapper;