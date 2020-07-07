import React from 'react'
import ChatIcon from '../assets/svgs/chat.svg';
import styled from 'styled-components';

const ChatWrapper = styled(props => <ChatIcon {...props}/>)`
    position: fixed;
    bottom: 205px;
    right: 45px;
    
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
`


const Support = () => {
    return (
        <ChatWrapper />
    )
}

export default Support
