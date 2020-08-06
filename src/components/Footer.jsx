import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BlackLogo from '../assets/svgs/granich-logo.svg';
import VisaIcon from '../assets/svgs/Visa.svg';
import MastercardIcon from '../assets/svgs/Mastercard.svg';
import RobokasaIcon from '../assets/svgs/Robokassa.svg';



const FooterSection = styled.footer`
    margin-top: auto;   
    padding: 2.9vw 0 3.6vw;
`

const FooterWrapper = styled.div`
    display: flex;
`

const LogoWrapper = styled(props => <Link to="/" {...props} />)`
  height: auto;
  fill: var(--granich-black);
  margin-right: 0.7vw;

`

const FooterInfo = styled.div`
    margin-right: 1.5vw;
    letter-spacing: -0.01em;

`

const FooterInfoYear = styled.div`
    font-size: 1.1vw;
    font-weight: 500;
    line-height: 1.4;
    color: var(--granich-black);
`


const FooterInfoMail = styled.a`
    font-weight: 500;
    font-size: 1.16vw;
    color: var(--granich-black);
    padding-bottom: 0.1vw;

    line-height: 1.2;
    :hover {
        font-weight: 500;
        font-size: 1.16vw;
        border-bottom: solid 0.07vw var(--granich-black);
    }
`
const FooterLink = styled(props => <Link {...props}/>)`
    line-height: 1.3;
    color: var(--granich-light-grey);
    font-size: 1.16vw;
    margin-right: 2vw;


    :last-of-type {
        margin-right: 1.4vw;
        span {
            letter-spacing: -0.01em;
        }
    }
    span {

        color: inherit;
        font-size: inherit;

        :hover {
            border-bottom: none;
            border-bottom: 0.1vw solid var(--granich-light-grey);
        }
    }
    :hover {
        font-size: 1.16vw;
        color: var(--granich-light-grey);
    }

`

const FooterCredentials = styled.div`
    line-height: 1.2;
    font-size: 0.8vw;
    letter-spacing: -0.01vw;
    color: var(--granich-light-grey);

`

const FooterPayment = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: -0.3vw;
    svg {
        margin-right: 0.8vw;
        :last-child {
            margin-right: 0;
        }
    }
`


const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterWrapper>
                    <LogoWrapper>
                        <BlackLogo/>
                    </LogoWrapper>
                    
                    <FooterInfo>
                        <FooterInfoYear>© {new Date().getFullYear()}</FooterInfoYear>
                        <FooterInfoMail href="mailto:hello@granich.design">hello@granich.design</FooterInfoMail>
                    </FooterInfo>
                    <FooterLink to="/public-offer"><span>Пользовательское <br/>соглашение</span></FooterLink>
                    <FooterLink to="/privacy"><span>Политика <br/>конфиденциальности</span></FooterLink>
                    <FooterCredentials>
                    ИП Гранич Вадим Владимирович <br/>
                    ОГРНИП 319784700098871 <br/>
                    ИНН 470320212730 <br/>

 
                    </FooterCredentials>
                    <FooterPayment>
                        <RobokasaIcon/>
                        <VisaIcon/>
                        <MastercardIcon/>
                    </FooterPayment>
                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

export default Footer
