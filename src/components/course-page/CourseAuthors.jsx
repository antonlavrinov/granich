import React, { useState } from "react"
import { Container } from "../style"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { CopyToClipboard } from "react-copy-to-clipboard"
// import CopyIcon from '../assets/svgs/copy-icon.svg';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { INLINES } from "@contentful/rich-text-types"

const SocialIcon = styled(props => <Img {...props} />)`
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
  ${props =>
    props.round &&
    `
        width: 2vw;
        height: 2vw;
        @media only screen and (max-width: 575px) {
            width: 7vw;
            height: 7vw;
        }
    `}
`

const AuthorsSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

const AuthorsWrapper = styled.section`
  padding: 4.7vw 4vw 4.7vw 4.7vw;
  border-radius: 0.6vw;
  background: white;
  @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
  }
`

const AuthorsTitle = styled.h2`
  color: var(--granich-black);
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.87;
  margin-top: -0.6vw;
  margin-bottom: 2.3vw;

  @media only screen and (max-width: 575px) {
    font-size: 11.3vw;
    letter-spacing: -0.7vw;
    line-height: 1;
    margin-right: 0;
    margin-bottom: 2vw;
  }
`

const AuthorsTeachers = styled.div`
  display: flex;
  margin-bottom: 2.5vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 0vw;
  }
`

const AuthorsText = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
const AuthorsQuote = styled.div`
  font-size: 1.4vw;
  color: var(--granich-black);
  padding-left: 1.5vw;
  border-left: 2.5px solid var(--granich-red);
  margin-right: 1vw;
  font-weight: 500;
  min-width: 27.8vw;
  width: 27.8vw;
  line-height: 1.45;
  @media only screen and (max-width: 575px) {
    font-size: 5.1vw;
    letter-spacing: -0.1vw;
    padding-left: 3.5vw;
    margin-right: 0;
    margin-bottom: 3vw;
    min-width: 100%;
    width: 100%;
  }
`
const AuthorsDescr = styled.div`
  font-size: 1.2vw;
  color: var(--granich-grey);
  line-height: 1.45;
  a {
    border-bottom: 1px solid var(--granich-light-grey);
    :hover {
      border-color: var(--granich-grey);
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
  }
`

const TeacherWrapper = styled.div`
  background: #e8e8e8;
  border-radius: 0.6vw;
  padding: 1.7vw 2vw 1.7vw 2vw;
  display: flex;
  flex-direction: column;
  min-height: 16.1vw;
  position: relative;
  margin-right: 6.3vw;
  :after {
    content: "+";
    position: absolute;
    color: var(--granich-black);
    font-weight: 600;
    top: 50%;
    transform: translateY(-50%);
    right: -4.4vw;
    font-size: 4vw;
  }
  :last-child {
    margin-right: 0;
    :after {
      display: none;
    }
  }
  ${props =>
    props.numberOfTeachers === "3" &&
    `
        padding: 1.7vw 1.7vw 1.7vw 1.7vw;
        margin-right: 4vw;
        :after {
            right: -3vw;
            font-size: 3vw;
        }

    `}
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 5.5vw 7.5vw 6vw 7.5vw;
    margin: 4.5vw 0;
    min-height: auto;
    margin-right: 0;
    margin-bottom: 7vw;
    :after {
      right: auto;
      transform: translate(-50%, 0);
      left: 50%;
      bottom: -11vw;
      top: auto;
      font-size: 11vw;
    }
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
const TeacherImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 5.1vw;
  height: 5.1vw;
  border-radius: 100vw;
  overflow: hidden;
  border: 1.5px solid var(--granich-black);
  background-color: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    width: 16.5vw;
    height: 16.5vw;
  }
  ${props =>
    props.numberOfTeachers === "3" &&
    `
        width: 4vw;
        height: 4vw;
    `}
`
const TeacherSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  margin-bottom: 0.5vw;
  svg {
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.1);
    }
  }
  ${props =>
    props.numberOfTeachers === "3" &&
    `
        margin-bottom: 0.2vw;
    `}
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
        ${props =>
          props.content === "Скопировано :)" &&
          `
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
        ${props =>
          props.content === "Скопировано :)" &&
          `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        padding-bottom: 0;
        :hover {
            font-size: 3vw;
            border-bottom: dotted 1.5px rgba(0,0,0,0);

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props =>
              props.content === "Скопировано :)" &&
              `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props =>
              props.content === "Скопировано :)" &&
              `
                border-top: 2vw solid var(--granich-red);
            `}
        }
        ${props =>
          props.masterclass &&
          `
            font-size: 2.8vw;
            :hover {
                font-size: 2.8vw;
    
            }
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
  padding-bottom: 0.4vw;

  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    line-height: 1.3;
    width: 67vw;
    padding-bottom: 1.5vw;
    ${props =>
      props.masterclass &&
      `
            font-size: 3.8vw;
        `}
  }
  ${props =>
    props.numberOfTeachers === "3" &&
    `
        font-size: 1vw;
    `}
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
  }
  a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    :hover {
      border-bottom: 1px solid var(--granich-grey);
    }
  }
  ${props =>
    props.numberOfTeachers === "3" &&
    `
        font-size: 1vw;
        width: 15.9vw;
    `}
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    line-height: 1.3;
    margin-top: 0;
    width: 67vw;
    p {
      color: var(--granich-grey);
      padding-bottom: 1.5vw;
      position: relative;
    }
  }
