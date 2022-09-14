import React from "react"
import ProfilesMenu from "../profiles/ProfilesMenu"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
export default function SinglePage({ data }) {
  React.useEffect(() => {
    // List of Video Vendors embeds you want to support
    var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]']

    // Select videos
    var fitVids = document.querySelectorAll(players.join(","))

    // If there are videos on the page...
    if (fitVids.length) {
      // Loop through videos
      for (var i = 0; i < fitVids.length; i++) {
        // Get Video Information
        var fitVid = fitVids[i]
        var width = fitVid.getAttribute("width")
        var height = fitVid.getAttribute("height")
        var aspectRatio = height / width
        var parentDiv = fitVid.parentNode

        // Wrap it in a DIV
        var div = document.createElement("div")
        div.className = "fitVids-wrapper"
        div.style.paddingBottom = aspectRatio * 100 + "%"
        parentDiv.insertBefore(div, fitVid)
        fitVid.remove()
        div.appendChild(fitVid)

        // Clear height/width from fitVid
        fitVid.removeAttribute("height")
        fitVid.removeAttribute("width")
      }
    }
  }, [])

  const { content, title, featuredImage, parentDatabaseId } = data.wpPage
  const caption = featuredImage ? featuredImage.node.caption : ""
  return (
    <div className="wp-page  min-h-[70vh] h-full">
      <div className="px-4 lg:px-8 space-y-4 lg:space-y-8 py-4 lg:py-16 max-w-4xl mx-auto">
        <PageHeader text={title} />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Primary column */}
          <div className="flex-1 overflow-hidden space-y-8">
            <div>
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>{" "}
            {featuredImage && <FeaturedImage image={featuredImage} />}
            {caption && (
              <div className="text-sm">
                <div dangerouslySetInnerHTML={{ __html: caption }} />
              </div>
            )}
          </div>

          {/* <div className="flex-1 max-w-xl">
            {parentDatabaseId === 81 && (
              <div>
                <ProfilesMenu />
              </div>
            )}
          </div> */}
          <div className="fitVids-wrapper hidden">
            <iframe />
          </div>
        </div>
      </div>
    </div>
  )
}
