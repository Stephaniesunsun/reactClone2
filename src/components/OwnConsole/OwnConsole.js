import React from 'react'
import {HeroWrapper,
    HeroTitle,
    HeroDes,
    ProductsWrapper,
    ProductWrapper,
    Pic,
    Name,
    Price,
    DesWrapper
}
    from './OwnConsoleStyle'
const OwnConsole = ({hero,heroTitle,heroDes,products}) => {
    return (
        <>
            <HeroWrapper hero={hero}>
                <HeroTitle>{heroTitle}</HeroTitle>
                <HeroDes>{heroDes}</HeroDes>
            </HeroWrapper>
            <ProductsWrapper>
                {products.map((obj)=>{
                    return (
                    <ProductWrapper>
                        <Pic onMouseOver={e=>(e.currentTarget.src=obj.hoverpic)} onMouseOut={e=>(e.currentTarget.src=obj.pic)} src={obj.pic}></Pic>
                        <DesWrapper>
                            <Name>{obj.name}</Name>
                            <Price>{obj.price}</Price>
                        </DesWrapper>
                    </ProductWrapper>
                        )
                })}
            </ProductsWrapper>
        </>
    )
}

export default OwnConsole
