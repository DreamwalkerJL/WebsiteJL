import React from "react";
import { motion } from "framer-motion";

// Data for each creation card
const creationsData = [
  {
    id: 1,
    title: "Gizapp",
    text: "I built GizApp so planning events with friends feels good. Clean design, simple invites, and no group chat chaos.",
    bgUrl: "/Creations/Creation_1.png",
    link: "https://example.com/gizapp" // add your URL here
  },
  {
    id: 2,
    title: "TIC-TAC-TOE",
    text: "Play against a perfect Tic Tac Toe bot — it never makes a mistake, and you’ll never win.",
    bgUrl: "/Creations/Creation_2.png",
    link: "https://example.com/tic-tac-toe"
  },
  {
    id: 3,
    title: "Artstation",
    text: "A collection of my 2D and 3D artwork, shared on ArtStation.",
    bgUrl: "/Creations/Creation_3.png",
    link: "https://example.com/artstation"
  },
  {
    id: 4,
    title: "soundtracks",
    text: "My YouTube channel where I post original soundtracks from series paired with animated visuals.",
    bgUrl: "/Creations/Creation_4.png",
    link: "https://example.com/soundtracks"
  },
  {
    id: 5,
    title: "Video editing",
    text: "A playlist showcasing videos I’ve edited. From cinematic cuts to fast-paced content.",
    bgUrl: "/Creations/Creation_5.png",
    link: "https://example.com/video-editing"
  },
  {
    id: 6,
    title: "social media",
    text: "A social media page where I share short, thought-provoking video edits with a philosophical edge.",
    bgUrl: "/Creations/Creation_6.png",
    link: "https://example.com/social-media"
  },
  {
    id: 7,
    title: "Github",
    text: "A hub for the websites and apps I’ve built.",
    bgUrl: "/Creations/Creation_7.png",
    link: "https://github.com/yourusername"
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const creationVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Creations: React.FC = () => {
  return (
    <div className="CreationsContainer flex flex-col items-center bg-white">
      <motion.div
        className="CreationsRow flex flex-wrap justify-center gap-5 p-8 overflow-visible"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {creationsData.map(({ id, title, text, bgUrl, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full max-w-[350px] h-52 bg-cover bg-center rounded-lg relative  cursor-pointer p-5 flex flex-col justify-between`} 
            style={{ backgroundImage: `url(${bgUrl})` }}
            variants={creationVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 12px rgba(255,255,255,0.8)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div>
              <h3 className="font-orbitron text-white text-2xl uppercase text-shadow-lg">
                {title}
              </h3>
              <p className="font-inter text-white text-base text-shadow-lg mt-2">
                {text}
              </p>
            </div>
            <span className="self-end bg-pink-500 px-4 py-2 rounded-lg font-orbitron text-sm uppercase text-white">
              Visit Site
n            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Creations;
