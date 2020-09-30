import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components';
// import BlackArrowRight from '../assets/svgs/arrow-black-right.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import posed from "react-pose";
// import Link from 'gatsby-link';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

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

const ArrowRightButton = styled(props => <Img {...props}/>)`
    width: 3.6vw;
    transition: all 0.2s ease;
    :hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 575px) {
        width: 11.5vw;
    }
`

// const PrivacyLink = styled(props => <Link {...props}/>)`

// `

const PrivacyPopupLink = styled.a`

`

const MailingSection = styled.section`

`

const MailingWrapper = styled.div`
    width: 100%;
    background: var(--granich-red);
    border-radius: 0.6vw;
    position: relative;
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
    }

`

const MailingContainer = styled.div`
    padding: 2.1vw 3vw;
    padding-right: 3vw;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 7.2vw 5.5vw 8vw;
    }
`

const MailingText = styled.div`
    font-size: 1.5vw;
    font-weight: 400;
    width: 32vw;
    line-height: 1.3;
    color: white;
    span {
        font-style: italic;
        color: inherit;
        font-size: 2vw;
        line-height: 0.5;
        font-weight: 500;
        font-family: EB Garamond;
    }
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
        width: 70vw;
        line-height: 1.3;
        margin-bottom: 4vw;
        span {
            letter-spacing: -0.01vw;
            font-size: 5.4vw;
        }
    }


`


const MailingForm = styled.form`
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-direction: column;

`

const MailingInput = styled.input`
    height: 3.2vw;
    border: none;
    border-radius: 0.6vw;
    box-shadow: 0 0 0.5vw rgba(0,0,0,0.5) inset;
    padding: 1vw 1.1vw;
    width: 30vw;
    font-size: 1.55vw;
    margin-right: 1.1vw;
    ${props => props.errorStyle && `
        ::placeholder {
            color: var(--granich-red);
        }
    `}
    ::placeholder {
        font-size: 1.55vw;
    }

    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        width: 64vw;
        height: 10.5vw;
        padding: 0 4vw;
        font-size: 4.1vw;
        margin-right: 2.5vw;
        box-shadow: 0 0 1.5vw rgba(0,0,0,0.5) inset;
        ::placeholder {
            font-size: 4.1vw;
        }
    }

    
`

const MailingButton = styled.button`
    height: 3.4vw;
    border: none;

    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;

    }

    @media only screen and (max-width: 575px) {
        min-width: 14vw;
        min-height: 14vw;

        svg {
            margin-left: -1vw; 
        }
    }

`

// const FormCheckbox = styled.input`
//     margin-left: 0.3vw;

// `

// const FormCheckboxLabel = styled.label`
//     font-size: 1.2vw;
//     user-select: none;
//     letter-spacing: -0.02vw;
//     margin-top: 1vw;
//     position: relative;
//     color: white;

//     a {
//         color: white;
//         font-weight: 500;
//         display: inline-block;
//         margin: 0 0.4vw;
//         position: relative;
//         font-weight: 400;
        
       
//         :after {
//             content: '';
//             height: 1px;
//             width: 100%;
//             background: rgba(256,256,256,0.5);
//             position: absolute;
//             bottom: -0.2vw;
//             left: 0;

//         }
        
//         :hover {
//             :after {
//                 background: white;
//             }
//         }
//     }
//     @media only screen and (max-width: 575px) {
//         font-size: 3.6vw;
//         margin-top: 2vw;
//         white-space: nowrap;
//         a {
//             margin: 0;
//             margin-left: 1.5vw;
//         }
//     }

// `

// const FormCheckboxLabelText = styled.span`
//     color: white;
//     position: relative;
//     ${props => props.errorMessage && `
//         :after {
//             content: '${props.errorMessage}';
//             position: absolute;
//             top: 2.5vw;
//             left: -33%;
//             min-width: 50%;
//             width: 50%;
//             color: var(--granich-grey);
//             color: white;
//             background: var(--granich-black);
//             border-radius: 0.2vw;
//             padding: 1vw;
//             z-index: 5;
//             cursor: default;
//             font-size: 1vw;
//             line-height: 1.45;
//             white-space: normal;

//         }
//         :before {
//             content: '';
//             position: absolute;
//             z-index: 5;
//             top: 2.1vw;
//             left: -7%;
//             width: 0;
//             height: 0;
//             //bottom
//             border-right: 0.55vw solid transparent;
//             border-left: 0.55vw solid transparent;
//             border-bottom: 0.55vw solid var(--granich-black);
//         }
//         @media only screen and (max-width: 575px) {
//             :after {
//                 top: 6vw;
//                 left: -12%;
//                 min-width: 50%;
//                 width: 50%;
//                 border-radius: 0.2vw;
//                 padding: 3vw;
//                 font-size: 3.7vw;
    
//             }
//             :before {
//                 top: 4.5vw;
//                 left: -9.5%;

//                 border-right: 3vw solid transparent;
//                 border-left: 3vw solid transparent;
//                 border-bottom: 3vw solid var(--granich-black);
//             }
//         }

//     `}
// ` 

const FormPolitikaLabel = styled.div`
    color: white;
    margin-top: 0.7vw;
    font-size: 1.15vw;
    a {
        color: white;
        font-weight: 500;
        display: inline-block;
        margin: 0 0.4vw;
        position: relative;
        font-weight: 400;
        
       
        :after {
            content: '';
            height: 1px;
            width: 100%;
            background: rgba(256,256,256,0.5);
            position: absolute;
            bottom: -0.2vw;
            left: 0;

        }
        :hover {
            :after {
                background: white;
            }
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.6vw;
        margin-top: 2vw;
        white-space: nowrap;
        a {
            margin: 0;
            margin-left: 1.5vw;
        }
    }
`


