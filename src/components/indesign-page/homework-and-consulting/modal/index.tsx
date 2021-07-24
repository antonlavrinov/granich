import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Formik } from "formik"
import * as Yup from "yup"
import posed from "react-pose"
import Cross from "../../../../assets/svgs/cross.svg"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import {
  Form,
  FormCross,
  FormTitle,
  FormWrapper,
  FormContainer,
  FormInput,
  FormInputLabel,
  FormInputLabelMobile,
  FormCheckbox,
  FormPolitikaLabel,
  FormCheckboxLabel,
  FormLabelPrice,
  FormLabelText,
  ErrorMessage,
  FormButtonBlock,
  FormButton,
  FormSubText,
  FormFooterWrapper,
  FormFooterContainer,
  FormSubTextEmail,
  CustomBr,
  FormPrice,
} from "./HomeworkAndConsultingModal"

const ShakeForm = posed.div({
  shake: {
    applyAtEnd: { x: 0 },
    applyAtStart: { x: -10 },
    x: 0,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 10,
      duration: 4,
    },
  },
})

const HomeworkAndConsultingModal = ({
  googleAnaliticsCategory,
  closeModal,
  title,
  formPostUrl,
  formId,
  buttonTitle,
  price,
  consultingAccessibility
}) => {
  // const [tooltipEmail, setTooltipEmail] = useState("Скопировать")
  const formEl = useRef(null)

  const myNameNewRegExp = /([^\d€\/\\.?":@#$])/

  const [shakeTrigger, setShakeTrigger] = useState(3)
  function isInitialValid(props) {
    if (!props.validationSchema) return true
    return props.validationSchema.isValidSync(props.initialValues)
  }

  useEffect(() => {
    // Кодировка формы для Геткурса
    const firstGetcourseFormScript = () => {
      //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
      let loc = document.getElementById("44096860f5ed084c9d9")
      loc.value = window.location.href
      let ref = document.getElementById("44096860f5ed084c9d9ref")
      ref.value = document.referrer
    }
    //Кодировка формы для Геткурса
    const secondGetcourseFormScript = () => {
      let statUrl =
        "https://school.granich.design/stat/counter?ref=" +
        encodeURIComponent(document.referrer) +
        "&loc=" +
        encodeURIComponent(document.location.href)
      document.getElementById("gccounterImgContainer").innerHTML =
        "<img width=1 height=1 style='display:none' id='gccounterImg' src='" +
        statUrl +
        "'/>"
    }
    firstGetcourseFormScript()
    secondGetcourseFormScript()
  }, [])

  return (
    <>
      <ShakeForm pose={["shake"]} poseKey={shakeTrigger}>
        <Formik
          isInitialValid={isInitialValid}
          initialValues={{
            // politikaCheckbox: true,
            // offerCheckbox: true,
            formParams: {
              first_name: "",
              last_name: "",
              email: "",
            },
          }}
          onSubmit={(values, { setSubmitting }, e) => {
            formEl.current.submit()
            trackCustomEvent({
              category: `${googleAnaliticsCategory}`,
              action: "click",
              label: "Форма",
            })
          }}
          validationSchema={Yup.object().shape({
            // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на обработку персональных данных'),
            // offerCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на учебный договор'),
            formParams: Yup.object().shape({
              first_name: Yup.string()
                .trim("Уберите пробелы в начале и в конце строки")
                .strict()
                .matches(myNameNewRegExp, "Неверные символы в Имени")
                .required("Сперва впишите Имя"),
              // first_name: Yup.string().email('Неверный формат электронного адреса').required('Заполните поле Емейл'),
              last_name: Yup.string()
                .trim("Уберите пробелы в начале и в конце строки")
                .strict()
                .matches(myNameNewRegExp, "Неверные символы в Фамилии")
                .required("Сперва впишите Фамилию"),
              email: Yup.string()
                .email("Это не Электропочта")
                .required("Сперва впишите Электропочту"),
            }),
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
              // setFieldTouched,
            } = props
            return (
              <Form
                ref={formEl}
                onSubmit={e => {
                  if (isValid) {
                    handleSubmit(e)
                  } else {
                    handleSubmit(e)
                    setShakeTrigger(shakeTrigger + 1)
                  }
                }}
                id={formId}
                action={formPostUrl}
                method="post"
                data-open-new-window="0"
              >
                <FormWrapper>
                  <FormCross onClick={closeModal}>
                    <Cross />
                  </FormCross>

                  <FormContainer>
                    <FormTitle>{title}</FormTitle>
                    <input type="hidden" name="formParams[setted_offer_id]" />
                    <FormInput
                      type="text"
                      maxLength="60"
                      placeholder="Имя"
                      name="formParams[first_name]"
                      value={values.formParams.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorStyle={
                        errors.formParams &&
                        errors.formParams.first_name &&
                        touched.formParams &&
                        touched.formParams.first_name
                          ? 1
                          : 0
                      }
                    />{" "}
                    <br />
                    {errors.formParams &&
                      errors.formParams.first_name &&
                      touched.formParams &&
                      touched.formParams.first_name && (
                        <ErrorMessage>
                          {errors.formParams.first_name}
                        </ErrorMessage>
                      )}
                    <FormInput
                      type="text"
                      maxLength="60"
                      placeholder="Фамилия"
                      name="formParams[last_name]"
                      value={values.formParams.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorStyle={
                        errors.formParams &&
                        errors.formParams.last_name &&
                        touched.formParams &&
                        touched.formParams.last_name
                          ? 1
                          : 0
                      }
                    />{" "}
                    <br />
                    {errors.formParams &&
                      errors.formParams.last_name &&
                      touched.formParams &&
                      touched.formParams.last_name && (
                        <ErrorMessage>
                          {errors.formParams.last_name}
                        </ErrorMessage>
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
                      errorStyle={
                        errors.formParams &&
                        errors.formParams.email &&
                        touched.formParams &&
                        touched.formParams.email
                          ? 1
                          : 0
                      }
                    />
                    <br />
                    {errors.formParams &&
                      errors.formParams.email &&
                      touched.formParams &&
                      touched.formParams.email && (
                        <ErrorMessage>{errors.formParams.email}</ErrorMessage>
                      )}
                    {/* <br /> */}
                    <FormPolitikaLabel>
                      Нажимая на кнопку в этой форме, я принимаю условия{" "}
                      <a target="_blank" href="/privacy">
                        {" "}
                        политики конфиденциальности
                      </a>
                      <br />
                      <CustomBr />и{" "}
                      <a target="_blank" href="/public-offer">
                        {" "}
                        учебного договора
                      </a>
                    </FormPolitikaLabel>
                  </FormContainer>
                </FormWrapper>{" "}
                <FormFooterWrapper>
                  <FormFooterContainer>
                    <FormButtonBlock>
                      <FormButton
                        disabled={isSubmitting}
                        type="submit"
                        id="button9387340"
                        onClick={() => {
                          if (window["btnprs60f5ed085930d"]) {
                            return false
                          }
                          window["btnprs60f5ed085930d"] = true
                          setTimeout(function () {
                            window["btnprs60f5ed085930d"] = false
                          }, 6000)
                          return true
                        }}
                      >
                        {buttonTitle}
                      </FormButton>
                      {price && <FormPrice>{price}</FormPrice>}
                    </FormButtonBlock>
                  </FormFooterContainer>
                </FormFooterWrapper>
                <input
                  type="hidden"
                  id="44096860f5ed084c9d9"
                  name="__gc__internal__form__helper"
                  className="__gc__internal__form__helper"
                  value=""
                />
                <input
                  type="hidden"
                  id="44096860f5ed084c9d9ref"
                  name="__gc__internal__form__helper_ref"
                  className="__gc__internal__form__helper_ref"
                  value=""
                />
                {/* Value поменялось, стало короче. Из-за этого геткурс
                                     форму не смог обработать. Если выпадет ошибка 
                                     Не получилось обработать форму. Обратитесь к администратору. 
                                     То просто обнови value из html формы */}
                <input type="hidden" name="requestTime" value="1626729736" />
                <input
                  type="hidden"
                  name="requestSimpleSign"
                  value="f2016bca6bc605e57ace5eaf3306ab3f"
                />
                <input type="hidden" name="isHtmlWidget" value="1" />
              </Form>
            )
          }}
        </Formik>
        <span id="gccounterImgContainer"></span>
      </ShakeForm>
    </>
  )
}

export default HomeworkAndConsultingModal
