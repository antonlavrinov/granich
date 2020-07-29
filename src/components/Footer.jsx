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
    // width: 150px;
    line-height: 1.3;
    color: var(--granich-grey);
    font-size: 16px;
    margin-right: 22px;

    :last-of-type {
        margin-right: 22px;
        span {
            letter-spacing: -0.01em;
        }
    }
    span {

        color: inherit;
        font-size: inherit;
        :hover {
            border-bottom: 1px dashed var(--granich-grey);
        }
    }
    :hover {
        font-size: 16px;
        color: var(--granich-grey);
    }

`

const FooterCredentials = styled.div`
    // display: inline-block;
    // margin-left: 25px;
    line-height: 1.2;
    // width: 300px;
    font-size: 11px;
    letter-spacing: -0.03em;
    color: var(--granich-grey);
    // width: 180px;
    // margin-right: 38px;
`

const FooterPayment = styled.div`
    display: flex;
    margin-left: auto;
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
                    <FooterLink to="/public-offer"><span>Пользовательское <br/>соглашение</span></FooterLink>
                    <FooterLink to="/privacy"><span>Политика <br/>конфиденциальности</span></FooterLink>
                    <FooterCredentials>
                    ИП Гранич Вадим Владимирович <br/>
                    ОГРНИП 319784700098871 <br/>
                    ИНН 470320212730 <br/>

 
                    </FooterCredentials>
                    <FooterPayment>
                        <RobokasaIcon style={{marginRight: '12px'}}/>
                        <VisaIcon style={{marginRight: '12px'}}/>
                        <MastercardIcon/>
                    </FooterPayment>
                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

export default Footer
