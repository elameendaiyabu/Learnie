"use client"

import React from "react"

export default function Recommendations({ data }: { data: any }) {
  return (
    <div className=" md:px-[3.65rem] pt-3">
      <h1 className=" text-xl md:text-3xl text-center font-semibold mb-3">
        Learning Recommendations
      </h1>
      <div
        id="recommendations"
        className=" sm:mb-0 md:w-full p-3 bg-neutral-200 rounded-xl justify-center md:justify-around gap-7 mx-auto mb-5 "
      >
        <p>{data.course}</p>
        {data.genText}
      </div>
    </div>
  )
}
