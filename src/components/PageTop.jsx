import React from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';
import PageUpIcon from '../assets/svgs/page-up_noshadow.svg';
import PageUpIconMobile from '../assets/svgs/page-up-mobile_noshadow.svg';


const PageUpWrapper = styled(props => <PageUpIcon {...props}/>)`
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

const PageUpWrapperMobileIcon = styled(props => <PageUpIconMobile {...props}/>)`
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



const PageUpWrapperMobile = styled(props => <Link {...props}/>)`
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
    }
`

const PageUpWrapperDesktop = styled.div`
    display: block;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`




const PageTop = () => {


    return (
        <>
            <PageUpWrapperDesktop onClick={() => scrollTo('#header')}>
                <PageUpWrapper/>
            </PageUpWrapperDesktop>
            <PageUpWrapperMobile  to="#header">
                <PageUpWrapperMobileIcon />
            </PageUpWrapperMobile>
        </>
        
    )
}

export default PageTop

