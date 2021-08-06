import React from "react"
import * as SC from "./QandAItem"
import QandAItem from "."
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function QandAItemDesktop({ data, options }) {
  return (
    <SC.AccordionWrapper>
      {data.edges.map((tab, idx) => {
        if (!tab.node.isWrap) {
          return <SC.ContentWrapper isWrap>
          <SC.TextWrapper>
            {tab.node
              .childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode && (
              <SC.CategoryColumn isWrap>
                <SC.EmptyText>sometext</SC.EmptyText>
                {documentToReactComponents(
                  tab.node
                    .childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode
                    .json,
                  options
                )}
              </SC.CategoryColumn>
            )}
            {tab.node
              .childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode && (
              <SC.CategoryColumn isWrap>
                {documentToReactComponents(
                  tab.node
                    .childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode
                    .json,
                  options
                )}
              </SC.CategoryColumn>
            )}
          </SC.TextWrapper>
        </SC.ContentWrapper>
        }
        return (
          <QandAItem
            open={idx}
            key={tab.node.id}
            tag={tab.node.answersTagName}
            type={tab.node.answersTagType ? 1 : 0}
          >
            <SC.ContentWrapper>
              <SC.TextWrapper>
                {tab.node
                  .childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode && (
                  <SC.CategoryColumn>
                    <SC.EmptyText>sometext</SC.EmptyText>
                    {documentToReactComponents(
                      tab.node
                        .childContentfulGranichCourseAnswersAnswersFirstColumnRichTextNode
                        .json,
                      options
                    )}
                  </SC.CategoryColumn>
                )}
                {tab.node
                  .childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode && (
                  <SC.CategoryColumn>
                    {documentToReactComponents(
                      tab.node
                        .childContentfulGranichCourseAnswersAnswersSecondColumnRichTextNode
                        .json,
                      options
                    )}
                  </SC.CategoryColumn>
                )}
              </SC.TextWrapper>
            </SC.ContentWrapper>
          </QandAItem>
        )
      })}
    </SC.AccordionWrapper>
  )
}

export default QandAItemDesktop
