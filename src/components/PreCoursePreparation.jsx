import React, {useEffect, useState} from 'react'
import { Container } from './style';
import styled from 'styled-components';
import PreparationContent from './PreparationContent';
import TagCross from '../assets/svgs/tag-cross-icon-01.svg';


const PreparationSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 10vw;
    }

`
const PreparationWrapper = styled.div`

    background: #E8E8E8;
    padding: 3vw 3vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 0;
        background: none;
        border-radius: 0;
        
    }

`

const PreparationHeader = styled.div`
    display: flex;
    margin-bottom: 3.2vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        margin-bottom: 5vw;
        
    }
`

const PreparationMobileWrapper = styled.div`
    @media only screen and (max-width: 575px) {
        background: #E8E8E8;
        padding: 9vw 6vw 4vw;
        border-radius: 3vw;
        margin-bottom: 4vw;
    }
`

const PreparationTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1.05;
    margin-right: 4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
    }

`

const PreparationText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: 1.5vw;
    line-height: 1.55;
    letter-spacing: 0.02vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }

`

const PreparationFilters = styled.div`
    display: flex;
    border-bottom: 0.1vw solid var(--granich-light-grey);
    margin-bottom: 1vw;
    margin-left: 0.3vw;
    @media only screen and (max-width: 575px) {
        border-bottom: 0.3vw solid var(--granich-light-grey);
        padding-bottom: 0vw;
        margin-bottom: 4vw;

    }
`
const PreparationFilter = styled.div`
    font-size: 1.15vw;
    margin-right: 1.5vw;
    margin-bottom: -0.1vw;
    padding-bottom: 1vw;
    color: var(--granich-grey);
    font-weight: 400;
    
    :hover {
        cursor: pointer;
    }
    ${props => props.active && `
    font-weight: 500;
    color: var(--granich-black);
    border-color: var(--granich-red);
    border-bottom: 0.15vw solid var(--granich-red);
    @media only screen and (max-width: 575px) {
        border-bottom: 0.4vw solid var(--granich-red);
    }
    :hover {
        color: var(--granich-black);
        border-color: var(--granich-red);
        @media only screen and (max-width: 575px) {
            color: var(--granich-black);
            border-color: var(--granich-red);
        }
    }
    `}
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        margin-right: 5.2vw;
        padding-bottom: 2.9vw;
        margin-bottom: -0.4vw;
        :first-child {
            margin-left: -0.2vw;
            padding-left: 0;

        }

    }

`

const PreparationFilterCross = styled(props => <TagCross {...props}/>)`
    display: none;
    ${props => props.active && `
        display: inline-block;
        height: 1vw;
        width: 0.9vw;
        margin-left: 0.2vw;
    `}
    @media only screen and (max-width: 575px) {
        ${props => props.active && `
            height: 3vw;
            width: 3vw;
            margin-left: 1vw;
        `}
    }
`

const PreparationTags = styled.div`
    display: flex;
    margin-bottom: 0.8vw;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 0.1vw;


`
const PreparationTagsTitle = styled.div`
    font-size: 1vw;
    margin-right: 1vw;
    margin-top: 0.15vw;
    margin-left: 0.2vw;
    color: var(--granich-grey);
    // padding-left: 0.6vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.5vw;
        margin-right: 4vw;
    }
`

const PreparationTag = styled.div`
    border: 0.05vw solid var(--granich-light-grey);
    padding: 0.5vw;
    border-radius: 100vw;
    transition: all 0.2s ease;
    font-size: 1.1vw;
    padding: 0.1vw 0.5vw 0.15vw;
    margin-right: 0.5vw;
    margin-bottom: 0.5vw;
    color: var(--granich-light-grey);
    display: flex;
    align-items: center;
    user-select: none;
    :last-child {
        margin-right: 0;
    }
    :hover {
        cursor: pointer;
        color: var(--granich-black);
        border-color: var(--granich-black);
    }
    ${props => props.active && `
        color: var(--granich-red);
        border-color: var(--granich-red);
        :hover {
            color: var(--granich-red);
            border-color: var(--granich-red);
        }
    `}
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        border: 0.3vw solid var(--granich-light-grey);
        padding: 0.5vw 1.5vw;
        margin-right: 2vw;
        margin-bottom: 2vw;
        color: var(--granich-light-grey);
        ${props => props.active && `
            color: var(--granich-red);
            border-color: var(--granich-red);
            :hover {
                color: var(--granich-red);
                border-color: var(--granich-red);
            }
        `}
    }

