"use client";

import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import experiencesData from "../../lib/data/experience.json";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
    return (
        <ReviewOnScroll>
            <Section id="experience">
                <Container>
                    <h2 className="section-title mb-12 text-center">
                        Work Experience
                    </h2>

                    {/* Vertical Line */}
                    <div className="relative">
                        <div className="absolute left-6 w-0.5 h-full bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                        {/* Timeline Cards */}
                        <div className="space-y-16">
                           
                            
{experiencesData.map((exp, index) => (
  <div key={index} className="glass-card p-6">
    
    <h3 className="text-lg font-semibold text-white">
      {exp.position} — {exp.company}
    </h3>

    <p className="text-sm text-gray-400 mb-4">
      {exp.duration}
    </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-300">
      {Array.isArray(exp.description)
        ? exp.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))
        : <li>{exp.description}</li>}
    </ul>

  </div>
))}




                        </div>
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

