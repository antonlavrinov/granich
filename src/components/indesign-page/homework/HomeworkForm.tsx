import React, { useEffect, useRef } from "react"
import * as SC from "./Homework"
import DownloadIcon from "../../../assets/svgs/zip-icon_big.svg"

const HomeworkForm = () => {
  useEffect(() => {
    //Кодировка формы для Геткурса
    const firstGetcourseFormScript = () => {
      //этот код тупо добавляет url нашего сайта в value прозрачных инпутов
      let loc = document.getElementById("44096860f4cc1f2b944")
      loc.value = window.location.href
      let ref = document.getElementById("44096860f4cc1f2b944ref")
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
      // console.log("ELEM", document.getElementById("gccounterImgContainer"))
    }

    firstGetcourseFormScript()
    secondGetcourseFormScript()
  }, [])
  return (
    <>
      <form
        action="https://school.granich.design/pl/lite/block-public/process-html?id=1103520643"
        method="post"
        id="ltForm5592578"
        //   dataOpen-new-window="0"
      >
        <input type="hidden" name="formParams[setted_offer_id]" />
        <SC.DownloadButton
          type="submit"
          id="button9712993"
          onClick={() => {
            if (window["btnprs60f4cc1f463aa"]) {
              return false
            }
            window["btnprs60f4cc1f463aa"] = true
            setTimeout(function () {
              window["btnprs60f4cc1f463aa"] = false
            }, 6000)
            return true
          }}
        >
          <DownloadIcon />
          Получить ДЗ*
        </SC.DownloadButton>
        <input
          type="hidden"
          id="44096860f4cc1f2b944"
          name="__gc__internal__form__helper"
          className="__gc__internal__form__helper"
          value=""
        />
        <input
          type="hidden"
          id="44096860f4cc1f2b944ref"
          name="__gc__internal__form__helper_ref"
          className="__gc__internal__form__helper_ref"
          value=""
        />
        <input type="hidden" name="requestTime" value="1626655775" />
        <input
          type="hidden"
          name="requestSimpleSign"
          value="a112c4e2d39df265bb0247e89dbe4c72"
        />
        <input type="hidden" name="isHtmlWidget" value="1" />
      </form>
      <span id="gccounterImgContainer"></span>
    </>
  )
}

export default HomeworkForm
