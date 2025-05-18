"use client";
import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const isMd = useMediaQuery({
    query: "(min-width: 751px) and (max-width: 1100px)",
  });
  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isMaxMd = useMediaQuery({ query: "(max-width: 1100px)" });
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up in case component unmounts with menu open
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div data-layer="Hero Main" className="HeroMain w-full h-[1300px]  max-w-[1920px] relative  bg-white shadow-[0_0_100px_1px]
shadow-white  inline-flex flex-col justify-start items-center overflow-hidden">
      <img data-layer="BG Top" className="BgTop  min-w-[1920px] md:left-[-480px] sm:left-[-400px] top-[1px] absolute" src="./BG Top.png" />
      <div data-layer="JL" className="Jl  top-[-100px] absolute md:hidden justify-start text-white text-[480px] font-black font-['Orbitron']">JL</div>
      <img data-layer="BG Top Transp" className="BgTopTransp min-w-[1920px] md:left-[-480px] sm:left-[-400px]  h-[902px]  top-[1px] absolute" src="./BG Top Transp.png" />
      <img data-layer="BG Bot" className="BgBot min-w-[1920px] w-[1920px] h-[1337px] md:left-[-480px] sm:left-[-400px]   top-[-29px] absolute" src="BG Bot.png" />
      <div data-layer="Hero" className="Hero self-stretch h-[1250px] px-10 rounded-lg flex flex-col justify-start items-start gap-5 z-10">
        <div data-layer="Nav Main" className="NavMain  self-stretch inline-flex justify-start items-start gap-5">
          <div data-layer="Nav Buttons" className="NavButtons flex-1 h-[70px] flex justify-center items-center md:justify-end   gap-[100px] xl:gap-5">
            {mounted && isMaxMd && (
              <div
                data-layer="material-symbols:menu-rounded"
                className="MaterialSymbolsMenuRounded size-[78px] relative cursor-pointer"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {/* SVG stays the same */}
                <div data-svg-wrapper data-layer="Vector" className="Vector left-[30px] top-[19.50px] absolute">
                  <svg width="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg ">
                    <path d="M4.00001 39.5C3.07918 39.5 2.30784 39.188 1.68601 38.564C1.06418 37.94 0.752178 37.1687 0.750011 36.25C0.747845 35.3313 1.05984 34.56 1.68601 33.936C2.31218 33.312 3.08351 33 4.00001 33H56C56.9208 33 57.6933 33.312 58.3173 33.936C58.9413 34.56 59.2522 35.3313 59.25 36.25C59.2478 37.1687 58.9358 37.9411 58.314 38.5672C57.6922 39.1934 56.9208 39.5043 56 39.5H4.00001ZM4.00001 23.25C3.07918 23.25 2.30784 22.938 1.68601 22.314C1.06418 21.69 0.752178 20.9187 0.750011 20C0.747845 19.0813 1.05984 18.31 1.68601 17.686C2.31218 17.062 3.08351 16.75 4.00001 16.75H56C56.9208 16.75 57.6933 17.062 58.3173 17.686C58.9413 18.31 59.2522 19.0813 59.25 20C59.2478 20.9187 58.9358 21.6911 58.314 22.3173C57.6922 22.9434 56.9208 23.2543 56 23.25H4.00001ZM4.00001 7C3.07918 7 2.30784 6.688 1.68601 6.064C1.06418 5.44 0.752178 4.66867 0.750011 3.75C0.747845 2.83133 1.05984 2.06 1.68601 1.436C2.31218 0.812 3.08351 0.5 4.00001 0.5H56C56.9208 0.5 57.6933 0.812 58.3173 1.436C58.9413 2.06 59.2522 2.83133 59.25 3.75C59.2478 4.66867 58.9358 5.44108 58.314 6.06725C57.6922 6.69342 56.9208 7.00433 56 7H4.00001Z" fill="#404040" />
                  </svg>
                </div>
              </div>
            )}
            <AnimatePresence>
              {mounted && isMaxMd && menuOpen && (
                <motion.div
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-6 shadow-lg"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-5 right-5 text-6xl font-bold text-neutral-700 hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Close Menu"
                  >
                    ×
                  </button>

                  {/* Navigation Links */}
                  {["Origin", "Arsenal", "Creations", "Contact"].map((item) => (
                    <div
                      key={item}
                      onClick={() => setMenuOpen(false)}
                      className="text-neutral-700 text-2xl font-['Orbitron'] uppercase cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      {item}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {mounted && isLgPlus && <><div data-layer="Header Frame" className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden">
              <div data-layer="Origin" className="Origin justify-start text-neutral-700 text-xl font-normal font-['Orbitron'] uppercase">Origin</div>
            </div>
              <div data-layer="Header Frame" className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden">
                <div data-layer="Arsenal" className="Arsenal justify-start text-neutral-700 text-xl font-normal font-['Orbitron'] uppercase">Arsenal</div>
              </div>
              <div data-layer="Nav Joshua Lim" className="NavJoshuaLim w-[249px] py-5 bg-white rounded-bl-lg rounded-br-lg flex justify-center items-start overflow-hidden">
                <div data-layer="Joshua Lim" className="JoshuaLim justify-start text-neutral-700 text-2xl font-bold font-['Orbitron'] uppercase">Joshua Lim</div>
              </div>
              <div data-layer="Header Frame" className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden">
                <div data-layer="Creations" className="Creations justify-start text-neutral-700 text-xl font-normal font-['Orbitron'] uppercase">Creations</div>
              </div>
              <div data-layer="Header Frame" className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden">
                <div data-layer="Contact" className="Contact justify-start text-neutral-700 text-xl font-normal font-['Orbitron'] uppercase">Contact</div>
              </div></>}
          </div>
        </div>
        <div data-layer="Hero Main Section" className="HeroMainSection self-stretch px-2.5  inline-flex justify-end items-start overflow-hidden">
          <div data-layer="Right Side" className="RightSide w-[910px] sm:w-full md:flex-1 md:p-0 md:gap-440px pr-[100px] sm:pt-[309px]    sm:gap-[50px] sm:items-center sm:text-center  sm:self-stretch sm:text-xs xl:pr-10 xl:pt-[350px] xl:pb-[50px] pb-[50px] inline-flex flex-col justify-center items-end gap-[440px] xl:gap-[50px]">
            <div data-layer="About Me" className="AboutMe sm:bg-white sm:w-full sm:items-center sm:px-[30px] sm:text-center sm:text-xs xl:p-[20px] md:bg-transparent xl:bg-white size- py-[30px]  rounded-lg flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div data-layer="About Me Title" className="AboutMeTitle  justify-start text-neutral-700 text-xl font-semibold font-['Orbitron'] uppercase">About Me</div>
              <div data-layer="About Me Text" className="AboutMeText w-[482px] sm:text-[12px] sm:w-full justify-start text-neutral-700 text-base font-normal font-['Inter']">I'm a self-taught frontend developer with full-stack experience. Passionate about creating digital experiences that feel good to use. I love building clean and thoughtful interfaces. I'm always looking for ways to improve, whether it’s refining my craft or just growing as a person.          When I’m not coding, you’ll probably find me at the gym, enjoying the sun, video games, or just hanging out with friends.</div>
            </div>
            <div data-layer="Start Frame" className="StartFrame sm:items-center sm:w-full size- pl-2.5 pb-2.5 rounded-lg flex flex-col justify-end items-end gap-2.5 overflow-hidden">
              <div data-layer="Start Text" className="StartText justify-start text-neutral-700 text-[40px]  sm:text-xl sm:[text-shadow:_0px_0px_4px_rgb(255_255_255_/_1.00)] font-semibold font-['Orbitron']">One life. Many layers.</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1 w-full">
                <svg className="w-full" viewBox="0 0 528 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM527.66 9L519 0.339746L510.34 9L519 17.6603L527.66 9ZM9 9V10.5H519V9V7.5H9V9Z" fill="#FF3CAC" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero