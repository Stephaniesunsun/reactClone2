import React from 'react'
import {
    ConsoleWrapper,
    SmallConsole,
    ConsoleTitle,
    ConsoleDes,
    ConsolePrice,
    ConsoleImg,
    TitleWrapper
}  from './ConsoleStyle'
const Console = ({console})=> {
    return (
        <>
            <ConsoleWrapper>
            {console.map((obj)=>{
                return(
                <SmallConsole>
                    <ConsoleImg src={obj.pic}></ConsoleImg>
                    <TitleWrapper>
                        <ConsoleTitle>{obj.product}</ConsoleTitle>
                        <ConsolePrice>{obj.price}</ConsolePrice>
                    </TitleWrapper>
                    <ConsoleDes>{obj.des}</ConsoleDes>
                </SmallConsole>)
            })}   
            </ConsoleWrapper>
        </>
    )
}

export default Console
