import React, { useState } from 'react';
import CorporateIcon from '../../../assets/svgs/graph-design/graph-design-corporate.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    PaymentChoice,
    PaymentChoiceTitle,
    PaymentChoiceText,
    PaymentChoiceEmail,
    CorporateWrapper
} from './styles';




const Corporate = () => {

    const [tooltipEmail, setTooltipEmail] = useState('Скопировать');


    return (
        <PaymentChoice gold>
            <PaymentChoiceTitle>Оформить корпоративное обучение</PaymentChoiceTitle>
            <PaymentChoiceText mail>Для этого напишите нам на почту <CopyToClipboard text={'hello@granich.design'}><PaymentChoiceEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PaymentChoiceEmail></CopyToClipboard></PaymentChoiceText>
            <CorporateWrapper>
                <CorporateIcon />
            </CorporateWrapper>
        </PaymentChoice>
    )
}

export default Corporate
