import {createGlobalStyle} from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
    google:{
        families:['Mukta:300','sans-serif']
    }
})
const GlobalStyle=createGlobalStyle`
    *{
        margin:0;
        padding:0;
        position:relative;
        box-sizing: border-box;
    }
`
export default GlobalStyle;