`

const SocialLink = styled.a``

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: node => {
      return (
        <a href={node.data.uri} rel="noopener noreferrer" target="_blank">
          {node.content[0].value}
        </a>
      )
    },
  },
}

const CourseAuthors = ({ data, numberOfTeachers, quote, text }) => {
  return (
    <AuthorsSection>
      <Container>
        <AuthorsWrapper>
          <AuthorsTitle>Соавторы</AuthorsTitle>
          <AuthorsTeachers>
            {data.edges.map(teacher => {
              return (
                <MasterClassTeacherBlock
                  key={teacher.node.id}
                  numberOfTeachers={numberOfTeachers}
                  teacher={teacher.node}
                />
              )
            })}
          </AuthorsTeachers>
          <AuthorsText>
            <AuthorsQuote>{quote}</AuthorsQuote>
            <AuthorsDescr>{text}</AuthorsDescr>
          </AuthorsText>
        </AuthorsWrapper>
      </Container>
    </AuthorsSection>
  )
}

export default CourseAuthors

const MasterClassTeacherBlock = ({ numberOfTeachers, teacher }) => {
  const [tooltipEmail, setTooltipEmail] = useState("Скопировать")

  const data = useStaticQuery(graphql`
    query courseAuthorsSocialIcons {
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
    <TeacherWrapper numberOfTeachers={numberOfTeachers}>
      <TeacherHeader>
        <TeacherImage
          numberOfTeachers={numberOfTeachers}
          fluid={teacher.teacherImage.fluid}
        ></TeacherImage>
        <TeacherSocials>
          <TeacherSocialIcons numberOfTeachers={numberOfTeachers}>
            {teacher.teacherSocialTelegram && (
              <SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialTelegram}
                target="_blank"
              >
                <SocialIcon fluid={telegramIcon} />
              </SocialLink>
            )}
            {teacher.teacherSocialVK && (
              <SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialVK}
                target="_blank"
              >
                <SocialIcon fluid={vkIcon} />
              </SocialLink>
            )}
            {teacher.teacherSocialInstagram && (
              <SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialInstagram}
                target="_blank"
              >
                <SocialIcon fluid={instagramIcon} />
              </SocialLink>
            )}
            {teacher.teacherSocialBehance && (
              <SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialBehance}
                target="_blank"
              >
                <SocialIcon fluid={behanceIcon} />
              </SocialLink>
            )}
            {teacher.teacherSocialPinterest && (
              <SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialPinterest}
                target="_blank"
              >
                <SocialIcon fluid={pinterestIcon} />
              </SocialLink>
            )}
          </TeacherSocialIcons>
          {teacher.teacherEmail && (
            <CopyToClipboard text={teacher.teacherEmail}>
              <TeacherEmail
                content={tooltipEmail}
                onMouseLeave={() => setTooltipEmail("Скопировать")}
                onClick={() => setTooltipEmail("Скопировано :)")}
              >
                {teacher.teacherEmail}
              </TeacherEmail>
            </CopyToClipboard>
          )}
        </TeacherSocials>
      </TeacherHeader>
      <TeacherInfo>
        <TeacherInfoName numberOfTeachers={numberOfTeachers}>
          {teacher.teacherName}
        </TeacherInfoName>
        <TeacherDescription
          className="our-team_link our-team_link_master-class"
          numberOfTeachers={numberOfTeachers}
        >
          {documentToReactComponents(teacher.teacherDescr.json, options)}
        </TeacherDescription>
      </TeacherInfo>
    </TeacherWrapper>
  )
}
