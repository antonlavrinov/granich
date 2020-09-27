import React from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageUpIcon from '../assets/svgs/page-up.svg';
import { Link } from 'gatsby';
import pageUpImg from '../assets/images/page-up-01.png'


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

const PageUpWrapperImg = styled.img`
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




const PageTop = ({chatOpen}) => {

    return (
        <>
            <PageUpWrapperDesktop>
                <PageUpWrapper onClick={() => scrollTo('#header')}/>
            </PageUpWrapperDesktop>
            <PageUpWrapperMobile to="#header">
                <PageUpWrapperImg src={pageUpImg} />
            </PageUpWrapperMobile>
        </>
        
    )
}

export default PageTop

