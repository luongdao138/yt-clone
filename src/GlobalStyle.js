import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
       :root{
         --primary-color: #181818;
         --secondary-color: #202020;
         --grey-color: #909090;
         --white-color: #fff;
         --border-color: #313131;
         --red-color: #CC0000
       }

       * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-family: 'Roboto', sans-serif; 
       }

       button{
         outline: none;
         border: none;
         cursor: pointer;
       }

       a {
        text-decoration: none;
       }

       li{
        list-style: none;
       }

       input{
         outline: none;
       }

       ::-webkit-scrollbar{
          width:8px;
          height: 0;
       }

       ::-webkit-scrollbar-track{
          background-color: #202020;
       }

       ::-webkit-scrollbar-thumb{
          background-color: var(--grey-color);
          border-radius: 10px;
       }
`;

export default GlobalStyle;
