import React from 'react'
import {
    ConsoleWrapper,
    SmallConsole,
    ConsoleTitle,
    ConsoleDes,
    ConsolePrice,
    ConsoleImg,
    BigConsole,
    TitleWrapper
}  from './ConsoleStyle'
const Console = ({console}) => {
    return (
        <>
            <ConsoleWrapper>
                <SmallConsole>
                    <ConsoleImg src={console[0].pic}></ConsoleImg>
                    <TitleWrapper>
                        <ConsoleTitle>{console[0].product}</ConsoleTitle>
                        <ConsolePrice>{console[0].price}</ConsolePrice>
                    </TitleWrapper>
                    <ConsoleDes>{console[0].des}</ConsoleDes>
                </SmallConsole>
                <SmallConsole>
                    <ConsoleImg src={console[1].pic}></ConsoleImg>
                    <TitleWrapper>
                        <ConsoleTitle>{console[1].product}</ConsoleTitle>
                        <ConsolePrice>{console[1].price}</ConsolePrice>
                    </TitleWrapper>
                    <ConsoleDes>{console[1].des}</ConsoleDes>
                </SmallConsole>
                <BigConsole>
                    <ConsoleImg src={console[2].pic}></ConsoleImg>
                    <TitleWrapper>
                        <ConsoleTitle>{console[2].product}</ConsoleTitle>
                        <ConsolePrice>{console[2].price}</ConsolePrice>
                    </TitleWrapper>
                    <ConsoleDes>{console[2].des}</ConsoleDes>
                </BigConsole>
            </ConsoleWrapper>
        </>
    )
}

export default Console
