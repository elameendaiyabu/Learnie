"use client";

import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LabelInputContainer } from "./ui/labelInputContainer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Plus, Trash2, X } from "lucide-react";
import RecommendationCard from "./RecommendationCard";
import { useFormStatus } from "react-dom";
import { Card, CardContent } from "./ui/card";
import { useToast } from "./ui/use-toast";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
const gemini = new GoogleGenerativeAI(apiKey);

interface Recomendations {
  title: string;
  type: string;
  source: string;
  link: string;
  difficulty: string;
  description: string;
}

export default function UserDataForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [learningStyle, setLearningStyle] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [learningObjectives, setLearningObjectives] = useState<string[]>([]);
  const [objective, setObjective] = useState<string>("");
  const [objectiveInput, setObjectiveInput] = useState(false);
  const [generatedText, setGeneratedText] = useState<Recomendations[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const { toast } = useToast();

  function AddObjective() {
    setLearningObjectives([...learningObjectives, objective]);
    setObjectiveInput(false);
    setObjective("");
  }

  function DeleteObjective(index: number) {
    setLearningObjectives((prevObj) =>
      learningObjectives.filter((_, i) => i !== index),
    );
  }

  async function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setPending(true);

    try {
      const model = gemini.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
                    i'm seeking recommendations for learning materials based on my preferences
                    Please provide at least 20 learning materials in JSON format with the following attributes: title, type, source, link, difficulty, and description. Ensure that the property names are double-quoted. Omit the JSON specifier, backticks, asterisks, or ellipses to facilitate parsing and rendering the data on screen.
                    Department: ${department}

                    Course: ${course}

                    University Level: ${level}

                    Preferred Learning Style: ${learningStyle}

                    Preferred Resource Type: ${resourceType}

                    Preferred Difficulty Level: ${difficulty}

                    Learning Objectives Added: ${learningObjectives}  
                    
                    Here's an example JSON structure with placeholders for the learning materials:
                    [
                      {
                        "title": "...",
                        "type": "...",
                        "source": "...",
                        "link": "...",
                        "difficulty": "...", 
                        "description": "..."
                      },
                      {
                        "title": "...",
                        "type": "...",
                        "source": "...",
                        "link": "...",
                        "difficulty": "...",
                        "description": "..."
                      },
                      ...
                    ]
replace the ellipses with actual data when providing the recommendations!
                    `;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = JSON.parse(response.text());
      setGeneratedText(text);
      toast({
        title: "Scroll to view recommendations.",
      });
      setPending(false);
    } catch (error) {
      setPending(false);
      toast({
        title: "Couldn't get recommendations. Try again!",
      });
      console.log(error);
    }

    // window.location.hash = section
    // scrollToSection(section)
  }

  console.log(generatedText);

  return (
    <div>
      <div>
        <h1 className=" text-xl mt-5 md:text-3xl text-center font-semibold pb-5">
          Upload User Data/Preference
        </h1>
        <div className="flex-wrap md:flex justify-center md:justify-around gap-7 mx-auto mb-5 ">
          <Card className=" mb-7 sm:mb-0 md:w-[30rem] p-3 rounded-xl">
            <CardContent>
              <form onSubmit={(e) => handleClick(e)}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="department">Department</Label>
                  <select
                    className=" flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">computer science</option>
                    <option value="Software Engineering">
                      software engineering
                    </option>
                    <option value="Economics">economics</option>
                    <option value="Accounting">accounting</option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="course">Course</Label>
                  <select
                    className=" flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    onChange={(e) => setCourse(e.target.value)}
                    value={course}
                  >
                    <option value="">Select Course</option>
                    <option value="System Analysis">system analysis</option>
                    <option value="Infomation Security">
                      information security
                    </option>
                    <option value="Programming">programming</option>
                    <option value="Web Development">web development</option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="level">Level</Label>
                  <select
                    className=" flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="">Select Level</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={400}>400</option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="educationlevel">
                    Preferred Learning Styles
                  </Label>
                  <select
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    onChange={(e) => setLearningStyle(e.target.value)}
                    value={learningStyle}
                  >
                    <option value="">Select Learning Style</option>
                    <option value="Visual">Visual</option>
                    <option value="Auditory">Auditory</option>
                    <option value="Kinesthetic">kinesthetic</option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="resourcetype">Preferred Resource Type</Label>
                  <select
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    onChange={(e) => setResourceType(e.target.value)}
                    value={resourceType}
                  >
                    <option value="">Select Preferred Resource Type</option>
                    <option value="Video Tutorials">Video tutorials</option>
                    <option value="Written Materials">Written materials</option>
                    <option value="Interactive Exercises">
                      Interactive exercises
                    </option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="difficultylevel">
                    Preferred Difficulty Level
                  </Label>
                  <select
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent   file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                  >
                    <option value="">Select Difficulty</option>
                    <option value="Beginner">Begginer</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="leaningobjective">Learning Objectives</Label>
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className=" flex justify-between">
                      <li>{objective}</li>
                      <button
                        type="button"
                        onClick={() => {
                          DeleteObjective(index);
                        }}
                      >
                        <Trash2 className=" w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  {objectiveInput && (
                    <div className=" grid grid-cols-5 gap-4">
                      {" "}
                      <div className=" col-span-3">
                        <Input
                          type="text"
                          name="objective"
                          placeholder="Enter Objective"
                          value={objective}
                          onChange={(e) => setObjective(e.target.value)}
                        />
                      </div>
                      <Button
                        className=" col-span-1"
                        variant="outline"
                        type="button"
                        onClick={() => {
                          AddObjective();
                        }}
                      >
                        <Plus />
                      </Button>
                      <Button
                        className=" col-span-1"
                        variant="destructive"
                        type="button"
                        onClick={() => {
                          setObjectiveInput(false);
                        }}
                      >
                        <X />
                      </Button>
                    </div>
                  )}
                </LabelInputContainer>
                <div className=" flex flex-col gap-3">
                  <div className=" flex gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => {
                        setObjectiveInput(true);
                      }}
                    >
                      Add Learning Objectives
                    </Button>
                    <Button
                      variant="destructive"
                      type="button"
                      onClick={() => {
                        setLearningObjectives([]);
                      }}
                    >
                      Delete All
                    </Button>
                  </div>

                  <Button className="w-full" type="submit" disabled={pending}>
                    {pending
                      ? "Fetching Recommendations"
                      : "Get Recommendations"}{" "}
                    &nbsp;
                    <ArrowRight />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="mt-4 flex flex-col gap-2 justify-between md:w-[30rem] p-3 rounded-xl">
              <h1 className=" text-xl md:text-2xl text-center border-b border-black">
                Preview User Data
              </h1>
              <p>
                <span className=" font-bold">Department:</span> {department}
              </p>
              <p>
                <span className=" font-bold">Course:</span> {course}
              </p>
              <p>
                <span className=" font-bold">University Level:</span> {level}
              </p>
              <p>
                <span className=" font-bold">Preferred Learning Style:</span>{" "}
                {learningStyle}
              </p>
              <p>
                <span className=" font-bold">Preferred Resource Type:</span>{" "}
                {resourceType}
              </p>
              <p>
                <span className=" font-bold">Preferred Difficulty Level:</span>{" "}
                {difficulty}
              </p>
              <p>
                <span className=" font-bold">Learning Objectives Added:</span>{" "}
                {learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className=" md:px-[3.65rem] pt-3">
        <h1 className=" text-xl md:text-3xl text-center font-semibold mb-3">
          Learning Recommendations
        </h1>
        <div
          id="recommendations"
          className=" sm:mb-0 md:w-full p-3 rounded-xl justify-center md:justify-around gap-7 mx-auto mb-5 "
        >
          <RecommendationCard generatedText={generatedText} />
        </div>
      </div>
    </div>
  );
}
