import React from 'react';
import "../globals.css";




export const HeroOriginLarge: React.FC = () => (
  <div
    data-layer="Hero Main"
    className="
      HeroMain
W-FULL
      bg-white inline-flex flex-col justify-start items-center overflow-hidden
    "
  >
    {/* Origin Main */}
    <div
      data-layer="Origin Main"
      className="
        OriginMain
        self-stretch pt-10 bg-white
        flex flex-col justify-start items-start
        lg:items-center      /* center title+AboutMe at ≥1400px */
        gap-5
        lg:gap-12            /* larger gap at ≥1400px */
        overflow-hidden
      "
    >
      {/* Title */}
      <div
        data-layer="Origin Title"
        className="OriginTitle self-stretch inline-flex justify-center"
      >
        <div className="TitleFrame p-2.5 flex gap-2.5">
          <div
            data-layer="Title Text"
            className="
              TitleText
              text-neutral-700
              text-8xl            /* base at 1100px+ */
              lg:text-[200px]     /* huge at ≥1400px */
              font-semibold font-['Orbitron']
            "
          >
            THE ORIGIN
          </div>
        </div>
      </div>

      {/* Timeline & AboutMe Section */}
      <div
        data-layer="Origin Main Section"
        className="
          OriginMainSection
          self-stretch
          px-36
          md:pb-36            /* you can adjust md:pt if needed */
          lg:pb-48            /* deeper bottom padding at ≥1400px */
          relative inline-flex justify-center items-start gap-2.5
        "
      >
        {/* Left Side (only at ≥1100px) */}
        <div
          data-layer="Left Side"
          className="
            LeftSide
            hidden md:flex        /* md = 1100px */
            flex-1 flex-col
            justify-start items-start
            gap-7
            lg:gap-5             /* tweak gap at ≥1400px */
            xl:gap-28            /* big gap at ≥1600px */
          "
        >
          {/* About Me */}
          <div
            data-layer="About Me"
            className="
              AboutMe
              self-stretch pr-72 rounded-lg
              flex flex-col justify-start items-start gap-2.5 overflow-hidden
            "
          >
            <div
              data-layer="About Me Title"
              className="AboutMeTitle text-neutral-700 text-xl font-semibold font-['Orbitron'] uppercase"
            >
              Journey
            </div>
            <div
              data-layer="About Me Text"
              className="AboutMeText text-neutral-700 text-base font-normal font-['Inter']"
            >
              My journey into the digital world began with a deep curiosity and a drive to create. I’m a
              self-taught developer and designer, having explored various disciplines.<br />
              Along the way, I’ve worked professionally as an ICT Support Specialist and a SharePoint Web
              Developer, giving me hands-on experience with real-world systems and collaborative
              environments. This blend of technical depth and creative vision shapes everything I build
              today.
            </div>
          </div>

          {/* Left Timeline */}
          <div data-layer="Timeline" className="Timeline flex flex-col gap-7">
            {/* 2024 – ARTIFICIAL INTELLIGENCE */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-sky-100 to-white
                  rounded-lg inline-flex justify-start items-center overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-start">
                  <div className="YearText text-slate-500 text-5xl font-semibold font-['Orbitron']">
                    2024
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    Artificial Intelligence
                  </div>
                </div>
              </div>
            </div>
            {/* 2024 – UI / UX */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-sky-100 to-white
                  rounded-lg inline-flex justify-start items-center overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-start">
                  <div className="YearText text-slate-500 text-5xl font-semibold font-['Orbitron']">
                    2024
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    UI / UX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (always visible) */}
        <div
          data-layer="Right Side"
          className="RightSide flex-1 flex flex-col justify-start items-end"
        >
          <div className="Timeline flex flex-col gap-7 items-end">
            {/* 2022 – DEVELOPER */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-white to-sky-100
                  rounded-lg inline-flex justify-end items-center overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-end">
                  <div className="YearText text-sky-100 text-5xl font-semibold font-['Orbitron']">
                    2022
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    DEVELOPER
                  </div>
                </div>
              </div>
            </div>
            {/* 2020 – 3D art */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-white to-sky-100
                  rounded-lg inline-flex justify-end items-center overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-end">
                  <div className="YearText text-sky-100 text-5xl font-semibold font-['Orbitron']">
                    2020
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    3D art
                  </div>
                </div>
              </div>
            </div>
            {/* 2018 – Video Editing */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-white to-sky-100
                  rounded-lg inline-flex justify-end items-end overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-end">
                  <div className="YearText text-sky-100 text-5xl font-semibold font-['Orbitron']">
                    2018
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    Video Editing
                  </div>
                </div>
              </div>
            </div>
            {/* 2014 – Graphic Design */}
            <div className="TimelineObject flex flex-col overflow-hidden">
              <div
                className="
                  TitleFrame
                  h-28 px-5
                  bg-gradient-to-r from-white to-sky-100
                  rounded-lg inline-flex justify-end items-end overflow-hidden
                "
              >
                <div className="TextFrame pb-5 flex flex-col items-end">
                  <div className="YearText text-sky-100 text-5xl font-semibold font-['Orbitron']">
                    2014
                  </div>
                  <div className="TitleText text-black text-base font-normal font-['Inter'] uppercase">
                    Graphic Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Effect Images */}
        <img
          data-layer="Origin Char Effect BG"
          className="OriginCharEffectBg absolute blur-lg w-[831px] h-[808px] left-[135px] top-[-78px]"

          alt=""
        />
        <img
          data-layer="Origin Char"
          className="OriginChar w-[817px] h-[792px] left-[142px] top-[-70px] absolute"

          alt=""
        />
      </div>
    </div>
  </div>
);


