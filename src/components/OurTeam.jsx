import React, {useState} from 'react'
import { Container } from './style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import CopyIcon from '../assets/svgs/copy-icon.svg';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
// import ArrowOut from '../assets/svgs/header-arrow-icon-out.svg';
import { INLINES } from '@contentful/rich-text-types'


const SocialIcon = styled(props => <Img {...props}/>)`
    width: 2.1vw;
    height: 2.1vw;
    transition: transform 0.2s ease;
    :hover {
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        width: 7.5vw;
        height: 7.5vw;
    }
    ${props => props.round && `
        width: 2vw;
        height: 2vw;
        @media only screen and (max-width: 575px) {
            width: 7vw;
            height: 7vw;
        }
    `}
`

// const Copy = styled(props => <CopyIcon {...props}/>)`
//     width: 0.8vw;
//     width: 1.1vw;
//     color: var(--granich-light-grey);
//     display: inline-block;
//     position: absolute;
//     left: -1vw;
//     left: -1.4vw;
//     top: 0;
//     fill: var(--granich-light-grey);
//     opacity: 0.6;
//     @media only screen and (max-width: 575px) {
//         width: 3vw;
//         left: -3.8vw;
//         top: 1vw;
//         ${props => props.masterclass && `
//             width: 2.8vw;
//             left: -3.5vw;
//             top: 0.3vw;
//         `}
//     }
// `

// const VK = styled(props => <VKIcon {...props}/>)`
//     width: 2.1vw;
//     height: 2.1vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         height: 7.5vw;
//     }
// `
// const Pinterest = styled(props => <PinterestIcon {...props}/>)`
//     width: 2vw;
//     height: 2vw;

    
//     @media only screen and (max-width: 575px) {
//         width: 7vw;
//         height: 7vw;
//         margin-bottom: -0.1vw;
//     }
// `
// const Behance = styled(props => <BehanceIcon {...props}/>)`
//     width: 2.1vw;
//     height: 2.1vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         height: 7.5vw;
//     }
// `
// const Instagram = styled(props => <InstagramIcon {...props}/>)`
//     width: 2.1vw;
//     height: 2.1vw;
//     @media only screen and (max-width: 575px) {
//         width: 7.5vw;
//         height: 7.5vw;
//     }
// `
// const Telegram = styled(props => <TelegramIcon {...props}/>)`
//     width: 2vw;
//     height: 2vw;
//     @media only screen and (max-width: 575px) {
//         width: 7vw;
//         height: 7vw;
//         margin-bottom: -0.1vw;
//     }
// `


const OurTeamSection = styled.section`

`


const OurTeamWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.6vw;
    grid-row-gap: 1.6vw;
    justify-content: space-between;
    margin-bottom: 2vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 4vw;
        margin-bottom: 5vw;
    }

`

const TeacherWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    padding: 1.7vw 1.5vw 2vw 2.8vw; 
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
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
    border: 1.5px solid var(--granich-black);
    background-color: var(--granich-grey);
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
const TeacherEmail = styled.span`
    font-size: 0.8vw;
    font-weight: 400;
    display: block;
    color: var(--granich-grey);
    padding-bottom: 0.2vw;
    position: relative;
    margin-right: 0.4vw;
    background: none;
    border-bottom: 2px dotted rgba(0,0,0,0.2);
    :hover {
        font-size: 0.8vw;
        color: var(--granich-grey);
        border-bottom: 2px dotted var(--granich-grey);
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
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            border-top: 0.55vw solid var(--granich-red);
        `}
    }

    &:after {
        content: '${props => props.content}';
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
        border-radius: 0.2vw;
        white-space: nowrap;
        background: var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            border-bottom: dotted 1.5px rgba(0,0,0,0);

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props => props.content === 'Скопировано :)' && `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props => props.content === 'Скопировано :)' && `
                border-top: 2vw solid var(--granich-red);
            `}
        }

        

`
const TeacherInfo = styled.div`
    min-height: 5.8vw;
    line-height: 1.35;

    @media only screen and (max-width: 575px) {
        min-height: 21vw;
    }
`
const TeacherInfoName = styled.div`
    font-weight: 600;
    font-size: 1.16vw;
    width: 18.5vw;
    padding-bottom: 0.4vw;

    @media only screen and (max-width: 575px) {
        font-size: 4.4vw;
        line-height: 1.3;
        width: 67vw;
        padding-bottom: 1.5vw;
    }
`

const TeacherDescription = styled.div`
    font-size: 1.16vw;
    font-weight: 500;
    width: 18.5vw;
    p:empty { 
        display: none; 
    }


    p {
        color: var(--granich-grey);
        padding-bottom: 0.4vw;
        position: relative;

        :before {
            content: '• ';
            position: absolute;
            top: -0vw;
            left: -1vw;
            font-size: 1.1vw;
            color: rgba(0,0,0,0.2);

        }
    }
    a {
        border-bottom: 1px solid rgba(0,0,0,0.2);
        :hover {
            border-bottom: 1px solid var(--granich-grey);
        }

    }
    @media only screen and (max-width: 575px) {
        font-size: 4.3vw;
        line-height: 1.3;
        margin-top: 0;
        width: 67vw;
        p {
            color: var(--granich-grey);
            padding-bottom: 1.5vw;
            position: relative;
            :before {
                content: '• ';
                position: absolute;
                top: -0vw;
                left: -4vw;
                font-size: 4vw;
                color: rgba(0,0,0,0.2);
    
            }
        }

    }
