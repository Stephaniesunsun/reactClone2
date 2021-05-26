import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import {GrTapeOption} from 'react-icons/gr';
export const Navbar=styled.div`

`
export const RightLogo=styled.div`
    display:flex;
   padding-right:1em;
   gap:0.5em;
   align-items:center;
   cursor: pointer;
   color:#f0efed;
`;

export const HamburgerMenu=styled(GiHamburgerMenu)`
    display:none;
    @media screen and (max-width:965px){
        display:block;
    }
`
export const Homelink=styled(Link)`
    cursor: pointer;
`
export const NavLogo=styled.div`
    display:flex;
    gap:0.5em;
    padding-left:0.5em;
    align-items:center;
    color:#f0efed;
`
export const NavContainer=styled.div`
position:sticky;
    margin:1em auto auto auto;
    padding:0.2em;
    width:95%;
    height:3em;
    background-color:#1a2456;
    z-index:100;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const ExtendedNav=styled.div`
    background-color:#1a2456;
    position: absolute;
    top:3em;
    left:0;
    width:100%;
    height:${({click})=>(click?'10em':0)};
    transition:height 0.5 ease;
    @media screen and (min-width:965px){
        width:60%;
        top:0;
        left:30vw;
        height:3em;
    }
`
export const ListWrapper=styled.ul`
    display:flex;
    flex-direction:column;
    margin-left:3.5em;
    margin-bottom:2em;
    height:100%;
    justify-content:space-around;
    @media screen and (min-width:965px){
        flex-direction:row;
        justify-content:flex-end;
        align-items:center;
        gap:0.6em;
    }
`
export const ListItem=styled(Link)`
    font-size:0.7em;
    letter-spacing:0.3em;
    color:#f0efed;
    text-decoration:none;
    display:${({click})=>(click?'block':'none')};
    &:hover{
        color:#ff8b68;
    }
    justify-content:space-around;
    @media screen and (min-width:965px){
        display:block;
    }
`
export const Logo=styled(GrTapeOption)`
    cursor: pointer;
`
export const Title=styled.h1`
    font-size:0.8rem;
    letter-spacing:2px;
`