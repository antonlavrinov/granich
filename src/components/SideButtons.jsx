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
    }

`
const Whatsup = styled(props => <WhatsupIcon {...props}/>)`
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
    }

`

const EmailWrapper = styled.div`
    position: relative;
    width: 3.6vw;
    height: 3.6vw;
    opacity: 1;
    transition: all 0.3s ease;
    transform: translateY(0);

    :hover {
        transform: translateY(0)
        font-weight: 500;
        font-size: 1.15vw;
        cursor: pointer;
        border-bottom: none;
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
        //bottom
        border-bottom: 0.55vw solid transparent;
        border-top: 0.55vw solid transparent;
        border-left: 0.55vw solid var(--granich-black);
        ${props => props.content === 'Скопировано :) hello@granich.design' && `
            border-left: 0.55vw solid var(--granich-red);
        `}
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: 40%;
        right: 4.5vw;
        transform: translateY(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1.5;
        padding: 0.7vw 1vw;
        // min-width: 5vw; 
        text-align: center;
        border-radius: 0.2vw;
        white-space: normal;;
        background: var(--granich-black);
        ${props => props.content === 'Скопировано :) hello@granich.design' && `
            background: var(--granich-red);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        width: 11vw;
        height: 11vw;
        margin-bottom: 1.5vw;
        :hover {
            font-size: 3.8vw;
            // border-bottom: solid 0.2vw var(--granich-black);

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            right: 15vw;
            ${props => props.content === 'Скопировано :) hello@granich.design' && `
                background: var(--granich-red);
            `}
        }
        &:before {
            left: -4.5vw;
            border-bottom: 2vw solid transparent;
            border-top: 2vw solid transparent;
            border-left: 2vw solid var(--granich-black);
            ${props => props.content === 'Скопировано :) hello@granich.design' && `
                border-top: 2vw solid var(--granich-red);
            `}
        }

`


const Email = styled.div`
    background: none;
    position: absolute;
    display: block;
    
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
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
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
                                <EmailWrapper content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :) hello@granich.design')}>
                                    <Email>
                                        <EmailIcon />
                                    </Email>
                                </EmailWrapper>
                            </CopyToClipboard>
                        </IconLink>

                        <IconLink target="_blank" href="https://t.me/granich_school">
                            <Telegram />
                        </IconLink>
                        <IconLink target="_blank" href="https://wa.me/79046434682">
                            <Whatsup/>
                        </IconLink>
                        <IconLink target="_blank" href="https://vk.com/write-164662407">
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
