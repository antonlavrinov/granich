import React from "react"
import Posters from "."
import * as SC from "./Posters"
import { useMediaQuery } from "react-responsive"

function PostersWrapper({ postersVisibility, data }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  })

  return (
    <>
      <SC.Circle></SC.Circle>
      <SC.Placeholder>
        <SC.CircleMobile></SC.CircleMobile>
        <SC.MobileSpinner
          style={{ display: `${postersVisibility ? "none" : "block"}` }}
        >
          <div className="loadingio-spinner-rolling-ta5f1nqy5p">
            <div className="ldio-6b142d04hhl">
              <div></div>
            </div>
          </div>
        </SC.MobileSpinner>

        {isMobile && (
          <>
            <SC.RootWrapper>
              <Posters postersCollection={data.coursePostersCollection} />
            </SC.RootWrapper>
          </>
        )}
      </SC.Placeholder>
    </>
  )
}

export default PostersWrapper
