import React from 'react';
import styled from 'styled-components';
import { certifications } from '../data/constants';
import { Fade } from 'react-awesome-reveal';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 2rem 1.5rem 8rem;
    width: 100%;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 2rem;
    }
`;

const Desc = styled.div`
    font-size: 1.2rem;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const CertContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
`;

const CertCard = styled.div`
    background: ${({ theme }) => theme.card_light};
    border: 1px solid ${({ theme }) => theme.primary + '33'};
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Icon = styled.div`
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const CertTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
`;

const CertIssuer = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text_secondary};
    margin: 4px 0 0;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Year = styled.span`
    background: ${({ theme }) => theme.primary + '15'};
    color: ${({ theme }) => theme.primary};
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
`;

const LinkButton = styled.a`
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.primary};
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.primary};
        color: white;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export default function Certifications() {
    return (
        <Container id="certifications">
            <Wrapper>
                <Fade direction='up' triggerOnce>
                    <Title>Certifications</Title>
                    <Desc>A collection of my professional certifications and continuous learning achievements.</Desc>
                </Fade>
                <CertContainer>
                    {certifications
                        .sort((a, b) => b.year - a.year)
                        .map((cert) => (
                        <Fade direction='up' triggerOnce key={cert.id}>
                            <CertCard>
                                <Content>
                                    <Icon><FaCertificate /></Icon>
                                    <Info>
                                        <CertTitle>{cert.title}</CertTitle>
                                        <CertIssuer>
                                            {cert.issuer} • <Year>{cert.year}</Year>
                                        </CertIssuer>
                                    </Info>
                                </Content>
                                <LinkButton href={cert.link} target="_blank" rel="noopener noreferrer">
                                    View Certificate <FaExternalLinkAlt size={12} />
                                </LinkButton>
                            </CertCard>
                        </Fade>
                    ))}
                </CertContainer>
            </Wrapper>
        </Container>
    );
}
