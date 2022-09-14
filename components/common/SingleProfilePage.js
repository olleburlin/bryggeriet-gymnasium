import React from "react"
import ProfilesMenu from "../profiles/ProfilesMenu"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
import SectionHeader from "./SectionHeader"
export default function SingleProfilePage({ data }) {
  const { content, title, featuredImage, parentDatabaseId } = data.wpPage
  return (
    <div className="wp-page ">
      {featuredImage && (
        <div className="h-[33vh] lg:h-[50vh] relative">
          <div className="relative h-full">
            <FeaturedImage image={featuredImage} />
          </div>
          <div className="absolute top-0 w-full h-full flex items-center justify-start bg-black bg-opacity-50 ">
            <div className="max-w-screen-2xl mx-auto w-full px-4 lg:px-8">
              <h1 className="uppercase text-2xl lg:text-5xl text-white w-full">
                <span className="font-normal">Profil:</span> {title}
              </h1>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 lg:px-8 space-y-4 lg:space-y-8 py-4 lg:py-16 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Primary column */}
          <div className="flex-1 overflow-hidden space-y-8">
            <div>
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>{" "}
          </div>
          {/* Seconday column */}
          <div className="flex-1 max-w-xl space-y-8 ">
            <SectionHeader text="Profiler" />
            <div className="  bg-primary/10 p-4 text-2xl">
              <p>
                Vi erbjuder dig att fördjupa din utbildning inom fyra olika
                profiler. Efter tre år på gymnasiet vill vi att våra elever ska
                uppleva att de utvecklats och se resultatet av sina studier.
                Därför leder alla profiler fram till en slutprodukt, ett mål som
                innefattar alla de kurser man läst längs vägen.
              </p>
            </div>
            <div>
              <ProfilesMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
