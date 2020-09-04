import React, {memo, useState, useRef, useEffect } from 'react'
import { Container } from '../style';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill'

import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Plus,
    Minus,
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
    CurriculumBonus,
    CurriculumContent,
    CurriculumContentText,
    CurriculumContentCount,
    CurriculumAccordeon,
    EmptyText,
    CurriculumAccordionMobile,
    CurriculumAccordionItem,
    CurriculumAccordionHeading,
} from '../curriculum/styles';





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
                    <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
                ) : (
                    <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
                )}
            </CurriculumContainer>

            <CurriculumItemContent style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
                
            </CurriculumItemContent>

        </CurriculumItemFrame>

    )
})









const CourseCurriculum = ({data}) => {
    return (
        <CurriculumSection>
            <Container>
                <CurriculumWrapper>
                    <CurriculumHeader>
                        <CurriculumTitleAndContent>
                            <CurriculumHeaderTitle>Программа курса</CurriculumHeaderTitle>
                            <CurriculumContent>
                                <CurriculumContentCount>12</CurriculumContentCount>
                                <CurriculumContentText>Тематических видеолекции</CurriculumContentText>
                            </CurriculumContent>
                        </CurriculumTitleAndContent>
                        <CurriculumBonusBlock>
                            <CurriculumBonus>
                                <span>+ 8 бесплатных презентаций графсистем</span>
                                Помимо уроков, вы получите дополнительные презентации по графсистемам: Swiss, Техно, VHS, Нео Гео, UI-дизайн, Коллаж, Киберпанк и другие.
                            </CurriculumBonus>
                            <CurriculumBonus>
                                <span>+ 8 бесплатных презентаций графсистем</span>
                                Помимо уроков, вы получите дополнительные презентации по графсистемам: Swiss, Техно, VHS, Нео Гео, UI-дизайн, Коллаж, Киберпанк и другие.
                            </CurriculumBonus>
                        </CurriculumBonusBlock>
                    </CurriculumHeader>
                    <CurriculumAccordionMobile allowMultipleExpanded allowZeroExpanded>
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
                                               {tab.node.curriculumFirstColumn && <CurriculumContentColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.curriculumFirstColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumSecondColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumSecondColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumThirdColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumThirdColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumFourthColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumFourthColumn.json)}</CurriculumContentColumn>}
                                            </>
                                         
                                        ) : (
                                            <>
                                                {!type && descr && <CurriculumItemImportantDescr>{descr}</CurriculumItemImportantDescr>}
                                                {tab.node.curriculumImportantText && <CurriculumImportantText><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.curriculumImportantText.json)}</CurriculumImportantText>}
                                            </>
                                        )}
                                </AccordionItemPanel>
                            </CurriculumAccordionItem>
                        )
                    } )}

                    </CurriculumAccordionMobile>
                    
                    <CurriculumAccordeon>
                        {data.edges.map((tab, idx) => {
                            return (
                                <CurriculumItem descr={tab.node.curriculumImportantDescr} type={tab.node.curriculumType} key={idx} title={tab.node.curriculumTitle} tag={tab.node.curriculumTagName}>
                                    <CurriculumContentWrapper type={tab.node.curriculumType ? 1 : 0}>
                                        {tab.node.curriculumType ? (
                                            <>
                                               {tab.node.curriculumFirstColumn && <CurriculumContentColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.curriculumFirstColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumSecondColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumSecondColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumThirdColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumThirdColumn.json)}</CurriculumContentColumn>}
                                                {tab.node.curriculumFourthColumn && <CurriculumContentColumn>{documentToReactComponents(tab.node.curriculumFourthColumn.json)}</CurriculumContentColumn>}
                                            </>
                                         
                                        ) : (
                                            <>
                                                {tab.node.curriculumImportantText && <CurriculumImportantText><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.curriculumImportantText.json)}</CurriculumImportantText>}
                                            </>
                                        )}

                                   
                                    </CurriculumContentWrapper>
                                </CurriculumItem>
                            )
                        })}
                    </CurriculumAccordeon>

                </CurriculumWrapper>
            </Container>
        </CurriculumSection>
    )
}

export default CourseCurriculum
