import React from 'react'
import {
    CourseContainer,
    CourseButtonContainer,
    CourseTagList,
    CourseTag,
    CourseButton,
    CourseButtonWrapper,
    CourseButtonText,
    CourseDevelopingWrapper, 
    CourseDevelopingImage, 
    CourseDevelopingDescr, 
    CourseDevelopingTitle,
    Cogwheel
} from './styles';




const DevelopmentCard = () => {
    return (
        <CourseDevelopingWrapper development>
            <CourseContainer>
                <CourseTagList>
                    <CourseTag development></CourseTag>
                    <CourseTag development></CourseTag>
                    <CourseTag development></CourseTag>
                </CourseTagList>
                <CourseDevelopingImage>
                    <Cogwheel/>
                </CourseDevelopingImage>
                <CourseDevelopingTitle>
                    <div></div>
                    <div></div>
                </CourseDevelopingTitle>
                <CourseDevelopingDescr>
                    <div></div>
                    <div></div>
                    <div></div>
                </CourseDevelopingDescr>

            </CourseContainer>
            <CourseButton development>
                <CourseButtonContainer development>
                    <CourseButtonWrapper >
                        <CourseButtonText development>Разрабатываем...</CourseButtonText>
                    </CourseButtonWrapper>
                </CourseButtonContainer>
            </CourseButton>
        </CourseDevelopingWrapper>
    )
}

export default DevelopmentCard
