import React from 'react'
import styled from 'styled-components';

import { Container } from './style';

const MailingSection = styled.section`

`

const MailingWrapper = styled.div`
    width: 610px;
    min-height: 275px;
    background: white;
    border-radius: 12px;
    position: relative;
`

const MailingContainer = styled.div`
    padding: 30px 35px 135px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MailingTitle = styled.div`
    width: 100%;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.26;

`
const MailingText = styled.div`
    font-size: 21px;
    font-weight: 400;
    width: 80%;
    line-height: 1.26;


`

const MailingBackground = styled.div`
    background: var(--granich-red);
    width: 100%;
    border-radius: 0 0 12px 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    #mailingContainer {
        padding-top: 20px;
        padding-bottom: 35px;
    }
`

const MailingForm = styled.form`
    width: 100%;
    display: flex;

`

const MailingInput = styled.input`
    height: 50px;
    border: none;
    padding: 15px 25px;
    width: 78%;
    font-size: 20px;

    
`

const MailingButton = styled.button`
    height: 50px;
    border: none;
    width: 22%;
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
                        <MailingContainer id="mailingContainer">
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
