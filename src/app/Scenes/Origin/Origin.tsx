"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import TimelineLeftBlock from "./TimelineLeftBlock";
import TimelineRightBlock from "./TimelineRightBlock";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" } }
};

const Origin: React.FC = () => {
  const isMaxMd = useMediaQuery({ query: "(max-width: 1100px)" });
  const isMaxLg = useMediaQuery({ query: "(max-width: 1400px)" });
  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isXlPlus = useMediaQuery({ query: "(min-width: 1401px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div data-layer="Hero Main" className="HeroMain w-full max-w-[1920px] relative  inline-flex flex-col justify-start items-center overflow-hidden">
      <motion.div
        className="OriginMain flex flex-col items-start justify-start gap-[50px] self-stretch overflow-hidden bg-white lg:gap-[0px]"
      >
        <motion.div
          className="OriginTitle inline-flex items-start justify-center self-stretch overflow-hidden bg-white py-2.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="TitleFrame inline-flex flex-col items-center justify-start gap-2.5 overflow-hidden p-2.5 lg:w-[823px]">
            <div className="TitleText font-['Orbitron'] text-[200px] font-semibold text-neutral-700 sm:text-[48px] md:text-[100px] lg:text-[125px] xl:text-[175px]">
              THE ORIGIN
            </div>
            {mounted && isMaxLg && <AboutMe />}
          </div>
        </motion.div>

        <motion.div
          className="OriginMainSection relative inline-flex h-[719px] items-start justify-center gap-2.5 self-stretch sm:pb-[20px] px-[150px] lg:pb-[100px] md:pb-[60px] lg:h-full pb-[200px] sm:h-full sm:px-[20px] sm:py-[10px] md:px-[50px] lg:pt-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
        >
          {mounted && isLgPlus && (
            <motion.div
              className="LeftSide inline-flex flex-1 flex-col items-start justify-start gap-[15px]"

            >
              {isXlPlus && <AboutMe />}
              <TimelineLeftBlock isXlPlus={isXlPlus} mounted={mounted} />
            </motion.div>
          )}

          <motion.div
            className="RightSide inline-flex flex-1 flex-col items-end justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <TimelineRightBlock isXlPlus={isXlPlus} mounted={mounted} isMaxLg={isMaxLg} isMaxMd={isMaxMd} />
          </motion.div>

          {/* <motion.img
            className="OriginCharEffectBg absolute mix-blend-darken top-[-281px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-150px]  pointer-events-none lg:top-[-65px] lg:w-[870px] lg:max-w-[870px]"
            src="Origin-Char-Effect-BG.jpg"
           initial={{ opacity: 0, scale: 0.8, y: "0px" }}
            whileInView={{ opacity: 1, scale: 1,y:"0px", transition: { delay: 0.5, duration: 1.1 } }}
            viewport={{ once: true, amount: 0.3 }}
          /> */}

<motion.img
  className="OriginCharEffectBg  pointer-events-none absolute top-[-251px] p-2.5 sm:top-[-40px] sm:left-[-50px] sm:h-[345px] sm:w-[350px] md:left-[-140px] lg:top-[-65px] lg:w-[850px] lg:max-w-[850px]"
  src="Origin Char.png"
  initial={{ opacity: 0, scale: 0.8, y: "100px" }}
  whileInView={{ opacity: 1, scale: 1, y: "0px", transition: { delay: 0.2, duration: 1.1 } }}
  viewport={{ once: true, amount: 0.3 }}
/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Origin;
