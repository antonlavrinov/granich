import React from 'react'
import ChatIcon from '../assets/svgs/chat.svg';
import styled from 'styled-components';

const ChatWrapper = styled(props => <ChatIcon {...props}/>)`
    // position: fixed;
    // bottom: 2.8vw;
    // right: 4.3vw;
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
    }

`


const Support = ({toggleChatOpen}) => {

    return (
        <ChatWrapper onClick={toggleChatOpen}/>
    )
}

export default Support
