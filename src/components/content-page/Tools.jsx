import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';







const ToolsSection = styled.section`
    margin-top: 1.7vw;
    margin-bottom: 1.7vw;
`


const ToolsWrapper = styled.div`

`


const ToolsSectionTitle = styled.h2`
    font-size: 4.55vw;
    font-weight: 700;
    letter-spacing: -0.2vw;
    margin-bottom: 2.4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        margin-bottom: 4vw;
    }

`


const ToolsList = styled.div`

`




const ToolsItemWrapper = styled.div`
    padding: 1.6vw 1.6vw 2.3vw;
    border-radius: 0.6vw;
    background: white;
`

const ToolsItemImage = styled(props => <Img {...props}/>)`
    height: auto;
    width: 5.7vw;
    display: flex;
    margin-left: -0.3vw;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
        svg {
            transform: scale(1.05);
        }

    }
`

const ToolsItemInfo = styled.div`
    color: white;
    display: flex;
`

const ToolsItemInfoDetails = styled.div`
    color: inherit; 
    min-width: 6.3vw; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
`

const ToolsItemInfoText = styled.div`
    color: inherit;  
    margin-top: 0.5vw;
    p {
        color: var(--granich-light-grey);  
        font-size: 1.15vw;
        line-height: 1.35;
        margin-bottom: 0.5vw;
    } 
    i {
        color: var(--granich-black);  
        font-size: 0.8vw;
        font-style: normal;
        display: block;
        font-weight: 600;
    }
    h3 {
        color: var(--granich-black);   
        font-size: 1.17vw;
        margin-bottom: 0.7vw;
        font-weight: 500;
    }
`


const ToolsItemInfoLinks = styled.div`
    width: 3vw;
    margin-bottom: 0.5vw;
    p {
        margin-top: 0.2vw;
        line-height: 0.8;

    }
    p:empty { 
        display: none; 

    }
    a {
        color: var(--granich-red); 
        font-size: 0.8vw;


        border-bottom: 1px solid var(--granich-red);

        :hover {
            border-bottom: 1px solid var(--granich-red);
        } 
    } 
`






const ToolsItem = ({text, image, links}) => {
    return (
        <ToolsItemWrapper>
            <ToolsItemInfo>
                <ToolsItemInfoDetails>
                    <ToolsItemImage fluid={image}/>
                    <ToolsItemInfoLinks className="collection_link">{documentToReactComponents(links.json)}</ToolsItemInfoLinks>
                </ToolsItemInfoDetails>
                <ToolsItemInfoText>
                 {documentToReactComponents(text)}
                </ToolsItemInfoText>
            </ToolsItemInfo>
        </ToolsItemWrapper>
    )
}

const Tools = ({data}) => {
    return (
        <ToolsSection>
            <Container>
            <ToolsSectionTitle>Толковые инструменты</ToolsSectionTitle>
                <ToolsWrapper>
                        <ToolsList>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map(toolsItem => {
                                        return (
                                            <ToolsItem
                                                        image={toolsItem.node.toolsImage.fluid} 
                                                        key={toolsItem.node.id}
                                                        links={toolsItem.node.childContentfulGranichCollectionToolsToolsLinksRichTextNode} 
                                                        text={toolsItem.node.toolsText.json}/>
                                        )
                                    })}
                            </Masonry>
                        </ToolsList>
                </ToolsWrapper>
            </Container>
            
        </ToolsSection>
    )
}

export default Tools