"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import JLAnimated from "./JLAnimatied";

import Image from "next/image";
type HeroProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ menuOpen, setMenuOpen }) => {
  // In HeroMain.tsx

  const smoothScrollTo = (targetY: number, duration = 900) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (currentTime: number) => {
      const time = Math.min(1, (currentTime - startTime) / duration);
      const eased = easeInOutQuad(time);
      window.scrollTo(0, startY + diff * eased);

      if (time < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(y, 1500); // ⬅️ customize duration (ms)
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.div className="HeroMain relative inline-flex h-[1300px] w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut" }}
        className="HeroMain relative inline-flex h-[1300px] w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden bg-white shadow-[0_0_100px_1px] shadow-white"
      >
        <Image
          data-layer="BG Top"
          className="BgTop absolute w-full top-[1px] min-w-[1920px] mix-blend-darken sm:left-[-400px] md:left-[-480px]"
          src="/BG Top.jpg"
          alt="BG Top"
    height={920}
    width={1920}
        />
        {/* <DustOverlay/> */}
        <JLAnimated />
        <Image
          data-layer="BG Top Transp"
          className="BgTopTransp absolute top-[1px] h-[902px] min-w-[1920px] mix-blend-darken sm:left-[-400px] md:left-[-480px]"
          src="/BG Top Transp.jpg"
          alt="Bg Top Transp"
             height={902}
    width={1920}
        />
        <Image
          data-layer="BG Bot"
          className="BgBot absolute top-[-29px] h-[1337px] w-[1920px] min-w-[1920px] sm:left-[-400px] md:left-[-480px]"
          src="/BG Bot.png"
          alt="BG Bot"
                       height={1250}
    width={1920}
        />

        <motion.div
          data-layer="Hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.3, ease: "easeOut" }}
          className="Hero flex h-[1250px] flex-col items-start justify-start gap-5 self-stretch rounded-lg px-10 pt-[90px]"
        >
          {/* <NavMain menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
          <div
            data-layer="Hero Main Section"
            className="HeroMainSection inline-flex items-start justify-end self-stretch overflow-hidden px-2.5"
          >
            <div
              data-layer="Right Side"
              className="RightSide md:gap-440px inline-flex w-[910px] flex-col items-end justify-center gap-[440px] pr-[100px] pb-[50px] sm:w-full sm:items-center sm:gap-[50px] sm:self-stretch sm:pt-[309px] sm:text-center sm:text-xs md:flex-1 md:p-0 xl:gap-[50px] xl:pt-[350px] xl:pr-10 xl:pb-[50px]"
            >
              <div
                data-layer="About Me"
                className="AboutMe size- z-10 flex flex-col items-start justify-start gap-2.5 overflow-hidden rounded-lg py-[30px] sm:w-full sm:items-center sm:bg-white sm:px-[30px] sm:text-center sm:text-xs md:bg-transparent xl:bg-white xl:p-[20px]"
              >
                <div
                  data-layer="About Me Title"
                  className="AboutMeTitle justify-start font-['Orbitron'] text-xl font-semibold text-neutral-700 uppercase"
                >
                  About Me
                </div>
                <div
                  data-layer="About Me Text"
                  className="AboutMeText w-[482px] justify-start font-['Inter'] text-base font-normal text-neutral-700 sm:w-full sm:text-[12px]"
                >
                  I&apos;m a self-taught frontend developer with full-stack
                  experience. Passionate about creating digital experiences that
                  feel good to use. I love building clean and thoughtful
                  interfaces. I&apos;m always looking for ways to improve, whether
                  it&apos;s refining my craft or just growing as a person. When I&apos;m
                  not coding, you&apos;ll probably find me at the gym, enjoying the
                  sun, video games, or just hanging out with friends.
                </div>
              </div>
              <motion.div
                data-layer="Start Frame"
                className="StartFrame z-30 flex cursor-pointer flex-col items-end justify-end gap-2.5 overflow-hidden rounded-lg pb-2.5 pl-2.5 sm:w-full sm:items-center"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 2.2,
                      staggerChildren: 0.3,
                    },
                  },
                }}
                onClick={() => handleScrollTo("origin")}
                whileHover={{
                  backgroundColor: "rgba(255, 60, 172, 0.1)", // soft pink glow
                  boxShadow: "0px 8px 20px rgba(255, 60, 172, 0.3)",
                  borderRadius: "12px",
                  skewY: -1, // subtle slant
                  skewX: -1, // subtle slant
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  boxShadow: "0px 4px 10px rgba(255, 60, 172, 0.4)",
                }}
              >
                <motion.div
                  data-layer="Start Text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="StartText font-['Orbitron'] text-[40px] font-semibold text-neutral-700 sm:text-xl       [text-shadow:0_0_8px_white]"
                  whileHover={{
                    color: "#FF3CAC", // pop the pink on the text
                    y: -3, // lift text slightly
                    transition: { duration: 0.2 },
                  }}
                >
                  One life. Many layers.
                </motion.div>

                <motion.div
                  data-layer="Arrow 1"
                  className="Arrow1 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "left", transformBox: "fill-box" }}
                  whileHover={{
                    x: -5, // slide arrow right
                    transition: { type: "tween", duration: 0.2 },
                  }}
                >
                  <svg
                    className="w-full"
                    viewBox="0 0 528 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM527.66 9L519 0.339746L510.34 9L519 17.6603L527.66 9ZM9 9V10.5H519V9V7.5H9V9Z"
                      fill="#FF3CAC"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
