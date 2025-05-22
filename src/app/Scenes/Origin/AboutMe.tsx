// File: components/Origin/AboutMe.tsx
"use client";
import React from "react";

const AboutMe = () => (
  <div
    data-layer="About Me"
    className="AboutMe flex flex-col items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-lg pr-[290px] sm:px-[20px] lg:items-center lg:px-[75px] lg:pr-[75px] lg:text-center"
  >
    <div
      data-layer="About Me Title"
      className="AboutMeTitle justify-start font-['Orbitron'] text-xl font-semibold text-neutral-700 uppercase"
    >
      Journey
    </div>
    <div
      data-layer="About Me Text"
      className="AboutMeText justify-start self-stretch font-['Inter'] text-base leading-5 font-normal text-neutral-700 sm:text-[12px]"
    >
      My journey into the digital world began with a deep curiosity and a drive
      to create. I’m a self-taught developer and designer, having explored
      various disciplines.
      <br />
      Along the way, I’ve worked professionally as an ICT Support Specialist and
      a SharePoint Web Developer, giving me hands-on experience with real-world
      systems and collaborative environments. This blend of technical depth and
      creative vision, shapes everything I build today.
    </div>
  </div>
);

export default AboutMe;
