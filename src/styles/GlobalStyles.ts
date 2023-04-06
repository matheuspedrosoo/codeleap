import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body{
    width: 100%;
    height: 100vh;
    background-color: ${colors.background}
  }

  .title {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .text {
    font-size: 1.8rem;
    font-weight: 400;
  }
`
export default GlobalStyle
