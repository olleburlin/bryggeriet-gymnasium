import React from "react"
import Card from "./Card"
import PageContainer from "./page-container"
import { I18nextContext } from "gatsby-plugin-react-i18next"

export default function MoreInfo() {
  const context = React.useContext(I18nextContext)
  const language = context.language

  var features = []
  if (language === "sv") {
    features = featuresSv
  } else if (language === "fi") {
    features = featuresFi
  } else if (language === "da") {
    features = featuresDa
  }

  return (
    <PageContainer>
      <div className="flex flex-col gap-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((post, i) => {
            return <Card key={i} post={post} />
          })}
        </div>
      </div>
    </PageContainer>
  )
}

const featuresSv = [
  {
    name: "Användning",
    theme: "light",
    url: "/anvandning",
  },
  {
    name: "Kontakt",
    theme: "light",
    url: "/kontakt",
  },

  {
    name: "Hitta en återförsäljare",
    url: "/aterforsaljare",
    theme: "dark",
  },
]
const featuresDa = [
  {
    name: "Doseringsvejledning",
    theme: "light",
    url: "/doseringsvejledning",
  },
  {
    name: "Kontakt",
    theme: "light",
    url: "/da/kontakt-2",
  },

  {
    name: "Find forhandler",
    url: "/find-forhandler",
    theme: "dark",
  },
]
const featuresFi = [
  {
    name: "Käyttö",
    theme: "light",
    url: "/anvandning",
  },
  {
    name: "Ottaa yhteyttä",
    theme: "light",
    url: "/ottaa-yhteytta",
  },

  {
    name: "Jälleenmyyjä",
    url: "/jalleenmyyja",
    theme: "dark",
  },
]
