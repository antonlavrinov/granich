import React from "react"
import * as SC from "./Feature"

type Props = {
  image: string
  title: string
  text: string
  link: string
}

const Feature: React.FC<Props> = ({ image, title, text, link }) => {
  return (
    <SC.Wrapper>
      <SC.Image src={image} />
      <SC.Text>
        {link ? (
          <SC.Link href={link} target="_blank">
            {title}
            <SC.ArrowLinkOut />
          </SC.Link>
        ) : (
          <b>{title}</b>
        )}

        {text}
      </SC.Text>
    </SC.Wrapper>
  )
}

export default Feature
