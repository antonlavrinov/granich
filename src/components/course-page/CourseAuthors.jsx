import React from 'react'
import {TeacherBlock} from '../OurTeam';
import { Container } from '../style';
import styled from 'styled-components';

const AuthorsSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const AuthorsWrapper = styled.section`
 padding: 4.7vw 5vw 4.7vw 4.7vw;
 border-radius: 0.6vw;
 background: white;
 @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
 }
`

const AuthorsTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 2.3vw;

    @media only screen and (max-width: 575px) {
        font-size: 11.3vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 2vw;
    }
`

const AuthorsTeachers = styled.div`
    display: flex;
    margin-bottom: 2.5vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        margin-bottom: 0vw;
    }

`

const TeacherWrapper = styled.div`

    position: relative;
    :first-child {
        margin-right: 5vw;
        :after {
            content: '+';
            position: absolute;
            color: var(--granich-black);
            font-weight: 600;
            top: 50%;
            transform: translateY(-50%);
            right: -4.2vw;
            font-size: 5vw;

        }
    }
    @media only screen and (max-width: 575px) {

        :first-child {
            margin-right: 0;
            margin-bottom: 3vw;
            :after {
                right: auto;
                transform: translate(-50%, 0);
                left: 50%;
                bottom: -8vw;
                top: auto;
                font-size: 13vw;
    
            }
    }
    `
const AuthorsText = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`
const AuthorsQuote = styled.div`
    font-size: 1.55vw;
    color: var(--granich-black);
    padding-left: 1.5vw;
    border-left: 2.5px solid var(--granich-red);
    margin-right: 1vw;
    font-weight: 500;
    min-width: 32vw;
    line-height: 1.45;
    @media only screen and (max-width: 575px) {
        font-size: 5.1vw;
        letter-spacing: -0.1vw;
        padding-left: 3.5vw;
        margin-right: 0;
        margin-bottom: 3vw;
    }
`
const AuthorsDescr = styled.div`
    font-size: 1.15vw;
    color: var(--granich-grey);
    padding-top: 0.5vw;
    line-height: 1.45;
    a {
        border-bottom: 1px solid var(--granich-light-grey);
        :hover {
            border-color: var(--granich-grey);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
    }
`

const CourseAuthors = ({data}) => {
    return (
        <AuthorsSection>
            <Container>
                <AuthorsWrapper>
                    <AuthorsTitle>Соавторы</AuthorsTitle>
                    <AuthorsTeachers>
                        {data.edges.map((teacher) => {
                            return (
                                <TeacherWrapper key={teacher.node.id}>
                                    <TeacherBlock masterClass teacher={teacher.node}/>
                                </TeacherWrapper>

                            )
                        })}
                    </AuthorsTeachers>
                    <AuthorsText>
                        <AuthorsQuote>
                            Мастер-класс создан соавторами. Исследование, запись видеолекции и инструкции — Елизавета Черникова. Дизайн-система, рекомендации и забота — Вадим Гранич.
                        </AuthorsQuote>
                        <AuthorsDescr>Я отыскала всё самое интересное и полезное про графдизайн VHS-кассет: почему он появился, какие графсистемы с ним связаны, кто использует его в своей айдентике и как самостоятельно создавать VHS-макеты. Вдобавок, в <a href="https://www.pinterest.ru/vadim_granich/vhs/" rel="noopener noreferrer">Энциклопедии графдизайна</a> на Пинтересте есть примеры работ в графсистеме VHS</AuthorsDescr>
                    </AuthorsText>

                    
                </AuthorsWrapper>
            </Container>
            
        </AuthorsSection>
    )
}

export default CourseAuthors
