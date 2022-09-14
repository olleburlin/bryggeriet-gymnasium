import React from "react"
import { navigate } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import sv from "../../images/flags/sv.svg"
import da from "../../images/flags/da.svg"
import fi from "../../images/flags/fi.svg"

export default function LanguageSelect() {
  const { languages, changeLanguage } = useI18next()

  return (
    <div className="flex flex-row gap-2 uppercase">
      <div>
        <span
          className="cursor-pointer"
          onClick={() => {
            changeLanguage("sv")
            navigate("/")
          }}
        >
          <img className="w-6 " src={sv} />
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer"
          onClick={e => {
            e.preventDefault()
            changeLanguage("da")
            navigate("/da/")
          }}
        >
          <img className="w-6 " src={da} />
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer"
          onClick={e => {
            e.preventDefault()
            changeLanguage("fi")
            navigate("/fi/")
          }}
        >
          <img className="w-6 " src={fi} />
        </span>
      </div>
    </div>
  )
}
