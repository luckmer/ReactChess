import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    overflow-y:auto;
    overflow-x:auto;
    ::-webkit-scrollbar {
      width: 0px;
      height:0px;
    }
  }
  body {
    background-color: #17181b;
  }
`;

export default GlobalStyle;
