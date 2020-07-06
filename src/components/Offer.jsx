import React from 'react'
import styled from 'styled-components';

import { Container } from './style';
import flags from '../assets/images/flags.png';
import background from '../assets/images/background.jpg';
import stick from '../assets/images/descr-stick.png';
import BackgroundClip from '../assets/svgs/background-clip-01.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const FlagsIcon = styled.img`
    width: 28px;
    margin-bottom: 0;


`

const OfferSection = styled.section`
    position: relative;
    width: 100%;
    padding: 16em 0 12em;
    // padding: 15% 0 5%;
    // min-height: 620px;
    // min-height: 45em;
    // max-height: 720px;
    // max-height: 60em;


`

const OfferTitle = styled.h1`
    font-family: Inter;
    font-weight: 700;
    font-size: 88px;
    color: white;
    line-height: 0.88;
    letter-spacing: -.06em;
    width: 500px;
    width: 70%;
    margin-bottom: 4.5%;
    margin-left: -0.17em;
`
const OfferDescr = styled.p`
    margin-left: -0.05em;
    color: white;
    letter-spacing: .015em;
    font-size: 33.5px;
    line-height: 0.9;
    font-family: Cormorant Garamond;
    position: relative;
    span {
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        letter-spacing: inherit;
        :hover {
            cursor: pointer;
        }
    }
`

const OfferStick = styled.img`
    width: 280px;
    position: absolute;
    bottom: -1.5em;
    left: 1.8em;

    
`

const OfferSvgClip = styled(props => <BackgroundClip {...props}/>)`
    position: absolute;
    bottom: 0;
    z-index: 0;
`

const Offer = () => {
    return (
        <OfferSection id="offer" style={{
            background: `url('${background}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top',
            }}>

            <Container>
                <OfferTitle>Онлайн-школа Granich</OfferTitle>
                <OfferDescr>
                    Онлайн-курсы <FlagsIcon src={flags} alt={`course-flags`}/> <br/> с <span onClick={() => scrollTo('#manifest')}>осознанным подходом</span> <OfferStick src={stick} alt={'offer-stick'}/>
                </OfferDescr>
                

            </Container>
            <OfferSvgClip/>

            {/* <OfferBackgroundImage/> */}

        </OfferSection>
    )
}

export default Offer
