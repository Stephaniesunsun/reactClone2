import React,{useState} from 'react'
import {FaInstagram,FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai';
import {FooterWrapper,
    Subscribe,
    TT,
    Des,
    SubForm,
    Input,
    Button,
    SubSocial,
    GeneralInfo,
    QuickLinks,
    LinkItem,
    Linkitem,
    Help,
    Information
}
    from './FooterStyle'
    import {IconContext} from 'react-icons/lib';

const Footer = () => {
    const [submit, setSubmit]=useState(false);
    const handleClick=e=>{
        setSubmit(!submit);
        e.preventDefault();
    }
    return (
        <FooterWrapper>
            <IconContext.Provider value={{size:'27px'}}>
            <Subscribe>
                <TT>SUBSCRIBE TO MONOGRAM</TT>
                <Des>Master productivity with Creative Console and get all the latest Monogram news</Des>
                <SubForm>
                    <Input type='text' name='email' placeholder='Email Address'/>
                    <Button onClick={handleClick}>SUBMIT</Button>
                </SubForm>
                <SubSocial>
                    <FaInstagram></FaInstagram>
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <FaFacebookF></FaFacebookF>
                    <AiFillYoutube></AiFillYoutube>
                </SubSocial>
            </Subscribe>
            <GeneralInfo>
                <TT>MONOGRAM</TT>
                <Des>305 King St. W. 
                    Suite 502 Kitchner, 
                    ON Canada</Des>
            </GeneralInfo>
            <QuickLinks>
                <TT>QUICK LINKS</TT>
                <Linkitem to='/'>Home</Linkitem>
                <LinkItem to='/how-it-works'>How it Works</LinkItem>
                <LinkItem to='/download'>Download</LinkItem>
                <LinkItem to='/shop'>Shop</LinkItem>
            </QuickLinks>
            <Help>
                <TT>HELP</TT>
                <LinkItem to='./faqs'>FAQs</LinkItem>
                <LinkItem to='./supportCenter'>Support Center</LinkItem>
                <LinkItem to='./shippingandsales'>Shipping and Sales</LinkItem>
                <LinkItem t0='./palettesupport'>Palette Support</LinkItem>
            </Help>
            <Information>
                <TT>INFORMATION</TT>
                <LinkItem to='./aboutus'>About Us</LinkItem>
                <LinkItem to='./workwithus'>Work with us</LinkItem>
                <LinkItem to='./privacypolicy'>Privacy Policy</LinkItem>
                <LinkItem to='./termsofuse'>Terms of Use</LinkItem>
                <LinkItem to='./salesofuse'>Terms of Sale</LinkItem>
                <LinkItem to='./presskit'>Press Kit</LinkItem>
            </Information>
            </IconContext.Provider>
        </FooterWrapper>
    )
}

export default Footer

