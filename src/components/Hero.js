import React from 'react'
import styled from 'styled-components'
import {Bio} from '../data/constants'
import Typewriter from "typewriter-effect"
import HeroImg from '../assets/img/me.jpeg'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";


const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  height: 40rem;
  justify-content: center;
  padding: 80px 30px;
  position: relative;
  @media screen and (max-width: 960px) {
    padding: 60px 10px;
    height: 60rem;
  }

  @media screen and (max-width: 640px ) {
    padding: 32px 16px;
    height: 64rem;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
`;
const HeroBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: -42vw -4vh 0px 0px #fff,25vw -41vh 0px 0px #fff,-20vw 49vh 0px 1px #fff,5vw 40vh 1px 1px #fff,29vw 19vh 1px 0px #fff,-44vw -13vh 0px 0px #fff,46vw 41vh 0px 1px #fff,-3vw -45vh 0px 1px #fff,47vw 35vh 1px 0px #fff,12vw -8vh 1px 0px #fff,-34vw 48vh 1px 1px #fff,32vw 26vh 1px 1px #fff,32vw -41vh 1px 1px #fff,0vw 37vh 1px 1px #fff,34vw -26vh 1px 0px #fff,-14vw -49vh 1px 0px #fff,-12vw 45vh 0px 1px #fff,-44vw -33vh 0px 1px #fff,-13vw 41vh 0px 0px #fff,-36vw -11vh 0px 1px #fff,-23vw -24vh 1px 0px #fff,-38vw -27vh 0px 1px #fff,16vw -19vh 0px 0px #fff,28vw 33vh 1px 0px #fff,-49vw -4vh 0px 0px #fff,16vw 32vh 0px 1px #fff,36vw -18vh 1px 0px #fff,-25vw -30vh 1px 0px #fff,-23vw 24vh 0px 1px #fff,-2vw -35vh 1px 1px #fff,-25vw 9vh 0px 0px #fff,-15vw -34vh 0px 0px #fff,-8vw -19vh 1px 0px #fff,-20vw -20vh 1px 1px #fff,42vw 50vh 0px 1px #fff,-32vw 10vh 1px 0px #fff,-23vw -17vh 0px 0px #fff,44vw 15vh 1px 0px #fff,-40vw 33vh 1px 1px #fff,-43vw 8vh 0px 0px #fff,-48vw -15vh 1px 1px #fff,-24vw 17vh 0px 0px #fff,-31vw 50vh 1px 0px #fff,36vw -38vh 0px 1px #fff,-7vw 48vh 0px 0px #fff,15vw -32vh 0px 0px #fff,29vw -41vh 0px 0px #fff,2vw 37vh 1px 0px #fff,7vw -40vh 1px 1px #fff,15vw 18vh 0px 0px #fff,25vw -13vh 1px 1px #fff,-46vw -12vh 1px 1px #fff,-18vw 22vh 0px 0px #fff,23vw -9vh 1px 0px #fff,50vw 12vh 0px 1px #fff,45vw 2vh 0px 0px #fff,14vw -48vh 1px 0px #fff,23vw 43vh 0px 1px #fff,-40vw 16vh 1px 1px #fff,20vw -31vh 0px 1px #fff,-17vw 44vh 1px 1px #fff,18vw -45vh 0px 0px #fff,33vw -6vh 0px 0px #fff,0vw 7vh 0px 1px #fff,-10vw -18vh 0px 1px #fff,-19vw 5vh 1px 0px #fff,1vw 42vh 0px 0px #fff,22vw 48vh 0px 1px #fff,39vw -8vh 1px 1px #fff,-6vw -42vh 1px 0px #fff,-47vw 34vh 0px 0px #fff,-46vw 19vh 0px 1px #fff,-12vw -32vh 0px 0px #fff,-45vw -38vh 0px 1px #fff,-28vw 18vh 1px 0px #fff,-38vw -46vh 1px 1px #fff,49vw -6vh 1px 1px #fff,-28vw 18vh 1px 1px #fff,10vw -24vh 0px 1px #fff,-5vw -11vh 1px 1px #fff,33vw -8vh 1px 0px #fff,-16vw 17vh 0px 0px #fff,18vw 27vh 0px 1px #fff,-8vw -10vh 1px 1px #fff;

  /* stars were too big with the layers above but left the code in case no one cares  -- as in, if noone's just that  one other loner who actually cares    */

  box-shadow: 24vw 9vh 1px 0px #fff,12vw -24vh 0px 1px #fff,-45vw -22vh 0px 0px #fff,-37vw -40vh 0px 1px #fff,29vw 19vh 0px 1px #fff,4vw -8vh 0px 1px #fff,-5vw 21vh 1px 1px #fff,-27vw 26vh 1px 1px #fff,-47vw -3vh 1px 1px #fff,-28vw -30vh 0px 1px #fff,-43vw -27vh 0px 1px #fff,4vw 22vh 1px 1px #fff,36vw 23vh 0px 0px #fff,-21vw 24vh 1px 1px #fff,-16vw 2vh 1px 0px #fff,-16vw -6vh 0px 0px #fff,5vw 26vh 0px 0px #fff,-34vw 41vh 0px 0px #fff,1vw 42vh 1px 1px #fff,11vw -13vh 1px 1px #fff,48vw -8vh 1px 0px #fff,22vw -15vh 0px 0px #fff,45vw 49vh 0px 0px #fff,43vw -27vh 1px 1px #fff,20vw -2vh 0px 0px #fff,8vw 22vh 0px 1px #fff,39vw 48vh 1px 1px #fff,-21vw -11vh 0px 1px #fff,-40vw 45vh 0px 1px #fff,11vw -30vh 1px 0px #fff,26vw 30vh 1px 0px #fff,45vw -29vh 0px 1px #fff,-2vw 18vh 0px 0px #fff,-29vw -45vh 1px 0px #fff,-7vw -27vh 1px 1px #fff,42vw 24vh 0px 0px #fff,45vw -48vh 1px 0px #fff,-36vw -18vh 0px 0px #fff,-44vw 13vh 0px 1px #fff,36vw 16vh 0px 1px #fff,40vw 24vh 0px 0px #fff,18vw 11vh 0px 0px #fff,-15vw -23vh 1px 0px #fff,-24vw 48vh 0px 1px #fff,27vw -45vh 1px 0px #fff,-2vw -24vh 0px 1px #fff,-15vw -28vh 0px 0px #fff,-43vw 13vh 1px 0px #fff,7vw 27vh 1px 0px #fff,47vw 5vh 0px 0px #fff,-45vw 15vh 1px 1px #fff,-5vw -28vh 0px 1px #fff,38vw 25vh 1px 1px #fff,-39vw -1vh 1px 0px #fff,5vw 0vh 1px 0px #fff,49vw 13vh 0px 0px #fff,48vw 10vh 0px 1px #fff,19vw -28vh 0px 0px #fff,4vw 7vh 0px 0px #fff,21vw 21vh 1px 1px #fff,-15vw -15vh 0px 1px #fff,-6vw -42vh 1px 0px #fff,-15vw 48vh 1px 1px #fff,-23vw 25vh 1px 1px #fff,-48vw 25vh 0px 1px #fff,-31vw -19vh 0px 1px #fff,4vw 37vh 1px 1px #fff,-43vw 28vh 0px 0px #fff,3vw -25vh 0px 1px #fff,-39vw 14vh 0px 1px #fff,-40vw 31vh 0px 1px #fff,35vw -36vh 1px 1px #fff,16vw 49vh 0px 0px #fff,6vw 39vh 0px 0px #fff,3vw -35vh 0px 1px #fff,-44vw -2vh 1px 0px #fff,-6vw 21vh 1px 0px #fff,48vw 9vh 1px 1px #fff,-43vw 30vh 1px 1px #fff,29vw -12vh 1px 1px #fff,-48vw 13vh 1px 0px #fff,-42vw 32vh 1px 1px #fff,34vw 15vh 1px 1px #fff,29vw -37vh 1px 1px #fff,28vw 2vh 0px 0px #fff;
  animation: zoom 16s alternate infinite; 
  @keyframes zoom {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
  }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between
    align-items: center;
    padding: 0 30px;
    width: 100%;
    max-width: 1100px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
`;

const HeroLeft = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 660px) {
    order: 2;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRight = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content:end;
  gap: 20px;
  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 660px) {
    order: 1;
    margin-bottom: 30px;
  }

