import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {
    PaymentChoice,
    PaymentChoiceTitle,
    PaymentChoiceText,
} from './styles';

const PaymentChoiceImageIcon = styled(props => <Img {...props} />)`
    width: 5vw;
    right: 1vw;
    bottom: 1vw;
    @media only screen and (max-width: 575px) {
        width: 17vw;
        right: 4vw;
        bottom: 3vw;
    }
`


const Tinkoff = ({ inbuilt }) => {

    const data = useStaticQuery(graphql`
        query paymentChoicesImages {
            tinkoffImage: file(relativePath: { eq: "graph-design/payment-choices/tinkoff.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const tinkoff = data.tinkoffImage.childImageSharp.fluid


    return (
        <PaymentChoice grey inbuilt={inbuilt}>
            <PaymentChoiceTitle>Можно оплатить в рассрочку</PaymentChoiceTitle>
            <PaymentChoiceText>Рассрочка 0% от Тинькофф на 4 месяца или полгода. Для получения рассрочки перейдите к заполнению обычной формы {inbuilt ? '←' : '↑'}</PaymentChoiceText>
            <PaymentChoiceImageIcon style={{ position: 'absolute' }} fluid={tinkoff} />
        </PaymentChoice>
    )
}

export default Tinkoff
