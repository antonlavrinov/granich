import React, {useState} from 'react'
import Support from './Support'
import PageTop from './PageTop';
import styled from 'styled-components';
import EmailIcon from '../assets/svgs/social-side-icons/social-side-icon-email.svg';
import TelegramIcon from '../assets/svgs/social-side-icons/social-side-icon-telegram.svg';
import VKIcon from '../assets/svgs/social-side-icons/social-side-icon-vk.svg';
import WhatsupIcon from '../assets/svgs/social-side-icons/social-side-icon-whatsup.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';


const IconLink = styled.a`
    height: 3.6vw;
    margin-bottom: 0.5vw;
    @media only screen and (max-width: 575px) {
        height: 11vw;
        margin-bottom: 1.5vw;
    }
`
const VK = styled(props => <VKIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    transform: translateY(0);
    // margin-bottom: 0.5vw;
    :hover {
        cursor: pointer;
        transform: translateY(0) scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        // margin-bottom: 1.5vw;
    }
    // ${props => !props.chatOpen && `
    //     opacity: 0;
    //     transform: translateY(30%);
    //     :hover {
    //         cursor: default;
    //         transform: translateY(10vw) scale(1.1)
    
    //     }
    // `}
`

const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    transform: translateY(0);

    :hover {
        cursor: pointer;
        transform: translateY(0) scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        // margin-bottom: 1.5vw;
    }
    // ${props => !props.chatOpen && `
    //     opacity: 0;
    //     transform: translateY(30%);
    //     :hover {
    //         cursor: default;
    //         transform: translateY(10vw) scale(1.1)
    
    //     }
    // `}
`
const Whatsup = styled(props => <WhatsupIcon {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    transform: translateY(0);
    // margin-bottom: 0.5vw;
    :hover {
        cursor: pointer;
        transform: translateY(0) scale(1.1)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        // margin-bottom: 1.5vw;
    }
    // ${props => !props.chatOpen && `
    //     opacity: 0;
    //     transform: translateY(30%);
    //     :hover {
    //         cursor: default;
    //         transform: translateY(10vw) scale(1.1)
    
    //     }
    // `}
`

const EmailWrapper = styled.div`
    position: relative;
    width: 3.6vw;
    height: 3.6vw;
    opacity: 1;
    transition: all 0.3s ease;
    transform: translateY(0);
    // margin-bottom: 0.5vw;
    :hover {
        cursor: pointer;
        transform: translateY(0)

    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
        margin-bottom: 1.5vw;
    }
    // ${props => !props.chatOpen && `
    //     opacity: 0;
    //     transform: translateY(30%);
    //     :hover {
    //         cursor: default;
    //         transform: translateY(10vw)
    
    //     }

    // `}
`


const Email = styled.button`
    background: none;
    position: absolute;
    
    svg {
        width: 3.6vw;
        height: 3.6vw;
        transition: all 0.3s ease;
        opacity: 1;
        transition: all 0.3s ease;
        transform: translateY(0);
        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
        @media only screen and (max-width: 575px) {
            width: 11vw;
            height: 11vw;
        }

    }
    :hover {

        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: 40%;
        right: 4.1vw;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-bottom: 0.55vw solid transparent;
        border-top: 0.55vw solid transparent;
        border-left: 0.55vw solid var(--granich-black);
    }

    &:after {
        content: 'Скопировать';
        display: none;
        position: absolute;
        z-index: 9999;
        top: 40%;
        right: 4.5vw;
        transform: translateY(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1;
        padding: 0.7vw 1vw;
        background: rgba(0,0,0,.95);
        background: var(--granich-black);
        border-radius: 3px;
        white-space: nowrap;

    }
    

    
    &:active, :focus {
        outline: none;
        
        &:after {
            content: 'Скопировано :) hello@granich.design';
            text-align: center;
            background: var(--granich-red);
            white-space: normal;
            line-height: 1.5;
        }
        &:before {
            border-left-color: var(--granich-red);
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;
            // border-bottom: solid 0.2vw var(--granich-black);
        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            // top: -13vw;
            right: 15vw;
        }
        &:before {
            // top: -3.2vw;
            left: -4.5vw;
            border-bottom: 2vw solid transparent;
            border-top: 2vw solid transparent;
            border-left: 2vw solid var(--granich-black);
        }

    }
    // ${props => !props.chatOpen && `
    //     svg {
    //         opacity: 0;
    //         // transform: translateY(30%);
    //         :hover {
    //             cursor: default;
    //             // transform: translateY(10vw)
        
    //         }
    //     }
    // `}

`

const SideButtonsSection = styled.div`
    position: fixed;
    bottom: 4.5vw;
    right: 3.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    z-index: 300;

    @media only screen and (max-width: 575px) {
        // height: 23vw;
        bottom: 8vw;
        right: 1vw;
        ${props => props.chatOpen && `
            height: 50vw;
        `}
    }


`
const SideButtonsWrapper = styled.div`
    postition: relative;
    display: flex;
    flex-direction: column;
    svg {
        margin-button: 0.5vw;
    }

`

const Socials = styled.div`
    display: flex;
    flex-direction: column;
`






const SideButtons = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const toggleChatOpen = (boolean) => {
        setChatOpen(boolean)
        console.log('open')
    }
    return (
        <SideButtonsSection>
            <SideButtonsWrapper>



                <CSSTransition in={chatOpen} timeout={300} unmountOnExit classNames="side-buttons-transition">
                    <Socials>
                        <IconLink>
                            <CopyToClipboard text={'hello@granich.design'}>
                                <EmailWrapper>
                                    <Email>
                                        <EmailIcon />
                                    </Email>
                                </EmailWrapper>
                            </CopyToClipboard>
                        </IconLink>

                        <IconLink target="_blank" href="https://t.me/granichannel">
                            <Telegram />
                        </IconLink>
                        <IconLink target="_blank" href="https://t.me/granichannel">
                            <Whatsup/>
                        </IconLink>
                        <IconLink target="_blank" href="https://t.me/granichannel">
                            <VK/>
                        </IconLink>


                    </Socials>

                </CSSTransition>
                <Support toggleChatOpen={toggleChatOpen} chatOpen={chatOpen} />

                <PageTop/>


            </SideButtonsWrapper>

        </SideButtonsSection>
    )
}

export default SideButtons
