import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../assets/svgs/granich-logo.svg';
import VisaIcon from '../assets/svgs/Visa.svg';
import MastercardIcon from '../assets/svgs/Mastercard.svg';
import RobokassaIcon from '../assets/svgs/Robokassa.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const BlackLogo = styled(props => <Logo {...props}/>)`
    width: 4.8vw;
    height: 3vw;
    @media only screen and (max-width: 575px) {
        width: 16vw;
        height: auto;
        height: 11vw;


    }
`

const Visa = styled(props => <VisaIcon {...props}/>)`
    width: 5.5vw;
    height: 3vw;
    @media only screen and (max-width: 575px) {
        width: 14vw;
        height: 7.9vw;
    }
`
const Mastercard = styled(props => <MastercardIcon {...props}/>)`
    width: 4.8vw;
    height: 3vw;
    @media only screen and (max-width: 575px) {
        width: 12.5vw;
        height: 7.9vw;
    }
`
const Robokassa = styled(props => <RobokassaIcon {...props}/>)`
    width: 5vw;
    height: 3.4vw;
    @media only screen and (max-width: 575px) {
        width: 14vw;
        height: 7.9vw;
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
    margin-right: 9.5vw;
    letter-spacing: -0.01vw;
    line-height: 1.4;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
    }

`

const FooterInfoYear = styled.div`
    font-size: 1.1vw;
    font-weight: 500;
    // line-height: 1.4;
    color: var(--granich-black);
    user-select: none;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }
`


const FooterInfoMail = styled.button`
    position: absolute;
    font-weight: 500;
    font-size: 1.16vw;
    color: var(--granich-black);
    margin-top: 0.2vw;
    display: block;
    border-bottom: solid 0.07vw var(--granich-light-grey);
    background: none;
    user-select: none;
    :hover {
        font-weight: 500;
        font-size: 1.16vw;
        cursor: pointer;
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -0.85vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;

        
        // border-left: 5px solid transparent;
        // border-right: 5px solid transparent;
        // border-bottom: 5px solid rgba(0,0,0,.72);

        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);

        //right
        // border-bottom: 5px solid transparent;
        // border-top: 5px solid transparent;
        // border-left: 5px solid rgba(0,0,0,.72);
    }

    &:after {
        content: 'Скопировать';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -2.8vw;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1;
        padding: 0.7vw 1vw;
        min-width: 5vw; 
        text-align: center;
        background: rgba(0,0,0,.95);
        background: var(--granich-black);
        border-radius: 3px;
    }



    &:active, :focus {
        outline: none;
        
        &:after {
            content: 'Скопировано :)';
            width: 6.5vw; 
            background: var(--granich-red);
        }
        &:before {
            border-top-color: var(--granich-red);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: solid 0.2vw var(--granich-black);
        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
        }
        &:active, :focus {        
            &:after {
                width: 35vw; 
            }
        }
    }
`
const FooterLink = styled(props => <Link {...props}/>)`
    line-height: 1.4;
    color: var(--granich-light-grey);
    font-size: 1.16vw;
    margin-right: 1.5vw;
    user-select: none;


    :last-of-type {
        margin-right: 0vw;
        span {
            letter-spacing: -0.01vw;
        }
    }
    span {

        color: inherit;
        font-size: inherit;
        border-bottom: 0.05vw solid var(--granich-light-grey);

        :hover {
            border-bottom: none;
            border-bottom: 0.05vw solid var(--granich-light-grey);
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
    line-height: 1.4;
    font-size: 0.8vw;
    letter-spacing: -0.01vw;
    color: var(--granich-light-grey);
    margin-right: 1.4vw;
    // user-select: none;
    @media only screen and (max-width: 575px) {
        font-size: 2.5vw;
        line-height: 1.3;
        margin-right: 0;
    }

`

const FooterPayment = styled.div`
    display: flex;
    margin-right: -0.3vw;
    margin-top: -0.25vw;
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
    margin-left: auto;
    @media only screen and (max-width: 575px) {
        margin-left: 0;
        align-items: center;

    }
`

const EmptyText = styled.div`
    opacity: 0;
    font-size: 0;
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
                        <EmptyText>sdds</EmptyText>
                            <FooterInfoYear>© {new Date().getFullYear()}</FooterInfoYear>
                            <CopyToClipboard text={'hello@granich.design'}>
                                <FooterInfoMail>hello@granich.design</FooterInfoMail>
                            </CopyToClipboard>

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
