import React from "react"
import { ContentCardsWrapper } from "../../curriculum/styles"
import CourseList from "../../main-page/courses/CourseList"
import ContentCard from "../../main-page/precourse-preparation/content-card"
import { Container } from "../../style"
import * as SC from "./PinterestCompilationCurriculum"

const PinterestCompilationCurriculum = ({ data }) => {
    // console.log("data", data)
    return (
        <SC.Wrapper>
            <SC.StyledContentCard  >
                <ContentCard content={data} />
            </SC.StyledContentCard>
            <SC.Descr>
                <b>Рекомендуем вам изучить Энциклопедию Графдизайна.</b> <p>В этой энциклопедии вы найдёте графические системы и графические идеи. Про графические системы было пояснение на этой странице выше, а графические идеи это по сути точечные приёмы, которые мы тоже будем частично будем разбирать на курсе Плакатного Графдизайна.</p>
            </SC.Descr>
        </SC.Wrapper>
    )
}

export default PinterestCompilationCurriculum
