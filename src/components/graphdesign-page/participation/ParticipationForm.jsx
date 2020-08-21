import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import posed from "react-pose";


const ShakeForm = posed.div({
    shake: {
      applyAtEnd: { x: 0 },
      applyAtStart: { x: -10 },
      x: 0,
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 10,
        duration: 4
      }
    }
});

const FormMainWrapper = styled.div`
    background: white;
    // width: 40vw;
    border-radius: 0.5vw;
`


const FormWrapper = styled.div`

`

const FormContainer = styled.div`
    padding: 2vw 2.7vw;
`

const FormTags = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.8vw;
`
const FormTag = styled.div`
    border: 1.5px solid var(--granich-red);
    border-radius: 100vw;
    padding: 0.15vw 0.7vw;
    font-size: 0.9vw;
    margin-right: 1vw;
    color: var(--granich-red);
    font-weight: 600;
    letter-spacing: 0;
    :last-child {
        margin-right: 0;
    }
    ${props => props.important && `
        color: white;
        background: var(--granich-red);
    `}
`



const FormTitle = styled.div`
    font-size: 4vw;
    font-weight: 600;
    letter-spacing: -0.25vw;
    line-height: 0.85;
    margin-bottom: 1vw;
`
const Form = styled.form`
    position: relative;
`
const FormInput = styled.input`
    border-radius: 1vw;
    border: none;
    width: 25vw;
    box-shadow: inset 0 0 0.5vw rgba(0,0,0,0.4);
    padding: 0.7vw 1.6vw;
    margin-bottom: 1.5vw;
    margin-right: 0.8vw;
    margin-left: 0.3vw;
    font-size: 1.35vw;
`   

const FormInputLabel = styled.label`
    font-size: 0.8vw;
    color: var(--granich-grey);
    max-width: 7vw;
    display: inline-block;
`

const FormCheckbox = styled.input`
    margin-left: 0.3vw;
`

const FormCheckboxLabel = styled.label`

`

const FormButtonBlock = styled.div`
    display: flex;
    margin-bottom: 0.5vw;
    align-items: center;
`

const FormButton = styled.button`
    background: var(--granich-black);
    color: white;
    padding: 1vw 3vw;
    border-radius: 0.5vw;
    font-size: 1.65vw;
    transition: transform 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

const FormPrice = styled.div`
    color: white;
    margin-left: auto;
    font-family: EB Garamond;
    font-size: 4vw;
    font-style: italic;
    font-weight: 500;
    span {
        color: inherit;
        font-family: inherit;
        display: inline-block;
        margin-left: 0.5vw;
    }

`

const FormSubText = styled.div`
    color: white;
    font-size: 1.17vw;
`

const FormFooterWrapper = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.5vw 0.5vw;

`



const FormFooterContainer = styled.div`
    padding: 1.3vw 3vw 2vw;
    display: flex;
    flex-direction: column;
