import React from 'react'
import { Container } from './style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import BehanceIcon from '../assets/svgs/granich-main-team/behance.svg';
import PinterestIcon from '../assets/svgs/granich-main-team/pinterest.svg';
import InstagramIcon from '../assets/svgs/granich-main-team/instagram.svg';
import VKIcon from '../assets/svgs/granich-main-team/vk.svg';
import TelegramIcon from '../assets/svgs/granich-main-team/telegram.svg';




const OurTeamSection = styled.section`
    margin-bottom: 50px;
`


const OurTeamWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.6vw;
    justify-content: space-between;

`

const TeacherWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    padding: 1.7vw 1.5vw 2vw 2.8vw; 
`

const TeacherHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2vw;
`
const TeacherImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 4.8vw;
    height: 4.8vw;
    border-radius: 100vw;
    overflow: hidden;
`
const TeacherSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.8vw;


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

`
const TeacherEmail = styled.a`
    font-size: 0.75vw;
    font-weight: 500;
    color: var(--granich-grey);
    padding-bottom: 0.2vw;
    margin-right: 0.4vw;
    border-bottom: 0.1vw dotted var(--granich-light-grey);
    :hover {
        font-size: 0.75vw;
        font-weight: 500;
        color: var(--granich-grey);
        cursor: pointer;
    }
`
const TeacherInfo = styled.div`

    border-left: 0.1vw solid #D7D7D7;
    padding-left: 1.4vw;
    margin-left: -0.4vw;
    min-height: 5.8vw;
    span {
        font-weight: 600;
        font-size: 1.16vw;

    }
`
const TeacherInfoText = styled.div`
    margin-top: 0.2vw;
    color: var(--granich-grey);
    font-size: 1.16vw;
    font-weight: 500;
    line-height: 1.2;
`

const SocialLink = styled.a`

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
                                        <SocialLink  href={teacher.teacherSocialVK} target="_blank"><VKIcon/></SocialLink>
                                    ) : social.toLowerCase() === 'behance' ? (
                                        <SocialLink href={teacher.teacherSocialBehance} target="_blank"><BehanceIcon/></SocialLink>
                                    ) : social.toLowerCase() === 'telegram' ? (
                                        <SocialLink  href={teacher.teacherSocialTelegram} target="_blank"><TelegramIcon/></SocialLink>
                                    ) : social.toLowerCase() === 'pinterest' ? (
                                        <SocialLink  href={teacher.teacherSocialPinterest} target="_blank"><PinterestIcon/></SocialLink>
                                    ) : social.toLowerCase() === 'instagram' ? (
                                        <SocialLink  href={teacher.teacherSocialInstagram} target="_blank"><InstagramIcon/></SocialLink>
                                    ) : null}
                                </React.Fragment>
                            )
                        })}
                    </TeacherSocialIcons>
                    <TeacherEmail href={`mailto:${teacher.teacherEmail}`}>{teacher.teacherEmail}</TeacherEmail>
                </TeacherSocials>

            </TeacherHeader>
            <TeacherInfo>
                    <span>{teacher.teacherName}</span>
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
