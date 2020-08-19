import React, {memo, useState, useRef, useEffect } from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill'
import PlusSign from '../../assets/svgs/plus-sign.svg';
import MinusSign from '../../assets/svgs/minus-sign.svg';
import * as Icons from './icons'
import { animated } from 'react-spring';


const Plus = styled(props => <PlusSign {...props}/>)`
    width: 4vw;
    height: 4vw;
    margin-left: auto;
`
const Minus = styled(props => <MinusSign {...props}/>)`
    width: 4vw;
    height: 4vw;
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
    width: 100%;
    overflow: hidden;
    border-bottom: 0.1vw solid #E4E4E4;
    :first-child {
        border-top: 0.1vw solid #E4E4E4;
    }
`

const CurriculumItemTitle = styled('span')`
  vertical-align: middle;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 3vw;
  user-select: none;

`

const CurriculumItemContent = styled(animated.div)`
    will-change: transform, opacity, height;
    margin-left: 6px;
    padding: 0px 0px 0px 14px;
    border-left: 1px dashed rgba(255, 255, 255, 0.4);
    overflow: hidden;
`

const CurriculumLesson = styled.div`
    font-size: 1.5vw;
    border: 0.1vw solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    padding: 0.5vw 2vw;
    margin-right: 2vw;
`

const CurriculumContainer = styled.div`
    display: flex;
    padding: 2vw 0;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`

const toggle = {
    // width: '1em',
    // height: '1em',
    // marginRight: 10,
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

const CurriculumItem = memo(({ children, title, lesson, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    // const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <CurriculumItemFrame>

            {/* <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} /> */}
            <CurriculumContainer onClick={() => setOpen(!isOpen)}>
                <CurriculumLesson>{lesson}</CurriculumLesson>
                <CurriculumItemTitle onClick={() => setOpen(!isOpen)} style={style}>{title}</CurriculumItemTitle>
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


const CurriculumSection = styled.section`
    margin-bottom: 50px;


`


const CurriculumWrapper = styled.div`
    // display: flex;
    // justify-content: space-between;
    background: white;
    padding: 5vw 3.3vw;
    border-radius: 0.5vw;
`

const CurriculumHeader = styled.div`
    display: flex;
    margin-bottom: 5.5vw;
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
    margin-right: 10.7vw;
` 

const CurriculumBonusBlock = styled.div`

`

const CurriculumBonus = styled.div`
    background: #f2f2f2;
    border-radius: 0.5vw;
    padding: 1.6vw;
    font-size: 1.15vw;
    line-height: 1.3;
    color: var(--granich-light-grey);
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
    font-size: 1.16vw;
    width: 9vw;
    line-height: 1.55vw;
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


const GraphDesignCurriculum = () => {
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
                        </CurriculumBonusBlock>
                    </CurriculumHeader>
                    
                    <CurriculumAccordeon>
                        <CurriculumItem title="Воздух и фреймы" lesson="1 урок">
                            <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                            <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                            </div>
                        </CurriculumItem>
                        <CurriculumItem title="Воздух и фреймы" lesson="1 урок">
                            <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                            <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                            </div>
                        </CurriculumItem>
                    </CurriculumAccordeon>

                </CurriculumWrapper>
            </Container>
        </CurriculumSection>
    )
}

export default GraphDesignCurriculum
