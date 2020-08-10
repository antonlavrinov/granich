import React from 'react'
import ChatIcon from '../assets/svgs/chat.svg';
import styled from 'styled-components';

const ChatWrapper = styled(props => <ChatIcon {...props}/>)`
    position: fixed;
    bottom: 2.8vw;
    right: 4.3vw;
    
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        display: none;
    }
`


const Support = () => {
    return (
        <ChatWrapper />
    )
}

export default Support
