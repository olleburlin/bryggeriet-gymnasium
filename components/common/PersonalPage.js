import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageHeader from "./PageHeader"
export default function PersonalPage({ data }) {
  const { title, personal } = data.wpPage
  const { personer } = personal
  return (
    <div className="wp-page bg-gray-100 h-full">
      <div className="px-4 lg:px-8 space-y-4 lg:space-y-8 py-4 lg:py-16 max-w-screen-2xl mx-auto">
        <PageHeader text={title} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-x-16">
          {personer.map((person, i) => {
            return <Person key={person.id} person={person} />
          })}
        </div>
      </div>
    </div>
  )
}

function Person({ person }) {
  const { titel, fornamn, efternamn, bild } = person
  const img = bild.localFile.childImageSharp
  return (
    <div className=" bg-primary/5 text-base">
      <div>
        <GatsbyImage image={getImage(img)} />
      </div>
      <div className="p-2">
        <p className="font-bold">
          {fornamn}&nbsp;{efternamn}
        </p>
        <p>{titel}</p>
      </div>
    </div>
  )
}
