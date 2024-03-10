import React from 'react'
import styled from 'styled-components';


const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
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

export default function Footer() {
  return (
    <div id='footer'>
      <FooterContainer>
        <NavItems>
            <a></a>
        </NavItems>

      </FooterContainer>
    </div>
  )
}
