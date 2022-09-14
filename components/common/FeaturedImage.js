import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="h-full">
      <GatsbyImage
        image={imageData}
        alt="Featured"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
