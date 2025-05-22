import { motion } from "framer-motion";
import { useState } from "react";

const JLAnimated = () => {
  const [hovered, setHovered] = useState<"J" | "L" | null>(null);

  return (
    <>
      {/* Letters */}
      <div className="Jl overflow-visible  absolute top-[-90px] flex justify-start font-['Orbitron'] text-[480px] font-black text-white md:hidden">
        {/* J */}
        <motion.div
          // 1) Only the intro in `initial`
          className="overflow-visible     pl-3"
          initial={{
            opacity: 0,
            x: 40,
            clipPath: "inset(0 0% 0% 100%)",
          }}
          // 2) Final intro + hover state
          animate={{
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0% 0%)",
            filter: hovered === "J" ? "brightness(1.5)" : "brightness(1)",
            textShadow:
           hovered === "J" ? "0 0 18px #ff3cac" : "0 0 0px #bcced1",
          }}
          // 3) Two‐part transition
          transition={{
            // default (opacity, x, clipPath)
            default: { delay: 0.3, duration: 2.3, ease: "easeOut" },
            // hover props snap in/out faster
            filter: { duration: 0.3 },
            textShadow: { duration: 0.3 },
          }}
        >
          J
        </motion.div>

        {/* L */}
        <motion.div
           className="pr-3"
          initial={{
            opacity: 0,
            x: -40,
            clipPath: "inset(0 100% 0 0%)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0%)",
            filter: hovered === "L" ? "brightness(1.5)" : "brightness(1)",
            textShadow:
              hovered === "L" ? "0 0 18px #ff3cac" : "0 0 0px #bcced1",
          }}
          transition={{
            default: { delay: 0.3, duration: 2.3, ease: "easeOut" },
            filter: { duration: 0.3 },
            textShadow: { duration: 0.3 },
          }}
        >
          L
        </motion.div>
      </div>

      {/* Invisible hover zones */}
      <div
        className="absolute top-0 left-0 h-[34%] w-1/2 z-20 pointer-events-auto"
        onMouseEnter={() => setHovered("J")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute top-0 right-0 h-[34%] w-1/2 z-20 pointer-events-auto"
        onMouseEnter={() => setHovered("L")}
        onMouseLeave={() => setHovered(null)}
      />
    </>
  );
};

export default JLAnimated;