`


const ParticipationForm = () => {
    const formEl = useRef(null)
    // const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/;
    const myPhoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/;

    //44 - 44 - 55
    const myPhoneNewRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)?\s?-?\s?(\(?\d{0,3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/;

    const myNameRegExp = /^([^$#@:"?.\/\\€]|[0-9]*)/;
    const myNameNewRegExp = /([^\d€\\\/.?":@#$])/;

    const [shakeTrigger, setShakeTrigger] = useState(3);
    function isInitialValid(props) {
        if (!props.validationSchema) return true;
        return props.validationSchema.isValidSync(props.initialValues);
    }

    useEffect(() => {
    //Кодировка формы для Геткурса
        const firstGetcourseFormScript = () => {
            //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
            let loc = document.getElementById("2096375ed6bdb394609");
            loc.value = window.location.href;
            let ref = document.getElementById("2096375ed6bdb394609ref");
            ref.value = document.referrer;
        }
        //Кодировка формы для Геткурса
        const secondGetcourseFormScript = () => {
            let statUrl = "https://english-school.getcourse.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) + "&loc=" + encodeURIComponent(document.location.href);
            document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
        }

        firstGetcourseFormScript()
        secondGetcourseFormScript()
    }, [])
    return (
        <ShakeForm pose={["shake"]} poseKey={shakeTrigger}>
            <FormMainWrapper>
                <Formik isInitialValid={isInitialValid}
                                initialValues={{politikaCheckbox: false, formParams: {
                                    first_name: '',
                                    last_name: '',
                                    email: '',
                                    phone: ''
                                }}}
                                onSubmit={(values, {setSubmitting}, e) => {
                                    formEl.current.submit();
                                }}
                                validationSchema={Yup.object().shape({
                                    politikaCheckbox: Yup.bool().oneOf([true], 'Нажмите на чекбокс!'),
                                    formParams: Yup.object().shape({
                                        first_name: Yup.string().trim('no whitespaces').strict().matches(myNameNewRegExp, 'Must not contain symbols').required('Заполните поле Имя'),
                                        last_name: Yup.string().trim('no whitespaces').strict().matches(myNameNewRegExp, 'Must not contain symbols').required('Заполните поле Фамилия'),
                                        email: Yup.string().email('Неверный формат электронного адреса').required('Заполните поле Емейл'),
                                        phone: Yup.string().matches(myPhoneNewRegExp, 'Phone number is not valid').required('Заполните поле Телефон'),

                                    })
                                })}
                            >
                                {props => {
                                    const {
                                        values, 
                                        errors, 
                                        isSubmitting, 
                                        handleChange, 
                                        handleSubmit,
                                        isValid
                                    } = props;
                                    return (
                                        <Form ref={formEl} onSubmit={ (e) => {
                                            if(isValid) {
                                                handleSubmit(e);
                                                console.log(isValid)
                                            } else {
                                                handleSubmit(e);
                                                console.log(isValid)
                                                setShakeTrigger(shakeTrigger + 1)
                                                values.formParams.email = '';

                                            }
                                        }}  id="ltForm9605210"  action="https://english-school.getcourse.ru/pl/lite/block-public/process-html?id=728049569" method="post" data-open-new-window="0" >
                                    <FormWrapper>
                                        <FormContainer>

                                        <FormTags>
                                            <FormTag important>17 поток</FormTag>
                                            <FormTag>Старт 1 сентября</FormTag>
                                            <FormTag>2 месяца интенсива</FormTag>
                                        </FormTags>
                                        <FormTitle>Участвовать <br/>в курсе</FormTitle>
                                        <input type="hidden" name="formParams[setted_offer_id]" /><br/>
                                            {console.log(values)}
                                            {console.log('errors',errors)}
                                            <FormInput 
                                                type="text" 
                                                maxLength="60"  
                                                placeholder="Имя" 
                                                name="formParams[first_name]"
                                                value={values.formParams.first_name}
                                                onChange={handleChange}

                                            /> <br/>
                                            <FormInput 
                                                type="text" 
                                                maxLength="60"  
                                                placeholder="Фамилия" 
                                                name="formParams[last_name]"
                                                value={values.formParams.last_name}
                                                onChange={handleChange}
                                            
                                            /> <br/>

                                            <FormInput 
                                                type="text" 
                                                maxLength="60"  
                                                placeholder={errors.formParams && errors.formParams.email ? errors.formParams.email : 'Электропочта'} 
                                                name="formParams[email]"
                                                value={values.formParams.email}
                                                onChange={handleChange}
                                                id="participation-email"
                                            
                                            />
                                            <FormInputLabel htmlFor="participation-email">чтобы выслать код для входа</FormInputLabel>
                                            <br/>

                                            <FormInput 
                                                type="text" 
                                                maxLength="60"  
                                                placeholder="Телефон" 
                                                name="formParams[phone]"
                                                value={values.formParams.phone}
                                                onChange={handleChange}
                                                id="participation-phone"
                                            /> 
                                            <FormInputLabel htmlFor="participation-email">для экстренной связи</FormInputLabel>
                                            <br/>

                                            <FormCheckbox 
                                                type="checkbox"
                                                name="politikaCheckbox"
                                                value={values.politikaCheckbox}
                                                checked={values.politikaCheckbox}
                                                onChange={handleChange}
                                                id="participation-checkbox"
                                            /> 
                                            <FormCheckboxLabel htmlFor="participation-checkbox">Принять оферту и политику конфиденциальности</FormCheckboxLabel>
                                            <br/>
                                        </FormContainer>


                                        
                                    </FormWrapper>
                                    <FormFooterWrapper>

                                        <FormFooterContainer>
                                            <FormButtonBlock>
                                                <FormButton 
                                                        disabled={isSubmitting} 
                                                        type="submit"
                                                        id="button2119696"
                                                        onClick={() => {if(window['btnprs5ed6bdb399786']){
                                                            return false;
                                                        }
                                                        window['btnprs5ed6bdb399786']=true;
                                                        setTimeout(function(){
                                                            window['btnprs5ed6bdb399786']=false},6000);
                                                            return true;}}
                                                    >Оплатить</FormButton>
                                                        <FormPrice>→ 27000<span>₽</span></FormPrice>

                                            </FormButtonBlock>

                                            <FormSubText>Количество мест ограничено. Стоимость будет расти↑</FormSubText>
                                        </FormFooterContainer>
                                    </FormFooterWrapper>
                                            




                                            <input type="hidden" id="2096375ed6bdb394609" name="__gc__internal__form__helper" className="__gc__internal__form__helper" value=""/>
                                            <input type="hidden" id="2096375ed6bdb394609ref" name="__gc__internal__form__helper_ref" className="__gc__internal__form__helper_ref" value=""/>
                                            <input type="hidden" name="requestTime" value="1591131571"/>
                                            <input type="hidden" name="requestSimpleSign" value="d5bf9d9f1e29eaded1dcc696282a0cb7"/>
                                            <input type="hidden" name="isHtmlWidget" value="1"/>

                                        </Form>
                                        
                                    )
                                }}
                            </Formik>
                            <span id="gccounterImgContainer"></span>
                            
            </FormMainWrapper>
        </ShakeForm>
    )
}

export default ParticipationForm
