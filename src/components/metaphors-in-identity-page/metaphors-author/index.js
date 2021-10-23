import React from 'react'
import { Container } from '../../style';
import * as SC from "./MetaphorsAuthor";
import { graphql, useStaticQuery } from "gatsby"
import TelegramIcon from "../../../assets/svgs/telegram-plane-brands.svg";





const MetaphorsAuthor = () => {

    const data = useStaticQuery(graphql`
        query metaphorsQuery {
            metaphorsAuthorImage: file(relativePath: { eq: "metaphors-in-identity-page/author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            metaphorsTelegramBlogImage: file(relativePath: { eq: "metaphors-in-identity-page/blog.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const authorImg = data.metaphorsAuthorImage.childImageSharp.fluid;
    const telegramBlogImg = data.metaphorsTelegramBlogImage.childImageSharp.fluid;

    return (
        <SC.Section>
            <Container>
                <SC.Wrapper>
                    <SC.AuthorInfoWrapper>
                        <SC.AuthorImg fluid={authorImg}/>
                        <SC.AuthorInfo>
                            <span>Курс ведёт</span>
                            <SC.AuthorName>Елизавета Черникова</SC.AuthorName>
                            <SC.AuthorDescr>Графический исследователь из команды Гранича</SC.AuthorDescr>
                        </SC.AuthorInfo>
                    </SC.AuthorInfoWrapper>
                    <SC.AuthorMore>
                        <SC.AuthorWarning>
                            Рекомендуем перед записью на курс изучить телеграм-канал Лизы, чтобы проникнуться тематикой метафор, и насколько они важны в графическом дизайне
                        </SC.AuthorWarning>
                        <SC.ArrowRight/>
                        <SC.AuthorBlogWrapper>
                            <SC.AuthorBlogImg fluid={telegramBlogImg}/>
                            <SC.AuthorBlogInfo>
                                <SC.AuthorBlogTitle>Графлаб</SC.AuthorBlogTitle>
                                <SC.AuthorBlogDescr>Блог о графдизайне, архетипах, брендинге, айдентике, рекламе.</SC.AuthorBlogDescr>
                                <SC.TelegramButton target="_blank" href="https://t.me/graflab">Перейти<TelegramIcon/></SC.TelegramButton>
                            </SC.AuthorBlogInfo>
                        </SC.AuthorBlogWrapper>
                    </SC.AuthorMore>
                </SC.Wrapper>
            </Container>
        </SC.Section>
    )
}

export default MetaphorsAuthor
