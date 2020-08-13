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
    width: 5vw;
`
const Minus = styled(props => <MinusSign {...props}/>)`
    width: 5vw;
`

const CurriculumItemFrame = styled.div`
    position: relative;
    padding: 4px 0px 0px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    color: white;
    fill: white;
`

const CurriculumItemTitle = styled('span')`
  vertical-align: middle;
`

const CurriculumItemContent = styled(animated.div)`
    will-change: transform, opacity, height;
    margin-left: 6px;
    padding: 0px 0px 0px 14px;
    border-left: 1px dashed rgba(255, 255, 255, 0.4);
    overflow: hidden;
`

const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
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

const CurriculumItem = memo(({ children, name, style, defaultOpen = false }) => {
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
            {!isOpen ? (
                <Plus onClick={() => setOpen(!isOpen)} style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
            ) : (
                <Minus onClick={() => setOpen(!isOpen)} style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
            )}
            {/* <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} /> */}
            <CurriculumItemTitle onClick={() => setOpen(!isOpen)} style={style}>{name}</CurriculumItemTitle>
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
    display: flex;
    justify-content: space-between;
`


const GraphDesignCurriculum = () => {
    return (
        <CurriculumSection>
            <Container>
                <CurriculumWrapper>
                    <CurriculumItem name="custom content">
                        <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                        <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                        </div>
                    </CurriculumItem>
                </CurriculumWrapper>
            </Container>
        </CurriculumSection>
    )
}

export default GraphDesignCurriculum
