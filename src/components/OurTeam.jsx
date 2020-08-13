import React, {useState} from 'react'
import { Container } from './style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import BehanceIcon from '../assets/svgs/granich-main-team/behance.svg';
import PinterestIcon from '../assets/svgs/granich-main-team/pinterest.svg';
import InstagramIcon from '../assets/svgs/granich-main-team/instagram.svg';
import VKIcon from '../assets/svgs/granich-main-team/vk.svg';
import TelegramIcon from '../assets/svgs/granich-main-team/telegram.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {CSSTransition} from 'react-transition-group';
import CopyIcon from '../assets/svgs/copy-icon.svg';

const Copy = styled(props => <CopyIcon {...props}/>)`
    width: 0.8vw;
    width: 1.1vw;
    color: var(--granich-light-grey);
    display: inline-block;
    position: absolute;
    left: -1vw;
    left: -1.4vw;
    top: 0;
    fill: var(--granich-light-grey);
    opacity: 0.6;
    @media only screen and (max-width: 575px) {
        width: 3vw;
        left: -3.8vw;
    }
`

const VK = styled(props => <VKIcon {...props}/>)`
    width: 2.1vw;
    height: 2.1vw;
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
`
const Pinterest = styled(props => <PinterestIcon {...props}/>)`
    width: 2vw;
    height: 2vw;

    
    @media only screen and (max-width: 575px) {
        width: 7vw;
        height: 7vw;
        margin-bottom: -0.1vw;
    }
`
const Behance = styled(props => <BehanceIcon {...props}/>)`
    width: 2.1vw;
    height: 2.1vw;
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
`
const Instagram = styled(props => <InstagramIcon {...props}/>)`
    width: 2.1vw;
    height: 2.1vw;
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
`
const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 2vw;
    height: 2vw;
    @media only screen and (max-width: 575px) {
        width: 7vw;
        height: 7vw;
        margin-bottom: -0.1vw;
    }
`


const OurTeamSection = styled.section`

`


const OurTeamWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.6vw;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 4vw;
    }

`

const TeacherWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    padding: 1.7vw 1.5vw 2vw 2.8vw; 
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        padding: 6.5vw 8vw 8vw 10vw; 
    }
`

const TeacherHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 3vw;
    }
`
const TeacherImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 5.1vw;
    height: 5.1vw;
    border-radius: 100vw;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        width: 19.5vw;
        height: 19.5vw;
    }
`
const TeacherSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.8vw;
    position: relative;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
    }


`
const TeacherSocialIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.6vw;
    margin-bottom: 0.1vw;
    svg {
        transition: all 0.2s ease;
        :hover {
            transform: scale(1.1);
        }
    }
    @media only screen and (max-width: 575px) {
        margin-top: 2vw;
        margin-bottom: 1.5vw;
    }

`
const TeacherEmail = styled.button`
    font-size: 0.75vw;
    font-weight: 500;
    color: var(--granich-grey);
    padding-bottom: 0.2vw;
    position: absolute;
    top: 3.3vw;
    right: -0.15vw;
    // transform: translateY(-50%);
    margin-right: 0.4vw;
    background: none;
    border-bottom: 0.1vw dotted var(--granich-light-grey);
    :hover {
        font-size: 0.75vw;
        font-weight: 500;
        color: var(--granich-grey);
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
        font-size: 2.6vw;
        margin-right: 1vw;
        padding-bottom: 0.2vw;
        border-bottom: 0.3vw dotted var(--granich-light-grey);
        top: 11vw;
        :hover {
            font-size: 2.6vw;
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
const TeacherInfo = styled.div`

    border-left: 0.1vw solid #D7D7D7;
    padding-left: 1.4vw;
    margin-left: -0.4vw;
    min-height: 5.8vw;
    @media only screen and (max-width: 575px) {
        border-left: 0.5vw solid #D7D7D7;
        padding-left: 4.5vw;
        margin-left: -0.5vw;
        min-height: 21vw;
    }
`
const TeacherInfoName = styled.div`
    font-weight: 600;
    font-size: 1.16vw;

    @media only screen and (max-width: 575px) {
        font-size: 4.4vw;
        line-height: 1.3;
    }
`

const TeacherInfoText = styled.div`
    margin-top: 0.2vw;
    color: var(--granich-grey);
    font-size: 1.16vw;
    font-weight: 500;
    line-height: 1.2;
    @media only screen and (max-width: 575px) {
        font-size: 4.3vw;
        line-height: 1.3;
        margin-top: 0;
    }
`

const SocialLink = styled.a`

`

const TeacherMailCopyMessage = styled.div`
    position: absolute:
    background: var(--garnich-red);
    top: -25vw;
    left: 0;
    // display: none;
`
const TeacherEmailText = styled.div`
    position: absolute;
`




const OurTeam = ({data}) => {
    return (
        <OurTeamSection>
            <Container>
                <OurTeamWrapper>
                    {data.edges.map((teacher, idx) => {
                        return (
                            <TeacherBlock key={idx} teacher={teacher.node}/>
                            
                        )
                    })}
                </OurTeamWrapper>
            </Container>
        </OurTeamSection>
    )
}

const TeacherBlock = ({teacher}) => {
    const [mailCopy, setMailCopy] = useState(false)
    const [mailCopyText, setMailCopyText] = useState('Копировать')
    const text = <span>dsfdsffds</span>
    return (
        <TeacherWrapper>
            <TeacherHeader>
                <TeacherImage fluid={teacher.teacherImage.fluid}></TeacherImage>
                <TeacherSocials>
                    <TeacherSocialIcons>
                        {teacher.teacherSocialsOrder.map((social, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    {social.toLowerCase() === 'vk' ? (
                                        <SocialLink  href={teacher.teacherSocialVK} target="_blank"><VK/></SocialLink>
                                    ) : social.toLowerCase() === 'behance' ? (
                                        <SocialLink href={teacher.teacherSocialBehance} target="_blank"><Behance/></SocialLink>
                                    ) : social.toLowerCase() === 'telegram' ? (
                                        <SocialLink  href={teacher.teacherSocialTelegram} target="_blank"><Telegram/></SocialLink>
                                    ) : social.toLowerCase() === 'pinterest' ? (
                                        <SocialLink  href={teacher.teacherSocialPinterest} target="_blank"><Pinterest/></SocialLink>
                                    ) : social.toLowerCase() === 'instagram' ? (
                                        <SocialLink  href={teacher.teacherSocialInstagram} target="_blank"><Instagram/></SocialLink>
                                    ) : null}
                                </React.Fragment>
                            )
                        })}
                    </TeacherSocialIcons>
                    <CopyToClipboard text={teacher.teacherEmail}> 
                        <TeacherEmail>
                            <Copy/>{teacher.teacherEmail}
                        </TeacherEmail>
                    </CopyToClipboard>
                </TeacherSocials>

            </TeacherHeader>
            <TeacherInfo>
                    <TeacherInfoName>{teacher.teacherName}</TeacherInfoName>
                    {teacher.teacherDescription.map((descr, idx) => {
                        return (
                            <TeacherInfoText key={idx}>{descr}</TeacherInfoText>
                        )
                    })}
            </TeacherInfo>
        </TeacherWrapper>
    )
}

export default OurTeam
