import React from "react"

export default function SectionHeader({ text }) {
  return (
    <div className="text-black font-bold uppercase text-2xl xl:text-3xl border-b-4 border-primary inline-block">
      {text}
    </div>
  )
}
