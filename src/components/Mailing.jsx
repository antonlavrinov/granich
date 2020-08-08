import React, {useRef} from 'react'
import styled from 'styled-components';
import BlackArrowRight from '../assets/svgs/arrow-black-right.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import { CSSTransition } from 'react-transition-group';


const MailingSection = styled.section`
    margin-bottom: 4vw;
`

const MailingWrapper = styled.div`
    width: 100%;
    background: var(--granich-red);
    border-radius: 0.6vw;
    position: relative;
`

const MailingContainer = styled.div`
    padding: 2.1vw 2.4vw;
    padding-right: 1.8vw;
    display: flex;
    justify-content: space-between;
`
const MailingTitle = styled.div`
    width: 100%;
    font-size: 5vw;
    font-weight: 600;
    line-height: 1.26;

`
const MailingText = styled.div`
    font-size: 1.44vw;
    font-weight: 400;
    width: 38vw;
    line-height: 1.2;
    color: white;
    // letter-spacing: -0.03vw;
    span {
        letter-spacing: -0.01vw;
        font-style: italic;
        color: inherit;
        font-size: 1.94vw;
        line-height: 0.5;
        font-family: EB Garamond;
    }


`

const MailingBackground = styled.div`
    background: var(--granich-red);
    width: 100%;
    border-radius: 0 0 12px 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    #mailingContainer {
        padding-top: 20px;
        padding-bottom: 35px;
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
    padding: 0.8vw 1.1vw;
    padding: 1vw 1.1vw;
    width: 27.5vw;
    font-size: 1.55vw;
    margin-right: 1.1vw;
    ::placeholder {
        font-size: 1.55vw;
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
    const formEl = useRef(null)
    return (
        <MailingSection>
            <Container>
                <MailingWrapper>
                    <MailingContainer>
                        {/* <MailingTitle>Хотите быть с нами на связи?</MailingTitle> */}
                        <MailingText>
                            <span>Оставьте почту,</span> чтобы узнать о наборах на курсы и новом бесплатном контенте. Без спама.
                        </MailingText>
                        <Formik     initialValues={{formParams: {
                                    email: ''
                        }}}
                        
                        onSubmit={(values, {setSubmitting}, e) => {
                            formEl.current.submit();
                        }}
                        validationSchema={Yup.object().shape({
                            formParams: Yup.object().shape({
                                email: Yup.string().email('Неверный формат электронного адреса').required('Заполните поле Емейл'),
                            })
                        })}
                        
                        >

                        {props => {
                            const {
                                values, 
                                touched, 
                                errors, 
                                isSubmitting, 
                                handleChange, 
                                handleBlur, 
                                handleSubmit
                            } = props;
                            return (
                                <MailingForm action="https://english-school.getcourse.ru/pl/lite/block-public/process-html?id=728049569" method="post" ref={formEl} onSubmit={handleSubmit}>
                                    <MailingInput 
                                    type="text" 
                                    maxLength="60"  
                                    placeholder={'Электропочта'} 
                                    name="formParams[email]"
                                    value={values.formParams.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={((errors || {}).formParams || {}).email && ((touched || {}).formParams || {}).email && 'error'}
                                    />
                                    <CSSTransition timeout={300} classNames="warning-message" unmountOnExit in={errors.formParams ? (errors.formParams.email ? true : false) : false}>
                                        
                                        <MailingWarning>{errors.formParams && errors.formParams.email}</MailingWarning>
                                       
                                    </CSSTransition>

                                    <MailingButton type="submit" disabled={isSubmitting}><BlackArrowRight/></MailingButton>
                                </MailingForm>
                            )}}

                        </Formik>


                    </MailingContainer>
                    {/* <MailingBackground>

                    </MailingBackground> */}
                    
                </MailingWrapper>
            </Container>
        </MailingSection>
    )
}

export default Mailing
