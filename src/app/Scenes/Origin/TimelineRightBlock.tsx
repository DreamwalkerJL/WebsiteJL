// File: components/Origin/TimelineRightBlock.tsx
import React from "react";

const TimelineRightBlock = ({
  isXlPlus,
  mounted,
  isMaxLg,
  isMaxMd,
}: {
  isXlPlus: boolean;
  isMaxLg: boolean;
  isMaxMd: boolean;
  mounted: any;
}) => {
  return (
    <div
      data-layer="Timeline"
      className="Timeline flex flex-col items-end justify-start gap-[30px] self-stretch sm:gap-[5px]"
    >
      {mounted && isMaxMd && (
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
            <img data-layer="Picture" className="Picture" src="devPic.png" />
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
            <img data-layer="Picture" className="Picture" src="3dPic.png" />
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
            <img data-layer="Picture" className="Picture" src="videoPic.png" />
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
  );
};

export default TimelineRightBlock;
