import React from 'react'
import styled from 'styled-components';
import BlackArrowRight from '../assets/svgs/arrow-black-right.svg';

import { Container } from './style';

const MailingSection = styled.section`

`

const MailingWrapper = styled.div`
    width: 100%;
    background: var(--granich-red);
    border-radius: 12px;
    position: relative;
`

const MailingContainer = styled.div`
    padding: 30px 30px;
    display: flex;
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
    width: 60%;
    line-height: 1.26;
    color: white;
    span {
        font-style: italic;
        color: inherit;
        font-size: 30px;
        line-height: 0.5;
        font-family: EB Garamond;
    }


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
    // width: 100%;
    display: flex;
    align-items: center;

`

const MailingInput = styled.input`
    height: 45px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5) inset;
    padding: 10px 25px;
    // width: 78%;
    font-size: 20px;
    margin-right: 15px;

    
`

const MailingButton = styled.button`
    height: 50px;
    border: none;
    // width: 22%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;

    }
    svg {
        transition: all 0.2s ease;
        :hover {
            transform: scale(1.1);
        }
    }

`

const Mailing = () => {
    return (
        <MailingSection>
            <Container>
                <MailingWrapper>
                    <MailingContainer>
                        {/* <MailingTitle>Хотите быть с нами на связи?</MailingTitle> */}
                        <MailingText>
                            <span>Оставьте почту,</span> чтобы узнать о наборах на курсы и новом бесплатном контенте. Без спама.
                        </MailingText>
                        <MailingForm>
                                <MailingInput placeholder={'Электропочта'}/>
                                <MailingButton><BlackArrowRight/></MailingButton>
                                {/* <BlackArrowRight/> */}
                        </MailingForm>

                    </MailingContainer>
                    {/* <MailingBackground>

                    </MailingBackground> */}
                    
                </MailingWrapper>
            </Container>
        </MailingSection>
    )
}

export default Mailing
