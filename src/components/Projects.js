import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {projects} from '../data/constants'

const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 6rem;
  height: 40rem;
  // padding-bottom: 24rem;
  
  @media screen and (max-width: 1040px ) {
    height: 76rem;
  }

  @media (max-width: 698px) {
    height: 140rem;
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


const ToogleGroupe = styled.div`
   display: flex;
   border: 1px solid ${({ theme }) => theme.primary};
   color: ${({ theme }) => theme.primary};
   font-size: 1rem;
   justify-content: center;
   margin-top: 20px;
   margin-bottom: 40px;
   
   @media (max-width: 468px) {
      font-size: 12px;
   }
`;

const ToogleButton = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    padding: 8px 10px;
    cursor: pointer;


    ${({active, theme}) =>
        active && `background-color: ${theme.primary + 20 };`
    }

    &:hover{
      background-color: ${({ theme }) => theme.primary + 8 };
    }

    @media (max-width: 468px) {
      padding: 6px 8px;
      border-radius: 8px;
    }
`;

const Divider = styled.div`
    border-left: 1.5px solid ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`;

// Project Card Style

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    height: 500px;
    background-color: ${({ theme }) => theme.card_light};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding : 10px 20px;
    gap: 6px;

    &:hover{
      transform: scale(1.05);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    oject-fit: cover;
    background-color: ${({ theme }) => theme.white};
`;

const Techs = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 10px 0;
    align-item: center;
`;

const CardDescription = styled.div`
    max-width: 100%;
    margin-bottom: 10px;
    // font-size: 1rem;
    align-item: center;
    color: ${({ theme }) => theme.text_secondary };
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

`;

const Tech = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    padding: 2px 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    border-radius: 10px;
`;

const CardTitle = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.text_secondary};
    margin: 6px 0;
    font-weight: 600;
`;
const CardDate = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text_secondary};
`;

export default function Projects() {
  const [toggle, setToggle] = useState('All')
  return (
    <section >
       <ContainerProjects id="projects">
        {/* <Wrapper> */}
       <SkillTitle>Projects</SkillTitle>
            <Description>
              Here are some of my projects that I've worked on.
            </Description>
            <ToogleGroupe>
              {toggle === 'All' ? (
                <ToogleButton active onClick={ () => setToggle('All')} value="All">All</ToogleButton>
              ): (
                <ToogleButton onClick={ () => setToggle('All')}>All</ToogleButton>
    
              )}

              <Divider/>

              { toggle === 'web' ? (   <ToogleButton active onClick={ () => setToggle('web')}>Web Applications</ToogleButton>) 
              : (   <ToogleButton onClick={() => setToggle('web')}>Web Applications</ToogleButton>)
              }

              <Divider/>

              { toggle === 'mobile' ? (   <ToogleButton active onClick={ () => setToggle('mobile')}>Mobile APP'S</ToogleButton>) 
              : (      <ToogleButton onClick={() => setToggle('mobile')}>Mobile APP'S</ToogleButton>)
              }
  
            </ToogleGroupe>

              <CardContainer>
                
                {toggle === 'All' ? projects.map((project) => {
                  return(<Card key={project.id}>
                        <CardImage src={project.image} />
                        <CardTitle>{project.title}</CardTitle>
                        <CardDate>{project.date}</CardDate> 
                        <Techs>
                          {project.tags.map((tag) => {
                            return(<Tech key={tag}>{tag}</Tech>)
                          })}
                        </Techs> 
                        <CardDescription>{project.description}</CardDescription>
                    </Card>)
                 })
                  : ( projects.filter((project) => project.type === toggle).map((project) => {
                    return(<Card key={project.id}> 
                            <CardImage src={project.image} alt={project.title}/> 
                            <Techs> 
                              {project.tags.map((tag) => { 
                                return(<Tech key={tag}>{tag}</Tech>)
                             })}
                           </Techs> 
                           <CardTitle>{project.title}</CardTitle> 
                           <CardDescription>{project.description}</CardDescription> 
                     </Card>
                    )                 
                   }))
                 } 
              
              </CardContainer>
             {/* </Wrapper>  */}
       </ContainerProjects>
      
    </section>
  )
}
