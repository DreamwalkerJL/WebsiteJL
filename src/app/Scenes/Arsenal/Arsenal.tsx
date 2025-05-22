"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import SkillList from "./Skillist";

const Arsenal: React.FC = () => {
  return (
    <div
      data-layer="Hero Main"
      className="HeroMain z-10 inline-flex h-full w-[1920px] flex-col items-center justify-start overflow-hidden "
    >
      {/* <img className="absolute opacity-50" src="./Hero Main1100.png"/> */}

      <div
        data-layer="Arsenal"
        className="flex flex-col items-center justify-center self-stretch bg-neutral-700"
      >
        <div
          data-layer="Arsenal Header"
          className="ArsenalHeader relative inline-flex h-[670px] items-start justify-center self-stretch sm:top-[-20px] sm:h-[250px] sm:scale-[.25] lg:top-[-100px] lg:mt-[100px] lg:h-[350px] lg:scale-55"
        >
          <div
            data-layer="Top Space"
            className="TopSpace h-48 flex-1 lg:h-96"
          />
          <motion.div
            data-layer="Title"
            className="Title absolute top-[259px] left-[300px] justify-start bg-gradient-to-l from-white from-50% to-neutral-700 to-[120%] bg-clip-text font-['Orbitron'] text-[150px] leading-[185px] font-semibold text-transparent uppercase"
            initial={{ opacity: 0, scale: 1, x: "100px" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: "0px",
              transition: { delay: 0, duration: 1.1 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            The <br />
            Arsenal
          </motion.div>

          <div className="absolute top-[213px] left-[463px] h-[318px] w-[1204px] overflow-hidden">
            <motion.div
              data-svg-wrapper
              data-layer="Sword BG"
              // fill the full container once the animation is done
              className="h-full w-full"
              initial={{ width: "0%" }}
              whileInView={{
                width: "100%",
                transition: { delay: 0, duration: 1.1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              <svg
                width="1204"
                height="318"
                viewBox="0 0 1204 318"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_608_123)">
                  <path
                    d="M119.951 51H1145C1149.42 51 1153 54.5817 1153 59V227H265.288C262.864 227 260.572 225.901 259.053 224.013L119.951 51Z"
                    fill="#FF3CAC"
                  />
                  <path
                    d="M90 51H1145C1149.42 51 1153 54.5817 1153 59V227H265.288C262.864 227 260.572 225.901 259.053 224.013L119.951 51"
                    stroke="#404040"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_608_123"
                    x="0"
                    y="0.5"
                    width="1203.5"
                    height="317"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-20" dy="20" />
                    <feGaussianBlur stdDeviation="35" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_608_123"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_608_123"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </div>
          <motion.img
            data-layer="Sword"
            className="Sword absolute  top-[155px] left-[650px] w-[977px] origin-top-left"
            src="./Sword.png"
            initial={{ opacity: 0, x: -40 }} // start 200px off to the left, invisible
            whileInView={{
              opacity: 1,
              x: 0, // animate to its natural position
              transition: { delay: 0.4, duration: 1.1, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
     <SkillList/>
        <div
          data-layer="Bot Space"
          className="BotSpace h-48 self-stretch bg-neutral-700 p-2.5 sm:h-36"
        />
      </div>
    </div>
  );
};

export default Arsenal;
