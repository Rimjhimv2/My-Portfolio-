// "use client";

// import React from "react";
// import ReviewOnScroll from "../ReviewOnScroll";
// import Section from "../ui/Section";
// import Container from "../ui/Container";
// import { Code2, Server, Database, Wrench } from "lucide-react";

// function Skills() {
//   const programmingLanguages = [
//     "JavaScript",
//     "TypeScript",
//     "Python",
//     "C++",
//   ];

//   const frameworksLibraries = [
//     "React",
//     "Next.js",
//     "OpenAI SDK",
//     "Gemini SDK",
//     "Framer Motion",
//     "shadcn/ui",
//     "Express",
//     "Tailwind CSS",
//     "Zod",
//   ];

//   const databases = [
//     "MongoDB",
//     "PostgreSQL",
//     "MySQL",
//     "Supabase",
//   ];

//   const toolsTechnologies = [
//     "Node.js",
//     "Vite",
//     "Git",
//     "GitHub",
//     "Drizzle",
//     "Docker",
//     "AWS",
//     "Vercel",
//     "Netlify",
//     "Bcrypt",
//     "Mongoose",
//   ];

//   const skillCategories = [
//     { title: "Programming Languages", skills: programmingLanguages, Icon: Code2 },
//     { title: "Frameworks & Libraries", skills: frameworksLibraries, Icon: Server },
//     { title: "Databases", skills: databases, Icon: Database },
//     { title: "Tools & Technologies", skills: toolsTechnologies, Icon: Wrench },
//   ];

//   return (
//     <ReviewOnScroll>
//       <Section id="skills">
//         <Container>
//           <h2 className="section-title mb-10 text-center">
//             Skills & Tech Stack
//           </h2>

//           <div className="glass-card hover-lift p-6 md:p-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
//               {skillCategories.map((category, idx) => {
//                 const Icon = category.Icon;
//                 return (
//                   <div key={idx} className="space-y-4">
//                     <div className="flex items-center gap-3 pb-3 border-b border-white/10">
//                       <div className="p-2 rounded-lg bg-white/5">
//                         <Icon className="w-5 h-5 text-white" />
//                       </div>
//                       <h4 className="text-lg font-semibold text-white">
//                         {category.title}
//                       </h4>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {category.skills.map((skill, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </Container>
//       </Section>
//     </ReviewOnScroll>
//   );
// }

// export default Skills;


"use client";
import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Code2, Server, Database, Wrench } from "lucide-react";

function Skills() {
  const programmingLanguages = ["JavaScript", "TypeScript", "Python", "C++"];
  
  const frameworksLibraries = [
    "React", "Next.js", "OpenAI SDK", "Gemini SDK", "Framer Motion",
    "shadcn/ui", "Express", "Tailwind CSS", "Zod"
  ];
  
  const databases = ["MongoDB", "PostgreSQL", "MySQL", "Supabase"];
  
  const toolsTechnologies = [
    "Node.js", "Vite", "Git", "GitHub", "Drizzle", "Docker",
    "AWS", "Vercel", "Netlify", "Bcrypt", "Mongoose"
  ];

  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages, Icon: Code2 },
    { title: "Frameworks & Libraries", skills: frameworksLibraries, Icon: Server },
    { title: "Databases", skills: databases, Icon: Database },
    { title: "Tools & Technologies", skills: toolsTechnologies, Icon: Wrench },
  ];

  return (
    <ReviewOnScroll>
      <Section id="skills" className="py-20">
        <Container>
          <h2 className="section-title mb-16 text-center">
            Skills & Tech Stack
          </h2>

          <div className="glass-card hover-lift p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {skillCategories.map((category, idx) => {
                const Icon = category.Icon;
                return (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {category.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </ReviewOnScroll>
  );
}

export default Skills;