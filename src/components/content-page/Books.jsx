import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import BackgroundImage from 'gatsby-background-image';




const BooksSection = styled.section`
    margin-top: 1.7vw;
    margin-bottom: 1.7vw;
`

const BooksWrapper = styled.div`
    padding: 5.4vw 3vw 2vw;
    border-bottom: 0.25vw dotted white;
    background: white;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 5.4vw 5vw 5.4vw;
        border-bottom: 0.8vw dotted white;
        border-radius: 2.5vw;
    }

`

const BooksHeader = styled.div`
    display: flex;
    padding-bottom: 5.7vw;
    // border-bottom: 1.5px solid var(--granich-black);
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
    // width: 45vw;
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
    }
`



const BooksItemWrapper = styled.div`
    padding: 1.8vw 1.8vw 2.3vw;
    border-radius: 0.6vw;
    background: #f2f2f2;
`

const BooksItemImage = styled(props => <BackgroundImage {...props}/>)`
    height: 17vw;
    margin-bottom: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BooksItemInfo = styled.div`
    color: white;
    display: flex;
`

const BooksItemInfoDetails = styled.div`
    color: inherit; 
    min-width: 6.3vw; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
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
`

const BooksItemNumber = styled.div`
    color: var(--granich-black);
    font-family: EB Garamond;
    font-style: italic;
    font-size: 2.3vw;  
`



const BooksItemInfoLinks = styled.div`
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



const BooksItem = ({text, number, image, links}) => {
    return (
        <BooksItemWrapper>
            <BooksItemImage fluid={image}></BooksItemImage>
            <BooksItemInfo>
                <BooksItemInfoDetails>
                    <BooksItemNumber>{`№${number}`}</BooksItemNumber>
                    <BooksItemInfoLinks>{documentToReactComponents(links.json)}</BooksItemInfoLinks>
                </BooksItemInfoDetails>
                <BooksItemInfoText>
                 {documentToReactComponents(text)}
                </BooksItemInfoText>
            </BooksItemInfo>
        </BooksItemWrapper>
    )
}

const Books = ({data}) => {
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
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((booksItem, idx) => {
                                        return (
                                            <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === 'Самые важные' && <BooksItem
                                                                                                             image={booksItem.node.booksImage.fluid} 
                                                                                                           
                                                                                                             number={booksItem.node.booksOrderNumber} 
                                                                                                             links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                             text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </BooksList>
                        <BooksList>
                            <BooksListDescr>Далее книги более общие. Уже не столь практичные. <br/>Но толково расширяют кругозор в дизайне ↓</BooksListDescr>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((booksItem, idx) => {
                                        return (
                                            <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === 'Более общие. Расширяют кругозор в дизайне' && <BooksItem
                                                                                                             image={booksItem.node.booksImage.fluid} 
                                                                                                           
                                                                                                             number={booksItem.node.booksOrderNumber} 
                                                                                                             links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                             text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </BooksList>
                        <BooksList>
                            <BooksListDescr>А тут уже книги для крутых дизайнеров, <br/>когда одной эстетики уже мало ↓</BooksListDescr>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                    {data.map((booksItem, idx) => {
                                        return (
                                            <React.Fragment key={booksItem.node.id}>{booksItem.node.booksCategory === 'Для крутых дизайнеров' && <BooksItem
                                                                                                             image={booksItem.node.booksImage.fluid} 
                                                                                                           
                                                                                                             number={booksItem.node.booksOrderNumber} 
                                                                                                             links={booksItem.node.childContentfulGranichCollectionBooksBooksLinksRichTextNode} 
                                                                                                             text={booksItem.node.booksText.json}/>}</React.Fragment> 
                                        )
                                    })}
                            </Masonry>
                        </BooksList>

                </BooksWrapper>
            </Container>
            
        </BooksSection>
    )
}

export default Books