import React from "react"
import { LabelInputContainer } from "./ui/labelInputContainer"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className=" w-full h-64 flex justify-center place-items-start pt-5 text-center">
      <div className=" grid gap-5 w-[500px]">
        <h1 className=" text-3xl md:text-5xl font-bold">Welcome to Learnie</h1>
        <p>
          Your personalized learning platform. Discover courses, articles and
          videos tailored to your interests.
        </p>
        <form className=" flex gap-2 justify-center">
          <LabelInputContainer className=" max-w-[300px]">
            <Input
              name="email"
              id="email"
              placeholder="Enter Your Email"
              type="text"
            />
          </LabelInputContainer>
          <Button variant="default" className=" mt-[1px]">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
