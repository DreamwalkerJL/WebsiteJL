// Update Origin.tsx integration:
"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import AboutMe from "./AboutMe";
import TimelineLeftBlock from "./TimelineLeftBlock";
import TimelineRightBlock from "./TimelineRightBlock";

const Origin: React.FC = () => {
  const isMaxMd = useMediaQuery({ query: "(max-width: 1100px)" });
  const isMaxLg = useMediaQuery({ query: "(max-width: 1400px)" });
  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isXlPlus = useMediaQuery({ query: "(min-width: 1401px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div data-layer="Hero Main" className="HeroMain w-full   max-w-[1920px] relative  bg-white shadow-[0_0_100px_1px]
shadow-white  inline-flex flex-col justify-start items-center overflow-hidden">
      <div className="OriginMain flex flex-col items-start justify-start gap-[50px] self-stretch overflow-hidden bg-white lg:gap-[0px]">
        <div className="OriginTitle inline-flex items-start justify-center self-stretch overflow-hidden bg-white py-2.5">
          <div className="TitleFrame inline-flex flex-col items-center justify-start gap-2.5 overflow-hidden p-2.5 lg:w-[823px]">
            <div className="TitleText justify-start font-['Orbitron'] text-[200px] font-semibold text-neutral-700 sm:text-[48px] md:text-[100px] lg:text-[125px] xl:text-[175px]">
              THE ORIGIN
            </div>
            {mounted && isMaxLg && <AboutMe />}
          </div>
        </div>

        <div className="OriginMainSection relative inline-flex h-[719px] items-start justify-center gap-2.5 self-stretch sm:pb-[20px] px-[150px] lg:pb-[100px] md:pb-[60px] lg:h-full pb-[200px] sm:h-full sm:px-[20px] sm:py-[10px] md:px-[50px]  lg:pt-[40px]">
          {mounted && isLgPlus && (
            <div className="LeftSide inline-flex flex-1 flex-col items-start justify-start gap-[15px]">
              {isXlPlus && <AboutMe />}
              <TimelineLeftBlock isXlPlus={isXlPlus}  mounted={mounted}/>
            </div>
          )}

          <div className="RightSide inline-flex flex-1 flex-col items-end justify-start">
      
            <TimelineRightBlock isXlPlus={isXlPlus} mounted={mounted}isMaxLg={isMaxLg} isMaxMd={isMaxMd}/>
          </div>

          <img className="OriginCharEffectBg absolute top-[-281px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-150px] lg:top-[-65px] lg:w-[870px] lg:max-w-[870px]" src="Origin Char Effect BG.png" />
          <img className="OriginCharEffectBg absolute top-[-251px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-140px] lg:top-[-65px] lg:w-[850px] lg:max-w-[850px]" src="Origin Char.png" />
        </div>
      </div>
    </div>
  );
};

export default Origin;
