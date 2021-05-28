import styled from 'styled-components';

export const HeroWrapper=styled.div`
    height: 70vh;
    width:100vw;
    margin:2em 0;
    background-image: url('${props=>props.hero}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &>*{
        color:#1a2456;
    }
`
export const HeroTitle=styled.h1`
display: block;
padding-top: 1.5em;
    text-align: center;
    letter-spacing:1.5px;
`;

export const HeroDes=styled.h3`
padding-top: 1em;
    text-align: center;
`;

export const ProductsWrapper=styled.div`
    margin:auto;
    width:90vw;
    height:auto;
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(350px,1fr));
    grid-column-gap: 1.5em;
    &>*{
        color:#1a2456;
    }
`;

export const ProductWrapper=styled.div`
width:100%;
margin-bottom: 1.5em;
`;  

export const DesWrapper=styled.div`
margin-top:0.5em;
    display: flex;
    align-items: center;
`;

export const Pic=styled.img`
    display: block;
    max-width: 100%;
    min-height:30vh;
`;

export const Name=styled.h3`
    letter-spacing: 1.5px;
`;

export const Price=styled.p`
    display: block;
    margin-left: auto;
`;