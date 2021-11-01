import React, { memo, useState, useRef, useEffect } from "react"
import { Container } from "../style"
import { useSpring, a } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import {
  CurriculumItemFrame,
  CurriculumItemTitle,
  CurriculumItemImportantDescr,
  // CurriculumImportantText,
  CurriculumItemContent,
  CurriculumLessonColumn,
  CurriculumLesson,
  CurriculumContainer,
  CurriculumContentWrapper,
  CurriculumContentColumn,
  CurriculumSection,
  CurriculumWrapper,
  // CurriculumHeader,
  // CurriculumHeaderTitle,
  // CurriculumTitleAndContent,
  // CurriculumBonusBlock,
  // CurriculumContent,
  CurriculumAccordeon,
  EmptyText,
  CurriculumAccordionMobile,
  CurriculumAccordionItem,
  CurriculumAccordionHeading,
  CurriculumContentText,
  ContentCardsWrapper,
} from "../curriculum/styles"
import PlusImage from "../../assets/images/plus.png"
import MinusImage from "../../assets/images/minus.png"
import PlusImageBlue from "../../assets/images/plus_blue.png"
import MinusImageBlue from "../../assets/images/minus_blue.png"
import { useMediaQuery } from "react-responsive"
import CurriculumHead from "../curriculum/CurriculumHead"
import ContentCard from "../../components/main-page/precourse-preparation/content-card"

// import LazyLoad from 'react-lazyload';

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: node => {
      if (node.data.uri.indexOf("youtube.com") !== -1) {
        return (
          <iframe
            src={node.data.uri}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      } else {
        return (
          <a href={node.data.uri} rel="noopener noreferrer" target="_blank">
            {node.content[0].value}
          </a>
        )
      }
    },
    [INLINES.EMBEDDED_ENTRY]: node => {
      console.log("NODE EMBED ENTRY", node)
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      console.log("NODE BLOCK EMBED ENTRY", node)
      console.log("NODE BLOCK EMBED ENTRY children", children)
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, title } = node.data.target.fields
      // const mimeType = file['en-US'].contentType
      // const mimeGroup = mimeType.split('/')[0]
      return (
        <img
          title={title ? title["en-US"] : null}
          alt={title ? title["en-US"] : null}
          src={file["en-US"].url}
        />
      )

      // switch (mimeGroup) {
      //   case 'image':

      //   case 'application':
      //     return <a
      //       alt={description ?  description['en-US'] : null}
      //       href={file['en-US'].url}
      //       >{ title ? title['en-US'] : file['en-US'].details.fileName }
      //     </a>
      //   default:
      //     return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      // }
    },
  },
}

const toggle = {
  cursor: "pointer",
  verticalAlign: "middle",
}

//helpers
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

const CurriculumItem = memo(
  ({
    type,
    children,
    title,
    tag,
    style,
    descr,
    courseTitle,
    open,
    defaultOpen = false,
    numberOfLessons,
    customLessonColor
  }) => {
    // const [isOpen, setOpen] = useState(defaultOpen)
    const [isOpen, setOpen] = useState(
      open === 1 && courseTitle === "Осознанный Фриланс" ? true : defaultOpen
    )
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      },
    })
    // const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
      <CurriculumItemFrame
        numberOfLessons={numberOfLessons}
        type={type ? 1 : 0}
      >
        {/* <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} /> */}
        <CurriculumContainer
          type={type ? 1 : 0}
          onClick={() => setOpen(!isOpen)}
        >
          <CurriculumLessonColumn>
            <CurriculumLesson customLessonColor={customLessonColor} type={type ? 1 : 0}>{tag}</CurriculumLesson>
          </CurriculumLessonColumn>

          <CurriculumItemTitle style={style}>
            {documentToReactComponents(title, options)}
          </CurriculumItemTitle>
          {!type && descr && (
            <CurriculumItemImportantDescr style={style}>
              {descr}
            </CurriculumItemImportantDescr>
          )}

          {!isOpen ? (
            // <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
            <img
              style={{ ...toggle, opacity: children ? 1 : 0.3 }}
              src={courseTitle === "Графические метафоры" ? PlusImageBlue : PlusImage}
              alt="plus"
            />
          ) : (
            <img
              style={{ ...toggle, opacity: children ? 1 : 0.3 }}
              src={courseTitle === "Графические метафоры" ? MinusImageBlue : MinusImage}
              alt="minus"
            />
            // <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
          )}
        </CurriculumContainer>

        <CurriculumItemContent
          style={{
            opacity,
            height: isOpen && previous === isOpen ? "auto" : height,
          }}
        >
          <a.div style={{ transform }} {...bind} children={children} />
        </CurriculumItemContent>
      </CurriculumItemFrame>
    )
  }
)

