import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body || !body.name || !body.jobRole) {
      return NextResponse.json({ error: "Missing required fields (name, job role)" }, { status: 400 });
    }

    // AI Prompt - Strict JSON output request
    const prompt = `
You are an expert career coach and resume writer specializing in **ATS optimization**.  
Given a user's details, generate a **highly optimized, keyword-rich resume** for the job role of **${body.jobRole}**.

### 🔹 **ATS Optimization Guidelines:**
1. **Maximize Keyword Density** – Extract key skills, technologies, and tools related to the job role.
2. **Use Strong Action Verbs** – Replace weak phrases with **powerful, results-driven language**.
3. **Improve Measurable Impact** – Add **quantifiable achievements** in experience & projects.
4. **Ensure ATS Readability** – Use **simple, structured bullet points** (avoid tables, images).
5. **Match Industry Trends** – Align with **top job descriptions** for a **stronger ATS ranking**.

### 🎯 **Resume Format:**
{
  "name": "Full Name",
  "jobRole": "Target Job Role",
  "summary": "ATS-optimized professional summary with industry keywords and measurable impact.",
  "experience": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "duration": "Time Period",
      "description": "Optimized bullet points with industry-specific keywords & measurable impact (e.g., 'Increased efficiency by 30% using XYZ technology')."
    }
  ],
  "education": [
    { "institution": "University Name", "degree": "Degree", "year": "Year of Completion" }
  ],
  "skills": ["ATS-optimized skills list including both technical & soft skills"],
  "projects": [
    { "title": "Project Name", "description": "Industry-aligned description highlighting technologies used and impact." }
  ],
  "contact": {
    "email": "user@example.com",
    "phone": "1234567890",
    "linkedin": "linkedin.com/in/username",
    "github": "github.com/username"
  }
}

⚠️ **Return ONLY the valid JSON output (no markdown, no extra text).**  
Make sure the response is **optimized for ATS parsing** and **ranks highly in job applications**.
`;


    
    
    const API_KEY = process.env.GEMINI_API_KEY;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // ✅ Extract AI-generated text
    let aiGeneratedText = response.data.candidates[0].content.parts[0].text.trim();

    // ✅ Extract JSON using regex (if AI includes extra text)
    const jsonMatch = aiGeneratedText.match(/\{[\s\S]*\}/); // Matches content inside `{}`

    if (!jsonMatch) {
      throw new Error("Invalid JSON format received from AI");
    }

    const structuredResume = JSON.parse(jsonMatch[0]); // Parse clean JSON

    return NextResponse.json({ resumeContent: structuredResume }, { status: 200 });
  } catch (error) {
    console.error("Error fetching resume data:", error);
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 });
  }
}
