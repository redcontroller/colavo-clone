import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        font-family: Inter, Arial, sans-serif;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* 커스텀 프로퍼티 */
        --line-color: #EDEDED;
        --bg-option-btn-color: #F0F4F7;
        --bg-footer-btn-color: #6995F4;
        --icon-color: #727981;
        --bg-select-color: #F7F7F7;
        --bg-choice-color: #EFEFEF;
        --bg-tag-color: #DEFAEB;
        --tag-footer-tag-color: #C1C8CE;
        --icon-folder-color: #E0E0E0;
        --bg-item-tag-color: #6995F4;
        --border-item-tag-color: #F2F2F2;
        --font-primary-color: #25262A;
        --font-reserved-color: #B9C3CE;
        --font-discount-color: #FC79AB;
        --font-discount-detail-color: #999999;
        --font-select-color: #C0C0C2;
        --font-tag-color: #61DD9F;
        --font-category-color: #ACB5BA;
        --font-item-tag-color: #F2F2F2;
        --font-aggr-color: #767676;
    }
    
    body,
    button,
    div,
    p {
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    body {
        width: 390px;
        min-width: 320px;
        min-height: 100vh;
        margin: 0 auto;
        box-shadow: rgba(181, 180, 180, 0.25) 0px 13px 27px -5px, rgba(181, 180, 180, 0.25) 0px 8px 16px -8px;
    }
    
    
    button {
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