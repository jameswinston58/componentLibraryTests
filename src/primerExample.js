import { Button, theme as primer } from "@primer/components";
import { ThemeProvider } from "styled-components";

const theme = {
  ...primer,
  fontSizes: [10, 12, 16, 24, 48],
};

theme.colors.grey = "#E4E6E6";

const PrimerExample = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Primer</h2>
        <p>Complete Library that uses Styled System and Design Tokens</p>
        <div style={{ border: "2px solid red", padding: "2rem" }}>
          <Button mt={5} as="a" bg={"grey"} px={1} variant="small">
            Small
          </Button>
          <Button mt={5} as="a" px={1} variant="medium">
            Medium
          </Button>
          <Button mt={5} as="a" px={1} variant="large">
            Large
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PrimerExample;
