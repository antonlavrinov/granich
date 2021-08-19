import React from "react"
import CourseList from "../../main-page/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./AdobeIndesignCurriculum"

const AdobeIndesignCurriculum = ({ data }) => {
    return (
        <SC.Wrapper>
            <SC.Descr>
                Чтобы сосредоточиться на обучении графическому дизайну, я вывел информацию по программе Adobe InDesign в отдельный <span>бесплатный курс.</span> В нём есть домашнее задание, которое вам следует пройти, чтобы в дальнейшем не отвлекаться на технические аспекты InDesign, а полностью погрузиться в изучение графического дизайна. Участники Фундамента Графдизайна получают <span>бесплатный видеоразбор</span> ДЗ с курса Granich InDesign (в случае если сдадут ДЗ до старта своего потока Фундамента Графдизайна).<i>Об остальных программах Adobe мы поговорим уже на самом курсе, ровно в той степени, чтобы вы могли повторить теорию Фундамента Графдизайна</i>
            </SC.Descr>
            <CourseList data={data} />
        </SC.Wrapper>
    )
}

export default AdobeIndesignCurriculum
