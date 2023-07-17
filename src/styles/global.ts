import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a{ 
    text-decoration: none;
  }
  body{
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 6px;
      margin: 3px;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.shade};
    }

    ::-webkit-scrollbar-thumb {
      
      background: ${props => props.theme.colors.text};
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`

export { GlobalStyle }