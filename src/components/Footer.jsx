import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../assets/svgs/granich-logo.svg';
import VisaIcon from '../assets/svgs/Visa.svg';
import MastercardIcon from '../assets/svgs/Mastercard.svg';
import RobokassaIcon from '../assets/svgs/Robokassa.svg';

const BlackLogo = styled(props => <Logo {...props}/>)`
    width: 4.8vw;
    @media only screen and (max-width: 575px) {
        width: 15vw;

    }
`

const Visa = styled(props => <VisaIcon {...props}/>)`
    width: 5.5vw;
    @media only screen and (max-width: 575px) {
        width: 14vw;
    }
`
const Mastercard = styled(props => <MastercardIcon {...props}/>)`
    width: 4.8vw;
    @media only screen and (max-width: 575px) {
        width: 12.5vw;
    }
`
const Robokassa = styled(props => <RobokassaIcon {...props}/>)`
    width: 5vw;
    @media only screen and (max-width: 575px) {
        width: 14vw;
    }
`

const FooterSection = styled.footer`
    margin-top: auto;   
    padding: 2.9vw 0 3.6vw;
    @media only screen and (max-width: 575px) {
        padding: 17.3vw 0 12vw;
    }
`

const FooterWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        flex-direction: column;

    }
`

const LogoWrapper = styled(props => <Link to="/" {...props} />)`
  height: auto;
  fill: var(--granich-black);
  margin-right: 0.7vw;
  @media only screen and (max-width: 575px) {
    margin-right: 3.5vw;
  }

`

const FooterInfo = styled.div`
    margin-right: 1.5vw;
    letter-spacing: -0.01vw;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
    }

`

const FooterInfoYear = styled.div`
    font-size: 1.1vw;
    font-weight: 500;
    line-height: 1.4;
    color: var(--granich-black);
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }
`


const FooterInfoMail = styled.a`
    font-weight: 500;
    font-size: 1.16vw;
    color: var(--granich-black);
    padding-bottom: 0.1vw;
    line-height: 1.2;
    display: block;
    :hover {
        font-weight: 500;
        font-size: 1.16vw;
        border-bottom: solid 0.07vw var(--granich-black);
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: solid 0.2vw var(--granich-black);
        }
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
            letter-spacing: -0.01vw;
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
    @media only screen and (max-width: 575px) {
        font-size: 3.85vw;
        margin-right: 5.5vw;
        :last-of-type {
            margin-right: 0;
        }
        span {
            :hover {
                border-bottom: 0.2vw solid var(--granich-light-grey);
            }
        }
        :hover {
            font-size: 3.85vw;
        }
    }

`

const FooterCredentials = styled.div`
    line-height: 1.2;
    font-size: 0.8vw;
    letter-spacing: -0.01vw;
    color: var(--granich-light-grey);
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
    }

`

const FooterPayment = styled.div`
    display: flex;
    margin-right: -0.3vw;
    svg {
        margin-right: 0.8vw;
        :last-child {
            margin-right: 0;
        }
    }
    @media only screen and (max-width: 575px) {
        margin-right: 0vw;
        margin-left: auto;
        svg {
            margin-right: 1.6vw;
    }
`

const FooterLogoAndInfo = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5.5vw;
    }
`

const FooterLinks = styled.div`
    display: flex;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5.5vw;
    }
`
const FooterCredentialsAndPayment = styled.div`
    display: flex;
    // margin-left: auto;
    @media only screen and (max-width: 575px) {
        margin-left: 0;
        align-items: center;

    }
`


const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterWrapper>
                    <FooterLogoAndInfo>
                        <LogoWrapper>
                            <BlackLogo/>
                        </LogoWrapper>
                        
                        <FooterInfo>
                            <FooterInfoYear>© {new Date().getFullYear()}</FooterInfoYear>
                            <FooterInfoMail href="mailto:hello@granich.design">hello@granich.design</FooterInfoMail>
                        </FooterInfo>
                    </FooterLogoAndInfo>
                    <FooterLinks>
                        <FooterLink to="/public-offer"><span>Пользовательское <br/>соглашение</span></FooterLink>
                        <FooterLink to="/privacy"><span>Политика <br/>конфиденциальности</span></FooterLink>
                    </FooterLinks>
                    <FooterCredentialsAndPayment>
                        <FooterCredentials>
                        ИП Гранич Вадим Владимирович <br/>
                        ОГРНИП 319784700098871 <br/>
                        ИНН 470320212730 <br/>
                        </FooterCredentials>
                        <FooterPayment>
                            <Robokassa/>
                            <Visa/>
                            <Mastercard/>
                        </FooterPayment>
                    </FooterCredentialsAndPayment>

                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

export default Footer
