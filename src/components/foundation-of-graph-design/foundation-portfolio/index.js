import React, { useState, useEffect } from "react"
import { Container } from "../../style";
import Masonry from '@mui/lab/Masonry';
import * as SC from "./FoundationPortfolio";
import Zoom from "react-medium-image-zoom"
import { useMediaQuery } from "react-responsive"

const FoundationPortfolio = ({posters}) => {

    const [isShowMore, setIsShowMore] = useState(false);
    const [isVisiblePosters, setIsVisiblePosters] = useState(null)

    const isMobile = useMediaQuery({
      query: "(max-width: 575px)",
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisiblePosters(true);
        }, 5000)
        
        
        return () => clearTimeout(timeout);
    }, []);

  return (
    <SC.Section>
      <Container>
          <SC.Wrapper>
          <SC.SectionTitle>Некоторые работы учеников</SC.SectionTitle>
        <SC.MasonryWrapper>
            <SC.MasonryOverflow isShowMore={isShowMore}>
                {/* {isVisiblePosters && ( */}
                    <Masonry columns={isMobile ? 2 : 4} spacing={2} style={{margin: 0}}>
                        {posters.map((item, index) => (
                            <SC.PosterWrapper key={index}>
                                
                                <Zoom wrapStyle={{
                                    cursor: "pointer",
                                    height: "100%",
                                    display: "block"
                                }}>
                                    <SC.Image src={item.node.posterImage.src} alt="poster"/>
                                </Zoom>
                                <SC.PosterAuthor>
                                    <SC.AuthorName>{item.node.posterAuthor}</SC.AuthorName>
                                    <SC.Course>{item.node.posterStream}</SC.Course>
                                </SC.PosterAuthor>
                            </SC.PosterWrapper>
                        ))}
                    </Masonry>
                {/* )} */}
            </SC.MasonryOverflow>
            {!isShowMore && (
                <SC.ShowMoreWrapper >
                    <button onClick={() => setIsShowMore(true)}>Показать ещё</button>
                </SC.ShowMoreWrapper>
            )}
        </SC.MasonryWrapper>
          </SC.Wrapper>
        
      </Container>
    </SC.Section>
  )
}

export default FoundationPortfolio
