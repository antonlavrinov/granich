import React from "react"
import { Container } from "../../style"
import * as SC from "./VideoPresentation"

const VideoPresentationOffer = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Header>
            <SC.Title>
              <span>Графические метафоры </span>как путь в айдентику
            </SC.Title>
            <SC.TagList>
              {data.courseStream && (
                <SC.MainTag>
                  <SC.Potok />
                  {data.courseStream} поток
                </SC.MainTag>
              )}
              {data.courseStartAndEnd && (
                <SC.Tag>
                  <SC.Date />
                  {data.courseStartAndEnd}
                </SC.Tag>
              )}
              {data.courseTags.map((tag, idx) => {
                return <SC.Tag key={idx}>{tag}</SC.Tag>
              })}
            </SC.TagList>
          </SC.Header>
          <SC.YoutubeBlock>
            <div className="loadingio-spinner-rolling-ta5f1nqy5p">
              <div className="ldio-6b142d04hhl">
                <div></div>
              </div>
            </div>
            <iframe
              title="youtubeFrame"
              width="100%"
              src={`https://www.youtube.com/embed/F4DCWCKmtyY?vq=hd1080`}
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

export default VideoPresentationOffer
