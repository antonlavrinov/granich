import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import commitmentGIF from '../../assets/images/graph-design/commitment/commitment-gif.gif';

const CommitmentSection = styled.section`
    margin-bottom: 5vw;
`
const CommitmentWrapper = styled.div`
    display: flex;
    background: white;
    padding: 3.3vw 3.3vw;
    border-radius: 0.5vw;
    
    svg {
        width: 13vw;
        height: 2.2vw;
        margin: 0 auto;
        margin-top: 2vw;
    }
`

const CommitmentImage = styled.img`
    margin-right: 3vw;
    min-width: 35.25vw;
    width: 35.25vw;
`

const CommitmentInfo = styled.div`

`

const CommitmentText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.35;
    margin-bottom: 1.35vw;
`

const CommitmentNote = styled.div`
    color: var(--granich-grey);
    font-size: 0.9vw;
    line-height: 1.25;
    padding-left: 1.7vw;
    border-left: 2px solid var(--granich-red);
    // width: 24vw;
    letter-spacing: -0.01vw;
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
        font-size: 1vw;

    }

`




const Commitment = () => {



    return (
        <CommitmentSection>
            <Container>
                <CommitmentWrapper>
                    <CommitmentImage src={commitmentGIF}/>
                    <CommitmentInfo>
                        <CommitmentTitle>С правильным настроем можно с нуля!</CommitmentTitle>
                        <CommitmentText>Да, у меня интенсивный курс. Он требует осознанных усилий и времени. Однако, участвовать в нем могут даже те, кто никогда с графическтм дизайном не сталкивался. Но в таком случае лучше возьмите отпуск.</CommitmentText>
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

export default Commitment
