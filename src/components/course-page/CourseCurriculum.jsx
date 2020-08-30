import React, {memo, useState, useRef, useEffect } from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill'
import PlusSign from '../../assets/svgs/plus-sign.svg';
import MinusSign from '../../assets/svgs/minus-sign.svg';
import { animated } from 'react-spring';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Plus = styled(props => <PlusSign {...props}/>)`
    width: 2.3vw;
    height: 2.3vw;
    margin-left: auto;
`
const Minus = styled(props => <MinusSign {...props}/>)`
    width: 2.3vw;
    height: 2.3vw;
    margin-left: auto;
`

const CurriculumItemFrame = styled.div`
    position: relative;
    // display: flex;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    color: white;
    fill: white;
    // width: 100%;
    overflow: hidden;
    border-top: 0.1vw solid #E4E4E4;
    margin-left: 1.5vw;
    margin-right: 1.5vw;

    // :first-child {
    //     border-top: 0.1vw solid #E4E4E4;
    // }
    :last-child {
        border-top: none;
    }

    ${props => !props.type && `
        background: #F2F2F2;
        border-radius: 0.5vw;
        border: none;
        margin: 0;

    `}
`

const CurriculumItemTitle = styled('span')`
  vertical-align: middle;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 2.3vw;
  user-select: none;
  margin-top: -0.3vw;
  margin-right: 1vw;

`

const CurriculumItemImportantDescr = styled.span`
    font-size: 1.15vw;
    color: var(--granich-grey);
    user-select: none;
`

const CurriculumImportantText = styled.div`
    padding: 1vw;
    font-size: 1.15vw;
    line-height: 1.35;


    b {
        font-weight: 500;
        display: block;
        color: var(--granich-black);
    }

    p {
        color: var(--granich-grey);
        display: block;
        white-space: normal;
        margin-bottom: 0.4vw;
    }
`

const CurriculumItemContent = styled(animated.div)`
    will-change: transform, opacity, height;
    overflow: hidden;
`

const CurriculumLesson = styled.div`
    font-size: 1.15vw;
    border: 0.1vw solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    padding: 0.4vw 0;
    font-weight: 500;
    display: inline-block;
    min-width: 5.5vw;
    text-align: center;
    user-select: none;
    ${props => !props.type && `
        background: var(--granich-red);
        color: white;
    `}
`

const CurriculumLessonColumn = styled.div`
    width: 6.8vw;
`

const CurriculumContainer = styled.div`
    display: flex;
    padding: 1.7vw 0vw;
    align-items: center;
    :hover {
        cursor: pointer;
    }
    ${props => !props.type && `
        padding: 1.7vw 1.5vw;
    `}
`

const CurriculumContentWrapper = styled.div`

    display: flex;
    align-items: flex-start;
    padding-left: 5.8vw;
    padding-top: 0vw;
    padding-bottom: 1.2vw;
    ${props => !props.type && `
        padding-left: 7.3vw;
    `}
`

const CurriculumContentColumn = styled.div`
    // background: blue;
    width: 14.5vw;
    min-width: 14.5vw;
    padding: 1vw;
    margin-right: 1vw;
    font-size: 1.15vw;
    line-height: 1.35;

    b {
        font-weight: 500;
        display: block;
        color: var(--granich-black);
    }

    p {
        color: var(--granich-grey);
        display: block;
        min-width: 14.5vw;
        white-space: normal;
        margin-bottom: 0.7vw;
    }
`



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
                {/* <CurriculumLessonColumn>
                    <CurriculumLesson type={type ? 1 : 0}>{tag}</CurriculumLesson>
                </CurriculumLessonColumn>

                <CurriculumItemTitle style={style}>{title}</CurriculumItemTitle>
                {!type && descr && <CurriculumItemImportantDescr style={style}>{descr}</CurriculumItemImportantDescr>}
                
                {!isOpen ? (
                    <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
                ) : (
                    <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
                )} */}
            </CurriculumContainer>

            <CurriculumItemContent style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
                
            </CurriculumItemContent>

        </CurriculumItemFrame>

    )
})


const CurriculumSection = styled.section`
    margin-bottom: 4vw;


`


const CurriculumWrapper = styled.div`
    // display: flex;
    // justify-content: space-between;
    background: white;
    padding: 5vw 1.8vw;
    border-radius: 0.5vw;
`

const CurriculumHeader = styled.div`
    display: flex;
    margin-bottom: 5.5vw;
    padding: 0 1.5vw;
`

const CurriculumHeaderTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 6.4vw;

    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
    }
    
`
const CurriculumTitleAndContent = styled.div`
    margin-right: 0vw;
    min-width: 35.5vw;
` 

const CurriculumBonusBlock = styled.div`

`

const CurriculumBonus = styled.div`
    background: #f2f2f2;
    border-radius: 0.5vw;
    padding: 1.4vw 1.6vw;
    font-size: 1.15vw;
    line-height: 1.3;
    color: var(--granich-light-grey);
    margin-bottom: 1.3vw;
    :last-child {
        margin-bottom: 0;
    }
    span {
        color: var(--granich-black);
        font-size: inherit;
        font-weight: 500;
        display: block;
    }
`
const CurriculumContent = styled.div`
    display: flex;
    align-items: center;

`
const CurriculumContentText = styled.div`
    font-size: 1.15vw;
    width: 9vw;
    line-height: 1.45vw;
    font-weight: 500;
`

const CurriculumContentCount = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 5.4vw;
    font-weight: 500;
    position: relative;
    background: #e2e2e2;
    border-radius: 100vw;
    min-height: 4.5vw;
    min-width: 4.5vw;
    line-height: 0.8;
    margin-right: 1.65vw;
    letter-spacing: -0.4vw;
    margin-left: -0.1vw;
`

const CurriculumAccordeon = styled.div`

`

const EmptyText = styled.div`
    opacity: 0;
    font-size: 0;
`


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
                                        {/* <div style={{ position: 'relative', width: '100%', height: '10vw', padding: 10 }}>
                                        <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                                        </div>
                                         */}
                                   
                                    </CurriculumContentWrapper>
                                    {/* <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                                    <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                                    </div> */}
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
