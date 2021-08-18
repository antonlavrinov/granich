import React from 'react'
import { Container } from '../../style';
import * as SC from './VideoPresentation';

const VideoPresentation = () => {
    return (
        <SC.Section>
            <Container>
                <SC.Wrapper>
                    <SC.Title>
                        Курс основан на композициях
                    </SC.Title>
                    <SC.Content>
                        <SC.Descr>
                            Посмотрите этот урок. Если он вам понравится, то вы точно влюбитесь в Фундамент Графдизайна. На нём мы подробнее разберём эту и другие важные композиции.
                        </SC.Descr>
                        <SC.YoutubeBlock>
                            <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                            <div className="ldio-6b142d04hhl">
                                <div></div>
                            </div>
                            </div>
                            <iframe
                            title="youtubeFrame"
                            width="100%"
                            src={`https://www.youtube.com/embed/9AC-Z_mmBIE`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </SC.YoutubeBlock>
                    </SC.Content>
                    
                </SC.Wrapper>
            </Container>
        </SC.Section>
    )
}

export default VideoPresentation
