import React, {useState} from 'react'
import Support from './Support'
import PageTop from './PageTop';
import styled from 'styled-components';
import Chat1 from '../assets/svgs/chat1.svg';
import {CSSTransition} from 'react-transition-group';
import EmailIcon from '../assets/svgs/social-side-icons/social-side-icon-email.svg';
import TelegramIcon from '../assets/svgs/social-side-icons/social-side-icon-telegram.svg';
import VKIcon from '../assets/svgs/social-side-icons/social-side-icon-vk.svg';
import WhatsupIcon from '../assets/svgs/social-side-icons/social-side-icon-whatsup.svg';




const VK = styled(props => <VKIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
`

const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
`
const Whatsup = styled(props => <WhatsupIcon {...props}/>)`
    width: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
`
const Email = styled(props => <EmailIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)

    }
`

const SideButtonsWrapper = styled.div`
    position: fixed;
    bottom: 2.8vw;
    right: 4.3vw;
    display: flex;
    height: 7.7vw;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    height: 22.25vw;
    // overflow-y: hidden;
    ${props => props.chatOpen && `
        height: 22.25vw;
    `}
    @media only screen and (max-width: 575px) {
        height: 50vw;
        bottom: 10vw;
        right: 1vw;
        ${props => props.chatOpen && `
            height: 50vw;
        `}
    }


`

const SupportAndPageUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 7.7vw;
    z-index: 200;
    transition: all 0.3s ease;
    // :hover {
    //     height: 25vw;
    // }
    @media only screen and (max-width: 575px) {
        height: 100%;
    }
    ${props => props.chatOpen && `
        height: 22.25vw;
        @media only screen and (max-width: 575px) {
            height: 50vw;
        }
    `}

`
const Socials = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    height: 15.5vw;
    width: 3.6vw;
    margin-top: 3.8vw;
    margin-bottom: 2.3vw;
    // background: grey;
    // bottom: 3.7vw;
    // right: 0;
    // transition: all 0.4s ease;


`
const SocialsWrapper = styled.div`
    position: absolute;
    width: 3.6vw;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease;
    // background: lightgrey;
    padding-bottom: 2vw;
    svg {
        margin-bottom: 0vw;
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
            <SupportAndPageUp chatOpen={chatOpen}>
                <PageTop />
                <Support toggleChatOpen={toggleChatOpen}/>
            </SupportAndPageUp>
            <Socials >
                <CSSTransition in={chatOpen} timeout={300} unmountOnExit classNames="side-social-icons">
                    <SocialsWrapper>
                        <Telegram />
                        <Email/>
                        <Whatsup/>
                        <VK/>
                    </SocialsWrapper>
                </CSSTransition>
            </Socials>


        </SideButtonsWrapper>
    )
}

export default SideButtons
