import React, { useState } from "react"
import { useSocialIconsQuery } from "../useSocialIconsQuery"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { CopyToClipboard } from "react-copy-to-clipboard"
import * as SC from "./TeamMember"

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

const TeamMember = ({ teacher }) => {
  const [tooltipEmail, setTooltipEmail] = useState("Скопировать")

  const [
    vkIcon,
    pinterestIcon,
    instagramIcon,
    telegramIcon,
    behanceIcon,
  ] = useSocialIconsQuery()

  return (
    <SC.Wrapper>
      <SC.Header>
        <SC.Image src={teacher.teacherImage.src}></SC.Image>
        <SC.Socials>
          <SC.SocialIcons>
            {teacher.teacherSocialTelegram && (
              <SC.SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialTelegram}
                target="_blank"
              >
                <SC.SocialIcon fluid={telegramIcon} />
              </SC.SocialLink>
            )}
            {teacher.teacherSocialVK && (
              <SC.SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialVK}
                target="_blank"
              >
                <SC.SocialIcon fluid={vkIcon} />
              </SC.SocialLink>
            )}
            {teacher.teacherSocialInstagram && (
              <SC.SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialInstagram}
                target="_blank"
              >
                <SC.SocialIcon fluid={instagramIcon} />
              </SC.SocialLink>
            )}
            {teacher.teacherSocialBehance && (
              <SC.SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialBehance}
                target="_blank"
              >
                <SC.SocialIcon fluid={behanceIcon} />
              </SC.SocialLink>
            )}
            {teacher.teacherSocialPinterest && (
              <SC.SocialLink
                rel="noopener noreferrer"
                href={teacher.teacherSocialPinterest}
                target="_blank"
              >
                <SC.SocialIcon fluid={pinterestIcon} />
              </SC.SocialLink>
            )}
          </SC.SocialIcons>
          {teacher.teacherEmail && (
            <CopyToClipboard text={teacher.teacherEmail}>
              <SC.Email
                content={tooltipEmail}
                onMouseLeave={() => setTooltipEmail("Скопировать")}
                onClick={() => setTooltipEmail("Скопировано :)")}
              >
                {teacher.teacherEmail}
              </SC.Email>
            </CopyToClipboard>
          )}
        </SC.Socials>
      </SC.Header>
      <SC.Info>
        <SC.InfoName>{teacher.teacherName}</SC.InfoName>
        <SC.Description className="our-team_link">
          {documentToReactComponents(teacher.teacherDescr.json, options)}
        </SC.Description>
      </SC.Info>
    </SC.Wrapper>
  )
}

export default TeamMember
