import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterWrapper=styled.div`
    margin-top:2em;
    padding:3em 2.5em 3em 1.5em;
    background-color: #1a2456;
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-column-gap:1em;
    grid-row-gap:1em;
    &>*{
        color:#F5B7B1;
        font-size:12px;
        word-spacing:1.4px;
    }
`

export const Subscribe=styled.div`
    grid-column:1/3;
    @media screen and (min-width:990px){
        grid-column:1/2;
    }
`
export const TT=styled.h4`
    margin-bottom: 1em;
`;
export const Des=styled.p`
    letter-spacing: 1px;
`;
export const SubForm=styled.form`
    margin:1em 1em 1em 0;
    display: flex;
    gap:0.5em;
`;
export const Input=styled.input`
    padding-left:0.5em;
    border:1px #F5B7B1 solid;
    background-color: #1a2456;  
    width:75%;
    @media screen and (min-width:990px){
        width:65%;
    }
`;
export const Button=styled.button`
    width:22%;
    background-color: #F5B7B1;
    color:#1a2456;
    border:none;
    border-radius:30%;
    font-size:10px;
    padding:8px 20px;
    text-align:center;
    @media screen and (min-width:990px){
        width:35%;
    }
`;
export const SubSocial=styled.div`
    margin-top:3em;
    &>*{
        margin:0.5em;
        color: #1a2456;
       background-color:#F5B7B1;
       border-radius: 50%;
       padding:6px;
    }
`;
export const GeneralInfo=styled.div``;
export const QuickLinks=styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5em;
`;
export const Linkitem=styled(Link)`
    letter-spacing: 1px;
    text-decoration:none;
    color:#F5B7B1;
`
export const LinkItem=styled.a`
    letter-spacing: 1px;
`;
export const Help=styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5em;
`;
export const Information=styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5em;
`;