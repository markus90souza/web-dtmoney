import { createGlobalStyle } from 'styled-components'

export const Boot = createGlobalStyle`

    :root{
        --bg: #F0f5f3;
        --shape: #FFFFFF;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --font-primary: 'Poppins', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, button, textarea, input{
      font-family: var(--font-primary);
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{ font-weight:600;}

    body{
        background-color: var(--bg);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
