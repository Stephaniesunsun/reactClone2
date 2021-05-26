import styled from 'styled-components';

export const ConsoleWrapper=styled.div`
    display:grid;
    width:90vw;
    margin-left:auto;
    margin-right:auto;
    grid-template-columns:repeat(2, 1fr);
    grid-column-gap: 3vw;
`
export const SmallConsole=styled.div``
export const ConsoleTitle=styled.h3`
    letter-spacing:1.5px;
    color: #1a2456;
    margin-top:0.5em;
`
export const TitleWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`
export const ConsoleDes=styled.p`
letter-spacing:1.5px;
font-size: 14px;
color: #1a2456;
margin-bottom:1em;
`
export const ConsolePrice=styled.p`
    font-size: 14px;
    color: #1a2456;
`
export const ConsoleImg=styled.img`
    display: block;
    object-fit: cover;
    max-width: 100%;
`
export const BigConsole=styled.div`
    grid-column:1/3;
`