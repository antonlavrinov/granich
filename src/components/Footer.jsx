import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../assets/images/logo-black.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import BlackLogo from '../assets/svgs/granich-logo.svg';

const FooterSection = styled.footer`
    margin-top: auto;   
    padding: 50px 0;
`

const FooterWrapper = styled.div`
    display: flex;
`

const LogoWrapper = styled(props => <Link to="/" {...props} />)`
  width: 65px;
  height: auto;
//   margin-left: 1px;
  fill: var(--granich-black);
  margin-right: 13px;

`

const FooterInfo = styled.div`
    margin-right: 30px;
    letter-spacing: -0.01em;

`

const FooterInfoYear = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--granich-black);
`


const FooterInfoMail = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: var(--granich-black);
    :hover {
        font-weight: 500;
        font-size: 16px;
    }
`
const FooterLink = styled(props => <Link {...props}/>)`
    width: 150px;
    line-height: 1.3;
    color: var(--granich-grey);
    font-size: 16px;
    margin-right: 18px;

    :last-of-type {
        margin-right: 12px;
        span {
            letter-spacing: -0.01em;
        }
    }
    span {

        color: inherit;
        font-size: inherit;
        :hover {
            border-bottom: 1px solid var(--granich-grey);
        }
    }
    :hover {
        font-size: 16px;
        color: var(--granich-grey);
    }

`

const FooterCredentials = styled.div`
    margin-left: 25px;
    line-height: 1.2;
    width: 300px;
    font-size: 11px;
    letter-spacing: -0.03em;
    color: var(--granich-grey);
`

const FooterPayment = styled.div`
    display: flex;
    img {
        width: 80px;
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
                        <FooterInfoMail href="mailto:info@granich.ru">info@granich.ru</FooterInfoMail>
                    </FooterInfo>
                    <FooterLink to="/public-offer"><span>Пользовательское соглашение</span></FooterLink>
                    <FooterLink to="/privacy"><span>Политика конфиденциальности</span></FooterLink>
                    <FooterCredentials>
                    ИП Гранич Вадим Владимирович <br/>
                    ОГРНИП 319784700098871 <br/>
                    ИНН 470320212730 <br/>

 
                    </FooterCredentials>
                    {/* <FooterPayment>
                        <img src={visa} alt="visa"/>
                        <img src={mastercard} alt="mastercard"/>
                    </FooterPayment> */}
                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

export default Footer
