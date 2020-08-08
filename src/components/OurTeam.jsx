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
    grid-column-gap: 1.7vw;
    justify-content: space-between;

`

const TeacherWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    padding: 1vw;
`

const TeacherHeader = styled.div`
    display: flex;
`
const TeacherImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 6.5vw;
    height: 6.5vw;
    border-radius: 100vw;
    overflow: hidden;
`
const TeacherSocials = styled.div`
    // display: flex;

`
const TeacherSocialIcons = styled.div`
    display: flex;
    justify-content: end;
`
const TeacherEmail = styled.div`
    font-size: 1vw;
    color: var(--granich-grey);
`
const TeacherInfo = styled.div`
    color: var(--granich-grey);
    font-size: 1.1vw;
    border-left: 0.1vw solid var(--granich-grey);
    padding-left: 2vw;
    margin-left: 2vw;
    span {
        font-weight: 600;
    }
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
                <div style={{width: '5em', height: '150px', background: 'black', fontSize: '2vw'}}>
                    <div style={{fontSize: '2em', color: 'white'}}>
                        dfdffd
                    </div>
                </div>
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
                    <TeacherEmail>{teacher.teacherEmail}</TeacherEmail>
                </TeacherSocials>

            </TeacherHeader>
            <TeacherInfo>
                    <span>{teacher.teacherName}</span>
                        {teacher.teacherDescription.map((descr, idx) => {
                            return (
                                <div key={idx}>{descr}</div>
                            )
                        })}
            </TeacherInfo>
        </TeacherWrapper>
    )
}

export default OurTeam
