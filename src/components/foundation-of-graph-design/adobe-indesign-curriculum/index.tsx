import React from "react"
import CourseList from "../../main-page/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./AdobeIndesignCurriculum"

const AdobeIndesignCurriculum = ({ data }) => {
    return (
        <SC.Wrapper>
            <SC.Descr>
                <p>На Фундаменте Графдизайна вы будете получать домашнее задание в многостраничных презентациях программы Adobe InDesign. И чтобы комфортно выполнять ДЗ вам нужно знать необходимый минимум об InDesign. Хотя бы как создавать новые страницы, работать с текстовыми фреймами/свотчами, как упаковывать ДЗ.</p>
                <p>Для этого на ютубе Школы есть <span>бесплатный курс</span> Granich InDesign. Уроки смонтированы плотно, никакой тягомотины. Посмотрите их, чтобы вас не тормозили технические аспекты во время изучения графдизайна.</p>
                <p>P.S. А если успеете прислать ДЗ с бесплатного курса <b>до старта</b> вашего потока на Фундаменте Графдизайна, то получите <span>бесплатный видеоразбор</span> этого ДЗ.</p>
<i>Об остальных программах Adobe мы поговорим уже на самом курсе, ровно в той степени, чтобы вы могли повторить теорию Фундамента Графдизайна</i>
            </SC.Descr>
            <CourseList data={data} />
        </SC.Wrapper>
    )
}

export default AdobeIndesignCurriculum
