import React from 'react'
import styled from 'styled-components';

import { Container } from './style';

const MailingSection = styled.section`

`

const MailingWrapper = styled.div`
    width: 45vw;
    height: 20vw;
    background: white;
    border-radius: 0.8vw;
    position: relative;
`

const MailingContainer = styled.div`
    padding: 2vw 2.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MailingTitle = styled.div`
    width: 100%;
    font-size: 1.5vw;
    font-weight: 600;
    letter-spacing: 0vw;
    line-height: 2vw;

`
const MailingText = styled.div`
    font-size: 1.5vw;
    font-weight: 400;
    letter-spacing: 0vw;
    width: 30vw;
    line-height: 2vw;


`

const MailingBackground = styled.div`
    background: var(--granich-red);
    width: 100%;
    height: 8vw;
    border-radius: 0 0 0.8vw 0.8vw;
    position: absolute;
    bottom: 0;
    left: 0;
`

const MailingForm = styled.form`
    height: 3vw;
    width: 100%;

`

const MailingInput = styled.input`
    height: 3vw;
    border: none;
    padding: 1vw;
    width: 80%;
    
`

const MailingButton = styled.button`
    height: 3vw;
    border: none;
    width: 20%;
    background: var(--granich-black);
    :hover {
        cursor: pointer;

    }

`

const Mailing = () => {
    return (
        <MailingSection>
            <Container>
                <MailingWrapper>
                    <MailingContainer>
                        <MailingTitle>Хотите быть с нами на связи?</MailingTitle>
                        <MailingText>
                            Оставьте почту, чтобы узнать о наборах
                            на курсы и новом бесплатном контенте.
                            Без спама.
                        </MailingText>

                    </MailingContainer>
                    <MailingBackground>
                        <MailingContainer>
                            <MailingForm>
                                <MailingInput placeholder={'Электропочта'}/>
                                <MailingButton>стрелка</MailingButton>
                            </MailingForm>
                        </MailingContainer>
                    </MailingBackground>
                    
                </MailingWrapper>
            </Container>
        </MailingSection>
    )
}

export default Mailing