`

const SocialLink = styled.a`

`

const OurTeamCategoryTitle = styled.div`
    font-size: 2vw;
    letter-spacing: -0.1vw;
    font-weight: 700;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        font-size: 9vw;
        margin-bottom: 4vw;
    }
`

const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} rel="noopener noreferrer" target='_blank' >{node.content[0].value}</a>;
      }
    },   
  }






const OurTeam = ({data}) => {
    return (
        <OurTeamSection>
            <Container>
                <OurTeamCategoryTitle>Авторы</OurTeamCategoryTitle>
                <OurTeamWrapper>
                    {data.edges.map((teacher, idx) => {
                            return (
                                <React.Fragment key={teacher.node.id}>
                                    {teacher.node.teacherCategory === 'Авторы' && (
                                        <TeacherBlock  teacher={teacher.node}/>
                                    )}
                                </React.Fragment>
                            )
                        })
                    }
                </OurTeamWrapper>
                <OurTeamCategoryTitle>Кураторы</OurTeamCategoryTitle>
                <OurTeamWrapper>
                    {data.edges.map((teacher, idx) => {
                        return (
                            <React.Fragment key={teacher.node.id}>
                                {teacher.node.teacherCategory === 'Кураторы' && (
                                    <TeacherBlock  teacher={teacher.node}/>
                                )}
                            </React.Fragment>
                        )


                        })
                    }
                </OurTeamWrapper>
                <OurTeamCategoryTitle>Координаторы</OurTeamCategoryTitle>
                <OurTeamWrapper>
                    {data.edges.map((teacher, idx) => {
                        return (
                            <React.Fragment key={teacher.node.id}>
                                {teacher.node.teacherCategory === 'Координаторы' && (
                                    <TeacherBlock  teacher={teacher.node}/>
                                )}
                            </React.Fragment>
                        )


                        })
                    }
                </OurTeamWrapper>
            </Container>
        </OurTeamSection>
    )
}

export const TeacherBlock = ({teacher}) => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')

    const data = useStaticQuery(graphql`
        query teamSocialIcons {
            vk: file(relativePath: { eq: "team_socials/team_vk.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            instagram: file(relativePath: { eq: "team_socials/team_instagram.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            pinterest: file(relativePath: { eq: "team_socials/team_pinterest.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            telegram: file(relativePath: { eq: "team_socials/team_telegram.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            behance: file(relativePath: { eq: "team_socials/team_behance.png" }) {
                childImageSharp {
                    fluid(maxWidth: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

        }
        `)

        const vkIcon = data.vk.childImageSharp.fluid
        const pinterestIcon = data.pinterest.childImageSharp.fluid
        const instagramIcon = data.instagram.childImageSharp.fluid
        const telegramIcon = data.telegram.childImageSharp.fluid
        const behanceIcon = data.behance.childImageSharp.fluid

    return (
        <TeacherWrapper >
            <TeacherHeader>
                <TeacherImage fluid={teacher.teacherImage.fluid}></TeacherImage>
                <TeacherSocials>
                    <TeacherSocialIcons>                          
                            {teacher.teacherSocialTelegram && <SocialLink  href={teacher.teacherSocialTelegram} target="_blank"><SocialIcon fluid={telegramIcon}/></SocialLink>}
                            {teacher.teacherSocialVK && <SocialLink  href={teacher.teacherSocialVK} target="_blank"><SocialIcon fluid={vkIcon}/></SocialLink>}
                            {teacher.teacherSocialInstagram && <SocialLink  href={teacher.teacherSocialInstagram} target="_blank"><SocialIcon fluid={instagramIcon}/></SocialLink>}
                            {teacher.teacherSocialBehance && <SocialLink  href={teacher.teacherSocialBehance} target="_blank"><SocialIcon fluid={behanceIcon}/></SocialLink>}
                            {teacher.teacherSocialPinterest && <SocialLink  href={teacher.teacherSocialPinterest} target="_blank"><SocialIcon fluid={pinterestIcon}/></SocialLink>}
                    </TeacherSocialIcons>
                    {teacher.teacherEmail && (
                        <CopyToClipboard text={teacher.teacherEmail}> 
                            <TeacherEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>
                                {teacher.teacherEmail}
                            </TeacherEmail>
                        </CopyToClipboard>
                    )}

                </TeacherSocials>

            </TeacherHeader>
            <TeacherInfo >
                    <TeacherInfoName >{teacher.teacherName}</TeacherInfoName>
                    <TeacherDescription className="our-team_link">
                        {documentToReactComponents(teacher.teacherDescr.json, options)}
                    </TeacherDescription>
            </TeacherInfo>
        </TeacherWrapper>
    )
}

export default OurTeam
