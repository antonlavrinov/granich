import React, { useRef, useState, useEffect } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import posed from "react-pose"
import { Link } from "gatsby"
import * as SC from "./ParticipationForm"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

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

const ParticipationForm = ({
  data,
  formId,
  formAction,
  googleAnaliticsCategory,
  additionalTags,
}) => {
  const formEl = useRef(null)
  // const myPhoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/;

  //44 - 44 - 55
  const myPhoneNewRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)?\s?-?\s?(\(?\d{0,3}\)?)\s?-?\s?(\(?\d{2})\s?-?\s?(\d{2}\)?)$/
  // const myNameNewRegExp = /([^\d€\\\/.?":@#$])/;
  const myNameNewRegExp = /([^\d€\/\\.?":@#$])/

  const [shakeTrigger, setShakeTrigger] = useState(3)
  function isInitialValid(props) {
    if (!props.validationSchema) return true
    return props.validationSchema.isValidSync(props.initialValues)
  }

  useEffect(() => {
    //Кодировка формы для Геткурса
    const firstGetcourseFormScript = () => {
      //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
      let loc = document.getElementById("2588385f64b8d766d50")
      loc.value = window.location.href
      let ref = document.getElementById("2588385f64b8d766d50ref")
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
  // isInitialValid={isInitialValid}
  return (
    <SC.FormMainWrapper>
      <ShakeForm
        style={{ height: "100%" }}
        pose={["shake"]}
        poseKey={shakeTrigger}
      >
        <Formik
          isInitialValid={isInitialValid}
          initialValues={{
            // politikaCheckbox: true,
            formParams: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
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
            // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на учебный договор и на обработку персональных данных'),
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
              phone: Yup.string()
                .matches(myPhoneNewRegExp, "Это не Телефон")
                .required("Сперва впишите Телефон"),
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
              // setFieldValue,
              // setFieldTouched,
            } = props
            return (
              <SC.Form
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
                action={formAction}
                method="post"
                data-open-new-window="0"
              >
                <SC.FormWrapper>
                  <SC.FormContainer>
                    <SC.FormTags formDisabled={!data.courseStatus}>
                      {data.courseStream && data.courseStatus && (
                        <SC.FormTag important>
                          {data.courseStream} поток
                        </SC.FormTag>
                      )}
                      {data.courseStartAndEnd && data.courseStatus && (
                        <SC.FormTag>{data.courseStartAndEnd}</SC.FormTag>
                      )}
                      {data.courseTags.map((tag, idx) => {
                        return <SC.FormTag key={idx}>{tag}</SC.FormTag>
                      })}
                      {/* {additionalTags && additionalTags.map((tag, idx) => {
                                                return (
                                                    <FormTag key={idx}>{tag}</FormTag>
                                                )
                                            })} */}
                    </SC.FormTags>
                    <SC.FormTitle>
                      Участвовать <br />
                      {data.courseType === "Курс"
                        ? "в курсе"
                        : "в мастер-классе"}
                    </SC.FormTitle>
                    <input type="hidden" name="formParams[setted_offer_id]" />
                    <br />
                    <SC.FormInput
                      type="text"
                      maxLength="60"
                      placeholder="Имя"
                      name="formParams[first_name]"
                      value={values.formParams.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!data.courseStatus}
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
                        <SC.ErrorMessage>
                          {errors.formParams.first_name}
                        </SC.ErrorMessage>
                      )}
                    <SC.FormInput
                      type="text"
                      maxLength="60"
                      placeholder="Фамилия"
                      name="formParams[last_name]"
                      value={values.formParams.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!data.courseStatus}
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
                        <SC.ErrorMessage>
                          {errors.formParams.last_name}
                        </SC.ErrorMessage>
                      )}
                    <SC.FormInput
                      type="email"
                      maxLength="60"
                      placeholder="Электропочта"
                      name="formParams[email]"
                      value={values.formParams.email}
                      onChange={handleChange}
                      id="formParams[email]"
                      onBlur={handleBlur}
                      disabled={!data.courseStatus}
                      errorStyle={
                        errors.formParams &&
                        errors.formParams.email &&
                        touched.formParams &&
                        touched.formParams.email
                          ? 1
                          : 0
                      }
                    />
                    <SC.FormInputLabel htmlFor="formParams[email]">
                      чтобы выслать ссылку для входа
                    </SC.FormInputLabel>
                    <br />
                    {errors.formParams &&
                      errors.formParams.email &&
                      touched.formParams &&
                      touched.formParams.email && (
                        <SC.ErrorMessage>
                          {errors.formParams.email}
                        </SC.ErrorMessage>
                      )}
                    <SC.FormInputLabelMobile htmlFor="formParams[email]">
                      чтобы выслать ссылку для входа
                    </SC.FormInputLabelMobile>
                    <SC.FormInput
                      type="tel"
                      maxLength="60"
                      placeholder="Телефон"
                      name="formParams[phone]"
                      value={values.formParams.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="formParams[phone]"
                      disabled={!data.courseStatus}
                      errorStyle={
                        errors.formParams &&
                        errors.formParams.phone &&
                        touched.formParams &&
                        touched.formParams.phone
                          ? 1
                          : 0
                      }
                    />
                    <SC.FormInputLabel htmlFor="formParams[phone]">
                      для экстренной связи
                    </SC.FormInputLabel>
                    <br />
                    {errors.formParams &&
                      errors.formParams.phone &&
                      touched.formParams &&
                      touched.formParams.phone && (
                        <SC.ErrorMessage>
                          {errors.formParams.phone}
                        </SC.ErrorMessage>
                      )}
                    <SC.FormInputLabelMobile htmlFor="formParams[phone]">
                      для экстренной связи
                    </SC.FormInputLabelMobile>
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
                    <SC.FormPolitikaLabel formDisabled={!data.courseStatus}>
                      {" "}
                      Нажимая на кнопку в этой форме, я принимаю условия{" "}
                      <Link to="/privacy">
                        {" "}
                        политики конфиденциальности
                      </Link> и{" "}
                      <Link to="/public-offer"> учебного договора </Link>
                    </SC.FormPolitikaLabel>
                    {/*                                             
                                            {errors.politikaCheckbox && touched.politikaCheckbox && (
                                                <ErrorMessage>{errors.politikaCheckbox}</ErrorMessage>
                                            )} */}
                  </SC.FormContainer>
                </SC.FormWrapper>
                <SC.FormFooterWrapper formDisabled={!data.courseStatus}>
                  <SC.FormFooterContainer>
                    <SC.FormButtonBlock>
                      <SC.FormButton
                        formDisabled={!data.courseStatus}
                        disabled={isSubmitting || !data.courseStatus}
                        type="submit"
                        id="button970916"
                        onClick={() => {
                          if (window["btnprs5f64b8d772769"]) {
                            return false
                          }
                          window["btnprs5f64b8d772769"] = true
                          setTimeout(function () {
                            window["btnprs5f64b8d772769"] = false
                          }, 6000)
                          return true
                        }}
                      >
                        {!data.courseStatus ? "Набор завершён" : "Оплатить"}
                      </SC.FormButton>
                      {data.coursePrice && (
                        <SC.FormPrice>
                          <i>→ </i>
                          {data.coursePrice}
                          <span>₽</span>
                        </SC.FormPrice>
                      )}
                    </SC.FormButtonBlock>

                    <SC.FormSubText>
                      Количество мест ограничено. Стоимость будет расти↑
                    </SC.FormSubText>
                  </SC.FormFooterContainer>
                </SC.FormFooterWrapper>

                <input
                  type="hidden"
                  id="2588385f64b8d766d50"
                  name="__gc__internal__form__helper"
                  className="__gc__internal__form__helper"
                  value=""
                />

                <input
                  type="hidden"
                  id="2588385f64b8d766d50ref"
                  name="__gc__internal__form__helper_ref"
                  className="__gc__internal__form__helper_ref"
                  value=""
                />

                <input type="hidden" name="requestTime" value="1600436439" />

                <input
                  type="hidden"
                  name="requestSimpleSign"
                  value="49b52db9d0d0c2186e4a47c281ae23ca"
                />

                <input type="hidden" name="isHtmlWidget" value="1" />
              </SC.Form>
            )
          }}
        </Formik>
        <span id="gccounterImgContainer"></span>
      </ShakeForm>
    </SC.FormMainWrapper>
  )
}

export default ParticipationForm
