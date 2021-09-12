import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Theme from "./themes";
import PageWrapper from "./components/PageWrapper";
import Title from "./components/Title";
import Calculator from "./components/CalculatorContainer";

function App() {
  return (
    <Theme>
      <GlobalStyle/>

      <PageWrapper>
        <Title/>
        <Calculator/>
      </PageWrapper>
    </Theme>
  );
}

export default App;
