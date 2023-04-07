import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; ;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
   body{
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .title {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .text {
    font-size: 1.8rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
			.title {
				font-size: 1.8rem;
			}
      
      .text {
        font-size: 1.6rem;
      }
		}
`

export default GlobalStyle
