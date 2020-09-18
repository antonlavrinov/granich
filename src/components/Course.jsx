import React from 'react'
import styled from 'styled-components';
import CourseCard from './course-cards/CourseCard';
import MasterClassCard from './course-cards/MasterClassCard';
import DevelopmentCard from './course-cards/DevelopmentCard';




const CourseLinkWrapper = styled.a`
    transition: all 0.2s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`




const Course = ({courseData}) => {
    return (
        <>
            {courseData.node.courseTypeDevelopment ? (
                <DevelopmentCard />
            ) : (
                <>
                    {courseData.node.courseTypeEmpty ? (
                        <>
                            {courseData.node.courseType === 'Курс' ? (
                                <CourseCard empty courseData={courseData} />
                            ) : (
                                <MasterClassCard empty courseData={courseData}/>
                            )}
                        </>
                    ) : (
                        <CourseLinkWrapper href={`/${courseData.node.courseSlug}`}>
                            <>
                                {courseData.node.courseType === 'Курс' ? (
                                    <CourseCard courseData={courseData} />
                                ) : (
                                    <MasterClassCard courseData={courseData}/>
                                )}
                            </>
                        </CourseLinkWrapper>
                    )}
                
                </>
            )}
        
        </>
        
    )
}

export default Course;