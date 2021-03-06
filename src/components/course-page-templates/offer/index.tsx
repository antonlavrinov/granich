import React, { useState, useEffect } from "react"
import CourseTemplateOffer from "./course"
import MasterClassTemplateOffer from "./master-class"

const CourseOffer = ({ data, allowPosters }) => {
  const [postersVisibility, setPostersVisibility] = useState(false)
  useEffect(() => {
    let timer = setTimeout(() => setPostersVisibility(true), 800)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      {data.courseType === "Курс" ? (
        <CourseTemplateOffer
          postersVisibility={postersVisibility}
          allowPosters={allowPosters}
          data={data}
        />
      ) : (
        <MasterClassTemplateOffer data={data} />
      )}
    </>
  )
}

export default CourseOffer
