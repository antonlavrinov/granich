import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import ArrowTop from '../../assets/svgs/header-arrow-top.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';


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

const AnswersSection = styled.section`
    border-radius: 0.6vw;
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        border-radius: 2vw;
    }
` 

const AnswersMainWrapper = styled.div`
    background: #E8E8E8;
`

const AnswersWrapper = styled.div`

    padding: 5.4vw 3vw 0.5vw;
    border-bottom: 0.25vw dotted white;
    @media only screen and (max-width: 575px) {
        padding: 5.4vw 5vw 0.5vw;
    }

`

const AnswersHeader = styled.div`
    display: flex;
    padding-bottom: 8.2vw;
    border-bottom: 1.5px solid var(--granich-black);
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
    // width: 100%;
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

const AnswerCategoryWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1.5px solid #cacaca;
    padding: 1.8vw 0 2.8vw;
    :last-child {
        border-bottom: none;
    }
`


const AnswerCategoryTag = styled.div`
    // background: grey;
    // width: 20%;
    border: 1.5px solid var(--granich-red);
    display: inline-block;
    padding: 0.45vw 0.8vw;
    border-radius: 100vw;
    color: var(--granich-red);
    font-size: 1.1vw;
    font-weight: 500;
    letter-spacing: 0.03vw;
    margin-top: 1vw;
    ${props => !props.type && `
        background: var(--granich-red);
        color: white;
    `}

`

const AnswersTagColumnWrapper = styled.div`
    min-width: 13vw;
`

const AnswersTextWrapper = styled.div`
    display: flex;
`

const AnswerCategoryColumnOne = styled.div`
    width: 27vw;
    min-width: 27vw;
    margin-right: 2vw;
    line-height: 1.45;
    p {
        font-size: 1.12vw;
        color: var(--granich-grey);
        margin-bottom: 0.5vw;
        display: block;
    }
    b {
        display: block;
        font-weight: 500;
        margin-top: 1vw;
    }

`

const AnswerCategoryColumnTwo = styled.div`
    width: 27vw;
    min-width: 27vw;
    line-height: 1.45;
    p {
        font-size: 1.12vw;
        color: var(--granich-grey);
        margin-bottom: 0.5vw;
        display: block;
    }
    b {
        display: block;
        font-weight: 500;
        margin-top: 1vw;
    }
`

const AnswersFooterContainer = styled.div`
    padding: 3vw 4.8vw 5vw;
`

const AnswersFooterWrapper = styled.div`
    background: #dedede;
    border-radius: 0.4vw;
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.37vw;
    font-weight: 500;
    text-align: center;
    padding: 1.4vw;
    letter-spacing: -0.02vw;
    line-height: 1;
`
const AnswersFooterLink = styled.a`
    font-style: italic;
    font-family: EB Garamond;
    font-size: 2.37vw;
    font-weight: 500;
    display: inline-block;
    line-height: 1;
    position: relative;
    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5vw;
        width: 100%;
        height: 0.1vw;
        background: #C0C0C0;
    }
    :hover {
        cursor: pointer;
        :before {
            display: none;
        }
    }
`

const AnswerCategory = ({data}) => {
    return (
        <AnswerCategoryWrapper>
            <AnswersTagColumnWrapper>
                <AnswerCategoryTag type={data.node.AnswersTagType ? 1 : 0}>{data.node.AnswersTagName}</AnswerCategoryTag>
            </AnswersTagColumnWrapper>
            
            <AnswersTextWrapper>
                {data.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode && <AnswerCategoryColumnOne>{documentToReactComponents(data.node.childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode.json)}</AnswerCategoryColumnOne>}
                {data.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode && <AnswerCategoryColumnTwo>{documentToReactComponents(data.node.childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode.json)}</AnswerCategoryColumnTwo>}
            </AnswersTextWrapper>
           
        </AnswerCategoryWrapper>
    )
}

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
                        {data.edges.map((category, idx) => {
                            return (
                                <AnswerCategory key={idx} data={category}/>
                            )
                        })}

                    </AnswersWrapper>
                    <AnswersFooterContainer>
                        <AnswersFooterWrapper>
                            <AnswersFooterLink onClick={() => scrollTo('#participation-section')}>Вернуться к оплате Курса!<ArrowLinkTop/></AnswersFooterLink>
                        </AnswersFooterWrapper>
                    </AnswersFooterContainer>


                </AnswersMainWrapper>
            </Container>

        </AnswersSection>
    )
}

export default CourseAnswers
