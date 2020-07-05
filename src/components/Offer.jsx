import React from 'react'
import styled from 'styled-components';

import { Container } from './style';
import flags from '../assets/images/flags.png';
import background from '../assets/images/background.jpg';
import stick from '../assets/images/descr-stick.png';
import BackgroundClip from '../assets/svgs/background-clip-01.svg';

const FlagsIcon = styled.img`
    width: 2vw;
    margin-bottom: 0;


`

const OfferSection = styled.section`
    position: relative;
    width: 100%;
    padding: 15vw 0 9vw;
    min-height: 620px;
    max-height: 720px;


`

const OfferTitle = styled.h1`
    font-family: Inter;
    font-size: 700;
    font-size: 6.3vw;
    font-size: 5vw;
    font-size: 92px;
    color: white;
    line-height: 5.5vw;
    line-height: 0.9;
    letter-spacing: -.05em;
    width: 500px;
    width: 50vw;
    margin-bottom: 4vw;
`
const OfferDescr = styled.p`
    margin-left: 0.8vw;
    color: white;
    letter-spacing: 0.05vw;
    font-size: 2.5vw;
    font-size: 26px;
    line-height: 2vw;
    font-family: Cormorant Garamond;
    position: relative;
    span {
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        letter-spacing: inherit;
    }
`

const OfferStick = styled.img`
    width: 21vw;
    position: absolute;
    bottom: -1.7vw;
    left: 1.8vw;

    
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
                    Онлайн-курсы <FlagsIcon src={flags} alt={`course-flags`}/> <br/> с <span>осознанным подходом</span> <OfferStick src={stick} alt={'offer-stick'}/>
                </OfferDescr>
                

            </Container>
            <OfferSvgClip/>

            {/* <OfferBackgroundImage/> */}

        </OfferSection>
    )
}

export default Offer
