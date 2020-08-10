import React, {useRef, useState} from 'react'
import styled from 'styled-components';
import BlackArrowRight from '../assets/svgs/arrow-black-right.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
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

const ArrowRightButton = styled(props => <BlackArrowRight {...props}/>)`
    width: 3.6vw;
    @media only screen and (max-width: 575px) {
        width: 11.5vw;
    }
`

const MailingSection = styled.section`
    margin-bottom: 4vw;
`

const MailingWrapper = styled.div`
    width: 100%;
    background: var(--granich-red);
    border-radius: 0.6vw;
    position: relative;
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
    }

`

const MailingContainer = styled.div`
    padding: 2.1vw 2.4vw;
    padding-right: 1.8vw;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 7.2vw 5.5vw 8vw;
    }
`

const MailingText = styled.div`
    font-size: 1.44vw;
    font-weight: 400;
    width: 38vw;
    line-height: 1.2;
    color: white;
    span {
        letter-spacing: -0.01vw;
        font-style: italic;
        color: inherit;
        font-size: 1.94vw;
        line-height: 0.5;
        font-weight: 500;
        font-family: EB Garamond;
    }
    @media only screen and (max-width: 575px) {
        font-size: 4vw;
        width: 70vw;
        line-height: 1.3;
        margin-bottom: 6vw;
        span {
            letter-spacing: -0.01vw;
            font-size: 5.4vw;
        }
    }


`


const MailingForm = styled.form`
    // width: 100%;
    display: flex;
    align-items: center;
    position: relative;

`

const MailingInput = styled.input`
    height: 3.2vw;
    border: none;
    border-radius: 0.6vw;
    box-shadow: 0 0 0.5vw rgba(0,0,0,0.5) inset;
    padding: 1vw 1.1vw;
    width: 27.5vw;
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
        border-radius: 3vw;
        width: 65vw;
        height: 10.5vw;
        padding: 0 4vw;
        font-size: 4.1vw;
        margin-right: 4vw;
        margin-left: 0.5vw;
        box-shadow: 0 0 1.5vw rgba(0,0,0,0.5) inset;
        ::placeholder {
            font-size: 4.1vw;
        }
    }

    
`

const MailingButton = styled.button`
    height: 3.4vw;
    border: none;
    // width: 22%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;

    }
    svg {
        transition: all 0.2s ease;
        :hover {
            transform: scale(1.1);
        }
    }
    @media only screen and (max-width: 575px) {
        height: 100%;
        svg {
            margin-left: -1vw; 
        }
    }

`

const MailingWarning = styled.div`
    position: absolute;
    top: -5vw;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 1vw 1.5vw;
    border-radius: 0.5vw;

`

const Mailing = () => {
    const [shakeTrigger, setShakeTrigger] = useState(3);

    const formEl = useRef(null)

    //initial Validation
    function isInitialValid(props) {
        if (!props.validationSchema) return true;
        return props.validationSchema.isValidSync(props.initialValues);
      }
    return (
        <MailingSection>
            <Container>
                <ShakeForm pose={["shake"]} poseKey={shakeTrigger}>
                    <MailingWrapper>
                        <MailingContainer>
                            
                            <MailingText>
                                <span>Оставьте почту,</span> чтобы узнать о наборах на курсы и новом бесплатном контенте. Без спама.
                            </MailingText>
                            
                                <Formik isInitialValid={isInitialValid}  initialValues={{formParams: {
                                            email: ''
                                }}}
                                
                                onSubmit={(values, {setSubmitting}, e) => {
                                    formEl.current.submit();
                                }}
                                validationSchema={Yup.object().shape({
                                    formParams: Yup.object().shape({
                                        email: Yup.string().email('Неверный формат').required('Заполните поле'),
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
                                    } = props;
                                    return (
                                        <MailingForm className="main-page-form" action="https://english-school.getcourse.ru/pl/lite/block-public/process-html?id=728049569" 
                                                    method="post" 
                                                    ref={formEl} 
                                                    onSubmit={ (e) => {
                                                        if(isValid) {
                                                            handleSubmit(e);
                                                            console.log(isValid)
                                                        } else {
                                                            handleSubmit(e);
                                                            console.log(isValid)
                                                            setShakeTrigger(shakeTrigger + 1)
                                                            values.formParams.email = '';

                                                        }
                                                    }

                                            }>
                                            <MailingInput 
                                            type="text" 
                                            maxLength="60"  
                                            placeholder={errors.formParams && errors.formParams.email ? errors.formParams.email : 'Электропочта'} 
                                            name="formParams[email]"
                                            value={values.formParams.email}
                                            onChange={handleChange}
                                            errorStyle={errors.formParams ? 1 : 0}
                                            />


                                            <MailingButton type="submit" disabled={isSubmitting}><ArrowRightButton/></MailingButton>
                                        </MailingForm>
                                    )}}

                                </Formik>

                            


                        </MailingContainer>

                        
                    </MailingWrapper>
                </ShakeForm>
            </Container>
        </MailingSection>
    )
}

export default Mailing
