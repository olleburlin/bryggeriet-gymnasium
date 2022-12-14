import React from "react"

export default function PageHeader({ text }) {
  return (
    <>
      <h1 className="text-3xl md:text-5xl uppercase">{text}</h1>
    </>
  )
}
