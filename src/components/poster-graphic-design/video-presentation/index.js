import React from 'react'
import ContentCard from '../../main-page/precourse-preparation/content-card';
import { Container } from '../../style';
import * as SC from './VideoPresentation';

const VideoPresentation = ({data}) => {
    return (
        <SC.Section>
            <Container>
                <SC.Wrapper>
                    <SC.Title>
                        Курс основан на энциклопедии графического дизайна
                    </SC.Title>
                    <SC.Content>
                        <SC.StyledContentCard  >
                            <ContentCard content={data} />
                        </SC.StyledContentCard>
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



