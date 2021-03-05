import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import posed from "react-pose";
import { Link } from "gatsby";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

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



`


const FormWrapper = styled.div`

`

const FormContainer = styled.div`
    padding: 2vw 0vw 1vw 2.7vw;
    @media only screen and (max-width: 575px) {
        padding: 5vw;
    }
`

const FormTags = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.8vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 4vw;
    }
    ${props => props.formDisabled && `
        div {
            color: var(--granich-grey);
            border-color: color: var(--granich-grey);
        }
    `}
`
const FormTag = styled.div`
    border: 1px solid var(--granich-red);
    border-radius: 100vw;
    padding: 0.15vw 0.7vw;
    font-size: 0.9vw;
    margin-right: 0.5vw;
    color: var(--granich-red);
    letter-spacing: 0;
    :last-child {
        margin-right: 0;
    }
    ${props => props.important && `
        color: white;
        background: var(--granich-red);
    `}
    @media only screen and (max-width: 575px) {
        padding: 0.8vw 2.2vw;
        font-size: 2.8vw;
        white-space: nowrap;
        margin-right: 1vw;
        letter-spacing: -0.05vw;
    }
`



const FormTitle = styled.h2`
    font-size: 4vw;
    font-weight: 600;
    letter-spacing: -0.15vw;
    line-height: 0.85;

    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        width: 90%;
        margin-bottom: 5vw;
    }
`
const Form = styled.form`
    height: 100%;
    position: relative;
    background: white;
    border-radius: 0.6vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        br {
            display: none;
        }
    }
`
const FormInput = styled.input`
    border-radius: 0.8vw;
    border: none;
    width: 25vw;
    box-shadow: inset 0 0 0.5vw rgba(0,0,0,0.2);
    padding: 0.7vw 1.4vw;
    margin-top: 0.7vw;
    margin-bottom: 0.7vw;
    margin-right: 0.7vw;
    margin-left: 0.3vw;
    font-size: 1.35vw;
    border: 1px solid #dedede;
    background: #fafafa;
    @media only screen and (max-width: 575px) {
        width: 100%;
        box-shadow: inset 0 0 1.2vw rgba(0,0,0,0.2);
        padding: 2vw 4vw;
        font-size: 4vw;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 1vw;
        margin-top: 3vw;
        border-radius: 2.5vw;
    }
    ${props => props.errorStyle && `
        border: 1px solid var(--granich-red);
        box-shadow: inset 0 0 0.5vw rgba(228, 5, 33, 0.4);
        @media only screen and (max-width: 575px) {
            box-shadow: inset 0 0 1.2vw rgba(228, 5, 33, 0.4);
        }
    `}


`

const FormInputLabel = styled.label`
    font-size: 0.9vw;
    color: var(--granich-light-grey);
    max-width: 9vw;
    display: inline-block;
    position: relative;
    top: 0.3vw;

    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        max-width: 100%;
        top: 0vw;
        margin-left: 0.4vw;
        display: none;

    }
`

const FormInputLabelMobile = styled.label`
    font-size: 0.9vw;
    color: var(--granich-light-grey);
    max-width: 7vw;
    display: inline-block;
    position: relative;
    top: 0.3vw;
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
        font-size: 3vw;
        max-width: 100%;
        top: 0vw;
        margin-left: 0.4vw;

    }
`

// const FormCheckbox = styled.input`
//     margin-left: 0.3vw;
//     @media only screen and (max-width: 575px) {

//     }


// `

const FormPolitikaLabel = styled.div`
    font-size: 1.2vw;
    user-select: none;
    letter-spacing: -0.02vw;
    margin-top: 1.5vw;
    margin-left: 0.4vw;
    margin-bottom: 0.7vw;
    line-height: 1.4;

    a {
        color: var(--granich-red);
        font-weight: 400;
        display: inline-block;
        position: relative;
       
        :after {
            content: '';
            height: 1px;
            width: 100%;
            background: rgba(228,5,33, 0.2);
            position: absolute;
            bottom: -0.1vw;
            left: 0;

        }
        
        :hover {
            :after {
                background: var(--granich-red);
            }
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        margin-top: 5vw;
    }
    ${props => props.formDisabled && `
        a {
            color: var(--granich-grey);
            :after {
                background: rgba(0,0,0, 0.2);
            }
            :hover {
                :after {
                    background: var(--granich-grey);
                }
                
            }
        }
    `}
`

