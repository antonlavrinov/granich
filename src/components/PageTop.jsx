import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageUpIcon from '../assets/svgs/page-up.svg';



const PageUpWrapper = styled(props => <PageUpIcon {...props}/>)`
    position: fixed;
    bottom: 100px;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
    }
`


const PageTop = () => {
    const [pageTop, setPageTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 900) {
                setPageTop(true)
            } else {
                setPageTop(false)
            }
        })
    }, [])

    return (
        <PageUpWrapper style={{right: `${pageTop ? '25px' : '-45px'}`}} onClick={() => scrollTo('#offer')}/>
    )
}

export default PageTop

{/* <PageTopWrapper style={{right: `${pageTop ? '0' : '-50px'}`}} onClick={() => scrollTo('#offer')}>
TOP
</PageTopWrapper> */}
