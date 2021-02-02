import {ButtonPrimary, theme as primer } from '@primer/components'
import { ThemeProvider } from 'styled-components'

const theme = {
    ...primer,
    fontSizes: [10, 12, 16, 24, 48]
  }

theme.buttons.primary.bg.default = "#06BFA8"

const PrimerExample = () => {
    return (
      <ThemeProvider theme={theme}>
      <div>
          <h1>
            Primer
          </h1>
          <p>Complete Library that uses Styled System and Design Tokens</p>
          <div style={{ border: '2px solid red', padding: '2rem'}}>
          <ButtonPrimary mt={5} as="a" px={1}>James</ButtonPrimary>
          </div>
      </div>
      </ThemeProvider>
    );
  }

export default PrimerExample