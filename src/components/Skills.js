import React from 'react'
import styled from 'styled-components'
import {skills} from '../data/constants'
import { Title } from '@mui/icons-material'
import { Fade } from "react-awesome-reveal";

const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
    background: linear-gradient(
    38,73deg,
    rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
    141.27deg, 
    rgba(0, 70, 209, 0.15) 100%, rgba(0, 70, 209, 0.15) 100%
    );
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    margin-bottom: 6rem;
    height: 120%;
    padding-bottom: 28px;
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

const SkillTitle = styled.div`
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

const SkillsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 20px;
   gap: 20px;
   justify-content: center;
`;


const  Skill = styled.div`  
   width: 100%;
   max-width: 450px;
   height: 100%
   max-height: 300px;
   border-radius: 1rem;
   padding: 10px 20px;
   background-color: ${({ theme }) => theme.card};
   border: 1px solid ${({ theme }) => theme.primary};
   @media (max-width: 768px) {
      max-width: 330px;
      padding: 10px 30px;
   }

`;

const Skilltitle = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
`;

const SkillList = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px;
   margin-bottom: 15px;

`;

const SkillItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 0.2px solid #854ce6;
   gap: 8px;
   color: ${({ theme }) => theme.text_secondary};
   font-size: 1.2rem;
   font-weight: 500;
   border-radius: 10px;
   padding: 5px 10px;

   @media (max-width: 768px) {
      font-size: 1rem;
      padding: 6px 12px;
   }

`;

const SkillImage = styled.img`
    width: 20px;
    height: 20px;
`;

export default function Skills() {
  return (
   <ContainerWrapper id="skills">
       <SkillsContainer >
          <Wrapper>
            <Fade direction='up' triggerOnce>
            <SkillTitle>Skills</SkillTitle>
            <Description>
              Here are some of the technologies I've worked with for the past 2 years.
            </Description>
            </Fade>
            <SkillsWrapper>
            <Fade direction='up' triggerOnce>
              {skills.map((obj) => (
                <Skill >
                  <Skilltitle>{obj.title}</Skilltitle>
                  <SkillList>
                       {obj.skills.map((skill) => (
                        <SkillItem key={skill.name}>
                            <SkillImage src={skill.image} />
                            {skill.name}
                        </SkillItem>
                    ))}

                   </SkillList>
                </Skill>
              ))}
            </Fade>
            </SkillsWrapper>
          </Wrapper>
       </SkillsContainer>
    </ContainerWrapper>
  )
}