const ErrorMessage = styled.div`
    font-size: 1vw;
    color: var(--granich-red);
    margin-left: 0.4vw;
    margin-bottom: 0.5vw;
    // white-space: nowrap;
    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        white-space: normal;
        margin-bottom: 0.5vw;

    }
`

const FormButtonBlock = styled.div`
    display: flex;
    margin-bottom: 0.2vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        margin-bottom: 1vw;
        
    }
`

const FormButton = styled.button`
    background: var(--granich-black-gradient);
    color: white;
    padding: 1vw 3vw;
    text-align: center;
    border-radius: 0.5vw;
    font-size: 1.65vw;
    transition: transform 0.3s ease;
    box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        font-size: 4.4vw;
        padding: 3vw 8vw;
        border-radius: 1.5vw;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
        span {
            font-size: 2.5vw;
        }
        :hover {
            transform: none;
        }
    }
    ${props => props.formDisabled && `
        background: var(--granich-grey);
        padding: 1vw 1.3vw;
        font-size: 1.4vw;
        :hover {
            transform: none;
            cursor: default;
        }
        @media only screen and (max-width: 575px) {
            font-size: 3.6vw;
            padding: 3vw 3.5vw;
            span {
                font-size: 2.5vw;
            }
            :hover {
                transform: none;
            }
        }
    `}
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
    i {
        color: inherit;
        position: relative;
        top: -0.3vw;
        right: 0.8vw;
        display: inline-block;
    }
    @media only screen and (max-width: 575px) {
        font-size: 12.5vw;
        padding-right: 1vw;
        margin-top: -1vw;
        i {
            display: none;
        }
    }

`

const FormSubText = styled.div`
    color: white;
    font-size: 1.17vw;
    white-space: nowrap;
    @media only screen and (max-width: 575px) {
        font-size: 2.85vw;

    }
`

const FormFooterWrapper = styled.div`
    background: var(--granich-red);
    border-radius: 0 0 0.6vw 0.6vw;
    margin-top: auto;
    @media only screen and (max-width: 575px) {
        border-radius: 0 0 2.5vw 2.5vw;
    }
    ${props => props.formDisabled && `
        background: var(--granich-light-grey);
    `}

`



const FormFooterContainer = styled.div`
    padding: 1.3vw 3vw 2vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        padding: 4.5vw 5vw 7vw;
    }
`





