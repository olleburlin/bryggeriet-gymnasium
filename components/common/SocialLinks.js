import React from "react"
import { SocialIcon } from "react-social-icons"

function SocialLinks({ fill }) {
  return (
    <nav className="">
      {[
        {
          url: `https://www.instagram.com/bryggerietsgymnasium/`,
        },
        {
          url: `http://www.facebook.com/#!/pages/Bryggeriets-Gymnasium/120300201318207`,
        },
        {
          url: `http://www.youtube.com/user/BryggerietsGymnasium?feature=mhum`,
        },
      ].map(link => (
        <SocialIcon
          className="block text-white md:inline-block w-2"
          key={link.url}
          url={link.url}
          fgColor={fill}
          bgColor="transparent"
          style={{ height: 50, width: 50 }}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.title}
        </SocialIcon>
      ))}
    </nav>
  )
}

export default SocialLinks
