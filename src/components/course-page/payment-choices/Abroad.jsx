import React from 'react';
import styled from 'styled-components';
import GlobeIcon from '../../../assets/svgs/graph-design/graph-design-globe.svg';
import {
    PaymentChoice,
    PaymentChoiceTitle,
    PaymentChoiceText,
} from './styles';


const Globe = styled(props => <GlobeIcon {...props} />)`
    width: 5vw;
    position: absolute;
    right: 1.2vw;
    bottom: 1.2vw;
    @media only screen and (max-width: 575px) {
        width: 17vw;
        right: 4vw;
        bottom: 3.5vw;
    }


`


const Abroad = () => {

    return (
        <PaymentChoice blue>
            <PaymentChoiceTitle>Оплата из-за рубежа</PaymentChoiceTitle>
            <PaymentChoiceText>Также у нас есть прием платежей из-за рубежа. Чтобы начать оплату перейдите к заполнению обычной формы ↑</PaymentChoiceText>
            {/* <PaymentChoiceText mail>Для этого напишите нам на почту <CopyToClipboard text={'hello@granich.design'}><PaymentChoiceEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>hello@granich.design</PaymentChoiceEmail></CopyToClipboard></PaymentChoiceText> */}
            {/* <Paypal/> */}
            <Globe />
        </PaymentChoice>
    )
}

export default Abroad
