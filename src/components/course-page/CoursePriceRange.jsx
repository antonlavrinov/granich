import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const PriceRangeSection = styled.section`
    margin-bottom: 2vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 4vw;
    }
`


const PriceRangeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
    }
`

const PriceCategory = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0.5vw;
    transition: transform 0.2s ease;
    box-shadow: 0.1vw 0 0.5vw rgba(0,0,0,0.15);
    :last-child {
        footer {
            background: var(--granich-red);
        }
        div[id=price-category-package] {
            color: var(--granich-red);
        }
        div[id=price-category-subtext] {
            color: white;
        }
        
    }
    :nth-child(2) {
        footer {
            background: #bfbfbf;
        }
        
    }
    :nth-child(3) {
        footer {
            background: var(--granich-light-grey);
        }
        
    }
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        box-shadow: 0.5vw 0.5vw 1.5vw rgba(0,0,0,0.15);
    }
`

const PriceCategoryHeader = styled.div`
    padding: 1.4vw 0 1.8vw;
    @media only screen and (max-width: 575px) {
        padding: 4vw 0;
    }
`

const PriceCategoryTitle = styled.div`
    font-size: 2.3vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    @media only screen and (max-width: 575px) {
        font-size: 5.5vw;
    }
`

const PriceCategoryList = styled.div`
    li {

        position: relative;
        background: white;
        transition: transform 0.2s ease;
        :first-child {
            border-top: 1px solid #dedede;
        }
        :hover {
            cursor: pointer;
            transform: scale(1.05);
            box-shadow: 0 0.1vw 0.5vw rgba(0,0,0,0.15);
            z-index: 3;
            i {
                display: block;
            }
        }
        :after {
            content: '+';
            position: absolute;
            top: 33%;
            right: 3.5%;
            width: 1.1vw;
            height: 1.1vw;
            border-radius: 100vw;
            background: #f2f2f2;
            color: var(--granich-light-grey);
            text-align: center;
            font-size: 1.1vw;
            
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 0;
            
        }

        
    }
    p:empty { 
        display: none; 
    }
    p {
        padding: 0.85vw 1vw 0.85vw 1.3vw;
        border-bottom: 1px solid #dedede;
        color: var(--granich-black);
        font-size: 1.02vw;
        font-weight: 400;
        letter-spacing: -0.01vw;
        color: var(--granich-light-grey);
        color: #d8d8d8;
        display: block;

        i {
            color: var(--granich-light-grey);
            display: none;
            letter-spacing: 0;
            position: absolute;
            width: 65%;
            bottom: 3.5vw;
            right: -26%;
            background: var(--granich-black);
            padding: 1vw;
            border-left: none;
            z-index: 9999;
            box-shadow: 0 0.3vw 0.5vw rgba(0,0,0,0.2);
            border-radius: 0.2vw;
            font-size: 0.9vw;
            line-height: 1.2;
            font-style: normal;
            :before {
                content: '';
                position: absolute;
                z-index: 9998;
                bottom: -0.45vw;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                //bottom
                border-right: 0.55vw solid transparent;
                border-left: 0.55vw solid transparent;
                border-top: 0.55vw solid white;
                border-top: 0.55vw solid var(--granich-black);
            }
            b{
                color: var(--granich-light-grey);
                font-weight: 400;
                :before {
                    width: 0;
                }
            }
            :hover {
                display: none;
            }

        }

        b {
            font-weight: 500;
            display: block;
            letter-spacing: 0;
            :before {
                content: '';
                position: absolute;
                width: 0.15vw;
                height: 100%;
                background: red;
                top: 0;
                left: 0;
            }

        }
    }
    @media only screen and (max-width: 575px) {
        li {
            :first-child {
                border-top: 1px solid #dedede;
            }
            :hover {
                box-shadow: 0 0.1vw 0.5vw rgba(0,0,0,0.15);
            }
            :after {
                top: 22%;
                right: 3.5%;
                width: 3.5vw;
                height: 3.5vw;
                font-size: 3vw;      
            } 
        }
        p {
            padding: 2vw 1vw 2vw 3vw;
            border-bottom: 1px solid #dedede;
            font-size: 2.6vw;
            letter-spacing: -0.08vw;
            i {
                width: 65%;
                bottom: 10vw;
                right: 0%;
                padding: 3vw;
                box-shadow: 0 0.3vw 0.5vw rgba(0,0,0,0.2);
                border-radius: 0.2vw;
                font-size: 2.7vw;
                :before {
                    bottom: -1.4vw;
                    left: auto;
                    right: 0;
                    transform: translateX(-50%);
                    //bottom
                    border-right: 1.5vw solid transparent;
                    border-left: 1.5vw solid transparent;
                    border-top: 1.5vw solid var(--granich-black);
                }
    
            }
    
            b {
                letter-spacing: -0.08vw;
                :before {
                    width: 1.5px;
                    height: 100%;
                }
    
            }
        }
    }
`


const PriceCategoryFooter = styled.footer`
    background: #dedede;
    padding: 1vw 1.4vw;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 0.5vw 0.5vw;
    @media only screen and (max-width: 575px) {
        padding: 2.5vw 3vw;
        border-radius: 0 0 3vw 3vw;
        
    }
`
const PriceCategoryButton = styled.a`
    display: block;
    background: var(--granich-black-gradient);
    border-radius: 0.5vw;
    color: white;
    font-size: 3vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 400;
    padding: 0.3vw 0 0.5vw;
    text-align: center;
    transition: transform 0.2s ease;
    margin-bottom: 0.5vw;
    box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
    letter-spacing: -0.02vw;
    :hover {
        cursor: pointer;
        font-size: 3vw;
        color: white;
        font-weight: 400;
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        border-radius: 1vw;
        font-size: 7vw;
        padding: 1vw 0 1.3vw;
        box-shadow: 0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);
        margin-bottom: 1.5vw;
        :hover {
            font-size: 7vw;
            
        }
    }
`
const PriceCategorySubtext = styled.div`
    text-align: center;
    font-size: 0.8vw;
    font-weight: 500;
    letter-spacing: 0;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
    }
`

const PriceCategoryPackage = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75vw;
    letter-spacing: 0.4vw;
    font-weight: 600;
    font-family: Inter;
    margin-bottom: 0.6vw;
    @media only screen and (max-width: 575px) {
        font-size: 2vw;
        letter-spacing: 1vw;
        margin-bottom: 1vw;
    }
`

const CoursePriceRange = ({data}) => {
    return (
        <PriceRangeSection id="prices-range-section">
            <Container>
                <PriceRangeWrapper>
                    {data.edges.map((price, idx) => {
                        return (
                            <PriceCategory key={price.node.id}>
                                <PriceCategoryHeader>
                                    <PriceCategoryPackage id="price-category-package">Пакет</PriceCategoryPackage>
                                    <PriceCategoryTitle>{price.node.pricesTitle}</PriceCategoryTitle>
                                </PriceCategoryHeader>

                                <PriceCategoryList>
                                    {documentToReactComponents(price.node.pricesText.json)}
                                </PriceCategoryList>
                                <PriceCategoryFooter>
                                    <PriceCategoryButton>{price.node.pricesPrice} ₽</PriceCategoryButton>
                                    <PriceCategorySubtext id="price-category-subtext">
                                        {price.node.pricesSubtext}
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
