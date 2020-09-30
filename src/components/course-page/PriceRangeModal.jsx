import React,{useRef, useState, useEffect} from 'react'
import styled from 'styled-components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import posed from "react-pose";
import Cross from '../../assets/svgs/cross.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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



  
  const FormWrapper = styled.div`

  `
  
  const FormContainer = styled.div`
      padding: 2.8vw 2vw 1vw 2.7vw;
      @media only screen and (max-width: 575px) {
          padding: 5vw 5vw 3vw;
      }
  `
  

  
  
  
  const FormTitle = styled.h2`
      font-size: 4vw;
      font-weight: 600;
      letter-spacing: -0.25vw;
      line-height: 0.85;
      @media only screen and (max-width: 575px) {
          font-size: 11vw;
          width: 100%;
          margin-bottom: 8vw;
      }
  `
  const Form = styled.form`
      background: white;
      border-radius: 0.6vw;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 0.7vw rgba(0,0,0,0.2);
      position: relative;
      width: 39vw;

      @media only screen and (max-width: 575px) {
          border-radius: 2.5vw;
          width: 100%;
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
      margin-right: 1vw;
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
      max-width: 7vw;
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
  
  const FormCheckbox = styled.input`
      margin-left: 0.3vw;
      @media only screen and (max-width: 575px) {
          
      }
  
  
  `
  
  const FormPolitikaLabel = styled.div`
      font-size: 1.2vw;
      letter-spacing: -0.02vw;
      margin-top: 1vw;
      margin-left: 0.4vw;
      margin-bottom: 0.7vw;
      padding-bottom: 1vw;
      margin-right: .8vw;
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
              // border-bottom: none;
              :after {
                  background: var(--granich-red);
              }
          }
      }
      @media only screen and (max-width: 575px) {
          font-size: 3vw;
          margin-top: 3vw;
      }
      ${props => props.line && `
        border-bottom: 1px solid #dedede;
        :last-child {
            border-bottom: none;
        }
        @media only screen and (max-width: 575px) {
            padding-bottom: 3vw;
        }
      `}
  `

  const FormCheckboxLabel = styled.label`
  font-size: 1.2vw;
  user-select: none;
  letter-spacing: -0.02vw;
  margin-top: 1vw;
  margin-left: 0.4vw;
  margin-bottom: 0.7vw;
  display: flex;

  padding-bottom: 1vw;
  margin-right: .8vw;

  a {
      color: var(--granich-red);
      font-weight: 400;
      display: inline-block;
      margin: 0 0.4vw;
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
          // border-bottom: none;
          :after {
              background: var(--granich-red);
          }
      }
  }
  @media only screen and (max-width: 575px) {
      font-size: 3vw;
      margin-top: 3vw;
  }
  ${props => props.line && `
    border-bottom: 1px solid #dedede;
    :last-child {
        border-bottom: none;
    }
    @media only screen and (max-width: 575px) {
        padding-bottom: 3vw;
    }
  `}
`

const FormLabelPrice = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 2vw;
    line-height: 1;
    white-space: nowrap;
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
    }
`

