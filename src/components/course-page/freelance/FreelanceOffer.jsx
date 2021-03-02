import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import FreelanceBackgroundClip from '../../../assets/svgs/freelance/freelance-background-offer-clip.svg';
import FreelancePresentationLabel from './FreelancePresentationLabel';
import ArrowDown from '../../../assets/svgs/course-arrow-down-27.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import FreelanceOfferLogoIcon from '../../../assets/svgs/freelance/freelance-offer-logo.svg';


const FreelanceOfferLogo = styled(props => <FreelanceOfferLogoIcon {...props} />)`
    width: 12vw;
    min-width: 12vw;
    margin-right: 1.6vw;
    @media only screen and (max-width: 575px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 5vw;
    }
`

const FreelanceOfferSection = styled.section`

`
const FreelanceOfferWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    justify-content: space-between;
    padding: 5vw 0.5vw 6vw 2.5vw;
    border-radius: 0.6vw;
    
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 8vw 6vw 6vw 6vw;

    }
`

const FreelanceOfferLabelWrapper = styled.div`
    padding-left: 1vw;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const FreelanceOfferTitle = styled.h1`
    font-size: 5.9vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 400;
    margin: 0;
    margin-left: 0.3vw;
    letter-spacing: -0.15vw;
    margin-bottom: 5vw;
    align-self: start;
    span {
        font-style: normal;
        font-weight: 800;
        font-size: 4.25vw;
        margin-top: -0.4vw;
        display: block;
        letter-spacing: -0.01vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 10vw;
        line-height: 0.9;
        margin-bottom: 10vw;
        span {
            font-size: 8.5vw;
            line-height: 1;
        }
    }

`

const FreelanceOfferSvgClip = styled(props => <FreelanceBackgroundClip {...props} />)`
    position: relative;
    left: 0;
    display: block;
    margin-top: -6vw;
    width: 100%;
    z-index: 0;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    display: block;
`



const FreelanceOfferButton = styled.button`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: 0.7vw;
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: .25vw .25vw .4vw rgba(0,0,0,0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-bottom: 1vw;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 10vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);
    :hover {
        font-size: 5.5vw;
    }
    svg {
        width: 5vw;
        height: 5vw;
        margin-left: 0;
        margin-right: 1vw;
    }
  }

`

const FreelanceOffer = () => {
    return (
        <>
            <FreelanceOfferSection>
                <Container>
                    <FreelanceOfferWrapper>
                        <FreelanceOfferLabelWrapper>
                            <FreelancePresentationLabel logo={(<FreelanceOfferLogo />)} />
                        </FreelanceOfferLabelWrapper>
                        <FreelanceOfferTitle>
                            Ваше творчество станет <span>коммерчески востребованным</span>
                        </FreelanceOfferTitle>
                        <FreelanceOfferButton onClick={() => scrollTo('#participation-section')}>
                            <ArrowDown />Участвовать
                        </FreelanceOfferButton>
                    </FreelanceOfferWrapper>
                    <FreelanceOfferSvgClip />
                </Container>

            </FreelanceOfferSection>

        </>

    )
}

export default FreelanceOffer