import React, { useEffect, useState } from "react"
import { Container } from "../../../style"
import ContentCard from "../content-card"
import { useShowMore } from "./hooks"
import * as SC from "./PreCoursePreparation"
import { multiPropsFilter } from "./utils"

const PreCoursePreparation = ({ dataRecommended }) => {
  //initial data contents(recommended)
  const [data, setData] = useState(dataRecommended)

  // const [dataCopy, setDataCopy] = useState([])
  const [contentTags, setContentTags] = useState([])

  //ФИЛЬТР ПО ТЕГАМ
  const [filters, setFilters] = useState({
    contentTags: [],
  })

  // TOP FILTERS ('Рекомендуемое, Новое')
  // const [filterData, setFilterData] = useState("Рекомендуемое")
  // const [topFilters, setTopFilters] = useState([
  //   { name: "Рекомендуемое", active: true },
  //   { name: "Новое", active: false },
  // ])

  useEffect(() => {
    const contentTagsArray = []
    dataRecommended.map(content => {
      // contentContentsArray.push(content.node)
      content.contentTags.forEach(contentTag => {
        contentTagsArray.push(contentTag)
      })
      return content
    })

    const uniqueSetOfTags = new Set(contentTagsArray)
    const backToTagsArray = [...uniqueSetOfTags]
    const sortedByAlphabet = backToTagsArray.sort(function (a, b) {
      if (a < b) return -1
      else if (a > b) return 1
      return 0
    })

    const tags = []
    sortedByAlphabet.forEach((tag, idx) => {
      tags[idx] = {
        name: tag,
        active: false,
      }
    })

    setContentTags(tags)
    // setDataCopy(dataCopyArray)
  }, [dataRecommended])

  //BUTTON SHOW MORE
  const [contentPagination, setContentPagination, contentShown] = useShowMore(
    filters
  )

  const triggerFiltering = (tag): void => {
    const tagToRemove = filters.contentTags.find(tagg => tagg === tag.name)
    toggleTagColor(tag)
    if (tagToRemove) {
      //delete the tag
      const idx = filters.contentTags.findIndex(el => el === tag.name)
      const before = filters.contentTags.slice(0, idx)
      const after = filters.contentTags.slice(idx + 1)
      const newArray = [...before, ...after]
      setFilters({ contentTags: newArray })
    } else {
      //add new tag
      setFilters({ contentTags: [...filters.contentTags, tag.name] })
    }
  }

  const toggleTagColor = (tagName): void => {
    const idx = contentTags.findIndex(tag => tag === tagName)
    const oldItem = contentTags[idx]
    const newItem = {
      ...oldItem,
      active: !oldItem.active,
    }
    const newArray = [
      ...contentTags.slice(0, idx),
      newItem,
      ...contentTags.slice(idx + 1),
    ]

    setContentTags(newArray)
  }

  // const toggleTopFilterActive = (topFilter): void => {
  //   const resetFilters = []
  //   topFilters.forEach(filter => {
  //     resetFilters.push({ ...filter, active: false })
  //   })
  //   const idx = resetFilters.findIndex(filter => filter.name === topFilter.name)
  //   const oldItem = resetFilters[idx]
  //   const newItem = {
  //     ...oldItem,
  //     active: true,
  //   }
  //   const newArray = [
  //     ...resetFilters.slice(0, idx),
  //     newItem,
  //     ...resetFilters.slice(idx + 1),
  //   ]

  //   setTopFilters(newArray)
  // }

  // const triggerFilteringNewAndRecommended = (filter): void => {
  //   if (filterData === filter.name) {
  //     return
  //   }
  //   setFilterData(filter.name)
  //   if (filter.name === "Рекомендуемое") {
  //     setData(dataRecommended)
  //   } else {
  //     setData(dataNew)
  //   }
  //   const emptyFilters = {
  //     contentTags: [],
  //   }
  //   setFilters(emptyFilters)
  // }

  // const filteredContents = multiPropsFilter(contentContents, filters);

  const filteredContents = multiPropsFilter(data, filters)

  return (
    <SC.Section id="preparation">
      <Container>
        <SC.Wrapper>
          <SC.MobileWrapper>
            <SC.Header>
              <SC.Title>
                Контент <br />
                школы
              </SC.Title>
              <SC.Text>
                <p>
                  Оцените качество нашего подхода на примере бесплатных
                  материалов{" "}
                </p>
                <p>
                  Потренируйтесь сами, если еще не можете записаться на курс
                </p>
              </SC.Text>
            </SC.Header>
            {/* <SC.Filters>
              {topFilters.map((filter, idx) => {
                return (
                  <SC.Filter
                    active={filter.active}
                    onClick={() => {
                      toggleTopFilterActive(filter)
                      triggerFilteringNewAndRecommended(filter)
                    }}
                    key={idx}
                  >
                    {filter.name}
                  </SC.Filter>
                )
              })}
            </SC.Filters> */}
            <SC.Tags>
              <SC.TagsTitle>Поиск по тегам:</SC.TagsTitle>
              {contentTags.map((contentTag, idx) => {
                return (
                  <SC.Tag
                    key={idx}
                    active={contentTag.active}
                    onClick={() => {
                      triggerFiltering(contentTag)
                    }}
                  >
                    {contentTag.name}{" "}
                    <SC.FilterCross active={contentTag.active ? 1 : 0}>
                      ×
                    </SC.FilterCross>
                  </SC.Tag>
                )
              })}
            </SC.Tags>
          </SC.MobileWrapper>
          <SC.ContentList>
            {filteredContents
              // .slice(0, contentPagination)
              .map((content, idx) => {
                return <ContentCard key={idx} content={content} />
              })}
          </SC.ContentList>

          {/* {filteredContents.length > 12 && (
            <>
              {contentShown < filteredContents.length && (
                <SC.ButtonMore
                  onClick={() => setContentPagination(contentPagination + 12)}
                >
                  <SC.ButtonMoreText>Показать еще</SC.ButtonMoreText>
                </SC.ButtonMore>
              )}
            </>
          )} */}
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default PreCoursePreparation
