import React from 'react'
import { Container } from '../../style';
import {
    PaymentChoicesSection,
    PaymentChoicesWrapper,
} from './styles';
import Tinkoff from './Tinkoff';
import Corporate from './Corporate';
import Abroad from './Abroad';




const CoursePaymentChoices = ({ paymentsAvailable }) => {

    return (
        <PaymentChoicesSection>
            <Container>
                <PaymentChoicesWrapper>
                    {paymentsAvailable['credit'] && (
                        <Tinkoff />
                    )}
                    {paymentsAvailable['corporate'] && (
                        <Corporate />
                    )}
                    {paymentsAvailable['abroad'] && (
                        <Abroad />
                    )}
                </PaymentChoicesWrapper>
            </Container>
        </PaymentChoicesSection>
    )
}

export default CoursePaymentChoices
