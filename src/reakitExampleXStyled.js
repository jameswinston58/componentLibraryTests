import React from "react";
import { Button } from "reakit/Button";
import styled, {
  defaultTheme,
  ThemeProvider,
  Preflight,
  x
} from "@xstyled/styled-components";

const theme = {
  ...defaultTheme,
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
    green: "#06BFA8",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

//this example is like this on purpose. we'd clean this up.
//HOW CAN WE DO VARIANTS IN THE THEME FILE?

//So here we skip the xstyled x.notation and use a styled component
//that is wrapped in the xstyled constraint to value translators....we could just write these at the end of the day.
//we don't really end up using styled components any differently with this.

const StyledButton = styled(Button)`
  color: white;
  border-radius: md;
  background-color: ${(props) => props.bg};
  font-weight: semibold;
  transition: default;
  padding: ${(props) => props.p};
  &:focus {
    outline: none;
    box-shadow: emerald-ring;
  }
`;

const StyledXButton = (props) => <x.button {...props} />

const ReakitExample = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*<Preflight /> this messes with the ENTIRE PAGE */}
      <h2>Reakit w/ Styled Components and XStyled</h2>
      <p>Custom Built using a primitive compnent library</p>
      <div style={{ border: "2px solid red", padding: "2rem" }}>
        <p>
          This button uses the Styled Compnents Escape hatch. But it doesn't
          seem to work as expected. It doesn't find the right green.
        </p>
        <StyledButton bg="green" color="white" size="big" p={1}>
          Escape Hatch Button
        </StyledButton>
        <br />
        <br />
        <br />
        <p>This button uses the X.notation</p>
        <StyledXButton bg="green" color="white" size="big" p={1}>
          X. Notation Button
        </StyledXButton>
      </div>
    </ThemeProvider>
  );
};

export default ReakitExample;
