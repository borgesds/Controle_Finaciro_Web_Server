import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /* mudar o focu quando se usa tab ou selecioana algo */
    :focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${(props) => props.theme['green-300']};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['gray-900']};
        /* suavizar fontes */
        -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
