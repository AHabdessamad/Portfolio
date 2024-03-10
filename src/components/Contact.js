import React from 'react'
import styled from 'styled-components';


const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    height: 60rem;
    // padding-bottom: 28px;
    
`;
const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 14px;

`;

const ContactTitle = styled.div`
   color: ${({ theme }) => theme.text_primary};
   font-size: 2.5rem;
   font-weight: 700;
   margin-top: 20px;
   text-align: center;
   @media (max-width: 468px) {
    font-size: 2rem;
    margin-top: 8px;
   }
`;

const Description = styled.div`
   font-size: 1.3rem;
   color: ${({ theme }) => theme.text_secondary};
   text-align: center;
   @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 8px;
   }
`;


export default function Contact() {
  return (
    <div id="contact" >
       <ContactContainer>
              <ContactTitle>Let's Connect</ContactTitle>
              <Description>
                I'm currently looking for new opportunities, use the form below to get in touch with me.
              </Description>
        </ContactContainer>
      
    </div>
  );
}
