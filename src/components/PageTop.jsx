import React from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageUpIcon from '../assets/svgs/page-up.svg';



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




const PageTop = ({chatOpen}) => {

    return (
        <PageUpWrapper  onClick={() => scrollTo('#header')}/>
    )
}

export default PageTop

