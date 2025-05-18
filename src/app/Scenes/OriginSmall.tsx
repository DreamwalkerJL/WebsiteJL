import React from 'react';
import "../globals.css";


export default function Origin() {
  return (
    <div
    data-layer="Hero Main"
    className="HeroMain w-full bg-white inline-flex flex-col justify-start items-center overflow-hidden"
  >
    <div
      data-layer="Origin Main"
      className="OriginMain self-stretch pt-10 bg-white flex flex-col justify-start items-start gap-5 overflow-hidden"
    >
      {/* Title */}
      <div
        data-layer="Origin Title"
        className="OriginTitle self-stretch bg-white inline-flex justify-center items-start overflow-hidden"
      >
        <div
          data-layer="Title Frame"
          className="TitleFrame p-2.5 flex justify-start items-start gap-2.5 overflow-hidden"
        >
          <div
            data-layer="Title Text"
            className="TitleText text-neutral-700 text-5xl sm:text-8xl font-semibold font-['Orbitron']"
          >
            THE ORIGIN
          </div>
        </div>
      </div>

      {/* About Me */}
      <div
        data-layer="About Me"
        className="AboutMe self-stretch px-5 sm:px-16 rounded-lg flex flex-col justify-center items-center gap-2.5 overflow-hidden"
      >
        <div
          data-layer="About Me Title"
          className="AboutMeTitle text-neutral-700 text-xl font-semibold font-['Orbitron'] uppercase"
        >
          Journey
        </div>
        <div
          data-layer="About Me Text"
          className="AboutMeText self-stretch text-center text-neutral-700 text-xs sm:text-base font-normal font-['Inter']"
        >
          My journey into the digital world began with a deep curiosity and a drive to create. I’m a
          self-taught developer and designer, having explored various disciplines.
          <br />
          Along the way, I’ve worked professionally as an ICT Support Specialist and a SharePoint Web
          Developer, giving me hands-on experience with real-world systems and collaborative environments.
          This blend of technical depth and creative vision shapes everything I build today.
        </div>
      </div>

      {/* Timeline & Character */}
      <div
        data-layer="Origin Main Section"
        className="OriginMainSection self-stretch p-5 sm:p-12 relative inline-flex justify-center items-start gap-2.5"
      >
        {/* Right Side / Timeline */}
        <div
          data-layer="Right Side"
          className="RightSide flex-1 inline-flex flex-col justify-start items-end"
        >
          <div
            data-layer="Timeline"
            className="Timeline self-stretch flex flex-col justify-start items-end gap-[5px] sm:gap-7"
          >
            {/* 2024 – ARTIFICIAL INTELLIGENCE */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2024
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    ARTIFICIAL INTELLIGENCE
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 – UI / UX */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2024
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    UI / UX
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 – DEVELOPER */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2022
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    DEVELOPER
                  </div>
                </div>
              </div>
            </div>

            {/* 2020 – 3D ART */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2020
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    3D ART
                  </div>
                </div>
              </div>
            </div>

            {/* 2018 – VIDEO EDITING */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2018
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    VIDEO EDITING
                  </div>
                </div>
              </div>
            </div>

            {/* 2014 – GRAPHIC DESIGN */}
            <div
              data-layer="Timeline Object"
              className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
            >
              <div
                data-layer="Title Frame"
                className="TitleFrame self-stretch h-10 sm:h-16 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden"
              >
                <div
                  data-layer="Text Frame"
                  className="TextFrame inline-flex flex-col justify-center items-end"
                >
                  <div
                    data-layer="Year Text"
                    className="YearText text-sky-100 text-base sm:text-2xl font-semibold font-['Orbitron']"
                  >
                    2014
                  </div>
                  <div
                    data-layer="Title Text"
                    className="TitleText text-black text-[10px] sm:text-base font-normal font-['Inter'] uppercase text-right"
                  >
                    GRAPHIC DESIGN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background / Foreground Character Effects */}
        <img
          data-layer="Origin Char Effect BG"
          className="OriginCharEffectBg absolute blur-lg w-[333px] h-[324px] sm:w-[831px] sm:h-[808px] left-[-36px] sm:left-[-131px] top-[-16px] sm:top-[-78px]"
          src="https://placehold.co/333x324"
          alt=""
        />
        <img
          data-layer="Origin Char Effect FG"
          className="OriginCharEffectBg absolute w-[327px] h-[318px] sm:w-[817px] sm:h-[792px] left-[-33px] sm:left-[-124px] top-[-13px] sm:top-[-70px]"
          src="https://placehold.co/327x318"
          alt=""
        />
      </div>
    </div>
  </div>

 


  );
}

