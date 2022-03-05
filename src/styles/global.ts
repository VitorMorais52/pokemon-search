import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        -webkit-font-smoothing: antialiased;
        background-color: rgba(186, 229, 255, 0.9);

    }

    body, input, button, textarea {
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 28px;
        font-weight: 300;
        line-height: 40px;;
    }

    .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 3rem;

    }

 

`;