`

const PreparationContents = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column-gap: 1.65vw;
    grid-row-gap: 1.65vw;
    // grid-template-rows: minmax(25vw, 25vw)

    padding: 0 0.2vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 4vw;
        grid-column-gap: 4vw;

    }
`

const PreparationButtonMore = styled.div`
        width: 100%;
        text-align: center;
        background: #DEDEDE;
        padding: 1vw 0 1.4vw;
        border-radius: 0.5vw;
        margin-top: 1.65vw;
        transition: all 0.2s ease;
        :hover {
            cursor: pointer;
            background: #cfcfcf;
            div {
                color: var(--granich-grey);
                
            }
        }
        @media only screen and (max-width: 575px) {
            padding: 3vw 0 3.5vw;
            border-radius: 1.3vw;
            margin-top: 4vw;
        }
`
const PreparationButtonMoreText = styled.div`
    display: inline-block;
    font-size: 1.1vw;
    font-weight: 400;
    color: #8e8e8e;
    padding-bottom: 0.15vw;
    border-bottom: 0.1vw dotted var(--granich-light-grey);
    transition: all 0.2s ease;
    @media only screen and (max-width: 575px) {
        padding-bottom: 0.3vw;
        font-size: 3.5vw;
        border-bottom: 0.5vw dotted var(--granich-light-grey);
    }
`


