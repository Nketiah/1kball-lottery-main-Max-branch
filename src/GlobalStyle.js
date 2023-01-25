import { createGlobalStyle } from "styled-components";
import bc_img from "./images/background_2@2x.png";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --black: rgba(0,0,0,1);
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontColorBlue: #076696;
    --fontSuperBig: 2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  
  }

  body {  
    /* margin: 0; */
    margin: 0;
    overflow-y:hidden;
    padding: 0;
    /* position: fixed; */
    /* position: absolute; */
    box-sizing: border-box;
    background-color: #E370A7;
    background-image: url('${bc_img}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;
    /* overflow: hidden; */
    
    /* padding-bottom: 3rem; */
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--fontColorBlue);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--black);
    }
    span {
      /* white-space: nowrap; */
      text-align: left;
      font-style: normal;
      font-weight: lighter;
      font-size: var(--fontMedium);
      color: var(---black);
    }
    ul{
      color: var(---black);

    }
  }
  .scroll {
    /* margin:4px, 4px; */
    /* padding:4px; */
    /* background-color: green; */
    overflow: hidden;
/* margin: 0; */
    /* width: 90vw; */
    height: fit-content;
    overflow-x: hidden;
    overflow-y: scroll;
    /* text-align:justify; */
  }
/* hide scrollbar for chrome*/
::-webkit-scrollbar {
    width: 0px;
    background: transparent; 
}

/* hide scroll bar for mozilla */
.scroll::-moz-scrollbar {
    width: 0;
    background: transparent;
}

`;
