import React from 'react'
import ContentCard from '../../main-page/precourse-preparation/content-card';
import { Container } from '../../style';
import * as SC from './VideoPresentation';
import Arrow from "/src/assets/svgs/poster-graphic-design/arrow.svg";

const VideoPresentation = ({data}) => {
    return (
        <SC.Section>
            <Container>
                <SC.Wrapper>
                        <SC.StyledContentCard  >
                            <ContentCard content={data} />
                            <SC.Hint><Arrow/><span>*Тык*, чтобы глянуть, <br/>о чём речь</span></SC.Hint>
                        </SC.StyledContentCard>
                    <SC.Content>
                        
                        <SC.Title>
                        
                            Курс основан на <span>Энциклопедии графдизайна</span>
                        </SC.Title>
                        <SC.Descr>
                            Я с командой уже долгое время систематизирую различные визуальные решения для коммерческих дизайнеров. Всё это мы собираем в так называемую Энциклопедию Графдизайна. Это огромный систематизированный кладезь референсов для графических и веб-дизайнеров. Именно на базе энциклопедии мы разработали курс Плакатный Графдизайн.
                        </SC.Descr>
                    </SC.Content>
                </SC.Wrapper>
            </Container>
        </SC.Section>
    )
}

export default VideoPresentation



