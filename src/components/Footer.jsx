import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../assets/images/logo-black.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';

const FooterSection = styled.footer`
    margin-top: auto;   
    padding: 50px 0;
`

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const FooterLogo = styled.img`
    width: 63px;
    margin-right: 20px;
`

const FooterInfo = styled.div`
    margin-right: 60px;
`

const FooterInfoYear = styled.div`
    font-size: 16px;
    line-height: 1.2;
`

const FooterInfoMail = styled.a`
    font-size: 16px;
    text-decoration: underline;
`
const FooterLink = styled(props => <Link {...props}/>)`
    line-height: 1.5;
    font-size: 15px;
    margin-right: 48px;
`

const FooterCredentials = styled.div`
    margin-left: 25px;
    font-size: 11px;
    line-height: 1.2;
    width: 300px;
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
                    <FooterLogo src={logo} alt={`logo`}/>
                    <FooterInfo>
                        <FooterInfoYear>© {new Date().getFullYear()}</FooterInfoYear>
                        <FooterInfoMail>info@granich.ru</FooterInfoMail>
                    </FooterInfo>
                    <FooterLink to="/polz">Пользовательское соглашение</FooterLink>
                    <FooterLink to="/politica">Политика конфиденциальности</FooterLink>
                    <FooterCredentials>
                    ИП Гранич Вадим Владимирович <br/>
                    ОГРНИП 319784700098871 <br/>
                    ИНН 470320212730 <br/>

 
                    </FooterCredentials>
                    <FooterPayment>
                        <img src={visa} alt="visa"/>
                        <img src={mastercard} alt="mastercard"/>
                    </FooterPayment>
                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

export default Footer