const MailingWrapperInputAndButton = styled.div`
    display: flex;
    align-items: center;
`



const Mailing = ({popup}) => {
    const [shakeTrigger, setShakeTrigger] = useState(3);

    const formEl = useRef(null)

    useEffect(() => {
        //Кодировка формы для Геткурса
        const firstGetcourseFormScript = () => {
            //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
            let loc = document.getElementById("2588475f67e38dc85f8");
            loc.value = window.location.href;
            let ref = document.getElementById("2588475f67e38dc85f8ref");
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

    //initial Validation
    function isInitialValid(props) {
        if (!props.validationSchema) return true;
        return props.validationSchema.isValidSync(props.initialValues);
      }
    
      const data = useStaticQuery(graphql`
        query mailingIcon {
            arrowBlackRight: file(relativePath: { eq: "arrow-black-right-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const arrowRight = data.arrowBlackRight.childImageSharp.fluid;



    return (
        <MailingSection>
            <Container>
                <ShakeForm pose={["shake"]} poseKey={shakeTrigger}>
                    <MailingWrapper>
                        <MailingContainer>
                            
                            <MailingText>
                                <span>Оставьте почту,</span> чтобы узнать о наборах на курсы, мастер-классы и новом бесплатном контенте. Без спама.
                            </MailingText>
                            
                                <Formik isInitialValid={isInitialValid}  initialValues={{politikaCheckbox: true, formParams: {
                                            email: ''
                                }}}
                                
                                onSubmit={(values, {setSubmitting}, e) => {
                        
                                    formEl.current.submit();
                                }}
                                validationSchema={Yup.object().shape({
                                    // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на обработку персональных данных'),
                                    formParams: Yup.object().shape({
                                        email: Yup.string().email('Это не электропочта  >__<').required('Сперва впишите почту :)'),
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
                                        setFieldTouched,
                                        setFieldValue
                                    } = props;
                                    return (
                                        <MailingForm className="main-page-form" action="https://granich.ru/pl/lite/block-public/process-html?id=855578433" 
                                                    method="post" 
                                                    data-open-new-window="0"
                                                    ref={formEl} 
                                                    onSubmit={ (e) => {
                                                        if(isValid) {
                                                            handleSubmit(e);
                                                        } else {
                                                            handleSubmit(e);
                                                            setShakeTrigger(shakeTrigger + 1)
                                                            if (errors.formParams && errors.formParams.email) {
                                                                values.formParams.email = '';
                                                            }
                                                            

                                                        }
                                                    }

                                            }>
                                                    <input type="hidden" name="formParams[setted_offer_id]"/>
                                                    <MailingWrapperInputAndButton>
                                                        <MailingInput 
                                                                type="text" 
                                                                maxLength="60"  
                                                                placeholder={errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email ? errors.formParams.email : 'Электропочта'} 
                                                                name="formParams[email]"
                                                                value={values.formParams.email}
                                                                onChange={handleChange}
                                                                errorStyle={errors.formParams && errors.formParams.email && touched.formParams && touched.formParams.email ? 1 : 0}
                                                            />
                                                             <MailingButton aria-label="Submit" 
                                                                            type="submit"
                                                                            id="button7568304"
                                                                            onClick={() => {if(window['btnprs5f67e38dd2018']){
                                                                                return false;
                                                                            }
                                                                                window['btnprs5f67e38dd2018']=true;
                                                                                setTimeout(function(){
                                                                                    window['btnprs5f67e38dd2018']=false},6000);
                                                                                    return true;
                                                                            }}
                                                                            disabled={isSubmitting}>
                                                                                <ArrowRightButton fluid={arrowRight}/>
                                                                                </MailingButton>
                                                            
                                                        
                                                    </MailingWrapperInputAndButton>
                                                    <FormPolitikaLabel>
                                                        Нажимая кнопку, принимаю<PrivacyPopupLink href="/privacy"> политику конфиденциальности</PrivacyPopupLink>
                                                    </FormPolitikaLabel>
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
                                                            className={`course-form-checkbox_black`}
                                                            />  */}
{/* 
                                                            <FormCheckboxLabel className={`course-form-label ${errors.politikaCheckbox && touched.politikaCheckbox && 'course-form-label_error'}`} htmlFor="politikaCheckbox">
                                                                <FormCheckboxLabelText errorMessage={errors.politikaCheckbox && touched.politikaCheckbox ? errors.politikaCheckbox : 0}>
                                                                    Принять<PrivacyPopupLink href="/privacy"> политику конфиденциальности</PrivacyPopupLink>
                                                                </FormCheckboxLabelText>
                                                            </FormCheckboxLabel>  */}
                                                            <input type="hidden" id="2588475f67e38dc85f8" name="__gc__internal__form__helper" className="__gc__internal__form__helper" value=""/>
                                                            <input type="hidden" id="2588475f67e38dc85f8ref" name="__gc__internal__form__helper_ref" className="__gc__internal__form__helper_ref" value=""/>
                                                            <input type="hidden" name="requestTime" value="1600643981"/>
                                                            <input type="hidden" name="requestSimpleSign" value="b034133ec813412fc5a260bab9fab587"/>
                                                            <input type="hidden" name="isHtmlWidget" value="1"/>

                                                   
    
                                        </MailingForm>
                                        
                                    )}}

                                </Formik>
                                

                            


                        </MailingContainer>
                        <span id="gccounterImgContainer"></span>

                        
                    </MailingWrapper>
                </ShakeForm>
            </Container>
        </MailingSection>
    )
}

export default Mailing
