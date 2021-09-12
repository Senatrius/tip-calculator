import React from 'react';
import { ThemeProvider } from 'styled-components/macro'

const theme = {
  colors: {
  "primary": "hsl(172, 67%, 45%)",
  "dark": "hsl(183, 100%, 15%)",
  "labelText": "hsl(186, 14%, 43%)",
  "secondaryText": "hsl(184, 14%, 56%)",
  "bg": "hsl(185, 41%, 84%)",
  "activeInput": "hsl(189, 41%, 97%)",
  "error": "hsl(13, 67%, 50%)",
  "container": "hsl(0, 0%, 100%)"
  },
  fonts: ["sans-serif", "Space Mono"],
  fontSizes: {
    "inputs": "2.4rem",
    "labels": "1.6rem",
    "values": "4.8rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;