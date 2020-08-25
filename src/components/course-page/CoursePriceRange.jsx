import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const PriceRangeSection = styled.section`
    margin-bottom: 5vw;
`


const PriceRangeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const PriceCategory = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0.5vw;
`

const PriceCategoryTitle = styled.div`
    font-size: 3vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
`

const PriceCategoryList = styled.div`
    p {
        font-size: 1.15vw;
        // padding: 1vw;
        color: var(--granich-light-grey);
        // transition: all 0.3s ease;
        
        border-bottom: 1px solid var(--granich-grey);
        :first-child {
            border-top: 1px solid var(--granich-grey);
        }
        :hover {
            display: none;
            cursor: pointer;
            i {
                        // transition: all 0.3s ease;
                // font-size: 1.15vw;
                display: block;
            }
        } 
        i {
            // transition: all 0.3s ease;
            color: var(--granich-light-grey);
            display: none;


        }
        b {
            padding: 0.5vw;
            color: var(--granich-black);
            font-weight: 500;
            display: block;
            
            border-left: 2px solid var(--granich-red);
            i {
                font-weight: 500;
                color: var(--granich-black);
            }
        }
    }
`


const PriceCategoryFooter = styled.div`

`
const PriceCategoryButton = styled.div`

`
const PriceCategorySubtext = styled.div`

`

const CoursePriceRange = ({data}) => {
    return (
        <PriceRangeSection>
            <Container>
                <PriceRangeWrapper>
                    {data.edges.map((price, idx) => {
                        return (
                            <PriceCategory key={price.node.id}>
                                <PriceCategoryTitle>{price.node.pricesTitle}</PriceCategoryTitle>
                                <PriceCategoryList>
                                    {documentToReactComponents(price.node.pricesText.json)}
                                </PriceCategoryList>
                                <PriceCategoryFooter>
                                    <PriceCategoryButton>{price.node.pricesPrice}₽</PriceCategoryButton>
                                    <PriceCategorySubtext>
                                        {price.node.priceSubtext}
                                    </PriceCategorySubtext>
                                </PriceCategoryFooter>
                            </PriceCategory>
                        )
                    })}
                </PriceRangeWrapper>
            </Container>
            
        </PriceRangeSection>
    )
}

export default CoursePriceRange
