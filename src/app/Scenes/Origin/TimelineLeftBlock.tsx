// File: components/Origin/TimelineLeftBlock.tsx
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TimelineLeftBlock = ({
  isXlPlus,
  mounted,
}: {
  isXlPlus: boolean;
  mounted: any;
}) => {
  return (
    <div
      data-layer="Timeline"
      className="Timeline absolute top-[273px] flex flex-col items-start justify-start gap-[30px] self-stretch lg:top-0 xl:relative xl:top-0"
    >
      <motion.div
        data-layer="Timeline Object"
        className="TimelineObject flex w-full flex-col items-end justify-start overflow-hidden"
        initial={{ opacity: 0, scale: 1, x: "100px" }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: "0px",
          transition: { delay: 0.8, duration: 1.1 },
        }}
        viewport={{ once: true, amount: 0.2 }}
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
            <img data-layer="Picture" className="Picture pointer-events-none" src="./aiPic.png" />
          )}
        </div>
      </motion.div>
      <motion.div
        data-layer="Timeline Object"
        className="TimelineObject flex w-full flex-col items-end justify-start overflow-hidden"
        initial={{ opacity: 0, scale: 1, x: "100px" }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: "0px",
          transition: { delay: 1, duration: 1.1 },
        }}
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.div>
    </div>
  );
};
export default TimelineLeftBlock;
