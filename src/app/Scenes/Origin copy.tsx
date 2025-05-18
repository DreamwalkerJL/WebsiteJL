"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../globals.css";

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
      creative vision shapes everything I build today.
    </div>
  </div>
);

const Origin: React.FC = () => {
  const isMd = useMediaQuery({
    query: "(min-width: 751px) and (max-width: 1100px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1101px) and (max-width: 1400px)",
  });
  const isMaxLg = useMediaQuery({ query: "(max-width: 1400px)" });
  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isXl = useMediaQuery({
    query: "(min-width: 1401px) and (max-width: 1600px)",
  });
  const isXlPlus = useMediaQuery({ query: "(min-width: 1401px)" });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      data-layer="Hero Main"
      className="HeroMain inline-flex w-full flex-col items-center justify-start overflow-hidden bg-white"
    >
      <div
        data-layer="Origin Main"
        className="OriginMain flex flex-col items-start justify-start gap-[50px] self-stretch overflow-hidden bg-white lg:gap-[0px]"
      >
        <div
          data-layer="Origin Title"
          className="OriginTitle inline-flex items-start justify-center self-stretch overflow-hidden bg-white py-2.5"
        >
          <div
            data-layer="Title Frame"
            className="TitleFrame size- inline-flex flex-col items-center justify-start gap-2.5 overflow-hidden p-2.5 lg:w-[823px]"
          >
            <div
              data-layer="Title Text"
              className="TitleText justify-start font-['Orbitron'] text-[200px] font-semibold text-neutral-700 sm:text-[48px] md:text-[100px] lg:text-[125px] xl:text-[175px]"
            >
              THE ORIGIN
            </div>
            {mounted && isMaxLg && <AboutMe />}
          </div>
        </div>
        <div
          data-layer="Origin Main Section"
          className="OriginMainSection relative inline-flex h-[719px] items-start justify-center gap-2.5 self-stretch px-[150px] pb-[200px] sm:h-full sm:px-[20px] sm:py-[10px] md:px-[50px] lg:h-[675px] lg:pt-[40px]"
        >
          {mounted && isLgPlus && (
            <div
              data-layer="Left Side"
              className="LeftSide inline-flex flex-1 flex-col items-start justify-start gap-[15px]"
            >
              {mounted && isXlPlus && <AboutMe />}

              <div
                data-layer="Timeline"
                className="Timeline absolute top-[273px] flex flex-col items-start justify-start gap-[30px] self-stretch lg:top-0 xl:relative xl:top-0"
              >
                <div
                  data-layer="Timeline Object"
                  className="TimelineObject flex w-full flex-col items-end justify-start overflow-hidden"
                >
                  <div
                    data-layer="Title Frame"
                    className="TitleFrame inline-flex h-[107px] items-center justify-start self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-[#e4f2fc] to-white px-5"
                  >
                    <div
                      data-layer="Frame 19"
                      className="Frame19 size- inline-flex flex-col items-start justify-start pb-5"
                    >
                      <div
                        data-layer="Year Text"
                        className="YearText justify-center bg-gradient-to-r from-[#5f89a7]/50 from-80% to-[#e4f2fc]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent"
                      >
                        2024
                      </div>
                      <div
                        data-layer="Title Text"
                        className="TitleText justify-center font-['Inter'] text-base font-normal text-black uppercase"
                      >
                        Artificial Intelligence
                      </div>
                    </div>
                    {mounted && isXlPlus && (
                      <img
                        data-layer="Picture"
                        className="Picture"
                        src="./aiPic.png"
                      />
                    )}
                  </div>
                </div>
                <div
                  data-layer="Timeline Object"
                  className="TimelineObject flex w-full flex-col items-end justify-start overflow-hidden"
                >
                  <div
                    data-layer="Title Frame"
                    className="TitleFrame inline-flex h-[107px] items-center justify-start self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-[#e4f2fc] to-white px-5"
                  >
                    <div
                      data-layer="Frame 19"
                      className="Frame19 size- inline-flex flex-col items-start justify-start pb-5"
                    >
                      <div
                        data-layer="Year Text"
                        className="YearText justify-center bg-gradient-to-r from-[#5f89a7]/50 from-80% to-[#e4f2fc]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent"
                      >
                        2024
                      </div>
                      <div
                        data-layer="Title Text"
                        className="TitleText justify-center font-['Inter'] text-base font-normal text-black uppercase"
                      >
                        UI / UX
                      </div>
                    </div>
                    {mounted && isXlPlus && (
                      <img
                        data-layer="Picture"
                        className="Picture pl-5"
                        src="uiuxPic.png"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            data-layer="Right Side"
            className="RightSide inline-flex flex-1 flex-col items-end justify-start"
          >
            <div
              data-layer="Timeline"
              className="Timeline flex flex-col items-end justify-start gap-[30px] self-stretch sm:gap-[5px]"
            >
              {mounted && isMaxLg && (
                <div className="Timeline flex flex-col items-end justify-start gap-[30px] self-stretch sm:gap-[5px]">
                  <div
                    data-layer="Timeline Object"
                    className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
                  >
                    <div
                      data-layer="Title Frame"
                      className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                    >
                      {mounted && isXlPlus && (
                        <img
                          data-layer="Picture"
                          className="Picture"
                          src="devPic.png"
                        />
                      )}
                      <div
                        data-layer="Text Frame"
                        className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                      >
                        <div
                          data-layer="Year Text"
                          className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                        >
                          2024
                        </div>
                        <div
                          data-layer="Title Text"
                          className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                        >
                          ARTIFICIAL INTELLIGENCE
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    data-layer="Timeline Object"
                    className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
                  >
                    <div
                      data-layer="Title Frame"
                      className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                    >
                      {mounted && isXlPlus && (
                        <img
                          data-layer="Picture"
                          className="Picture"
                          src="devPic.png"
                        />
                      )}
                      <div
                        data-layer="Text Frame"
                        className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                      >
                        <div
                          data-layer="Year Text"
                          className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                        >
                          2024
                        </div>
                        <div
                          data-layer="Title Text"
                          className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                        >
                          UI / UX
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                data-layer="Timeline Object"
                className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
              >
                <div
                  data-layer="Title Frame"
                  className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                >
                  {mounted && isXlPlus && (
                    <img
                      data-layer="Picture"
                      className="Picture"
                      src="devPic.png"
                    />
                  )}
                  <div
                    data-layer="Text Frame"
                    className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                  >
                    <div
                      data-layer="Year Text"
                      className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                    >
                      2022
                    </div>
                    <div
                      data-layer="Title Text"
                      className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                    >
                      DEVELOPER
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Timeline Object"
                className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
              >
                <div
                  data-layer="Title Frame"
                  className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                >
                  {mounted && isXlPlus && (
                    <img
                      data-layer="Picture"
                      className="Picture"
                      src="3dPic.png"
                    />
                  )}
                  <div
                    data-layer="Text Frame"
                    className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                  >
                    <div
                      data-layer="Year Text"
                      className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                    >
                      2020
                    </div>
                    <div
                      data-layer="Title Text"
                      className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                    >
                      3D art
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Timeline Object"
                className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
              >
                <div
                  data-layer="Title Frame"
                  className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                >
                  {mounted && isXlPlus && (
                    <img
                      data-layer="Picture"
                      className="Picture"
                      src="videoPic.png"
                    />
                  )}
                  <div
                    data-layer="Text Frame"
                    className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                  >
                    <div
                      data-layer="Year Text"
                      className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                    >
                      2018
                    </div>
                    <div
                      data-layer="Title Text"
                      className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                    >
                      Video Editing
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Timeline Object"
                className="TimelineObject flex flex-col items-end justify-start self-stretch overflow-hidden"
              >
                <div
                  data-layer="Title Frame"
                  className="TitleFrame inline-flex h-[107px] items-center justify-end self-stretch overflow-hidden rounded-lg bg-gradient-to-r from-white to-[#e4f2fc] px-5 sm:h-[40px] md:h-[70px]"
                >
                  {mounted && isXlPlus && (
                    <img
                      data-layer="Picture"
                      className="Picture"
                      src="graphicDesignPic.png"
                    />
                  )}
                  <div
                    data-layer="Text Frame"
                    className="TextFrame size- inline-flex flex-col items-end justify-start pb-5 md:pb-0"
                  >
                    <div
                      data-layer="Year Text"
                      className="YearText justify-center bg-gradient-to-r from-[#e4f2fc]/50 from-[-20%] to-[#5f89a7]/50 bg-clip-text font-['Orbitron'] text-5xl font-semibold text-transparent sm:text-[16px] md:text-[24px]"
                    >
                      2014
                    </div>
                    <div
                      data-layer="Title Text"
                      className="TitleText justify-center text-right font-['Inter'] text-base font-normal text-black uppercase sm:text-[10px]"
                    >
                      Graphic Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            data-layer="Origin Char"
            className="OriginCharEffectBg absolute top-[-281px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-150px] lg:top-[-85px] lg:w-[870px] lg:max-w-[870px]"
            src="Origin Char Effect BG.png"
          />
          <img
            data-layer="Origin Char Effect BG"
            className="OriginCharEffectBg absolute top-[-251px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-140px] lg:top-[-65px] lg:w-[850px] lg:max-w-[850px]"
            src="Origin Char.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Origin;
