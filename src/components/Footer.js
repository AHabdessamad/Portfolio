import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { Bio } from '../data/constants';
const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 10px;
   padding: 30px 0;
   background-color: ${({ theme }) => theme.card_light};
`;

const IconLink = styled.a`
    display: flex;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`;

const FooterTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 8px;
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
        <FooterTitle>Reach out to me</FooterTitle>
        <NavItems>
            <IconLink href={`https://${Bio.linkedin}`} target='_blank' rel='noopener noreferrer'><FaLinkedin style={icon} /></IconLink>
            <IconLink href={Bio.github} target='_blank' rel='noopener noreferrer'><FaGithub style={icon} /></IconLink>
            <IconLink href={`mailto:${Bio.email}`}><FaEnvelope style={icon}/></IconLink>
        </NavItems>
        <DescText>© {new Date().getFullYear()} {Bio.FirstName} {Bio.LastName}. All rights reserved.</DescText>

      </FooterContainer>
    </div>
  )
}
