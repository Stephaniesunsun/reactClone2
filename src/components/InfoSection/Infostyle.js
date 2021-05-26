import styled from 'styled-components';
import {BsChevronDown} from 'react-icons/bs';
import {Link} from 'react-scroll';

export const Info=styled.div`
    width:100vw;
    height:95vh;
`
export const InfoWrapper=styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    height:100%;
    margin-left:auto;
    margin-right:6em;
    justify-content:center;
    align-items:center;
    gap:0.5em;
`
export const InfoTitle=styled.h1`
    letter-spacing:0.1em;
    color:#1a2456;
    text-align:left;
    font-size:2.3em;
    word-spacing:3px;
    margin-top:15%;
`
export const InfoDesc=styled.h3`
    color:#1a2456;
    text-align:left;
`
export const DownLink=styled(Link)`
    cursor: pointer;
    &>:hover{
        height:50px;
        width:55px;
        transition:all 400ms ease-out;
    }
`
export const Down=styled(BsChevronDown)`
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:-4.2em;
    color:#f0efed;
    filter:drop-shadow(1px 1px 1px #1a2456);
`