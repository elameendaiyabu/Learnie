# User Data to Collect

- [x] Age
- [x] gender
- [x] Education Level
- [x] Preferred learning styles (e.g., visual, auditory, kinesthetic)
- [x] Preferred resource types (e.g., video tutorials, written materials, interactive exercises)
- [x] Preferred difficulty levels (beginner, intermediate, advanced)
- [x] Topics or subject areas
- [] Short-term and long-term learning objectives
- [x] Specific skills or knowledge they want to acquire
- [x] Reasons for learning (e.g., personal interest, professional development, academic requirements)
- [] Educational background
- [] CGPA

# Content Data

Gather information about the learning resources available.

Options for gathering content data include:

- If you're integrating with existing learning platforms, you can use their APIs to fetch metadata about courses, tutorials, articles, etc.
- If you're curating your own content, ensure you have metadata and descriptions for each resource.

# Breakdown of App Sequence

- The user registers or logs in to the web app.
- The web app displays the user interface for entering preferences, goals, and other user data.
- The user enters their preferences and data.
- The web app sends the user data to the LLM API for analysis and user profiling.
- The LLM API analyzes the user data and returns a comprehensive user profile.
- The web app retrieves online learning resources from the data storage.
- The web app sends the resource data (e.g., descriptions, transcripts) to the LLM API for analysis and metadata extraction.
- The LLM API analyzes the resources and returns metadata, summaries, and other relevant information.
- The web app matches the user profile with the analyzed resources using a recommendation algorithm.
- The web app displays personalized recommendations to the user.
- The user provides feedback and ratings on the recommendations.
- The web app sends the feedback data to the LLM API for analysis.
- The LLM API analyzes the feedback and returns insights for improving the system.
- The web app updates the recommendation system based on the insights from the LLM API.

### my initial prompt

First Name: El-ameen

Last Name: Daiyabu

Department: Software Engineering

Course: Programming

University Level: 300

Preferred Learning Style: Visual

Preferred Resource Type: Video Tutorials

Preferred Difficulty Level: Beginner

Learning Objectives Added:
learn about js classes and methods
learn js user defined functions
this is my data. recommend atleast 10 learning materials for me. return it in json format with title, type, source, link, difficulty, and description
