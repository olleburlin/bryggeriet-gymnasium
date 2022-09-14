import React from "react"
import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import Link from "./Link"
export default function Card({ post }) {
  const { theme, name, url } = post
  return (
    <div className={`${theme === "light" ? "bg-third" : "bg-primary"} p-6`}>
      <div className="flex flex-col gap-6">
        <Link to={url}>
          <h4 className="inline-block font-normal">{name}</h4>
        </Link>
        <div
          className={`${
            theme === "light" ? "border-primary" : "border-black"
          }  border-b-2  w-16`}
        />
        <div className="self-end">
          <ArrowCircleRightIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}
