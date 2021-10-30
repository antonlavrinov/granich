import React from "react"
import { Container } from "../../style"
import * as SC from "./VideoPresentation"

type Props = {
  data: any
}

const VideoPresentationOffer: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          {/* <SC.Header>
            <SC.Title>
              <span>Тренировка </span>графических метафор
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
            <SC.HeaderDescr>
              Курс для тех, кто хочет создавать графдизайн, наполненный смыслом: айдентику, упаковки, обложки книг и музыкальных альбомов
            </SC.HeaderDescr>
          </SC.Header> */}
          <SC.VideoSection>
            <SC.VideoSectionContent>
              <SC.VideoSectionTitle>
                  Курс основан на метафорах
              </SC.VideoSectionTitle>
              <SC.VideoSectionDescr>
                  Посмотрите этот урок. Если он вам понравится, тогда вам точно следует тренировать с нами графические метафоры. На курсе мы подробнее разберём различные подходы к метафорам.
              </SC.VideoSectionDescr>
            </SC.VideoSectionContent>
            <SC.YoutubeBlock>
                <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                <div className="ldio-6b142d04hhl">
                    <div></div>
                </div>
                </div>
                <iframe
                title="youtubeFrame"
                width="100%"
                src={`https://www.youtube.com/embed/dJUDKUdmaQE?vq=hd1080`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </SC.YoutubeBlock>
          </SC.VideoSection>
          <SC.VideoSection>
            <SC.VideoSectionContent>
              <SC.VideoSectionTitle>
                  Графметафоры связаны с образами
              </SC.VideoSectionTitle>
              <SC.VideoSectionDescr>
              Можно дополнительно посмотреть и этот урок. На нём мы, в том числе, даём определение образов.
На курсе вы будете раскладывать ниши бизнеса на образы и переводить их в графические метафоры.
              </SC.VideoSectionDescr> 
            </SC.VideoSectionContent>
            <SC.YoutubeBlock>
                <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                <div className="ldio-6b142d04hhl">
                    <div></div>
                </div>
                </div>
                <iframe
                title="youtubeFrame"
                width="100%"
                src={`https://www.youtube.com/embed/X3MQHL72RhE`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </SC.YoutubeBlock>
          </SC.VideoSection>
          
          {/* <SC.YoutubeBlock>
            <div className="loadingio-spinner-rolling-ta5f1nqy5p">
              <div className="ldio-6b142d04hhl">
                <div></div>
              </div>
            </div>
            <iframe
              title="youtubeFrame"
              width="100%"
              src={`https://www.youtube.com/embed/dJUDKUdmaQE?vq=hd1080`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SC.YoutubeBlock> */}
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default VideoPresentationOffer
