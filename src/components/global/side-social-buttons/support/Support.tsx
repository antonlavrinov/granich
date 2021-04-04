import React from "react"
import ChatIcon from "../../../../assets/svgs/chat_noshadow.svg"
import ChatCrossIcon from "../../../../assets/svgs/social-side-icons/chat-cross_noshadow.svg"
import styled from "styled-components"

export const CrossWrapper = styled(props => <ChatCrossIcon {...props} />)`
  width: 3.6vw;
  height: 3.6vw;
  transition: all 0.3s ease;
  /* porition: relative; */
  margin-bottom: 0.5vw;
  z-index: 400;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 575px) {
    width: 11vw;
    height: 11vw;
    margin-bottom: 1.5vw;
  }
`

export const Wrapper = styled(props => <ChatIcon {...props} />)`
  width: 3.6vw;
  height: 3.6vw;
  transition: all 0.3s ease;
  /* porition: relative; */
  margin-bottom: 0.5vw;

  z-index: 400;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 575px) {
    width: 11vw;
    height: 11vw;
    margin-bottom: 1.5vw;
  }
`
