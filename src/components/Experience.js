import React from 'react'
import styled, { keyframes } from 'styled-components'
import { experiences } from '../data/constants'
import { Fade } from "react-awesome-reveal";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(133, 76, 230, 0.5); }
  70% { box-shadow: 0 0 0 10px rgba(133, 76, 230, 0); }
  100% { box-shadow: 0 0 0 0 rgba(133, 76, 230, 0); }
`;



const ExperienceSection = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 30px 60px;
  overflow: visible;
`;

const SectionTitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  position: relative;
  z-index: 2;

  @media (max-width: 468px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primary} 0%,
      rgba(133, 76, 230, 0.2) 100%
    );
    border-radius: 2px;
  }

  @media (max-width: 868px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ $isEven }) => ($isEven ? 'flex-start' : 'flex-end')};
  padding: 20px 0;
  position: relative;
  width: 100%;

  @media (max-width: 868px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ $isCurrent }) => ($isCurrent ? '20px' : '16px')};
  height: ${({ $isCurrent }) => ($isCurrent ? '20px' : '16px')};
  background: ${({ $isCurrent, theme }) =>
    $isCurrent
      ? `linear-gradient(135deg, ${theme.primary}, #a855f7)`
      : theme.card};
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  z-index: 1;
  top: 25px;
  margin-top: 8px;
  animation: ${({ $isCurrent }) => ($isCurrent ? pulse : 'none')} 2s infinite;

  @media (max-width: 868px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  width: 55%;
  position: relative;

  @media (max-width: 868px) {
    width: 100%;
  }
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.2);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary},
      transparent
    );
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.15);
  }

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(133, 76, 230, 0.2), rgba(168, 85, 247, 0.15));
  color: #a855f7;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
  border: 1px solid rgba(133, 76, 230, 0.3);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a855f7;
    animation: ${pulse} 2s infinite;
  }
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 10px 0 4px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RoleTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 16px;
  opacity: 0.8;
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
`;

const DescriptionItem = styled.li`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.92rem;
  line-height: 1.6;
  padding: 4px 0 4px 20px;
  position: relative;

  &::before {
    content: '∠';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Tag = styled.span`
  background: rgba(133, 76, 230, 0.1);
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(133, 76, 230, 0.25);
  padding: 3px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ConnectorArrow = styled.div`
  position: absolute;
  top: 35px;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ $isEven }) =>
    $isEven
      ? `
    right: -10px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent rgba(133, 76, 230, 0.2);
  `
      : `
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent rgba(133, 76, 230, 0.2) transparent transparent;
  `}

  @media (max-width: 868px) {
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent rgba(133, 76, 230, 0.2) transparent transparent;
  }
`;

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <Fade direction='up' triggerOnce>
        <SectionTitle>Experience</SectionTitle>
        <SectionSubtitle>
          My professional journey and work experience.
        </SectionSubtitle>
      </Fade>
      <Timeline>
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <Fade
              key={exp.id}
              direction={isEven ? 'left' : 'right'}
              triggerOnce
              delay={index * 100}
            >
              <TimelineItem $isEven={isEven}>
                <TimelineDot $isCurrent={exp.isCurrent} />
                <TimelineContent>
                  <ExperienceCard>
                    <ConnectorArrow $isEven={isEven} />
                    {exp.isCurrent && <CurrentBadge>Current</CurrentBadge>}
                    <CompanyName>{exp.company}</CompanyName>
                    <RoleTitle>{exp.role}</RoleTitle>
                    <DateRange>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {exp.startDate} — {exp.endDate}
                    </DateRange>
                    <DescriptionList>
                      {exp.descriptions.map((desc, i) => (
                        <DescriptionItem key={i}>{desc}</DescriptionItem>
                      ))}
                    </DescriptionList>
                    <TagContainer>
                      {exp.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagContainer>
                  </ExperienceCard>
                </TimelineContent>
              </TimelineItem>
            </Fade>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
}
