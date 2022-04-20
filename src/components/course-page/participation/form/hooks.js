import { useEffect } from "react";

export const useGetcourseEncrypt = () => {
  //   getcourseInput.value = window.location.href
  //   getcourseInputRef.value = document.referrer
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
}