const FormLabelText = styled.div`
    width: 24vw;
    @media only screen and (max-width: 575px) {
        width: 56vw;
    }
`
  
  const ErrorMessage = styled.div`
      font-size: 1vw;
      color: var(--granich-red);
      margin-left: 0.4vw;
      margin-bottom: 0.5vw;
      @media only screen and (max-width: 575px) {
          font-size: 3vw;
          margin-bottom: 0.5vw;
  
      }
  `
  
  const FormButtonBlock = styled.div`
      display: flex;
      margin-bottom: 1vw;
      align-items: center;
      @media only screen and (max-width: 575px) {
          margin-bottom: 2vw;
          
      }
  `
  
  const FormButton = styled.button`
      background: var(--granich-black-gradient);
      color: white;
      padding: 1vw 3vw;
      border-radius: 0.5vw;
      font-size: 1.65vw;
      transition: transform 0.3s ease;
      box-shadow: 0.2vw 0.2vw 0.4vw rgba(0,0,0,0.4);
      user-select: none;
      :hover {
          cursor: pointer;
          transform: scale(1.05);
      }
      @media only screen and (max-width: 575px) {
          font-size: 4.4vw;
          padding: 3vw 8vw;
          border-radius: 1.5vw;
          box-shadow: 0.5vw 0.5vw 1vw rgba(0,0,0,0.25);
          :hover {
            transform: none;
        }
      }
  `
  

  
  const FormSubText = styled.div`
      color: white;
      font-size: 1.17vw;
      line-height: 1.4;
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
  
  `
  
  
  
  const FormFooterContainer = styled.div`
      padding: 1.3vw 3vw 2vw;
      display: flex;
      flex-direction: column;
      @media only screen and (max-width: 575px) {
          padding: 4.5vw 5vw 7vw;
      }
  `

const FormCross = styled.div`
      position: absolute;
      top: 1vw;
      right: 1vw;
      svg {
          fill: rgba(0,0,0,0.2);
          width: 4vw;
          height: 4vw;
      }
      :hover {
          cursor: pointer;
          svg {
            fill: var(--granich-red);
          }

      }
      @media only screen and (max-width: 575px) {
        svg {
            width: 12vw;
            height: 12vw;
        }
      }
`

const FormSubTextEmail = styled.span`
    position: relative;
    left: 0.5vw;
    color: inherit;
    font-size: inherit;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    :hover {
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -0.85vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -2.8vw;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.8vw;
        line-height: 1;
        padding: 0.7vw 1vw;
        min-width: 5vw; 
        text-align: center;
        border-radius: 0.2vw;
        white-space: nowrap;
        background: var(--granich-black);
        

    }

    @media only screen and (max-width: 575px) {
        padding-bottom: 0;
        display: inline-block;
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;

        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
        }
`





