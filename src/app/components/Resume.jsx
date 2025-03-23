import React from 'react';

const Resume = ({ resumeContent }) => {
  const {
    name = "John Doe",
    jobRole = "Software Engineer",
    summary = "A highly motivated developer...",
    experience = [],
    projects = [],
    education = [],
    certifications = [],
    contact = {},
    skills = [],
  } = resumeContent || {};

  return (
    <div className="w-[8.5in] h-[11in] m-0 font-['Open_Sans'] font-light">
      {/* Main Section */}
      <main className="float-left w-[6.4in] p-6 text-[7pt] text-[#444]">
        <header className="relative left-14 mb-[0.3in] leading-[1.2]">
          <h1 className="uppercase font-light text-[18pt] leading-[1.5] text-black m-0">
            {name.split(' ')[0]} <span className="font-semibold">{name.split(' ')[1]}</span>
          </h1>
          <span className="text-[8pt]">{jobRole}</span>
        </header>

        {/* Summary Section */}
        <section className="mt-4">
          <h2 className="uppercase text-[11pt] text-[#555] font-normal">Summary</h2>
          <p className="text-[7pt]">{summary}</p>
        </section>

        {/* Experience Section */}
        <section className="mt-4">
          <h2 className="uppercase text-[11pt] text-[#555] font-normal">Experience</h2>
          {experience.map((exp, index) => (
            <div className="flex mt-2" key={index}>
              <div className="w-24 text-right pr-4 text-[7pt]">
                <span className="block">{exp.duration}</span>
              </div>
              <div className="relative w-0.5 bg-[#ccc]">
                <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-[#555] border-2 border-white"></div>
              </div>
              <div className="pl-4 flex-1">
                <h3 className="text-[9pt] font-normal text-black m-0">{exp.role}</h3>
                <div className="flex justify-between text-[7.5pt]">
                  <span>{exp.company}</span>
                </div>
                <ul className="mt-2 pl-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="mb-1 before:content-['•'] before:mr-2">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mt-6">
          <h2 className="uppercase text-[11pt] text-[#555] font-normal">Projects</h2>
          {projects.map((project, index) => (
            <div className="flex mt-2" key={index}>
              <div className="pl-4 flex-1">
                <h3 className="text-[9pt] font-normal text-black m-0">{project.title}</h3>
                <ul className="mt-2 pl-4">
                  {project.description.map((desc, i) => (
                    <li key={i} className="mb-1 before:content-['•'] before:mr-2">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mt-6">
          <h2 className="uppercase text-[11pt] text-[#555] font-normal">Education</h2>
          {education.map((edu, index) => (
            <div className="flex mt-2" key={index}>
              <div className="w-24 text-right pr-4 text-[7pt]">
                <span className="block">{edu.year}</span>
              </div>
              <div className="pl-4 flex-1">
                <h3 className="text-[9pt] font-normal text-black m-0">{edu.degree}</h3>
                <div className="text-[7.5pt]">{edu.institution}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section className="mt-6">
          <h2 className="uppercase text-[11pt] text-[#555] font-normal">Certifications</h2>
          <ul className="mt-2 pl-4">
            {certifications.map((cert, index) => (
              <li key={index} className="mb-1 before:content-['•'] before:mr-2">{cert}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="float-right relative w-[2.1in] h-full p-6 bg-[#f2f2f2] text-[8.5pt]">
        {/* Contact Info */}
        <div className="mt-[0.5in]">
          <h1 className="font-normal text-[11pt] uppercase text-black">Contact Info</h1>
          <ul className="mt-2 font-['Source_Code_Pro'] leading-[1.75]">
            {contact.website && (
              <li className="flex items-center gap-2">
                <i className="fa fa-globe w-[9pt] text-right"></i> {contact.website}
              </li>
            )}
            {contact.linkedin && (
              <li className="flex items-center gap-2">
                <i className="fa fa-linkedin w-[9pt] text-right"></i> {contact.linkedin}
              </li>
            )}
            {contact.email && (
              <li className="flex items-center gap-2">
                <i className="fa fa-envelope w-[9pt] text-right"></i> {contact.email}
              </li>
            )}
            {contact.phone && (
              <li className="flex items-center gap-2">
                <i className="fa fa-phone w-[9pt] text-right"></i> {contact.phone}
              </li>
            )}
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-[0.5in]">
          <h1 className="font-normal text-[11pt] uppercase text-black">Skills</h1>
          <ul className="mt-2 leading-[1.5]">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="absolute bottom-5 right-5 text-[7.5pt] italic text-right text-[#777]">
          This résumé was dynamically generated using React.
        </div>
      </aside>
    </div>
  );
};

export default Resume;