const PreCoursePreparation = ({dataRecommended, dataNew}) => {
    const [contentContents, setContentContents] = useState([])
    const [contentTags, setContentTags] = useState([])
    const [filters, setFilters] = useState({
        contentTags: []
    })
    const [contentPagination, setContentPagination] = useState(12);
    const [filterData, setFilterData] = useState('Рекомендуемое');
    const [data, setData] = useState(dataRecommended);
    const [topFilters, setTopFilters] = useState([
        {
            name: 'Рекомендуемое',
            active: true
        },
        {
            name: 'Новое',
            active: false
        },]);
    const [contentShown, setContentShown] = useState(4);
    useEffect(() => {
        const contentTagsArray = [];
        const contentContentsArray = [];
        const contents = data.edges;
        contents.map(content => {
            contentContentsArray.push(content.node)
            content.node.contentTags.forEach((contentTag) => {
                contentTagsArray.push(contentTag)
            })
            return content;
        })

        const uniqueSetOfTags = new Set(contentTagsArray);
        const backToTagsArray = [...uniqueSetOfTags];
        const sortedByAlphabet = backToTagsArray.sort(function(a, b) {
            if (a < b) return -1;
            else if(a > b) return 1;
            return 0;
        });

        const tags = [];
        sortedByAlphabet.forEach((tag, idx) => {
            tags[idx] = {
                name: tag,
                active: false
            }
        })

        setContentTags(tags)
        setContentContents(contentContentsArray)


    }, [data])


    useEffect(() => {
        const content = document.querySelectorAll('.content');
        setContentShown(content.length);
        console.log('CONTENT', content)
    }, [contentPagination])

    const multiPropsFilter = (products, filters) => {
        const filterKeys = Object.keys(filters);
        return products.filter(item => {
          // validates all filter criteria
          return filterKeys.every(key => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') {
                // return true;
                if(!filters[key].length) return true;
                if(Array.isArray(item[key])) {
                    return item[key].some(keyElem => filters[key].includes(keyElem))
                }
                return filters[key].includes(item[key])
            }
            return filters[key](item[key]);
          });
        });
    }

    const triggerFiltering = (tag) => {
        const tagToRemove = filters.contentTags.find((tagg) => tagg === tag.name) 
        // console.log('tag to remove', tagToRemove)
        toggleTagColor(tag)
        if(tagToRemove) {
            //delete the tag
            const idx = filters.contentTags.findIndex((el) => el === tag.name);
            const before = filters.contentTags.slice(0, idx)
            const after = filters.contentTags.slice(idx +1)
            const newArray = [...before, ...after]
            setFilters({contentTags: newArray})
            // console.log('tag remove')

        } else {
            //add new tag
            setFilters({contentTags: [...filters.contentTags, tag.name]})

            console.log('tag choose', filters)
        }
    }


    const toggleTagColor = (tagName) => {
        const idx = contentTags.findIndex((tag) => tag === tagName)
        const oldItem = contentTags[idx];
        const newItem = {
            ...oldItem,
            active: !oldItem.active
        }
        const newArray = [
            ...contentTags.slice(0, idx),
            newItem,
            ...contentTags.slice(idx + 1)
        ]

        setContentTags(newArray)
    }

    const toggleTopFilterActive = (topFilter) => {
        const resetFilters = []
        topFilters.forEach((filter) => {
            resetFilters.push({...filter, active: false})
        })
        // console.log('activeee', topFilter)
        const idx = resetFilters.findIndex((filter) => filter.name === topFilter.name)
        const oldItem = resetFilters[idx];
        const newItem = {
            ...oldItem,
            active: true
        }
        const newArray = [
            ...resetFilters.slice(0, idx),
            newItem,
            ...resetFilters.slice(idx + 1)
        ]
        console.log('NEW ARR', idx)

        setTopFilters(newArray)

    }

    const triggerFilteringNewAndRecommended = (filter) => {
        if (filterData === filter.name) {
            return;
        } 
        setFilterData(filter.name);
        if (filter.name === 'Рекомендуемое') {
            setData(dataRecommended)
        } else {
            setData(dataNew)
        }
        const emptyFilters = {
            contentTags: []
        }
        setFilters(emptyFilters)

         
        // if (data === )
        // setFilters({...filters, contentTags: []})
    }

    const filteredContents = multiPropsFilter(contentContents, filters);

    return (
        <PreparationSection id="preparation">
            <Container>
                <PreparationWrapper>
                    <PreparationMobileWrapper>
                        <PreparationHeader>
                            <PreparationTitle>
                                Подготовка <br/>к курсам
                            </PreparationTitle>
                            <PreparationText>
                                Сомневаетесь записаться ли на курс? <br/>Изучите бесплатные материалы школы <br/>и познакомьтесь с нашим подходом
                            </PreparationText>
                        </PreparationHeader>
                        <PreparationFilters>
                            {topFilters.map((filter, idx) => {
                                return (
                                    <PreparationFilter active={filter.active}  onClick={() => {toggleTopFilterActive(filter); triggerFilteringNewAndRecommended(filter)}} key={idx}>{filter.name}</PreparationFilter>
                                )
                            })}
                        </PreparationFilters>
                        <PreparationTags>
                            <PreparationTagsTitle>Поиск по тегам:</PreparationTagsTitle>
                            {contentTags.map((contentTag, idx) => {
                                return (
                                    <PreparationTag key={idx} active={contentTag.active }  onClick={() => {triggerFiltering(contentTag)}}>
                                        {contentTag.name} <PreparationFilterCross active={contentTag.active ? 1 : 0}>×</PreparationFilterCross>
                                    </PreparationTag>
                                )
                            })}
                        </PreparationTags>
                    </PreparationMobileWrapper>
                    
                    <PreparationContents>
                        {filteredContents.slice(0, contentPagination).map((content, idx) => {
                            return (
                                <PreparationContent  key={idx} content={content}/>
                            )
                        })}
                    </PreparationContents>

                        {filteredContents.length > 12 ? (
                            <>
                                {contentShown < filteredContents.length ? (
                                    <PreparationButtonMore onClick={() => setContentPagination(contentPagination + 12)}><PreparationButtonMoreText>Показать еще</PreparationButtonMoreText></PreparationButtonMore>
                                ) : null}
                            </>
                            
                        ) : (null)}


                    
                </PreparationWrapper>
            </Container>

        </PreparationSection>
    )
}

export default PreCoursePreparation
