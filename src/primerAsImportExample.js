import { Button as PrimerButton, theme as primer } from "@primer/components";
import { ThemeProvider } from "styled-components";

const sizeVariants = {
  default: {
    padding: 4,
    "font-size": 2,
  },
  small: {
    padding: 1,
    "font-size": 0,
  },
};

const findSize = (size) => {
  return sizeVariants.hasOwnProperty(size)
    ? sizeVariants[size]
    : sizeVariants.default;
};

const Button = (props) => (
  <PrimerButton
    p={findSize(props.size).padding}
    fontSize={findSize(props.size)["font-size"]}
  >
    {props.children}
  </PrimerButton>
);

const theme = {
  ...primer,
  fontSizes: [8, 12, 16, 24, 48],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

theme.colors.grey = "#E4E6E6";

const PrimerExample = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Primer Example -- Wrapped Pattern. Custom Size Prop</h2>
        <div style={{ border: "2px solid red", padding: "2rem" }}>
          <Button size="small">Test Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PrimerExample;