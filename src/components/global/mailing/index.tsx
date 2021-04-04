import React, { useState, useEffect, useRef } from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Formik } from "formik"
import * as Yup from "yup"
import posed from "react-pose"
import { graphql, useStaticQuery } from "gatsby"
import * as SC from "./Mailing"
import { Container } from "../../style"

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

const Mailing = () => {
  const [shakeTrigger, setShakeTrigger] = useState(3)

  const formEl = useRef<HTMLFormElement>(null)

  useEffect(() => {
    //Кодировка формы для Геткурса
    const firstGetcourseFormScript = () => {
      //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
      let loc = document.getElementById("2588475f67e38dc85f8")
      loc.value = window.location.href
      let ref = document.getElementById("2588475f67e38dc85f8ref")
      ref.value = document.referrer
      console.log("LOCATION", window.location.href)
      console.log("VALUE", document.referrer)
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
      console.log("ELEM", document.getElementById("gccounterImgContainer"))
    }

    firstGetcourseFormScript()
    secondGetcourseFormScript()
  }, [])

  //initial Validation
  function isInitialValid(props) {
    if (!props.validationSchema) return true
    return props.validationSchema.isValidSync(props.initialValues)
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

  const arrowRight = data.arrowBlackRight.childImageSharp.fluid

  return (
    <SC.Section>
      <Container>
        <ShakeForm pose={["shake"]} poseKey={shakeTrigger}>
          <SC.Wrapper>
            <SC.Container>
              <SC.Text>
                <span>Оставьте почту,</span> чтобы узнать о наборах на курсы,
                мастер-классы и новом бесплатном контенте. Без спама.
              </SC.Text>

              <Formik
                isInitialValid={isInitialValid}
                initialValues={{
                  politikaCheckbox: true,
                  formParams: {
                    email: "",
                  },
                }}
                onSubmit={(values, { setSubmitting }, e) => {
                  formEl.current.submit()
                  trackCustomEvent({
                    category: "Подписка на рассылку",
                    action: "click",
                    label: "Рассылка",
                  })
                }}
                validationSchema={Yup.object().shape({
                  // politikaCheckbox: Yup.bool().oneOf([true], 'Нам нужно ваше согласие на обработку персональных данных'),
                  formParams: Yup.object().shape({
                    email: Yup.string()
                      .email("Это не электропочта  >__<")
                      .required("Сперва впишите почту :)"),
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
                  } = props
                  return (
                    <SC.Form
                      className="main-page-form"
                      action="https://school.granich.design/pl/lite/block-public/process-html?id=855578433"
                      method="post"
                      data-open-new-window="0"
                      ref={formEl}
                      id="ltForm4927084"
                      onSubmit={e => {
                        if (isValid) {
                          handleSubmit(e)
                        } else {
                          handleSubmit(e)
                          setShakeTrigger(shakeTrigger + 1)
                          if (errors.formParams && errors.formParams.email) {
                            values.formParams.email = ""
                          }
                        }
                      }}
                    >
                      <input type="hidden" name="formParams[setted_offer_id]" />
                      <SC.WrapperInputAndButton>
                        <SC.Input
                          type="text"
                          maxLength="60"
                          placeholder={
                            errors.formParams &&
                            errors.formParams.email &&
                            touched.formParams &&
                            touched.formParams.email
                              ? errors.formParams.email
                              : "Электропочта"
                          }
                          name="formParams[email]"
                          value={values.formParams.email}
                          onChange={handleChange}
                          errorStyle={
                            errors.formParams &&
                            errors.formParams.email &&
                            touched.formParams &&
                            touched.formParams.email
                              ? 1
                              : 0
                          }
                        />
                        <SC.Button
                          aria-label="Submit"
                          type="submit"
                          id="button7568304"
                          onClick={() => {
                            if (window["btnprs5f67e38dd2018"]) {
                              return false
                            }
                            window["btnprs5f67e38dd2018"] = true
                            setTimeout(function () {
                              window["btnprs5f67e38dd2018"] = false
                            }, 6000)
                            return true
                          }}
                          disabled={isSubmitting}
                        >
                          <SC.ArrowRightButton fluid={arrowRight} />
                        </SC.Button>
                      </SC.WrapperInputAndButton>
                      <SC.FormPolitikaLabel>
                        Нажимая на кнопку в этой форме, я принимаю условия{" "}
                        <SC.PrivacyPopupLink href="/privacy">
                          {" "}
                          политики конфиденциальности
                        </SC.PrivacyPopupLink>
                      </SC.FormPolitikaLabel>
                      <input
                        type="hidden"
                        id="2588475f67e38dc85f8"
                        name="__gc__internal__form__helper"
                        className="__gc__internal__form__helper"
                        value=""
                      />
                      <input
                        type="hidden"
                        id="2588475f67e38dc85f8ref"
                        name="__gc__internal__form__helper_ref"
                        className="__gc__internal__form__helper_ref"
                        value=""
                      />
                      <input
                        type="hidden"
                        name="requestTime"
                        value="1600643981"
                      />
                      <input
                        type="hidden"
                        name="requestSimpleSign"
                        value="b034133ec813412fc5a260bab9fab587"
                      />
                      <input type="hidden" name="isHtmlWidget" value="1" />

                      <span id="gccounterImgContainer"></span>
                    </SC.Form>
                  )
                }}
              </Formik>
            </SC.Container>
          </SC.Wrapper>
        </ShakeForm>
      </Container>
    </SC.Section>
  )
}

export default Mailing
