import React from 'react'
import { 
    Info,
    InfoTitle,
    InfoDesc,
    InfoWrapper,
    Down,
    DownLink
 } from "./Infostyle";

function InfoSection({title,des}){
    return (
        <Info style={{backgroundImage:"url("+"https://monogramcc.com/static/9230c93612ee9b6f525613f4dd495e00/1c8c6/shop-cta-md.jpg"+")",
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            marginTop:'-4.5em'
        }}>
            <InfoWrapper>
                <InfoTitle>{title}</InfoTitle>
                <InfoDesc>{des}</InfoDesc>
            </InfoWrapper >
            <DownLink to='next' smooth={true}  duration={700} spy={true} exact="true">
                <Down size={45}/>
            </DownLink>
        </Info>
    )
}

export default InfoSection
