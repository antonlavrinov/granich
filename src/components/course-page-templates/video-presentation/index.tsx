import React from 'react'
import { Container } from '../../style';
import * as SC from './VideoPresentation';

const VideoPresentation = () => {
    return (
        <SC.Section>
            <Container>
                <SC.Wrapper>
                    <SC.Title>
                        Основан на композициях
                    </SC.Title>
                    <SC.Descr>
                        Если вам нравится этот урок, то вы влюбитесь и в этот курс :)
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
                </SC.Wrapper>
            </Container>
        </SC.Section>
    )
}

export default VideoPresentation
