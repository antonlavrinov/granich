import React from "react"
import * as SC from "./QandAItem"
import {
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function QandAItemMobile({ data, options }) {
  return (
    <SC.AccordionWrapperMobile
      preExpanded={[0]}
      allowMultipleExpanded
      allowZeroExpanded
    >
      {data.edges.map((tab, idx) => {
        const type = tab.node.answersTagType
        const tag = tab.node.answersTagName
        return (
          <SC.AccordionItemWrapper uuid={idx} key={tab.node.id}>
            <SC.AccordionHeading>
              <AccordionItemButton className="accordion-answers-button">
                <SC.LessonAndLineWrapper>
                  <SC.TagColumn>
                    <SC.Tag type={type ? 1 : 0}>{tag}</SC.Tag>
                  </SC.TagColumn>
                  <SC.ItemLineMobile />
                </SC.LessonAndLineWrapper>
              </AccordionItemButton>
            </SC.AccordionHeading>
            <AccordionItemPanel className="accordion__panel accordion__panel_answers">
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
            </AccordionItemPanel>
          </SC.AccordionItemWrapper>
        )
      })}
    </SC.AccordionWrapperMobile>
  )
}

export default QandAItemMobile
