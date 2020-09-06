import React,{memo, useState, useRef, useEffect } from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import ArrowTop from '../../assets/svgs/header-arrow-top.svg';
import ArrowTopMobile from '../../assets/svgs/header-arrow-top_mobile.svg';

import scrollTo from 'gatsby-plugin-smoothscroll';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill'
import PlusSign from '../../assets/svgs/plus-sign.svg';
import MinusSign from '../../assets/svgs/minus-sign.svg';
import { animated } from 'react-spring';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


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

const AnswersItem = memo(({ type, children, tag, style, open, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(open === 0 ? true : defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    return (
        <AnswersItemFrame type={type ? 1 : 0}>
            <AnswersContainer type={type ? 1 : 0} onClick={() => setOpen(!isOpen)}>
                <AnswersTagColumn>
                    <AnswersTag type={type ? 1 : 0}>{tag}</AnswersTag>
                </AnswersTagColumn>
                <AnswersLine type={type ? 1 : 0}/>
                {!isOpen ? (
                    <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
                ) : (
                    <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
                )}
            </AnswersContainer>

            <AnswersItemContent style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
                
            </AnswersItemContent>

        </AnswersItemFrame>

    )
})


export const AnswersLesson = styled.div`
    font-size: 1.15vw;
    border: 1px solid var(--granich-red);
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
    @media only screen and (max-width: 575px) {

        padding: 1vw 0;
        min-width: 15vw;
        font-size: 3.3vw;

    }
`



export const AnswersLessonColumn = styled.div`
    width: 6.8vw;
    @media only screen and (max-width: 575px) {
        width: 20vw;
    }
`

const AnswersLine = styled.div`
    width: 78%;
    height: 1px;
    border-bottom: 1.5px solid black;
    margin-left: auto;
    margin-right: 2v;
    ${props => props.type && `
        border-bottom: 1px solid var(--granich-light-grey);
    `}
`

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

const AnswersItemFrame = styled.div`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    fill: white;
    overflow: hidden;
`

const AnswersContainer = styled.div`
    display: flex;
    padding: 1.7vw 0vw;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`

const AnswersTag = styled.div`
    font-size: 1.15vw;
    border: 1.5px solid var(--granich-red);
    color: var(--granich-red);
    border-radius: 100vw;
    padding: 0.3vw 0;
    font-weight: 400;
    display: inline-block;
    min-width: 9vw;
    text-align: center;
    user-select: none;
    ${props => !props.type && `
        background: var(--granich-red-gradient);
        border: none;
        padding: 0.4vw 0;
        color: white;
        box-shadow: 0.1vw 0.1vw 0.3vw rgba(0,0,0,0.3);
    `}
    @media only screen and (max-width: 575px) {

        padding: 1vw 0;
        min-width: 25vw;
        font-size: 3.3vw;
        border: 1px solid var(--granich-red);

    }
`



const AnswersTagColumn = styled.div`
    width: 9.8vw;
    @media only screen and (max-width: 575px) {
        width: 20vw;
    }
`


const AnswersItemContent = styled(animated.div)`
    will-change: transform, opacity, height;
    overflow: hidden;

`



const ArrowLinkTop = styled(props => <ArrowTop {...props}/>)`
  position: absolute;
  top: -0.1vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`
const ArrowLinkTopMobile = styled(props => <ArrowTopMobile {...props}/>)`
  position: absolute;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`

const AnswersSection = styled.section`

    margin-bottom: 4vw;
    margin-top: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        margin-top: 5vw;

    }
` 

const AnswersMainWrapper = styled.div`
    background: #E8E8E8;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2vw;
    }
`

const AnswersWrapper = styled.div`

    padding: 5.4vw 3vw 2vw;
    border-bottom: 0.25vw dotted white;
    @media only screen and (max-width: 575px) {
        padding: 5.4vw 5vw 5.4vw;
        border-bottom: 0.8vw dotted white;
    }

`

const AnswersHeader = styled.div`
    display: flex;
    padding-bottom: 5.7vw;
    // border-bottom: 1.5px solid var(--granich-black);
    width: 100%;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`

const AnswersSectionTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.85;
    margin-right: 2vw;
    width: 40vw;
    min-width: 40vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
        width: 100%;
    }

`

const AnswersSectionText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: 0.2vw;
    line-height: 1.55;
    letter-spacing: 0.025vw;
    font-weight: 500;
    // width: 45vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }
    

`





const AnswersTextWrapper = styled.div`
    display: flex;
`

const AnswerCategoryColumn = styled.div`
    width: 27vw;
    min-width: 27vw;
    margin-right: 2vw;
    line-height: 1.45;
    p {
        font-size: 1.12vw;
        color: var(--granich-grey);
        margin-bottom: 0.5vw;
        display: block;
        white-space: normal;
    }
    b {
        display: block;
        font-weight: 500;
        margin-top: 1vw;
    }
    @media only screen and (max-width: 575px) {
        width: 100%;
        min-width: 100%;
        padding: 0;
        margin-right: 0;   
        p {
            min-width: 100%;
            margin-bottom: 3vw;
            font-size: 3.7vw;
            line-height: 1.45;
        }
    }

`

const AnswersFooterContainer = styled.div`
    padding: 3vw 4.8vw 5vw;
    @media only screen and (max-width: 575px) {
        padding: 6vw 6vw 8vw;
    }
`

const AnswersFooterWrapper = styled.div`
    background: #dedede;
    border-radius: 0.5vw;
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.37vw;
    font-weight: 500;
    text-align: center;
    padding: 1.4vw;
    letter-spacing: -0.02vw;
    line-height: 1;
    display: block;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const AnswersFooterWrapperMobile = styled.div`
    background: #dedede;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.02vw;
    line-height: 1;
    display: none;
    @media only screen and (max-width: 575px) {
        font-size: 6.6vw;
        padding: 4vw 6vw 6vw;
        line-height: 1.1;
        border-radius: 1.5vw;
        text-align: center;
        display: block;
    }
`
const AnswersFooterLink = styled.a`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    display: inline-block;
    line-height: 1;
    position: relative;
    text-align: center;
    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5vw;
        width: 100%;
        height: 1.5px;
        background: #C0C0C0;
    }
    :hover {
        cursor: pointer;
        :before {
            display: none;
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 6.6vw;
        :before {
            bottom: -2vw;

        }
    }
`


export const AnswersContentWrapper = styled.div`

    display: flex;
    align-items: flex-start;
    padding-left: 11.3vw;
    padding-top: 0vw;
    padding-bottom: 1.2vw;
`

export const AnswersAccordeon = styled.div`
    display: block;  
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

export const EmptyText = styled.div`
    opacity: 0;
    font-size: 0;
`

export const AnswersAccordionMobile = styled(props => <Accordion {...props}/>)`
    display: none;  
    @media only screen and (max-width: 575px) {
        display: block;
        margin-top: 5vw;
    }
`
export const AnswersAccordionItem = styled(props => <AccordionItem {...props}/>)`
 margin: 3vw 0;
 padding: 2.5vw 0 0;
 cursor: pointer;
`

export const AnswersAccordionHeading = styled(props => <AccordionItemHeading {...props}/>)`
    position: relative;
`
export const AnswersAccordionButton = styled(props => <AccordionItemButton {...props}/>)`
    padding: 3vw 2vw;
    user-select: none;
    position: relative;
    :hover {
        cursor: pointer;
    }
    :focus {
        outline: none;
    }
`
export const AnswersLessonAndLineWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const AnswersItemLineMobile = styled.div`
    width: 54.5%;
    height: 1px;
    background: var(--granich-light-grey);
    margin-left: auto;
    margin-right: 8vw;
`




const CourseAnswers = ({data}) => {
    return (
        <AnswersSection>
            <Container>
                <AnswersMainWrapper>
                    <AnswersWrapper>
                        <AnswersHeader>
                            <AnswersSectionTitle>Точечные ответы о курсе</AnswersSectionTitle>
                            <AnswersSectionText>Тут мы собрали ответы на самые популярные вопросы о курсе Осознанный графдизайн</AnswersSectionText>
                        </AnswersHeader>
                        <AnswersAccordeon>
                            {data.edges.map((tab, idx) => {
                                return (
                                    <AnswersItem open={idx} key={tab.node.id} tag={tab.node.answersTagName} type={tab.node.answersTagType ? 1 : 0}>
                                        <AnswersContentWrapper>
                                        <AnswersTextWrapper>
                                            {tab.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode && <AnswerCategoryColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode.json)}</AnswerCategoryColumn>}
                                            {tab.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode && <AnswerCategoryColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode.json)}</AnswerCategoryColumn>} 
                                        </AnswersTextWrapper>

                                    
                                        </AnswersContentWrapper>
                                    </AnswersItem>
                                )
                            })}
                        </AnswersAccordeon>
                        <AnswersAccordionMobile preExpanded={[0]} allowMultipleExpanded allowZeroExpanded>
                        {data.edges.map((tab, idx) => {
                            const type = tab.node.answersTagType;
                            const tag = tab.node.answersTagName;
                            return (
                                <AnswersAccordionItem uuid={idx} key={tab.node.id}>
                                    <AnswersAccordionHeading>
                                        <AccordionItemButton className="accordion-answers-button">
                                            <AnswersLessonAndLineWrapper>
                                                <AnswersTagColumn>
                                                    <AnswersTag type={type ? 1 : 0}>{tag}</AnswersTag>
                                                </AnswersTagColumn>
                                                <AnswersItemLineMobile/>
                                            </AnswersLessonAndLineWrapper>                                         
                                        </AccordionItemButton>
                                    </AnswersAccordionHeading>
                                    <AccordionItemPanel className="accordion__panel accordion__panel_answers">
                                            {tab.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode && <AnswerCategoryColumn><EmptyText>sometext</EmptyText>{documentToReactComponents(tab.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode.json)}</AnswerCategoryColumn>}
                                            {tab.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode && <AnswerCategoryColumn>{documentToReactComponents(tab.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode.json)}</AnswerCategoryColumn>} 
                                    </AccordionItemPanel>
                                </AnswersAccordionItem>
                            )
                        } )}

                        </AnswersAccordionMobile>


                    </AnswersWrapper>
                    <AnswersFooterContainer>
                        <AnswersFooterWrapper>
                            <AnswersFooterLink onClick={() => scrollTo('#participation-section')}>Вернуться к оплате Курса!<ArrowLinkTop/></AnswersFooterLink>
                        </AnswersFooterWrapper>
                        <AnswersFooterWrapperMobile>
                            Вернуться <br/>к оплате <AnswersFooterLink onClick={() => scrollTo('#participation-section')}>Курса!<ArrowLinkTopMobile/></AnswersFooterLink>
                        </AnswersFooterWrapperMobile>
                    </AnswersFooterContainer>


                </AnswersMainWrapper>
            </Container>

        </AnswersSection>
    )
}

export default CourseAnswers
