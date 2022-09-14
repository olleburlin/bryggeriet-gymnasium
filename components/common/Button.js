import { ChevronRightIcon } from "@heroicons/react/solid"
import React from "react"
import Link from "./Link"

export default function Button({ theme, text, url }) {
  return (
    <div className="group">
      <Link
        to={url}
        className={`${
          theme === "light"
            ? "bg-white text-black border-black border-double border-2"
            : "bg-black text-white "
        } uppercase font-bold text-xl px-4 py-2 mt-4 inline-block`}
      >
        <div className="flex flex-row items-center justify-between group-hover:opacity-70 transition-all">
          <span className="">{text}</span>
          <span className="w-7 relative left-1">
            <ChevronRightIcon />
          </span>
        </div>
      </Link>
    </div>
  )
}
