import React from "react"
import { ContentCardsWrapper } from "../../curriculum/styles"
import CourseList from "../../index/courses/CourseList"
import ContentCard from "../../index/precourse-preparation/content-card"
import { Container } from "../../style"
import * as SC from "./PinterestCompilationCurriculum"

const PinterestCompilationCurriculum = ({ dataInDesign, dataPinterest }) => {
    // console.log("data", data)
    console.log("data pint", dataPinterest)
    return (
        <SC.Wrapper>
            <SC.PinterestContent>
                <SC.StyledContentCard  >
                    <ContentCard content={dataPinterest} />
                </SC.StyledContentCard>
                <SC.Descr>
                    <b>Рекомендуем вам изучить Энциклопедию Графдизайна.</b> <p>В этой энциклопедии вы найдёте графические системы и графические идеи. Про графические системы было пояснение на этой странице выше, а графические идеи это по сути точечные приёмы, которые мы тоже будем частично будем разбирать на курсе Плакатного Графдизайна.</p>
                </SC.Descr>
            </SC.PinterestContent>
            <SC.InDesignContent>
                <CourseList data={dataInDesign} />
                <SC.Descr>
                    <p>Вдобавок, если вы совершенно незнакомы с программой Adobe InDesign, то пройдите этот бесплатный курс, потому что задания на курсе Плакатный Графдизайн именно в программе Adobe Indesign. Поэтому вам надо знать минимально базовые вещи, например, как создавать страницы, как работать со свотчами и текстовыми фреймами.
                    </p>
                    <SC.Light>
                    P.S. Творческие макеты в рамках Плакатного Графдизайна вы можете выполнять в любой удобной для вас программе (Adobe InDesign, Illustrator, Photoshop).
                    </SC.Light>
                </SC.Descr>
            
            </SC.InDesignContent>
        </SC.Wrapper>
    )
}

export default PinterestCompilationCurriculum
