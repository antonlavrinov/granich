import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import commitmentVideo from '../../assets/images/graph-design/commitment/ezgif.com-gif-to-mp4.mp4';

const CommitmentSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const CommitmentWrapper = styled.div`
    display: flex;
    background: white;
    padding: 3.3vw 3.3vw;
    border-radius: 0.6vw;
    video {
        min-width: 36.3vw;
        width: 36.3vw;
        margin-right: 3vw;
        height: 19vw;
        border-radius: 0.5vw;
    }
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 6vw 6vw 7vw;
        border-radius: 3vw;
        video {
            min-width: 100%;
            width: 100%;
            margin-right: 3vw;
            height: 40.8vw;
            border-radius: 3vw;
            margin-bottom: 5vw;
        }
    }
`

// const CommitmentImage = styled.img`
//     margin-right: 3vw;
//     min-width: 35.25vw;
//     width: 35.25vw;
// `

const CommitmentInfo = styled.div`

`

const CommitmentText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.45;
    margin-bottom: 1.35vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        margin-bottom: 3vw;
    }
`

const CommitmentNote = styled.div`
    color: var(--granich-grey);
    font-size: 0.9vw;
    line-height: 1.25;
    padding-left: 1.7vw;
    border-left: 2px solid var(--granich-red);
    letter-spacing: -0.01vw;
    @media only screen and (max-width: 575px) {
        border-left: 2px solid var(--granich-red);
        padding-left: 4vw;
        font-size: 2.7vw;
        line-height: 1.45;
    }
`


const CommitmentTitle = styled.div`
    font-size: 2.3vw;
    line-height: 1;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1.7vw;
    position: relative;
    width: 25vw;
    :after {
        content: '';
        background: var(--granich-red);
        position: absolute;
        top: 1vw;
        right: -5vw;
        width: 0.68vw;
        height: 0.68vw;
        border-radius: 100vw;
        transform: translateX(-50%);

    }
    @media only screen and (max-width: 575px) {
        font-size: 7.4vw;
        margin-bottom: 3.5vw;
        width: 100%;
        :after {
            top: 1vw;
            right: -2.5vw;
            width: 1.5vw;
            height: 1.5vw;   
        }
    }

`




const CourseCommitment = () => {



    return (
        <CommitmentSection>
            <Container>
                <CommitmentWrapper>
                    {/* <CommitmentImage src={commitmentGIF}/> */}
                    <video muted loop autoPlay>
                        <source src={commitmentVideo} type="video/mp4" />
                    </video>
                    <CommitmentInfo>
                        <CommitmentTitle>С правильным настроем можно с нуля!</CommitmentTitle>
                        <CommitmentText>Да, у меня интенсивный курс. Он требует осознанных усилий и времени. Однако, участвовать в нем могут даже те, кто никогда с графическим дизайном не сталкивался. Но в таком случае лучше возьмите отпуск.</CommitmentText>
                        <CommitmentNote>
                            Примерно с таким настроем нужно будет делать ДЗ. <br/>
                            Это интенсивно-суровый курс.<br/>
                            P.S. Сцена из фильма Одержимость. Моя философия. 
                        </CommitmentNote>
                    </CommitmentInfo>
                </CommitmentWrapper>
            </Container>
        </CommitmentSection>
    )
}

export default CourseCommitment
