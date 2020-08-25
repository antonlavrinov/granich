import React from 'react'
import ChatIcon from '../assets/svgs/chat.svg';
import ChatCrossIcon from '../assets/svgs/social-side-icons/chat-cross.svg';
import styled from 'styled-components';

const ChatCrossWrapper = styled(props => <ChatCrossIcon {...props}/>)`

    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    porition: relative;
    margin-bottom: 0.5vw;
    z-index: 400;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        margin-bottom: 1.5vw;
    }

`

const ChatWrapper = styled(props => <ChatIcon {...props}/>)`

    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    porition: relative;
    margin-bottom: 0.5vw;

    z-index: 400;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        margin-bottom: 1.5vw;
    }

`


const Support = ({toggleChatOpen, chatOpen}) => {
 
    return (
        <>
            {chatOpen ? (
                <ChatCrossWrapper onClick={() => toggleChatOpen(false)}/>
            ) : (
                <ChatWrapper onClick={() => toggleChatOpen(true)}/>
            )}
        </>
        
    )
}

export default Support
