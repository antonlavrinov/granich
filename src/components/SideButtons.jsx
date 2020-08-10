import React, {useState} from 'react'
import Support from './Support'
import PageTop from './PageTop';
import styled from 'styled-components';
import Chat1 from '../assets/svgs/chat1.svg';
import {CSSTransition} from 'react-transition-group';

const Icon1 = styled(props => <Chat1 {...props}/>)`
    width: 3.2vw;


`
const Icon2 = styled(props => <Chat1 {...props}/>)`
    width: 3.2vw;

`
const Icon3 = styled(props => <Chat1 {...props}/>)`
    width: 3.2vw;

`
const Icon4 = styled(props => <Chat1 {...props}/>)`
    width: 3.2vw;

`

const SideButtonsWrapper = styled.div`
    position: fixed;
    bottom: 2.8vw;
    right: 4.3vw;
    display: flex;
    height: 7.7vw;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease;
    ${props => props.chatOpen && `
        height: 25vw;
    `}
    @media only screen and (max-width: 575px) {
        height: 17.5vw;
        bottom: 2.8vw;
        right: 2.8vw;
        ${props => props.chatOpen && `
            height: 50vw;
        `}
    }


`

const SideButtons = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const toggleChatOpen = () => {
        setChatOpen(!chatOpen)
        console.log('open')
    }
    return (
        <SideButtonsWrapper chatOpen={chatOpen}>
            <PageTop chatOpen={chatOpen}/>
            {/* <CSSTransition unmountOnExit 
                           classNames="warning-message" 
                           timeout={100} 
                           in={chatOpen}>
                <Icon1/>
            </CSSTransition>
            <CSSTransition unmountOnExit 
                           classNames="warning-message" 
                           timeout={100} 
                           in={chatOpen}>
                <Icon2/>
            </CSSTransition>
            <CSSTransition unmountOnExit 
                           classNames="warning-message" 
                           timeout={100} 
                           in={chatOpen}>
                <Icon3/>
            </CSSTransition>
            <CSSTransition unmountOnExit 
                           classNames="warning-message" 
                           timeout={100} 
                           in={chatOpen}>
                <Icon4/>
            </CSSTransition> */}
            <Support toggleChatOpen={toggleChatOpen}/>
        </SideButtonsWrapper>
    )
}

export default SideButtons
