import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../assets/images/logo-black.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';

const FooterSection = styled.footer`
    margin-top: auto;   
    background: grey;
`

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const FooterLogo = styled.img`
    width: 5vw;
`

const FooterInfo = styled.div`

`

const FooterInfoYear = styled.div`

`

const FooterInfoMail = styled.a`

`
const FooterLink = styled(props => <Link {...props}/>)`

`

const FooterCredentials = styled.div`

`

const FooterPayment = styled.div`
    display: flex;
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
