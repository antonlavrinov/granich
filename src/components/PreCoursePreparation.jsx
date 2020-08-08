import React, {useEffect, useState} from 'react'
import { Container } from './style';
import styled from 'styled-components';
import PreparationContent from './PreparationContent';



const PreparationSection = styled.section`
    margin-bottom: 4vw;

`
const PreparationWrapper = styled.div`

    background: #E8E8E8;
    padding: 3.5vw 4.4vw;
    border-radius: 0.6vw;
`

const PreparationHeader = styled.div`
    display: flex;
    margin-bottom: 3.4vw;
`

const PreparationTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.3vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1.05;
    margin-right: 4vw;

`

const PreparationText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: 0.8vw;
    line-height: 1.5;
    letter-spacing: 0.03vw;

`

const PreparationFilters = styled.div`
    display: flex;
    padding: 15px 0 0;
    border-bottom: 0.1vw solid var(--granich-light-grey);
    margin-bottom: 1vw;
`
const PreparationFilter = styled.div`
    font-size: 1.15vw;
    margin-right: 2.6vw;
    margin-bottom: -0.1vw;
    padding-bottom: 1vw;
    // border-bottom: 0.1vw solid var(--granich-red);
    :hover {
        cursor: pointer;
    }
    :first-child {
        padding-left: 0.25vw;
    }
    ${props => props.active && `
    color: var(--granich-red);
    border-color: var(--granich-red);
    :hover {
        color: var(--granich-red);
        border-color: var(--granich-red);
    }
`}

`

const PreparationFilterCross = styled.div`
    display: none;
    ${props => props.active && `
        display: inline-block;
        background: var(--granich-red);
        border-radius: 100vw;
        padding: 0.2vw;
        color: white;
        line-height: 0.5;
    `}
`

const PreparationTags = styled.div`
    display: flex;
    margin-bottom: 1vw;
    flex-wrap: wrap;
    width: 100%;
`
const PreparationTag = styled.div`
    border: 0.05vw solid var(--granich-grey);
    padding: 0.5vw;
    border-radius: 100vw;
    transition: all 0.2s ease;
    font-size: 0.73vw;
    padding: 0.1vw 0.4vw 0.16vw;
    margin-right: 0.5vw;
    margin-bottom: 0.5vw;
    color: var(--granich-grey);
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

`

const PreparationContents = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // grid-template-columns: 15.1vw 15.1vw 15.1vw 15.1vw;
    grid-column-gap: 2.1vw;
    grid-row-gap: 2.1vw;
    padding: 0 0.2vw;
`

const PreparationButtonMore = styled.div`

`


const PreCoursePreparation = ({dataRecommended, dataNew}) => {
    const [contentContents, setContentContents] = useState([])
    const [contentTags, setContentTags] = useState([])
    const [filters, setFilters] = useState({
        contentTags: []
    })
    const [contentPagination, setContentPagination] = useState(4);
    const [filterData, setFilterData] = useState('recommended');
    const [data, setData] = useState(dataRecommended);
    const [topFilters, setTopFilters] = useState(['Рекомендуемое', 'Новое']);
    const [selectedTopFilters, setSelectedTopFilters] = useState('Рекомендуемое');
    useEffect(() => {
        const contentTagsArray = [];
        const contentContentsArray = [];
        const contents = data.edges;
        contents.map(content => {
            contentContentsArray.push(content.node)
            content.node.contentTags.forEach((contentTag) => {
                contentTagsArray.push(contentTag)
            })
        })
        console.log('contentTagsArray', contentTagsArray)

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
        console.log('tags', tags)
        setContentTags(tags)
        setContentContents(contentContentsArray)
        console.log('ANOTHER EFFECT')


        console.log('data edges', data.edges)
        console.log('contentContentsArray', contentContents)


    }, [data])

    const multiPropsFilter = (products, filters) => {
        // const filterKeys = Object.keys(filters);
        // return products.filter(product => {
        //     return filterKeys.every(key => {
        //         if(!filters[key].length) return true;
        //         if(Array.isArray(product[key])) {
        //             return product[key].some(keyElem => filters[key].includes(keyElem))
        //         }
        //         return filters[key].includes(product[key])
        //     })
        // })
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
        if(topFilter === selectedTopFilters) {
            return;
        }
        if(topFilter === 'Новое') {
            setSelectedTopFilters('Рекомендуемое');
        } else {
            setSelectedTopFilters('Новое');
        }

        // if(topFilter === )
        // const idx1 = topFilters.findIndex((filter) => filter.name === topFilter)
        // const idx2 = topFilters.findIndex((filter) => filter.name !== topFilter)
        // const oldItem = topFilters[idx];
        // console.log('old item', idx)
        // const newItem = {
        //     ...oldItem,
        //     active: !oldItem.active
        // }
        // const newArray = [
        //     ...topFilters.slice(0, idx),
        //     newItem,
        //     ...topFilters.slice(idx + 1)
        // ]

        // setTopFilters(newArray)
    }

    const triggerFilteringNewAndRecommended = (filter) => {
        if (filter === 'recommended') {
            setData(dataRecommended);
        } else {
            setData(dataNew);

        }
         
        // if (data === )
        setFilters({...filters, contentTags: []})
    }

    const filteredContents = multiPropsFilter(contentContents, filters);

    return (
        <PreparationSection id="preparation">
            <Container>
                <PreparationWrapper>
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
                                <PreparationFilter active={filter === selectedTopFilters} onClick={() => toggleTopFilterActive(filter)} key={idx}>{filter}</PreparationFilter>
                            )
                        })}
                    </PreparationFilters>
                    <PreparationTags>
                        {contentTags.map((contentTag, idx) => {
                            return (
                                <PreparationTag key={idx} active={contentTag.active}  onClick={() => {triggerFiltering(contentTag)}}>
                                    {contentTag.name} <PreparationFilterCross active={contentTag.active}>×</PreparationFilterCross>
                                </PreparationTag>
                            )
                        })}
                    </PreparationTags>
                    <PreparationContents>
                        {filteredContents.slice(0, contentPagination).map((content, idx) => {
                            return (
                                <PreparationContent key={idx} content={content}/>
                            )
                        })}
                    </PreparationContents>
                    {data.edges.length > 4 ? (
                        <div onClick={() => setContentPagination(contentPagination + 4)}>Показать больше</div>
                    ) : (null)}
                    
                </PreparationWrapper>
            </Container>

        </PreparationSection>
    )
}

export default PreCoursePreparation
