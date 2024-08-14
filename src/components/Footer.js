import React from 'react'
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Bio } from '../data/constants';
const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap:10px;
   padding: 50px 0;
   background-color: ${({ theme }) => theme.card_light};
   height: 80px;
`;


const NavItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
`;

const DescText = styled.div`
    font-size: .8rem;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`;

const icon = {
  color: '#b1b2b3',
  width: '25px',
  height: '25px'

}
export default function Footer() {
  return (
    <div id='footer'>
      <FooterContainer>
        <NavItems>
            <Link to={Bio.linkedin} target='_blank'><FaLinkedin style={icon} /></Link>
            <Link to={Bio.github} target='_blank'><FaGithub style={icon} /></Link>
            <Link to={Bio.facebook} target='_blank'><FaFacebook style={icon}/></Link>
            <Link to={Bio.twitter} target='_blank'><FaTwitter style={icon}/></Link>
        </NavItems>
        <DescText>Made with ❤</DescText>

      </FooterContainer>
    </div>
  )
}
