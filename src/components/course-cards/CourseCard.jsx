import React from 'react'
import {
    RedArrow,
    BlackArrow,
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
    CourseInfo,
    CourseStart,
    CourseDuration,
    CourseTeachers,
    CourseTeacher,
    Calendar
} from './styles';



const CourseCard = ({courseData, empty}) => {
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
                    <CourseMainTag active={courseData.node.courseStatus}>Курс</CourseMainTag>
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
                <CourseInfo active={courseData.node.courseStatus}>
                    {courseData.node.courseStart && (
                        <CourseStart active={courseData.node.courseStatus}>
                            Стартуем <br/> <span>{courseData.node.courseStart}</span>
                        </CourseStart>
                    )}
                    {courseData.node.courseDuration && (
                        <CourseDuration active={courseData.node.courseStatus}>
                            Учимся <br/> <span>{courseData.node.courseDuration}</span>
                        </CourseDuration>
                    )}
                </CourseInfo>

            </CourseContainer>
            <CourseButton empty={empty ? 1 : 0} active={courseData.node.courseStatus}>
                <CourseButtonContainer>
                    <CourseButtonWrapper>
                        {empty ? (
                            <>
                                <CourseButtonText empty>
                                    Узнать <br/>о дате старта
                                </CourseButtonText>
                                <Calendar/>
                            </>
                        ) : (
                            <>
                                {courseData.node.courseStatus ? (
                                    <>  
                                        
                                        <CourseButtonText>
                                            Участвовать
                                        </CourseButtonText>
                                        <RedArrow/>
                                        
                                    </>
                                ) : (
                                    <>
                                        <CourseButtonText>
                                            Узнать <br/>о наборе
                                        </CourseButtonText>
                                        <BlackArrow/>
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

export default CourseCard
