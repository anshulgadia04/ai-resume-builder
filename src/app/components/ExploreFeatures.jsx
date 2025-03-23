import Image from "next/image";
import noteImg from "../../../public/notebook.svg";
import coverLetterImg from "../../../public/featuresImages/coverletter.svg";
import blueprintImg from "../../../public/featuresImages/blueprintwriter.svg";
import chromeImg from "../../../public/featuresImages/chrome.svg";
import customizeResumeImg from "../../../public/featuresImages/customizeresume.svg";
import jobtrackerImg from "../../../public/featuresImages/jobtracker.svg";
import linkedinImg from "../../../public/featuresImages/linkdln.svg";
import resumeAnalysisImg from "../../../public/featuresImages/resumeanalysis.svg";
import resumeeditorImg from "../../../public/featuresImages/resumeeditor.svg";
import resumeTemplateImg from "../../../public/featuresImages/resumetemplates.svg";
import skillgapImg from "../../../public/featuresImages/skillgap.svg";
import summarygeneratorImg from "../../../public/featuresImages/summarygenerator.svg";

const ExploreFeatures = () => {
  const features = [
    { img: noteImg, title: "Resume Checker", desc: "Analyze and optimize your resume for success." },
    { img: resumeTemplateImg, title: "Resume Templates", desc: "Choose from professional, ATS-friendly designs." },
    { img: resumeeditorImg, title: "Resume Editor", desc: "Edit and enhance your resume with smart tools." },
    { img: customizeResumeImg, title: "Customize Your Resume", desc: "Personalize your resume layout and branding." },
    { img: linkedinImg, title: "LinkedIn Resume Builder", desc: "Turn your LinkedIn profile into a resume fast." },
    { img: jobtrackerImg, title: "Integrated With Job Tracker", desc: "Track job applications directly with your resume." },
    { img: resumeAnalysisImg, title: "Resume Analysis", desc: "Get actionable feedback to improve your resume." },
    { img: skillgapImg, title: "Resume Skill Gap Analyzer", desc: "Spot missing skills to match job requirements." },
    { img: summarygeneratorImg, title: "Resume Summary Generator", desc: "Create a strong resume summary in seconds." },
    { img: blueprintImg, title: "AI Bulletpoint Writer", desc: "Generate tailored bullet points with AI help." },
    { img: coverLetterImg, title: "Cover Letter Writer", desc: "Quickly craft tailored cover letters with ease." },
    { img: chromeImg, title: "Integrated with Chrome Extension", desc: "Edit resumes directly within your browser." },
  ];

  return (
    <div className="mt-10 bg-gradient-to-br from-blue-100/50 to-white py-10 md:px-0 px-15 md:py-25">
      <h1 className="md:text-5xl text-2xl font-bold text-center">
        Explore <span className="text-blue-500">AI Resume Builder Features</span>
      </h1>
      <p className="mt-5 md:w-full w-[80%] mx-auto text-sm md:text-xl text-black/50 text-center">
        Dive into a powerful suite of career development tools and features designed to advance careers at all levels.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 md:gap-8 max-w-7xl mx-auto mt-5 md:mt-10">
        {features.map((feature, index) => (
          <div key={index} className="md:p-4 p-1 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="flex flex-row items-center gap-2">
              <Image src={feature.img} alt={feature.title} width={40} height={40} />
              <h3 className="md:text-xl text-sm font-semibold">{feature.title}</h3>
            </span>
            <p className="text-gray-600 text-xs md:text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFeatures;
