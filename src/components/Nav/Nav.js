import React,{useState} from 'react';
import {AiOutlineShopping} from 'react-icons/ai';
import {Navbar,NavLogo,NavContainer,Title,Logo,RightLogo,HamburgerMenu,
    ExtendedNav,
    ListWrapper,
    ListItem
} from './Navstyle'
import {IconContext} from 'react-icons/lib';


function Nav(){
    //add click hook
    const [click,setClick]=useState(false);
    function handleClick(e){
        setClick(!click);
    }
    return(
        <Navbar>
            <IconContext.Provider value={{color:'#f0efed'}}>
            <NavContainer>
                <NavLogo>
                    <Logo size={37}/>
                    <Title>MONOGRAM</Title>
                </NavLogo>
                <RightLogo>
                    <HamburgerMenu size={25} onClick={handleClick}/>
                    <AiOutlineShopping size={30}></AiOutlineShopping>
                </RightLogo>
                <ExtendedNav onClick={handleClick} click={click}>
                    <ListWrapper>
                        <ListItem click={click} to='/how-it-works'>HOW IT WORKS</ListItem>
                        <ListItem click={click} to='/workflows'>WORKFLOWS</ListItem>
                        <ListItem click={click} to='/download'>DOWNLOAD</ListItem>
                        <ListItem click={click} to='/support'>SUPPORT</ListItem>
                        <ListItem click={click} to='/shop'>SHOP</ListItem>
                    </ListWrapper>
                </ExtendedNav>
            </NavContainer>
            </IconContext.Provider>
        </Navbar>
    )
}

export default Nav
