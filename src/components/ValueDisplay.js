import React from 'react';
import styled from 'styled-components/macro';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.5rem;
`;

const Detail = styled.div``;

const ValueTitle = styled.p`
  color: ${props => props.theme.colors.container};
  font-weight: 700;
`;

const ValueUnit = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.labels};
  font-weight: 700;
`;

const Total = styled.p`
  font-size: ${props => props.theme.fontSizes.values};
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
`;

const ValueDisplay = (props) => {

  const validResult = () => {
    if(isFinite(props.total)) {
      return new Intl.NumberFormat().format(props.total);
    }

    return 0;
  }
  return (
    <Row>
      <Detail>
        <ValueTitle>{props.title}</ValueTitle>
        <ValueUnit>/ person</ValueUnit>
      </Detail>
      <Total>${validResult()}</Total>
    </Row>
  )
}

export default ValueDisplay;