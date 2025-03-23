"use client"; // ✅ Corrected directive

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobRole: "",
    experience: "",
    skills: "",
    education: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateResume = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      
      
      router.push(`/form/resume-template?data=${encodeURIComponent(JSON.stringify(data.resumeContent))}`);
    } catch (error) {
      console.error("Error generating resume:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Enter Resume Details</h1>
      
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-3 border" />
      <input type="text" name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange} className="w-full p-2 mb-3 border" />
      <textarea name="experience" placeholder="Work Experience" value={formData.experience} onChange={handleChange} className="w-full p-2 mb-3 border"></textarea>
      <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} className="w-full p-2 mb-3 border"></textarea>
      <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="w-full p-2 mb-3 border"></textarea>

      <button onClick={handleGenerateResume} className="bg-blue-500 text-white p-2 w-full">
        {loading ? "Generating..." : "Generate Resume"}
      </button>
    </div>
  );
};

export default ResumeForm;
