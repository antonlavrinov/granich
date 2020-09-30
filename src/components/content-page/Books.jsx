import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';
import { INLINES } from '@contentful/rich-text-types'


const BooksSection = styled.section`
    margin-top: 1.7vw;
    margin-bottom: 1.7vw;
    @media only screen and (max-width: 575px) {
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
`

const BooksWrapper = styled.div`
    padding: 5.4vw 3vw 2vw;
    border-bottom: 0.25vw dotted white;
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 5.4vw 5vw 5.4vw;
        border-radius: 2.5vw;
    }

`

const BooksHeader = styled.div`
    display: flex;
    padding-bottom: 5.7vw;
    width: 100%;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`

const BooksSectionTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.85;
    margin-right: 7vw;
    width: 25vw;
    min-width: 25vw;

    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
        width: 100%;
    }

`

const BooksSectionText = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: 1vw;
    line-height: 1.55;
    letter-spacing: 0.025vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
    }
    

`

const BooksList = styled.div`
    margin-bottom: 7vw;
    :last-child {
        margin-bottom: 0;
    }
`

const BooksListDescr = styled.div`
    color: var(--granich-black);
    font-size: 1.5vw;
    margin-top: -1.2vw;
    line-height: 1.55;
    font-weight: 500;
    width: 45vw;
    margin-bottom: 3vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.9vw;
        letter-spacing: -0.08vw;
        width: 100% !important;
    }
`



const BooksItemWrapper = styled.div`
    padding: 1.8vw 1.8vw 2.3vw;
    border-radius: 0.6vw;
    background: #f2f2f2;
    div[data-rmiz-wrap="visible"] {
        width: 100%;
    }
    div[data-rmiz-wrap="hidden"] {
        width: 100%;
    }
    @media only screen and (max-width: 575px) {
        padding: 4vw 4vw 7vw;
        border-radius: 1.7vw;
    }
`

const BooksItemImage = styled(props => <Img {...props}/>)`
    height: 17vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 575px) {
        height: 40vw;
    }
`

const BooksItemInfo = styled.div`
    color: white;
    display: flex;
    margin-top: 1vw;
`

const BooksItemInfoDetails = styled.div`
    color: inherit; 
    min-width: 6.3vw; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
    @media only screen and (max-width: 575px) {
        min-width: 17vw;
    }
`

const BooksItemInfoText = styled.div`
    p {
        color: var(--granich-grey);  
        font-size: 1.15vw;
        line-height: 1.35;
    } 
    i {
        color: var(--granich-black);  
        font-size: 0.8vw;
        font-style: normal;
        display: block;
        margin-bottom: 0.3vw;
        font-weight: 600;
    }
    h3 {
        color: var(--granich-black);  
        font-size: 1.17vw;
        margin-bottom: 0.7vw;
        font-weight: 500;
    }
    b {
        color: var(--granich-black);  
        font-size: 1.17vw;
        font-weight: 500;
    }
    a {
        border-bottom: 1px solid rgba(0,0,0,0.2);
        :hover {
            border-bottom: 1px solid var(--granich-grey);
        }
    }
    @media only screen and (max-width: 575px) {
        p { 
            font-size: 3.5vw;
        } 
        i {
            font-size: 2.6vw;
            margin-bottom: 0.5vw;
        }
        h3 {
            font-size: 3.5vw;
            margin-bottom: 2vw;
        }
    }
`

const BooksItemNumber = styled.div`
    color: var(--granich-black);
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.3vw;  
    @media only screen and (max-width: 575px) {
        font-size: 6.5vw;  
    }
`



const BooksItemInfoLinks = styled.div`
    width: 4vw;
    p {
        margin-top: 0.5vw;
        font-size: 0.8vw;
        line-height: 1.3;


    }
    p:empty { 
        display: none; 

    }
    a {
        color: var(--granich-red); 
        font-size: 0.8vw;
        position: relative;
        display: inline;
        border-bottom: 1px solid rgba(228, 5, 33, 0.2);
        :hover {
            border-bottom: 1px solid var(--granich-red);
        }
    } 
    @media only screen and (max-width: 575px) {
        width: 14vw;
        margin-bottom: 0.5vw;
        p {
            margin-top: 3vw;
        }
        a { 
            font-size: 2.5vw;
        } 
    }
`


const options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} target='_blank' rel="noopener noreferrer" >{node.content[0].value}</a>;
        }
    },   
}

const breakpointColumnsObj = {
    default: 2,
    575: 1,
};



const BooksItem = ({text, number, image, links}) => {
    return (
        <BooksItemWrapper>
            <Zoom>
                <BooksItemImage fluid={image}></BooksItemImage>
            </Zoom>
            <BooksItemInfo>
                <BooksItemInfoDetails>
                    <BooksItemNumber>{`№${number}`}</BooksItemNumber>
                    <BooksItemInfoLinks className="collection_link">{documentToReactComponents(links.json, options)}</BooksItemInfoLinks>
                </BooksItemInfoDetails>
                <BooksItemInfoText>
                 {documentToReactComponents(text, options)}
                </BooksItemInfoText>
            </BooksItemInfo>
        </BooksItemWrapper>
    )
}

const Books = ({data, categoryTwo, categoryThree}) => {
    return (
        <BooksSection>
            <Container>
                <BooksWrapper>
                    <BooksHeader>
                        <BooksSectionTitle>Ценные книги</BooksSectionTitle>
                        <BooksSectionText>Книги я расставил в порядке приоритета
<br/>по практической направленности</BooksSectionText>
                    </BooksHeader>
                        <BooksList>
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((booksItem, idx) => {
                                        return (
                                            <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === '1' && <BooksItem
                                                                                                             image={booksItem.node.booksImage.fluid} 
                                                                                                           
                                                                                                             number={booksItem.node.booksOrderNumber} 
                                                                                                             links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                             text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </BooksList>
                        {categoryTwo && (
                            <BooksList>
                                    <BooksListDescr style={{width: '42vw'}}>{categoryTwo}</BooksListDescr>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column">
                                        {data.map((booksItem, idx) => {
                                            return (
                                                <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === '2' && <BooksItem
                                                                                                                image={booksItem.node.booksImage.fluid} 
                                                                                                            
                                                                                                                number={booksItem.node.booksOrderNumber} 
                                                                                                                links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                                text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                            )
                                        })}
                                </Masonry>
                            </BooksList>
                        )}
                        {categoryThree && (
                            <BooksList>
                                    <BooksListDescr style={{width: '33vw'}}>{categoryThree}</BooksListDescr>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column">
                                        {data.map((booksItem, idx) => {
                                            return (
                                                <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === '3' && <BooksItem
                                                                                                                image={booksItem.node.booksImage.fluid} 
                                                                                                            
                                                                                                                number={booksItem.node.booksOrderNumber} 
                                                                                                                links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                                text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                            )
                                        })}
                                </Masonry>
                            </BooksList>
                        )}
                        

                </BooksWrapper>
            </Container>
            
        </BooksSection>
    )
}

export default Books