const PriceRangeModal = ({modalIsOpen, openModal, closeModal, chosenPrice, data}) => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    const formEl = useRef(null)

    const [shakeTrigger, setShakeTrigger] = useState(3);
    function isInitialValid(props) {
        if (!props.validationSchema) return true;
        return props.validationSchema.isValidSync(props.initialValues);
    }

    useEffect(() => {
            // Кодировка формы для Геткурса
            const firstGetcourseFormScript = () => {
                //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
                let loc = document.getElementById("2588285f64b2eccc844");
                loc.value = window.location.href;
                let ref = document.getElementById("2588285f64b2eccc844ref");
                ref.value = document.referrer;


            }
            //Кодировка формы для Геткурса
            const secondGetcourseFormScript = () => {
                let statUrl = "https://granich.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) + "&loc=" + encodeURIComponent(document.location.href);
                document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
            }
            firstGetcourseFormScript()
            secondGetcourseFormScript()

    }, [])



    return (

        <>
                <ShakeForm  pose={["shake"]} poseKey={shakeTrigger}>
                    <Formik isInitialValid={isInitialValid} 
                                initialValues={{
                                    // politikaCheckbox: true,
                                    // offerCheckbox: true, 
                                    formParams: {
                                    offer_id: `${chosenPrice}`,
                                    email: '',
                                    
                                }}}
                                onSubmit={(values, {setSubmitting}, e) => {
                                    formEl.current.submit();
                                }}
                                validationSchema={Yup.object().shape({
                                    // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на обработку персональных данных'),
                                    // offerCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на учебный договор'),
                                    formParams: Yup.object().shape({
                                        offer_id: Yup.string().required('Выберите один из пакетов'),
                                        email: Yup.string().email('Это не Электропочта').required('Сперва впишите Электропочту'),

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
                                        setFieldValue,
                                        setFieldTouched,
                                        

                                    } = props;
                                    return (
                                        
                                        <Form  ref={formEl} onSubmit={ (e) => {
                                            if(isValid) {
                                                handleSubmit(e);
                                            
                                            } else {
                                                handleSubmit(e);
                                                setShakeTrigger(shakeTrigger + 1);
                                                
                                            }
                                        }}  id="ltForm862509"  action="https://granich.ru/pl/lite/block-public/process-html?id=855570200" method="post" data-open-new-window="0" >
                                    <FormWrapper>
                                        <FormCross onClick={closeModal}><Cross/></FormCross>
                                       
                                    <FormContainer>
                                        <FormTitle>Выберите <br/>нужный пакет</FormTitle>
                                        <input  type="hidden" name="formParams[setted_offer_id]" />
                                        <input id="input-formPosition9651352" name='formParams[need_offer]' type='hidden' value="" />
                                        <br/>
                                        {/* <input id={`${data.edges[0].node.pricesPrice}`} name='formParams[need_offer]' type='hidden' value="1" /> */}
                                        <FormCheckbox 
                                                data-price-value={`${data.edges[0].node.pricesPrice}`}
                                                data-old-price-value={`${data.edges[0].node.pricesPrice}`}
                                                data-price-currency="руб."
                                                data-qty-value="1"
                                                type="radio"
                                                name="formParams[offer_id]"
                                                value="1164222"
                                                checked={values.formParams.offer_id === `${data.edges[0].node.pricesPrice}`}
                                                
                                                onChange={() => {
                                                    setFieldValue("formParams[offer_id]", `${data.edges[0].node.pricesPrice}`);
                                                    
                                                    // setFieldTouched("formParams[offer_id]", true)
                                                }}
                                                id={`${data.edges[0].node.pricesPrice}`}
                                                className={`course-form-checkbox`}
                                                errorStyle={errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id ? 1 : 0}
                                                
                                            /> 
                                            <FormCheckboxLabel line 
                                                               className={`course-form-label ${errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id && 'course-form-label_error'}`} 
                                                               htmlFor={`${data.edges[0].node.pricesPrice}`}>
                                                        <FormLabelText>
                                                            пакет Презентация
                                                        </FormLabelText>
                                                        <FormLabelPrice>
                                                            {`${data.edges[0].node.pricesPrice}`} ₽
                                                        </FormLabelPrice>
                                            </FormCheckboxLabel>
                                            {/* <input id={`${data.edges[1].node.pricesPrice}`} name='formParams[need_offer]' type='hidden' value="1" /> */}
                                            <FormCheckbox 
                                                data-price-value={`${data.edges[1].node.pricesPrice}`}
                                                data-old-price-value={`${data.edges[1].node.pricesPrice}`}
                                                data-price-currency="руб."
                                                data-qty-value="1"
                                                type="radio"
                                                name="formParams[offer_id]"
                                                value="1164224"
                                                checked={values.formParams.offer_id === `${data.edges[1].node.pricesPrice}`}
                                                onChange={() => {
                                                    setFieldValue("formParams[offer_id]", `${data.edges[1].node.pricesPrice}`);
                                                    // setFieldTouched("formParams[offer_id]", true)
                                                }}
                                                id={`${data.edges[1].node.pricesPrice}`}
                                                className={`course-form-checkbox`}
                                                errorStyle={errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id ? 1 : 0}
                                                
                                            /> 
                                           
                                            <FormCheckboxLabel line 
                                                               className={`course-form-label ${errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id && 'course-form-label_error'}`} 
                                                               htmlFor={`${data.edges[1].node.pricesPrice}`}>
                                                                <FormLabelText>
                                                                    пакет Видеоформат
                                                                </FormLabelText>
                                                                <FormLabelPrice>
                                                                    {`${data.edges[1].node.pricesPrice}`} ₽
                                                                </FormLabelPrice>
                                                            </FormCheckboxLabel>
                                            {/* <input id={`${data.edges[2].node.pricesPrice}`} name='formParams[need_offer]' type='hidden' value="1" />                 */}
                                            <FormCheckbox 
                                                data-price-value={`${data.edges[2].node.pricesPrice}`}
                                                data-old-price-value={`${data.edges[2].node.pricesPrice}`}
                                                data-price-currency="руб."
                                                data-qty-value="1"
                                                type="radio"
                                                name="formParams[offer_id]"
                                                value="1164226"
                                                checked={values.formParams.offer_id === `${data.edges[2].node.pricesPrice}`}
                                                onChange={() => {
                                                    setFieldValue("formParams[offer_id]", `${data.edges[2].node.pricesPrice}`);
                                                    // setFieldTouched("formParams[offer_id]", true)
                                                }}
                                                id={`${data.edges[2].node.pricesPrice}`}
                                                className={`course-form-checkbox`}
                                                errorStyle={errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id ? 1 : 0}
                                                
                                            /> 
                                            {console.log(values.formParams.offer_id)}
                                           
                                            <FormCheckboxLabel line className={`course-form-label ${errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id && 'course-form-label_error'}`} htmlFor={`${data.edges[2].node.pricesPrice}`}>
                                                  <FormLabelText>
                                                    пакет Домашнее Задание
                                                  </FormLabelText>
                                                  <FormLabelPrice>
                                                      {`${data.edges[2].node.pricesPrice}`} ₽
                                                  </FormLabelPrice>
                                            </FormCheckboxLabel>
                                            {/* <input id={`${data.edges[3].node.pricesPrice}`} name='formParams[need_offer]' type='hidden' value="1" /> */}
                                            <FormCheckbox 
                                                data-price-value={`${data.edges[3].node.pricesPrice}`}
                                                data-old-price-value={`${data.edges[3].node.pricesPrice}`}
                                                data-price-currency="руб."
                                                data-qty-value="1"
                                                type="radio"
                                                name="formParams[offer_id]"
                                                value="1164228"
                                                checked={values.formParams.offer_id === `${data.edges[3].node.pricesPrice}`}
                                                onChange={() => {
                                                    setFieldValue("formParams[offer_id]", `${data.edges[3].node.pricesPrice}`);
                                                    // setFieldTouched("formParams[offer_id]", true)
                                                }}
                                                id={`${data.edges[3].node.pricesPrice}`}
                                                className={`course-form-checkbox`}
                                                errorStyle={errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id ? 1 : 0}
                                                
                                            /> 

                                           
                                            <FormCheckboxLabel  
                                                               className={`course-form-label ${errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id && 'course-form-label_error'}`} 
                                                               htmlFor={`${data.edges[3].node.pricesPrice}`}>
                                                  <FormLabelText>
                                                    пакет Макет с нуля
                                                  </FormLabelText>
                                                  <FormLabelPrice>
                                                      {`${data.edges[3].node.pricesPrice}`} ₽
                                                  </FormLabelPrice>

                                            </FormCheckboxLabel>
                                            {errors.formParams && errors.formParams.offer_id && touched.formParams && touched.formParams.offer_id && (
                                                <ErrorMessage>{errors.formParams.offer_id}</ErrorMessage>
                                            )}

                                            <FormInput 
                                                type="text" 
                                                maxLength="60"  
                                                placeholder="Электропочта"
                                                name="formParams[email]"
                                                value={values.formParams.email}
                                                onChange={handleChange}
                                                id="formParams[email]"
                                                onBlur={handleBlur}
                                                errorStyle={errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email ? 1 : 0}
                                            
                                            />
                                            
                                            <FormInputLabel htmlFor="formParams[email]">чтобы выслать код для входа</FormInputLabel>
                                            <FormInputLabelMobile htmlFor="formParams[email]">чтобы выслать код для входа</FormInputLabelMobile>
                                            <br/>
                                            {errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email && (
                                                <ErrorMessage>{errors.formParams.email}</ErrorMessage>
                                            )}
                                            <FormPolitikaLabel>Нажимая на кнопку, принимаю условия<a target="_blank" href="/privacy" > политики конфиденциальности</a> и <a target="_blank" href="/public-offer" > учебного договора</a></FormPolitikaLabel>

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
                                          
                                            {/* <FormCheckboxLabel className={`course-form-label ${errors.politikaCheckbox && touched.politikaCheckbox && 'course-form-label_error'}`} htmlFor="politikaCheckbox">Принять <a target="_blank" href="/privacy" > политику конфиденциальности</a></FormCheckboxLabel>
                                            
                                            
                                            {errors.politikaCheckbox && touched.politikaCheckbox && (
                                                <ErrorMessage>{errors.politikaCheckbox}</ErrorMessage>
                                            )}

                                            
                                            <FormCheckbox 
                                                type="checkbox"
                                                name="offerCheckbox"
                                                value={values.offerCheckbox}
                                                checked={values.offerCheckbox}
                                                onChange={v => {
                                                    setFieldTouched("offerCheckbox", true)
                                                    setFieldValue("offerCheckbox", v.target.checked)
                                                }}
                                                id="offerCheckbox"
                                                className={`course-form-checkbox`}
                                                
                                            /> 
                                           
                                            <FormCheckboxLabel className={`course-form-label ${errors.offerCheckbox && touched.offerCheckbox && 'course-form-label_error'}`} htmlFor="offerCheckbox">Принять <a target="_blank" href="/public-offer"> учебный договор</a></FormCheckboxLabel>
                                            
                                            {errors.offerCheckbox && touched.offerCheckbox && (
                                                <ErrorMessage>{errors.offerCheckbox}</ErrorMessage>
                                            )} */}
                                        </FormContainer>


                                        
                                    </FormWrapper>
                                    <FormFooterWrapper>

                                        <FormFooterContainer>
                                            <FormButtonBlock>
                                                <FormButton 
                                                        disabled={isSubmitting} 
                                                        type="submit"
                                                        id="button1106661"
                                                        onClick={() => {if(window['btnprs5f64b2ecda34e']){
                                                            return false;
                                                        }
                                                        window['btnprs5f64b2ecda34e']=true;
                                                        setTimeout(function(){
                                                            window['btnprs5f64b2ecda34e']=false},6000);
                                                            return true;}}
                                                    >Купить</FormButton>

                                            </FormButtonBlock>

                                            <FormSubText>Вы всегда можете докупить более дорогой пакет. В нем уже будет учтена сумма, 
                                                         которую вы оплатили за более дешевый пакет. Для этого напишите координатору 
                                                         школы на 
                                                         <CopyToClipboard text={'hello@granich.design'}>
                                                            <FormSubTextEmail content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}>
                                                                hello@granich.design
                                                            </FormSubTextEmail>
                                                        </CopyToClipboard>
                                            </FormSubText>
                                        </FormFooterContainer>
                                    </FormFooterWrapper>
                                            



                                        
                                    <input type="hidden" id="2588285f64b2eccc844" name="__gc__internal__form__helper" className="__gc__internal__form__helper" value=""/>
                                    
                                    <input type="hidden" id="2588285f64b2eccc844ref" name="__gc__internal__form__helper_ref" className="__gc__internal__form__helper_ref" value=""/>
                                    
                                    <input type="hidden" name="requestTime" value="15916004349241131571"/>
                                    
                                    <input type="hidden" name="requestSimpleSign" value="4f4c23141b98ff45a0730993668fc117"/>
                                    
                                    <input type="hidden" name="isHtmlWidget" value="1"/>

                                        </Form>
                                        
                                    )
                                }}
                            </Formik>
                            <span id="gccounterImgContainer"></span>


                </ShakeForm>


        </>

    )
}

export default PriceRangeModal
