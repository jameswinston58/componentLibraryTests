import { ThemeProvider, Button } from 'pcln-design-system'


const theme = {
  palette: {
    primary: {
      base: '#06BFA8',
      dark: '#ffa52f',
      green: "#06BFA8",
    },   
    componentStyles: {
      Button: {
        fill: {
          primary: {
            color: '#fff',
          }
          }
        }
      }
    }
  }

const PrimerExample = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Priceline</h2>
        <p>Complete Library that uses Styled System and Design Tokens</p>
        <p>Had to force install this because it was looking for React 16</p>
        <p>It's using contrast ratios to determine bg and text colors, unless you overide them.
            Except this isn't working. Will probably need to tackle the whole Theme File.
        </p>
        <p>No Matter what I do I can't get that to turn white.</p>
        <div style={{ border: "2px solid red", padding: "2rem" }}>
          <Button  mt={5} as="button" size="large">
            Large
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PrimerExample;
