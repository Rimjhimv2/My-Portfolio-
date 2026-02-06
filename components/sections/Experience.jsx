

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
            {/* <div className="absolute left-6 w-0.5 h-full bg-white/10 md:left-1/2 md:-translate-x-1/2" /> */}
            <div className="
  absolute 
  left-4 
  top-0 
  w-0.5 
  h-full 
  bg-white/10
  md:left-1/2 
  md:-translate-x-1/2
" />


            {/* Timeline Cards */}
            <div className="space-y-16">
              {experiencesData.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  exp={exp}
                  index={index}
                />
              ))}
            </div>
          </div>

        </Container>
      </Section>
    </ReviewOnScroll>
  );
}