`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;
const InfinitText = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.1;
    display: flex;
    gap: 12px;
    margin: 10px 0;
    @media screen and (max-width: 960px) {
      text-align: center;
    }
    @media screen and (max-width: 640px) {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 10px;
    }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text_primary + 90};

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
`;

const ResumeButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  background: linear-gradient(90deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%);

  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  :hover{
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_light};
  }

`;
const Image = styled.img`
    border: 2px solid ${({ theme }) => theme.primary};
    width: 400px;
    position: relative;
    border-radius: 50%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 960px) {
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 640px) {
      width: 300px;
      height: 300px;
    }

`;
export default function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg/>
        <HeroInnerContainer>
          <HeroLeft>
            <Fade direction="down" triggerOnce>
            <Title>Hi, I am <br/>
            {Bio.FirstName}<br/>
            {Bio.LastName}</Title>
              <InfinitText>
                I am a 
                <Span> 
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
                </Span>
              </InfinitText>
            </Fade>
            <Fade triggerOnce>
            <SubTitle>{Bio.description}</SubTitle>
            </Fade>
            <Fade direction='up' triggerOnce>
            <Link style={{textDecoration: 'none'}} to={Bio.resume} target="_blank"><ResumeButton>Resume</ResumeButton></Link>
            </Fade>
          </HeroLeft>
          <HeroRight>
            <Fade direction='right' triggerOnce>
            <Image src={HeroImg} alt="My profile"/>
            </Fade>
          </HeroRight>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}