const ParticipationForm = ({ data, formId, formAction, googleAnaliticsCategory, additionalTags }) => {
    const formEl = useRef(null)
    // const myPhoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/;

    //44 - 44 - 55
    const myPhoneNewRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)?\s?-?\s?(\(?\d{0,3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/;
    // const myNameNewRegExp = /([^\d€\\\/.?":@#$])/;
    const myNameNewRegExp = /([^\d€\/\\.?":@#$])/;

    const [shakeTrigger, setShakeTrigger] = useState(3);
    function isInitialValid(props) {
        if (!props.validationSchema) return true;
        return props.validationSchema.isValidSync(props.initialValues);
    }

    useEffect(() => {
        //Кодировка формы для Геткурса
        const firstGetcourseFormScript = () => {
            //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
            let loc = document.getElementById("2588385f64b8d766d50");
            loc.value = window.location.href;
            let ref = document.getElementById("2588385f64b8d766d50ref");
            ref.value = document.referrer;
        }
        //Кодировка формы для Геткурса
        const secondGetcourseFormScript = () => {
            let statUrl = "https://school.granich.design/stat/counter?ref=" + encodeURIComponent(document.referrer) + "&loc=" + encodeURIComponent(document.location.href);
            document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
        }

        firstGetcourseFormScript()
        secondGetcourseFormScript()
    }, [])
    // isInitialValid={isInitialValid}
    return (

        <FormMainWrapper>
            <ShakeForm style={{ height: '100%' }} pose={["shake"]} poseKey={shakeTrigger}>

                <Formik isInitialValid={isInitialValid}
                    initialValues={{
                        // politikaCheckbox: true, 
                        formParams: {
                            first_name: '',
                            last_name: '',
                            email: '',
                            phone: ''
                        }
                    }}
                    onSubmit={(values, { setSubmitting }, e) => {
                        formEl.current.submit();
                        trackCustomEvent({
                            category: `${googleAnaliticsCategory}`,
                            action: 'click',
                            label: 'Форма'
                        })
                    }}
                    validationSchema={Yup.object().shape({
                        // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на учебный договор и на обработку персональных данных'),
                        formParams: Yup.object().shape({
                            first_name: Yup.string().trim('Уберите пробелы в начале и в конце строки').strict().matches(myNameNewRegExp, 'Неверные символы в Имени').required('Сперва впишите Имя'),
                            // first_name: Yup.string().email('Неверный формат электронного адреса').required('Заполните поле Емейл'),
                            last_name: Yup.string().trim('Уберите пробелы в начале и в конце строки').strict().matches(myNameNewRegExp, 'Неверные символы в Фамилии').required('Сперва впишите Фамилию'),
                            email: Yup.string().email('Это не Электропочта').required('Сперва впишите Электропочту'),
                            phone: Yup.string().matches(myPhoneNewRegExp, 'Это не Телефон').required('Сперва впишите Телефон'),

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
                            isValid,
                            touched,
                            handleBlur,
                            // setFieldValue,
                            // setFieldTouched,


                        } = props;
                        return (

                            <Form ref={formEl} onSubmit={(e) => {
                                if (isValid) {
                                    handleSubmit(e);

                                } else {
                                    handleSubmit(e);
                                    setShakeTrigger(shakeTrigger + 1);

                                }
                            }} id={formId} action={formAction} method="post" data-open-new-window="0" >
                                <FormWrapper>

                                    <FormContainer>

                                        <FormTags formDisabled={!data.courseStatus}>
                                            {data.courseStream && data.courseStatus && <FormTag important>{data.courseStream} поток</FormTag>}
                                            {data.courseStartAndEnd && data.courseStatus && <FormTag>{data.courseStartAndEnd}</FormTag>}
                                            {data.courseTags.map((tag, idx) => {
                                                return (
                                                    <FormTag key={idx}>{tag}</FormTag>
                                                )
                                            })}
                                            {/* {additionalTags && additionalTags.map((tag, idx) => {
                                                return (
                                                    <FormTag key={idx}>{tag}</FormTag>
                                                )
                                            })} */}


                                        </FormTags>
                                        <FormTitle>Участвовать <br />в курсе</FormTitle>
                                        <input type="hidden" name="formParams[setted_offer_id]" /><br />
                                        <FormInput
                                            type="text"
                                            maxLength="60"
                                            placeholder="Имя"
                                            name="formParams[first_name]"
                                            value={values.formParams.first_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={!data.courseStatus}
                                            errorStyle={errors.formParams && errors.formParams.first_name && touched.formParams && touched.formParams.first_name ? 1 : 0}

                                        /> <br />
                                        {errors.formParams && errors.formParams.first_name && touched.formParams && touched.formParams.first_name && (
                                            <ErrorMessage>{errors.formParams.first_name}</ErrorMessage>
                                        )}
                                        <FormInput
                                            type="text"
                                            maxLength="60"
                                            placeholder="Фамилия"
                                            name="formParams[last_name]"
                                            value={values.formParams.last_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={!data.courseStatus}
                                            errorStyle={errors.formParams && errors.formParams.last_name && touched.formParams && touched.formParams.last_name ? 1 : 0}

                                        /> <br />
                                        {errors.formParams && errors.formParams.last_name && touched.formParams && touched.formParams.last_name && (
                                            <ErrorMessage>{errors.formParams.last_name}</ErrorMessage>
                                        )}
                                        <FormInput
                                            type="email"
                                            maxLength="60"
                                            placeholder="Электропочта"
                                            name="formParams[email]"
                                            value={values.formParams.email}
                                            onChange={handleChange}
                                            id="formParams[email]"
                                            onBlur={handleBlur}
                                            disabled={!data.courseStatus}
                                            errorStyle={errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email ? 1 : 0}

                                        />
                                        <FormInputLabel htmlFor="formParams[email]">чтобы выслать ссылку для входа</FormInputLabel>
                                        <br />

                                        {errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email && (
                                            <ErrorMessage>{errors.formParams.email}</ErrorMessage>
                                        )}
                                        <FormInputLabelMobile htmlFor="formParams[email]">чтобы выслать ссылку для входа</FormInputLabelMobile>
                                        <FormInput
                                            type="tel"
                                            maxLength="60"
                                            placeholder="Телефон"
                                            name="formParams[phone]"
                                            value={values.formParams.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="formParams[phone]"
                                            disabled={!data.courseStatus}
                                            errorStyle={errors.formParams && errors.formParams.phone && touched.formParams && touched.formParams.phone ? 1 : 0}
                                        />
                                        <FormInputLabel htmlFor="formParams[phone]">для экстренной связи</FormInputLabel>
                                        <br />

                                        {errors.formParams && errors.formParams.phone && touched.formParams && touched.formParams.phone && (
                                            <ErrorMessage>{errors.formParams.phone}</ErrorMessage>
                                        )}
                                        <FormInputLabelMobile htmlFor="formParams[phone]">для экстренной связи</FormInputLabelMobile>
                                        {/* <FormCheckbox 
                                                type="checkbox"
                                                name="politikaCheckbox"
                                                value={values.politikaCheckbox}
                                                checked={values.politikaCheckbox}
                                                onChange={v => {
                                                    setFieldTouched("politikaCheckbox", true)
                                                    setFieldValue("politikaCheckbox", v.target.checked)
                                                }}
                                                id="politikaCheckbox"
                                                className={`course-form-checkbox`}
                                                
                                            />  */}

                                        {/* <FormPolitikaLabel className={`course-form-label ${errors.politikaCheckbox && touched.politikaCheckbox && 'course-form-label_error'}`} htmlFor="politikaCheckbox">Принять <Link to="/public-offer"> оферту </Link> и <Link to="/privacy"> политику конфиденциальности</Link></FormPolitikaLabel> */}
                                        <FormPolitikaLabel formDisabled={!data.courseStatus}> Нажимая на кнопку в этой форме, я принимаю условия <Link to="/privacy"> политики конфиденциальности</Link> и <Link to="/public-offer"> учебного договора </Link></FormPolitikaLabel>
                                        {/*                                             
                                            {errors.politikaCheckbox && touched.politikaCheckbox && (
                                                <ErrorMessage>{errors.politikaCheckbox}</ErrorMessage>
                                            )} */}
                                    </FormContainer>



                                </FormWrapper>
                                <FormFooterWrapper formDisabled={!data.courseStatus}>

                                    <FormFooterContainer>
                                        <FormButtonBlock>
                                            <FormButton
                                                formDisabled={!data.courseStatus}
                                                disabled={isSubmitting || !data.courseStatus}
                                                type="submit"
                                                id="button970916"
                                                onClick={() => {
                                                    if (window['btnprs5f64b8d772769']) {
                                                        return false;
                                                    }
                                                    window['btnprs5f64b8d772769'] = true;
                                                    setTimeout(function () {
                                                        window['btnprs5f64b8d772769'] = false
                                                    }, 6000);
                                                    return true;
                                                }}
                                            >
                                                {!data.courseStatus ? 'Набор завершён' : 'Оплатить'}
                                            </FormButton>
                                            {data.coursePrice && (
                                                <FormPrice><i>→ </i>{data.coursePrice}<span>₽</span></FormPrice>
                                            )}


                                        </FormButtonBlock>

                                        <FormSubText>Количество мест ограничено. Стоимость будет расти↑</FormSubText>
                                    </FormFooterContainer>
                                </FormFooterWrapper>





                                <input type="hidden" id="2588385f64b8d766d50" name="__gc__internal__form__helper" className="__gc__internal__form__helper" value="" />

                                <input type="hidden" id="2588385f64b8d766d50ref" name="__gc__internal__form__helper_ref" className="__gc__internal__form__helper_ref" value="" />

                                <input type="hidden" name="requestTime" value="1600436439" />

                                <input type="hidden" name="requestSimpleSign" value="49b52db9d0d0c2186e4a47c281ae23ca" />

                                <input type="hidden" name="isHtmlWidget" value="1" />

                            </Form>

                        )
                    }}
                </Formik>
                <span id="gccounterImgContainer"></span>


            </ShakeForm>
        </FormMainWrapper>
    )
}

export default ParticipationForm
