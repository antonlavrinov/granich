import React from "react"
import * as SC from "./Support"

type Props = {
  toggleChatOpen: (boolean: boolean) => void
  chatOpen: boolean
}

const Support: React.FC<Props> = ({ toggleChatOpen, chatOpen }) => {
  return (
    <>
      {chatOpen ? (
        <SC.CrossWrapper onClick={() => toggleChatOpen(false)} />
      ) : (
        <SC.Wrapper onClick={() => toggleChatOpen(true)} />
      )}
    </>
  )
}

export default Support
