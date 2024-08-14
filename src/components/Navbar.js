import React from 'react'
import { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import {Link, Link as LinkR} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Bio } from '../data/constants'
import { ToastContainer } from 'react-toastify';


const Nav = styled.nav`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1;
    // display: none;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    
    }
`;
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 948px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

const NavItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 948px) {
        display: none;
    }
   
`;


const NavLogo = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    width: 80%;
    padding: 0 6px;
    dipslay: flex;
    font-weight: bold;
    margin-top: 15px;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 648px) {
        padding: 0 0px;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition:all 0.3s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 648px) {
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    background-color: transparent;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding:8px 20px;
    list-style: none;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    height: 100%;
    font-weight: 500;
    :hover{
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_light};
    }
    @media screen and (max-width: 648px) {
        padding: 0.8rem;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    position: absolute;
    top: 80px;
    right: 0;
    left:: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background-color: ${({ theme }) => theme.card_light }; {
    border: 1px solid ${({ theme }) => theme.primary};
    } };
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 20px 20px;
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};

    @media screen and (max-width: 640px ) {
        z-index: 5;
      }
`;

const MobileLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition:all 0.3s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }

`;
const linkStyle = {
    textDecoration: 'none',
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const changeMenu = () => {
    setOpen(!open);
  }
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 948 && open) {
        setOpen(false);
        console.log('closed');
      }
    };
    window.addEventListener('resize', handleResize);

  }, [open]);


  return (
    <Nav>
     <ToastContainer />
      <NavContainer>
        <NavLogo to="/">Abdessamad | AH</NavLogo>
        <MobileIcon>
            <FaBars onClick={changeMenu} />
        </MobileIcon>
        <NavItems>
            <NavLink href="#skills" >Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            {/* <NavLink to="#education">Education</NavLink> */}
            <NavLink href="#posts">Posts</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
        <Link style={linkStyle}  to={Bio.github} target='_blank'><GithubButton>Github profile</GithubButton></Link>
        </ButtonContainer>
      </NavContainer>
      {
        open && ( 
        <MobileMenu open={open}>
            <MobileLink to="#skills" onClick={()=>{setOpen(!open)}}>
                Skills
            </MobileLink>
            <MobileLink to="#projects" onClick={()=>{setOpen(!open)}}>
                Projects
            </MobileLink>
            <MobileLink to="#posts" onClick={()=>{setOpen(!open)}}>
                Posts
            </MobileLink>
            {/* <MobileLink to="#education" onClick={()=>{setOpen(!open)}}>
                Education
            </MobileLink> */}
            <MobileLink to="#contact" onClick={()=>{setOpen(!open)}}>
                Contact
            </MobileLink>
            <Link style={linkStyle} to={Bio.github} target='_blank'><GithubButton style={{
                padding: '10px 16px',
                // background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
            }}
            >Github profile</GithubButton></Link>
        </MobileMenu>)
      }
    </Nav>
  )
}
