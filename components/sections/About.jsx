import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import {
  GraduationCap,
  Building2,
  Calendar,
  Award,
  ScrollText,
} from "lucide-react";

function About() {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science",
      institute: "JSS Academy of Technical Education",
      year: "2023-2027",
      cgpa: "9.00",
    },
  ];

  const certificatesData = [
    {
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      year: "2025",
      image: "/certificates/oracle.jpg",
    },
    {
      title: "Artificial Intelligence for Beginners",
      issuer: "HP LIFE",
      year: "2026",
      image: "/certificates/hp.jpg",
    },
    {
      title: "AGENTICA – Agentic AI Workshop",
      issuer: "Jss,Noida",
      year: "2025",
      image: "/certificates/agentic.jpg",
    },
  ];

  return (
    <ReviewOnScroll>
      <Section id="about" className="py-20">
        <Container>
          <h2 className="section-title mb-16 text-center">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 items-start">

            {/* LEFT TEXT */}
            <div className="glass-card hover-lift p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                Hello World! I’m Rimjhim Verma — Full Stack Developer
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
                I’m a passionate Full-Stack Developer focused on building scalable,
                high-performance, and user-centric web applications. I specialize in
                Next.js, TypeScript, and the MERN stack, with hands-on experience across
                both frontend and backend development.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
                I enjoy taking ideas from concept to production by building practical,
                real-world projects with clean architecture and strong performance.
                I continuously learn, experiment, and ship applications while sharpening
                my problem-solving and development skills.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
                I’m also actively exploring Artificial Intelligence, building AI-powered
                applications and agents through hands-on projects, and applying them to
                solve real-world problems.
              </p>

              <p className="text-blue-400 font-medium">
                Let's connect and collaborate to build something amazing together!
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-12">

              {/* Education */}
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  className="glass-card hover-lift p-7 relative overflow-hidden group"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition pointer-events-none">
                    <GraduationCap className="w-28 h-28 text-white -rotate-12" />
                  </div>

                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {edu.title}
                      </h4>

                      <div className="flex items-center gap-2 mt-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{edu.institute}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 bg-blue-500/10 text-blue-400 whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit relative z-10">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">
                      CGPA:
                    </span>
                    <span className="text-sm font-bold text-blue-400">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              ))}

              {/* Certificates */}
              <div className="mt-16 lg:mt-16">
                <h3 className="text-2xl font-semibold text-white mb-8">
                  Certifications
                </h3>

                <div className="grid sm:grid-cols-2 gap-12">
                  {certificatesData.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="glass-card hover-lift p-7 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300">

                        <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition">
                          <ScrollText className="w-28 h-28 text-white" />
                        </div>

                        <h4 className="text-lg font-bold text-white mb-3 relative z-10">
                          {cert.title}
                        </h4>

                        <p className="text-gray-400 text-sm mb-4 relative z-10">
                          {cert.issuer}
                        </p>

                        <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 relative z-10">
                          {cert.year}
                        </span>

                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </ReviewOnScroll>
  );
}

export default About;
