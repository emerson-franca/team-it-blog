import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }


  body {
    color: #ffffff; 
    font: 400 16px Roboto, sans-serif;
    height: calc(100vh - 5rem);
    background-color: ${({ theme }) => theme.colors.black}
  }

`;
