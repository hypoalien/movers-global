
import React, { useState, useEffect } from 'react';

import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

import { FaBars, FaRegQuestionCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';



 const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#23120B' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

 const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

 const NavLogo = styled(LinkR)`
  color:#F1F1F1;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top:12px;
  font-weight: bold;
  text-decoration: none;

`;

 const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

 const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavItem = styled.li`
  height: 80px;
`;

 const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavLinks = styled(LinkR)`
  color:#F1F1F1;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #0F4392;
  }
`;

 const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #0F4392;
  white-space: nowrap;
  padding: 10px 22px;
  color: #F1F1F1;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
const LogoImg=styled.img`
height: 55px;
    width: auto;
  padding-right:10px;
    
`;
const LogoContainer=styled.div`


`;

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);



    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav scrollNav={scrollNav} >
            <NavbarContainer>
             
              <NavLogo  to='/'>
              <LogoContainer>
                <LogoImg src={require("../images/logo-transperent.png").default} alt="">
                </LogoImg>
                </LogoContainer>
                
                Movers Global
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon >
              <NavMenu>
              <NavItem>
                  <NavLinks
                    to='/'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Home
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='/about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Contact Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='blogs'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Blogs
                  </NavLinks>
                </NavItem>
                
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/contact'>Know more</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  };
  
  export default Header;
  