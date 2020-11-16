import React from 'react'
import styled from 'styled-components';
import { Container } from './style';
import TelegramIcon from '../assets/svgs/telegram-plane-brands.svg';

const ForGraduatesSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const ForGraduatesWrapper = styled.div`
    width: 100%;
    background: white;
    border-radius: 0.6vw;
    position: relative;
    padding: 2vw 3vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: #e8e8e8;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 8vw 8vw;
    }

`

const ForGraduatesTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 4.25vw;
    font-size: 5vw;
    font-size: 5vw;
    min-width: 60%;
    line-height: 1;
    margin-bottom: 2vw;
    letter-spacing: -0.1vw;
    @media only screen and (max-width: 575px) {
        white-space: normal;
        font-size: 11vw;
        margin-bottom: 6.8vw;
        line-height: 0.9;
    }
`

const ForGraduatesText = styled.div`
    font-size: 1.4vw;
    line-height: 1.35;
    color: var(--granich-grey);
    margin-bottom: 1vw;
    max-width: 65%;
    margin-right: 1vw;
    span {
        display: block;
        font-weight: 500;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        max-width: 100%;
        margin-bottom: 3vw;
    }
`

const ForGraduatesButton = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 1.4vw;
    background: var(--granich-telegram-gradient);
    border-radius: 0.3vw;
    padding: 1.2vw 2vw;
    color: white;
    transition: transform 0.2s ease;
    box-shadow: .15vw .15vw .4vw rgba(0,0,0,0.25);
    margin-top: 1vw;
    white-space: nowrap;
    svg {
        width: 2vw;
        height: 2vw;
        fill: white;
        margin-left: 0.5vw;
    }
    :hover {
        font-size: 1.4vw;
        transform: scale(1.03);
        cursor: pointer;
        color: white;
    }

    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        border-radius: 1.3vw;
        padding: 3.6vw 3vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        :hover {
            font-size: 3.9vw;
        }
        margin-bottom: 0;
        width: 100%;
        margin-right: 0;
        justify-content: center;
        svg {
            width: 4vw;
            height: 4vw;
            fill: white;
            margin-left: 2vw;
        }

    }
`

const ForGraduatesInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }

`

const ForGraduates = () => {
    return (
        <ForGraduatesSection>
            <Container>
                <ForGraduatesWrapper>
                    <ForGraduatesTitle>
                        Ищете специалистов на проект?
                    </ForGraduatesTitle>
                    <ForGraduatesInfoWrapper>
                    <ForGraduatesText>

                        <span>Проведите бесплатную предпроектную подготовку с нашим координатором.</span>Наш координатор проектов поможет вам прояснить ценность проекта, его этапы, сроки, границы по бюджету и нюансы по рискам. Для вас это бесплатно. Такой проект будет гораздо легче передать на выполнение. После чего координатор сможет подобрать вам наиболее подходящих специалистов.

                    </ForGraduatesText>
                    <ForGraduatesButton rel="noopener noreferrer" href="https://t.me/granich_projects" target="_blank">Написать в Телеграм <TelegramIcon/></ForGraduatesButton>
                    </ForGraduatesInfoWrapper>
                    
                    
                </ForGraduatesWrapper>
            </Container>
            
        </ForGraduatesSection>
    )
}

export default ForGraduates
