import React from 'react'
import ChatIcon from '../assets/svgs/chat.svg';
import styled from 'styled-components';

const ChatWrapper = styled(props => <ChatIcon {...props}/>)`

    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    porition: relative;
    // position: absolute;
    // left: 0;
    // bottom: -1.5vw;
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


const Support = ({toggleChatOpen}) => {

    return (
        <ChatWrapper onClick={toggleChatOpen}/>
    )
}

export default Support
