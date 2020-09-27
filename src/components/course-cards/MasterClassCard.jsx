import React from 'react'
import {
    // RedArrow,
    // BlackArrow,
    CourseWrapper,
    CourseContainer,
    CourseButtonContainer,
    CourseTagList,
    CourseMainTag,
    CourseTag,
    CourseTitle,
    CourseImage,
    CourseImageWrapper,
    CourseButton,
    CourseButtonWrapper,
    CourseButtonText,
    CourseTeachers,
    CourseTeacher,
    CourseDescr,
    // Calendar
} from './styles';


const MasterCard = ({courseData, empty}) => {
    return (
        <CourseWrapper>
            <CourseContainer>
                <CourseTagList>
                    <>
                        {courseData.node.courseTags.map((courseTag, idx) => {
                            return (
                                <CourseTag key={idx} active={courseData.node.courseStatus}>{courseTag}</CourseTag>
                            )
                        })}
                        
                    </>

                    
                </CourseTagList>

                <CourseImageWrapper>
                    <CourseImage fluid={courseData.node.coursePreviewImage.fluid}>
                    </CourseImage>
                    <CourseMainTag active={courseData.node.courseStatus}>Мастер-класс</CourseMainTag>
                    <CourseTeachers>
                        {courseData.node.courseTeachers.length > 1 ? (
                            <>
                                {courseData.node.courseTeachers.map((teacher, idx) => {
                                    return (
                                        <CourseTeacher several={true} key={idx} fluid={teacher.fluid}/>
                                    )
                                })}
                            </>

                        ) : (
                            <CourseTeacher  fluid={courseData.node.courseTeachers[0].fluid}/>
                        )}
                    </CourseTeachers>
                </CourseImageWrapper>



                <CourseTitle active={courseData.node.courseStatus}>{courseData.node.courseTitle}</CourseTitle>
                <CourseDescr active={courseData.node.courseStatus}>
                    {courseData.node.courseDescr}
                </CourseDescr>

            </CourseContainer>
            <CourseButton empty={empty ? 1 : 0} active={courseData.node.courseStatus}>
                <CourseButtonContainer>
                    <CourseButtonWrapper >
                        {empty ? (
                            <>
                                <CourseButtonText empty>
                                    Узнать <br/>о дате старта
                                </CourseButtonText>
                                {/* <Calendar/> */}
                            </>
                        ) : (

                            <>
                                {courseData.node.courseStatus ? (
                                    <>  
                                        <CourseButtonText>
                                            Купить
                                        </CourseButtonText>
                                        {/* <RedArrow/> */}
                                    </>
                                ) : (
                                    <>
                                        <CourseButtonText>
                                            Предзаказ
                                        </CourseButtonText>
                                        {/* <BlackArrow/> */}
                                    </>
                                )}                            
                            
                            </>

                        )}
                        

                    </CourseButtonWrapper>

                </CourseButtonContainer>
            </CourseButton>
        </CourseWrapper> 
    )
}

export default MasterCard
