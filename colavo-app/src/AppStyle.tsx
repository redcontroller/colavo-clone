import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        font-size: 62.5%;
        font-family: Inter, sans-serif;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* CSS 커스텀 프로퍼티: background */
        --line-color: #EDEDED;
        --bg-option-btn-color: #F0F4F7;
        --bg-footer-btn-color: #6995F4;
        --bg-disabled-footer-btn-color: rgb(105, 149, 244, 60%);
        --icon-color: #727981;
        --bg-select-color: #F7F7F7;
        --bg-choice-color: #EFEFEF;
        --bg-tag-color: #DEFAEB;
        --bg-footer-tag-color: #C1C8CE;
        --icon-folder-color: #E0E0E0;
        --bg-item-tag-color: #6995F4;
        --border-item-tag-color: #F2F2F2;
        /* CSS 커스텀 프로퍼티: font */
        --font-primary-color: #25262A;
        --font-button-color: white;
        --font-reserved-color: #A7A9AC;
        --font-discount-color: #FC79AB;
        --font-discount-detail-color: #999999;
        --font-select-color: #C0C0C2;
        --font-tag-color: #61DD9F;
        --font-category-color: #ACB5BA;
        --font-footer-tag-color: white;
        --font-aggr-color: #767676;
        --font-disabled-color: rgb(255, 255, 255, 0.5);
    }
    
    body,
    button,
    div,
    p,
    h1,
    h2,
    h3 {
        font: inherit;
        font-size: 1.4rem;
        text-align: center;
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    body {
        display: flex;
        justify-content: center;
        width: 100%;
        min-width: 35rem;
        height: auto;
        min-height: 100vh;
        /* padding-bottom: 14.4rem; */
        padding: 0 1rem;
        margin: 0 auto;
    }
    
    #root {
        width: 36rem;
        box-shadow: rgba(181, 180, 180, 0.25) 0px 13px 27px -5px, rgba(181, 180, 180, 0.25) 0px 8px 16px -8px;
    }
    
    
    button {
        color: var(--font-button-color);
        font-family: sans-serif;
        cursor: pointer;
        padding: 0;
        border: 0;
        background-color: var(--bg-footer-btn-color);
    }
    
    a {
        text-decoration: none;
    }
    
    li{
        font: inherit;
        list-style: none;
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: #213547;
            background-color: #ffffff;
        }
    }

`;

export default GlobalStyle;