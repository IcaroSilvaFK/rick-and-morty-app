import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{

    //COLORS
    --green-600:#2F855A;
    --green-500:#38A169;
    --green-400:#48BB78;
    --green-300:#68D391;
    --green-200:#9AE6B4;

    --red-600:#C53030;
    --red-500:#E53E3E;
    --red-400:#F56565;
    --red-300:#FC8181;
    --red-200:#FEB2B2;

    --gray-900:#171923;
    --gray-800:#1A202C;
    --gray-700:#2D3748;
    --gray-600:#4A5568;
    --gray-500:#718096;
    --gray-400:#A0AEC0;
    --gray-300:#CBD5E0;
    --gray-200:#E2E8F0;

    --yellow-400:#ECC94B;

    --teal-300:#4FD1C5;

    --white:#fff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  button,input{
    border:none;
    outline: none;
  }

  button{
    cursor: pointer;
  }
`;
