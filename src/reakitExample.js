import React from 'react'
import { Button } from "reakit/Button";
import styled, {ThemeProvider} from "styled-components";
import { color, variant } from 'styled-system'


const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    green: "#06BFA8"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}

//this example is like this on purpose. we'd clean this up.
//HOW CAN WE DO VARIANTS IN THE THEME FILE?
const StyledButton = styled(Button)`
${color}  
${variant({
    prop: 'size',
    variants: {
      big: {
        padding: 4,
        lineHeight: 'heading',
      },
      small: {
        padding: 1,
        lineHeight: 'body',
      },
    }
  })}`

const ReakitExample = () => {
    return (
      <ThemeProvider theme={theme}>
          <h2>
            Reakit w/ Styled Compnents and STYLED SYSTEM and Theme File
          </h2>
          <p>Custom Built using a primitive compnent library</p>
          <div style={{ border: '2px solid red', padding: '2rem'}}>
          <StyledButton 
            bg="green" 
            color="white"
            size="big"
          >Button</StyledButton>          
          </div>
      </ThemeProvider>
    );
  }

export default ReakitExample