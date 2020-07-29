import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageUpIcon from '../assets/svgs/page-up.svg';



const PageUpWrapper = styled(props => <PageUpIcon {...props}/>)`
    position: fixed;
    bottom: 260px;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)
    }
`




const PageTop = ({pageTop}) => {
    // const [pageTop, setPageTop] = useState(false)
    // useEffect(() => {
    //     // const scrollFunc = () => {
    
    //     // }

    //     window.addEventListener('scroll', () => {
    //         if(window.pageYOffset > 900) {
    //             setPageTop(true)
    //         } else {
    //             setPageTop(false)
    //         }
    //     })
    //     // return () => {

    //     // }
    // }, [])

    return (
        <PageUpWrapper style={{right: `${pageTop ? '45px' : '-45px'}`}} onClick={() => scrollTo('#header')}/>
    )
}

export default PageTop

{/* <PageTopWrapper style={{right: `${pageTop ? '0' : '-50px'}`}} onClick={() => scrollTo('#offer')}>
TOP
</PageTopWrapper> */}
