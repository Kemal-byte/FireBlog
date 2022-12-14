import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background-color: #C7CDD3;
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style-type: none;
    }
    img{
        max-width: 100%;
    }
`;
