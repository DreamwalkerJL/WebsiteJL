"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

type StickyNavProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const StickyNav: React.FC<StickyNavProps> = ({ menuOpen, setMenuOpen }) => {
  const [showNav, setShowNav] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const lastScrollY = useRef(0);

  const isLgPlus = useMediaQuery({ query: "(min-width: 1101px)" });
  const isMaxMd = useMediaQuery({ query: "(max-width: 1100px)" });

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
    const timer = setTimeout(() => setFirstLoad(false), 1200); // match Hero intro
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);

    if (currentScrollY < lastScrollY.current) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    lastScrollY.current = currentScrollY;
  };

  const currentScrollY = window.scrollY;
  setScrolled(currentScrollY > 50); // ✅ Immediate check on mount
  lastScrollY.current = currentScrollY;

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⬅️ This fixes hydration mismatch

  return (
    <AnimatePresence>
       <>
      {showNav && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{
            duration: firstLoad ? 1.8 : 0.4,
            ease: "easeOut",
            delay: firstLoad ? 0.8 : 0, // ⬅️ Add delay only on first load
          }}
          className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ease-in-out ${
            scrolled && isLgPlus ? "bg-white/80 shadow-lg backdrop-blur-md" : ""
          }`}
        >
          <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 md:justify-end">
            {/* Mobile Menu */}
        

            {/* Desktop Menu */}
            {isLgPlus && (
              <div className="flex w-full items-center justify-between gap-10 px-[200px] font-['Orbitron'] text-neutral-700 uppercase lg:px-[50px] xl:px-[100px]">
                <div
                  className="HeaderFrame flex w-40 cursor-pointer items-center justify-center gap-2.5 overflow-hidden px-[60px] py-4"
                  onClick={() => handleScrollTo("origin")}
                >
                  <div className="Origin text-xl font-normal">Origin</div>
                </div>
                <div
                  className="HeaderFrame flex w-40 cursor-pointer items-center justify-center gap-2.5 overflow-hidden px-[60px] py-4"
                  onClick={() => handleScrollTo("arsenal")}
                >
                  <div className="Arsenal text-xl font-normal">Arsenal</div>
                </div>
                <div className="NavJoshuaLim flex w-[249px] items-start justify-center overflow-hidden rounded-br-lg rounded-bl-lg py-4">
                  <div
                    className="JoshuaLim cursor-pointer text-2xl font-bold"
                    onClick={() => handleScrollTo("home")}
                  >
                    Joshua Lim
                  </div>
                </div>
                <div
                  className="HeaderFrame flex w-40 cursor-pointer items-center justify-center gap-2.5 overflow-hidden px-[60px] py-4"
                  onClick={() => handleScrollTo("creations")}
                >
                  <div className="Creations text-xl font-normal">Creations</div>
                </div>
                <div
                  className="HeaderFrame flex w-40 cursor-pointer items-center justify-center gap-2.5 overflow-hidden px-[60px] py-4"
                  onClick={() => handleScrollTo("contact")}
                >
                  <div className="Contact text-xl font-normal">Contact</div>
                </div>
              </div>
            )}
          </div>
        </motion.nav>
      )}
          {isMaxMd && (
              <>
                   <motion.nav
     initial={{ y:-50, opacity: 0 }}
                      animate={{ y:0, opacity: 1 }}
                  
                      transition={{ delay: 2,duration: 1.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 z-50 w-full  bg-white/80 shadow-lg backdrop-blur-xl shadow-lg"
          }`}
        >
          <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 md:justify-end">
                <div
                  className="cursor-pointer text-4xl my-2 p-1 rounded-[3px] text-[#404040]  "
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  ☰
                </div>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -200, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-6 bg-white"
                    >
                      <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-5 right-5 text-6xl"
                      >
                        ×
                      </button>
                      {[
                        "Home",
                        "Origin",
                        "Arsenal",
                        "Creations",
                        "Contact",
                      ].map((item) => (
                        <div
                          key={item}
                          onClick={() => handleScrollTo(item.toLowerCase())}
                          className="cursor-pointer font-['Orbitron'] text-2xl uppercase transition hover:scale-105"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                     </div>
        </motion.nav>
              </>
            )}
            </>
    </AnimatePresence>
    
  );
};

export default StickyNav;
