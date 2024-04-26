import { GoogleGenerativeAI } from "@google/generative-ai"

const API_KEY = "AIzaSyCa7FTJp5DyTK4u8HPSBliXO7GDZsx55jk"

const gemini = new GoogleGenerativeAI(API_KEY)

export async function runAi(
  department,
  course,
  level,
  learningStyle,
  resourceType,
  difficulty,
  learningObjectives
) {
  // For text-only input, use the gemini-pro model
  const model = gemini.getGenerativeModel({ model: "gemini-pro" })

  const prompt = `Department: ${department}

                    Course: ${course}

                    University Level: ${level}

                    Preferred Learning Style: ${learningStyle}

                    Preferred Resource Type: ${resourceType}

                    Preferred Difficulty Level: ${difficulty}

                    Learning Objectives Added: ${learningObjectives}

                    this is my data. recommend atleast 20 learning materials for me. return it in json format with title, type, source, link, difficulty, and description. no need to add the json specifier as i want to use it in my code.
                    `

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return text
}

runAi()
