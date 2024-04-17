import React from "react"
import { LabelInputContainer } from "./ui/labelInputContainer"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

type Props = {}

export default function UserDataForm({}: Props) {
  return (
    <div>
      <h1 className=" text-xl md:text-3xl text-center font-semibold pb-5">
        Upload User Data/Preference
      </h1>
      <div className=" md:flex justify-center md:justify-around gap-7 mx-auto mb-5 ">
        <div className=" max-w-[30rem] p-3 bg-neutral-200 rounded-xl">
          <form action="">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  name="firstname"
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  name="lastname"
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="age">Age</Label>
              <Input name="age" id="age" placeholder="> 3" type="number" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="department">Department</Label>
              <select className=" flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400">
                <option value="">computer science</option>
                <option value="">software engineering</option>
                <option value="">economics</option>
                <option value="">accounting</option>
              </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="level">Level</Label>
              <select className=" flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400">
                <option value="">100</option>
                <option value="">200</option>
                <option value="">300</option>
                <option value="">400</option>
              </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="educationlevel">Preferred Learning Styles</Label>
              <select className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400">
                <option value="">Visual</option>
                <option value="">Auditory</option>
                <option value="">kinesthetic</option>
              </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="resourcetype">Preferred Resource Type</Label>
              <select className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400">
                <option value="">Video tutorials</option>
                <option value="">Written materials</option>
                <option value="">Interactive exercises</option>
              </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="difficultylevel">
                Preferred Difficulty Level
              </Label>
              <select className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400">
                <option value="">Begginer</option>
                <option value="">Intermediate</option>
                <option value="">Advanced</option>
              </select>
            </LabelInputContainer>
          </form>
        </div>
        <div className=" hidden md:block w-[30rem] p-3 bg-neutral-200 rounded-xl"></div>
      </div>
    </div>
  )
}
