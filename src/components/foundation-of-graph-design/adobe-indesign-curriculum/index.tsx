import React from "react"
import CourseList from "../../main-page/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./AdobeIndesignCurriculum"

const AdobeIndesignCurriculum = ({ data }) => {
    return (
        <SC.Wrapper>
            <SC.Descr>
                Чтобы сосредоточиться на обучении графическому дизайну, мы вывели в отдельный <span>бесплатный курс</span> информацию по программе Adobe InDesign. В нём есть домашнее задание, которое вам следует пройти, чтобы в дальнейшем не отвлекаться на технические аспекты, и полностью погрузиться в графический дизайн. Участники Фундамента Графдизайна получают <span>бесплатный видеоразбор</span> ДЗ с курса Granich InDesign. <i>P.S. По программам Illustrator и Photoshop будут необходимые уроки уже внутри Фундамента Графдизайна.</i>
            </SC.Descr>
            <CourseList data={data} />
        </SC.Wrapper>
    )
}

export default AdobeIndesignCurriculum
