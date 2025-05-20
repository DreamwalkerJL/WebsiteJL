"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

type NavMainProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMain: React.FC<NavMainProps> = ({ menuOpen, setMenuOpen }) => {

  const isMd = useMediaQuery({
    query: "(min-width: 751px) and (max-width: 1100px)",
  });
  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isMaxMd = useMediaQuery({ query: "(max-width: 1100px)" });
  const [mounted, setMounted] = useState(false);
 

const handleScrollTo = (id: string) => {
  // Manually remove scroll lock before scrolling
  document.body.classList.remove("overflow-hidden");
  setMenuOpen(false);

  // Delay to allow body styles to update before scrolling
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // 50–100ms delay gives best consistency
};



  useEffect(() => {
    setMounted(true);
  }, []);



if (!mounted) return null;

  return (
    <div data-layer="Nav Main" className="NavMain self-stretch inline-flex justify-start items-start gap-5">
      <div data-layer="Nav Buttons" className="NavButtons flex-1 h-[70px] flex justify-center items-center md:justify-end gap-[100px] xl:gap-5 " onClick={() => setMenuOpen((prev) => !prev)}>
        {mounted && isMaxMd && (
          <div
            data-layer="material-symbols:menu-rounded"
            className="MaterialSymbolsMenuRounded size-[78px] relative cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
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
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-6xl font-bold text-neutral-700 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Close Menu"
              >
                ×
              </button>

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

{isLgPlus && (
  <div className="flex gap-10 items-center px-[200px] xl:px-[100px] lg:px-[50px] w-full justify-between font-['Orbitron'] uppercase text-neutral-700">
    <div
      className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      onClick={() => handleScrollTo("origin")}
    >
      <div className="Origin text-xl font-normal">Origin</div>
    </div>
    <div
      className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      onClick={() => handleScrollTo("arsenal")}
    >
      <div className="Arsenal text-xl font-normal">Arsenal</div>
    </div>
    <div className="NavJoshuaLim w-[249px] py-5 bg-white rounded-bl-lg rounded-br-lg flex justify-center items-start overflow-hidden">
      <div className="JoshuaLim text-2xl font-bold">Joshua Lim</div>
    </div>
    <div
      className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      onClick={() => handleScrollTo("creations")}
    >
      <div className="Creations text-xl font-normal">Creations</div>
    </div>
    <div
      className="HeaderFrame w-40 px-[60px] py-5 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      onClick={() => handleScrollTo("contact")}
    >
      <div className="Contact text-xl font-normal">Contact</div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default NavMain;
