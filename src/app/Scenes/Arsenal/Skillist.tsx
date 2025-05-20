import { motion } from "framer-motion"

const column1Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // 100ms between each item
    },
  },
}

const column2Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,   // wait 300ms, then start staggering
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function SkillList() {
  return (
    <div
      data-layer="List"
      className="List inline-flex items-start justify-center gap-20 overflow-hidden px-96 pt-6 sm:flex-wrap lg:w-screen lg:px-36"
    >
      {/* Column 1 */}
      <motion.div
        data-layer="List Frame"
        className="ListFrame inline-flex flex-1 flex-col items-center justify-start gap-5"
        variants={column1Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.div
          data-layer="Title Frame"
          className="TitleFrame inline-flex min-w-[300px] items-start justify-start self-stretch bg-slate-500 p-[5px] sm:min-w-[325px]"
          variants={itemVariants}
        >
          <div
            data-layer="creative & visual"
            className="CreativeVisual justify-start font-['Orbitron'] text-xl font-semibold text-white uppercase sm:text-[12px]"
          >
            creative & visual
          </div>
        </motion.div>

        {/* Skills List - Group 1 */}
        <div
          data-layer="List Text Frame"
          className="ListTextFrame inline-flex items-start justify-start gap-12 self-stretch pl-[5px] sm:gap-8 lg:flex-wrap"
        >
          <motion.div
            data-layer="List"
            className="List size- inline-flex flex-col items-start justify-start gap-2.5 overflow-hidden text-xl sm:text-[12px]"
            variants={column1Variants}
          >
            {[
              "Adobe Photoshop",
              "Adobe Ilustrator",
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Figma",
              "Cinema 4D",
            ].map((skill) => (
              <motion.div
                key={skill}
                data-layer={skill}
                className="font-['Inter'] text-xl font-normal text-white sm:text-[12px]"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills List - Group 2 */}
          <motion.div
            data-layer="List"
            className="List size- inline-flex flex-col items-start justify-start gap-2.5"
            variants={column1Variants}
          >
            {[
              "Maya",
              "Stubstance 3D",
              "Blender",
              "Foundry Mari",
              "ZBrush",
              "Marvelous Designer",
            ].map((skill) => (
              <motion.div
                key={skill}
                data-layer={skill}
                className="font-['Inter'] text-xl font-normal text-white sm:text-[12px]"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Column 2 */}
      <motion.div
        data-layer="List Frame"
        className="ListFrame inline-flex flex-1 flex-col items-center justify-start gap-5"
        variants={column2Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.div
          data-layer="Title Frame"
          className="TitleFrame inline-flex min-w-[300px] items-start justify-start self-stretch bg-slate-500 p-[5px]"
          variants={itemVariants}
        >
          <div
            data-layer="DEVELOPMENT"
            className="Development justify-start font-['Orbitron'] text-xl font-semibold text-white uppercase sm:text-[12px]"
          >
            DEVELOPMENT
          </div>
        </motion.div>

        {/* Skills List - Group 1 */}
        <div
          data-layer="List Text Frame"
          className="ListTextFrame inline-flex items-start justify-start gap-12 self-stretch pl-[5px] sm:gap-8 lg:flex-wrap"
        >
          <motion.div
            data-layer="List"
            className="List size- inline-flex flex-col items-start justify-start gap-2.5 overflow-hidden"
            variants={column2Variants}
          >
            {[
              "HTML",
              "CSS",
              "Javascript",
              "React",
              "Typescript",
              "Next.js",
            ].map((skill) => (
              <motion.div
                key={skill}
                data-layer={skill}
                className="font-['Inter'] text-xl font-normal text-white sm:text-[12px]"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills List - Group 2 */}
          <motion.div
            data-layer="List"
            className="List size- inline-flex flex-col items-start justify-start gap-2.5"
            variants={column2Variants}
          >
            {[
              "Kotlin",
              "Spring-Boot",
              "Node.js",
              "SPFX",
              "GraphQL",
              "Redux",
            ].map((skill) => (
              <motion.div
                key={skill}
                data-layer={skill}
                className="font-['Inter'] text-xl font-normal text-white sm:text-[12px]"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills List - Group 3 */}
          <motion.div
            data-layer="List"
            className="List size- inline-flex flex-col items-start justify-start gap-2.5"
            variants={column2Variants}
          >
            {[
              "Vite",
              "Three.js",
              "SCSS",
              "Tailwind CSS",
              "Framer-Motion",
              "And many more...",
            ].map((skill) => (
              <motion.div
                key={skill}
                data-layer={skill}
                className="font-['Inter'] text-xl font-normal text-white sm:text-[12px]"
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
