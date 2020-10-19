import React, {memo, useState, useRef, useEffect } from 'react'
import { Container } from '../style';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill'
import { INLINES } from '@contentful/rich-text-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    CurriculumItemFrame,
    CurriculumItemTitle,
    CurriculumItemImportantDescr,
    CurriculumImportantText,
    CurriculumItemContent,
    CurriculumLessonColumn,
    CurriculumLesson,
    CurriculumContainer,
    CurriculumContentWrapper,
    CurriculumContentColumn,
    CurriculumSection,
    CurriculumWrapper,
    CurriculumHeader,
    CurriculumHeaderTitle,
    CurriculumTitleAndContent,
    CurriculumBonusBlock,
    CurriculumContent,
    CurriculumAccordeon,
    EmptyText,
    CurriculumAccordionMobile,
    CurriculumAccordionItem,
    CurriculumAccordionHeading,
} from '../curriculum/styles';
import PlusImage from '../../assets/images/plus.png';
import MinusImage from '../../assets/images/minus.png';
import { useMediaQuery } from 'react-responsive'

// import LazyLoad from 'react-lazyload';





const toggle = {
    cursor: 'pointer',
    verticalAlign: 'middle'
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
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
    useEffect(() => {
      if (ref.current) ro.observe(ref.current)
      return () => ro.disconnect()
    }, [])
    return [{ ref }, bounds]
  }

const CurriculumItem = memo(({ type, children, title, tag, style, descr, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    // const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <CurriculumItemFrame type={type ? 1 : 0}>

            {/* <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} /> */}
            <CurriculumContainer type={type ? 1 : 0} onClick={() => setOpen(!isOpen)}>
                <CurriculumLessonColumn>
                    <CurriculumLesson type={type ? 1 : 0}>{tag}</CurriculumLesson>
                </CurriculumLessonColumn>

                <CurriculumItemTitle style={style}>{title}</CurriculumItemTitle>
                {!type && descr && <CurriculumItemImportantDescr style={style}>{descr}</CurriculumItemImportantDescr>}
                
                {!isOpen ? (
                    // <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
                    <img style={{ ...toggle, opacity: children ? 1 : 0.3 }} src={PlusImage} alt="plus"/>
                ) : (
                    <img style={{ ...toggle, opacity: children ? 1 : 0.3 }} src={MinusImage} alt="minus"/>
                    // <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
                )}
            </CurriculumContainer>

            <CurriculumItemContent style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
                
            </CurriculumItemContent>

        </CurriculumItemFrame>

    )
})





const options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri}  rel="noopener noreferrer" target='_blank' >{node.content[0].value}</a>;
        }
    },   
}



const CourseCurriculum = ({data, dataHeader}) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 575px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 575px)'
    })
    return (
        <CurriculumSection>
            <Container>
                <CurriculumWrapper>
                    <CurriculumHeader>
                        <CurriculumTitleAndContent>
                            <CurriculumHeaderTitle>{dataHeader.curriculumHeaderTitle}</CurriculumHeaderTitle>
                            {dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode && (
                                <CurriculumContent>
                                    {documentToReactComponents(dataHeader.childContentfulGranichCourseCurriculumHeaderCurriculumHeaderSummaryRichTextNode.json)}
                                </CurriculumContent>
                            )}

                        </CurriculumTitleAndContent>
                        <CurriculumBonusBlock>
                            {documentToReactComponents(dataHeader.curriculumHeaderInfo.json, options)}
                        </CurriculumBonusBlock>
                    </CurriculumHeader>
                    {isMobile && (
                        <CurriculumAccordionMobile allowMultipleExpanded allowZeroExpanded>
                            {/* <LazyLoad once> */}
                                {data.edges.map((tab, idx) => {
                                    const type = tab.node.curriculumType;
                                    const tag = tab.node.curriculumTagName;
                                    const descr = tab.node.curriculumImportantDescr;
                                    const title = tab.node.curriculumTitle;
                                    return (
                                        <CurriculumAccordionItem key={tab.node.id}>
                                            <CurriculumAccordionHeading>
                                                <AccordionItemButton className="accordion-curriculum-button">
                                                        <CurriculumLessonColumn>
                                                            <CurriculumLesson type={type ? 1 : 0}>{tag}</CurriculumLesson>
                                                        </CurriculumLessonColumn>
                                                        <CurriculumItemTitle >{title}</CurriculumItemTitle>


                                                    
                                                    
                                                </AccordionItemButton>
                                            </CurriculumAccordionHeading>
                                            <AccordionItemPanel>
                                                    {tab.node.curriculumType ? (
                                                        <>
                                                        {tab.node.childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && <CurriculumContentColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                            {tab.node.childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                            {tab.node.childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                            {tab.node.childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                        </>
                                                    
                                                    ) : (
                                                        <>
                                                            {!type && descr && <CurriculumItemImportantDescr>{descr}</CurriculumItemImportantDescr>}
                                                            {tab.node.childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode && <CurriculumImportantText className="link_out"><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode.json, options)}</CurriculumImportantText>}
                                                        </>
                                                    )}
                                            </AccordionItemPanel>
                                        </CurriculumAccordionItem>
                                    )
                                } )}
                            {/* </LazyLoad> */}
                        

                        </CurriculumAccordionMobile>
                    )}
                    {isDesktop && (
                        <CurriculumAccordeon>
                            {data.edges.map((tab, idx) => {
                                return (
                                    <CurriculumItem descr={tab.node.curriculumImportantDescr} type={tab.node.curriculumType} key={idx} title={tab.node.curriculumTitle} tag={tab.node.curriculumTagName}>
                                        <CurriculumContentWrapper type={tab.node.curriculumType ? 1 : 0}>
                                            {tab.node.curriculumType ? (
                                                <>
                                                {tab.node.childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode && <CurriculumContentColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumFirstColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                    {tab.node.childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumSecondColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                    {tab.node.childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumThirdColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                    {tab.node.childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode && <CurriculumContentColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumFourthColumnRichTextNode.json)}</CurriculumContentColumn>}
                                                </>
                                            
                                            ) : (
                                                <>
                                                    {tab.node.childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode && <CurriculumImportantText className="link_out"><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseCurriculumCurriculumImportantTextRichTextNode.json, options)}</CurriculumImportantText>}
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
