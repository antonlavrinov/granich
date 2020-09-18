import React, {useState} from 'react'
import styled from 'styled-components';
import {Container} from './style';
import Course from './Course';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Mailing from './Mailing';



const CoursesSection = styled.section`
    position: relative;
    margin-top: -12.5vw;
    margin-bottom: 1vw;
    padding-top: 3vw;
    @media only screen and (max-width: 575px) {
        margin-top: -15.5vw;
        margin-bottom: 5vw;
    }
`

const CoursesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.7vw;
    grid-row-gap: 1.7vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 4vw;
        grid-column-gap: 4vw;

    }



`




const Courses = ({data}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);



    const openModal = () => {
        setIsOpen(true);

    }

    const closeModal = () => {
        setIsOpen(false);

    }

    return (
        <CoursesSection id="courses">
            <Modal  center 
                    closeIcon={<div></div>}
                    open={modalIsOpen} 
                    onClose={closeModal}
                    focusTrapped={false}
                    classNames={{
                        overlay: 'mailingOverlay',
                        modal: 'mailingModal',
                    }}>
                <Mailing/>

            </Modal>
            <Container>
                <CoursesWrapper >
                    {data.edges.map((course, idx) => {
                        return (
                            <Course openModal={openModal} key={course.node.id} courseData={course}/>
                        )
                    })}
                </CoursesWrapper>
            </Container>
        </CoursesSection>
    )
}

export default Courses