const CourseCurriculum = ({
  data,
  dataHeader,
  compressedHeader,
  lessonsCount,
  courseTitle,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-width: 575px)",
  })
  const numberOfLessons = data.edges.filter(item => {
    return item.node.curriculumType === true
  }).length

  return (
    <CurriculumSection>
      <Container>
        <CurriculumWrapper>
          <CurriculumHead
            compressedHeader={compressedHeader}
            dataHeader={dataHeader}
            lessonsCount={lessonsCount}
          />

          {isMobile && (
            <CurriculumAccordionMobile allowMultipleExpanded allowZeroExpanded>
              {/* <LazyLoad once> */}
              {data.edges.map((tab, idx) => {
                const type = tab.node.curriculumType
                const tag = tab.node.curriculumTagName
                const descr = tab.node.curriculumImportantDescr
                // const title = tab.node.curriculumTitle;
                const title =
                  tab.node
                    .childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode
                    .json

                return (
                  <CurriculumAccordionItem key={tab.node.id}>
                    <CurriculumAccordionHeading>
                      <AccordionItemButton className={`accordion-curriculum-button ${courseTitle === "Графические метафоры" ? "blue-theme" : "" }`}>
                        <CurriculumLessonColumn>
                          <CurriculumLesson type={type ? 1 : 0} customLessonColor={tab.node.customLessonColor}>
                            {tag}
                          </CurriculumLesson>
                        </CurriculumLessonColumn>
                        <CurriculumItemTitle>
                          {documentToReactComponents(title, options)}
                        </CurriculumItemTitle>
                      </AccordionItemButton>
                    </CurriculumAccordionHeading>
                    <AccordionItemPanel>
                      {tab.node.curriculumColumnsType ? (
                        <>
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && (
                            <CurriculumContentColumn>
                              <EmptyText>sometext</EmptyText>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                        </>
                      ) : (
                        <>
                          {!type && descr && (
                            <CurriculumItemImportantDescr>
                              {descr}
                            </CurriculumItemImportantDescr>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && (
                            <CurriculumContentText className="link_out" courseTitle={courseTitle}>
                              <EmptyText>sometext</EmptyText>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode
                                  .json,
                                options
                              )}
                              {tab.node.customContent && tab.node.customContent}
                              {/* {tab.node.contentCards && (
                                <ContentCardsWrapper>
                                  {tab.node.contentCards.map((el, idx) => {
                                    return (
                                      <ContentCard content={el} key={idx} />
                                    )
                                  })}
                                </ContentCardsWrapper>
                              )} */}
                            </CurriculumContentText>
                          )}
                        </>
                      )}
                    </AccordionItemPanel>
                  </CurriculumAccordionItem>
                )
              })}
              {/* </LazyLoad> */}
            </CurriculumAccordionMobile>
          )}
          {isDesktop && (
            <CurriculumAccordeon>
              {data.edges.map((tab, idx) => {
                // console.log('LENGTH', data.edges.filter((item) => {return item.node.curriculumType === true}).length)
                return (
                  <CurriculumItem
                    open={idx}
                    courseTitle={courseTitle}
                    numberOfLessons={numberOfLessons}
                    descr={tab.node.curriculumImportantDescr}
                    type={tab.node.curriculumType}
                    key={idx}
                    title={
                      tab.node
                        .childContentfulGranichCourseCurriculumCurriculumTitleWithAssetRichTextNode
                        .json
                    }
                    tag={tab.node.curriculumTagName}
                    customLessonColor={tab.node.customLessonColor}
                  >
                    <CurriculumContentWrapper
                      type={tab.node.curriculumType ? 1 : 0}
                    >
                      {tab.node.curriculumColumnsType ? (
                        <>
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && (
                            <CurriculumContentColumn>
                              <EmptyText>sometext</EmptyText>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode && (
                            <CurriculumContentColumn>
                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode
                                  .json
                              )}
                            </CurriculumContentColumn>
                          )}
                        </>
                      ) : (
                        <>
                          {tab.node
                            .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && (
                            <CurriculumContentText className="link_out" courseTitle={courseTitle}>
                              <EmptyText>sometext</EmptyText>

                              {documentToReactComponents(
                                tab.node
                                  .childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode
                                  .json,
                                options
                              )}
                              {tab.node.customContent && tab.node.customContent}
                              {/* {tab.node.contentCards && (
                                <ContentCardsWrapper>
                                  {tab.node.contentCards.map((el, idx) => {
                                    return (
                                      <ContentCard content={el} key={idx} />
                                    )
                                  })}
                                </ContentCardsWrapper>
                              )} */}
                            </CurriculumContentText>
                          )}
                        </>
                      )}
                    </CurriculumContentWrapper>
                  </CurriculumItem>
                )
              })}
            </CurriculumAccordeon>
          )}
        </CurriculumWrapper>
      </Container>
    </CurriculumSection>
  )
}

export default CourseCurriculum
