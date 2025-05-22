import React from "react";
import { motion } from "framer-motion";

// Data for each creation card
const creationsData = [
  {
    id: 1,
    title: "Gizapp",
    text: "I built GizApp so planning events with friends feels good. Clean design, simple invites, and no group chat chaos.",
    bgUrl: "/Creations/Creation_1.png",
    link: "https://gizapp.net/" // add your URL here
  },
  {
    id: 2,
    title: "TIC-TAC-TOE",
    text: "Play against a perfect Tic Tac Toe bot — it never makes a mistake, and you’ll never win.",
    bgUrl: "/Creations/Creation_2.png",
    link: "https://tictactoegame.up.railway.app/"
  },
  {
    id: 3,
    title: "Artstation",
    text: "A collection of my 2D and 3D artwork, shared on ArtStation.",
    bgUrl: "/Creations/Creation_3.png",
    link: "https://www.artstation.com/dreamwalkerworld"
  },
  {
    id: 4,
    title: "soundtracks",
    text: "My YouTube channel where I post original soundtracks from series paired with animated visuals.",
    bgUrl: "/Creations/Creation_4.png",
    link: "https://www.youtube.com/@DWBattleMusic"
  },
  {
    id: 5,
    title: "Video editing",
    text: "A playlist showcasing videos I’ve edited. From cinematic cuts to fast-paced content.",
    bgUrl: "/Creations/Creation_5.png",
    link: "https://www.youtube.com/watch?v=gsKiwVeOg9I&list=PLyTTmzgmeHrk2WamZWF5IBCpHSK07dF3o&index=2&ab_channel=DWBattleMusic"
  },
  {
    id: 6,
    title: "social media",
    text: "A social media page where I share short, thought-provoking video edits with a philosophical edge.",
    bgUrl: "/Creations/Creation_6.png",
    link: "https://www.instagram.com/storyteller.within/"
  },
  {
    id: 7,
    title: "Github",
    text: "A hub for the websites and apps I’ve built.",
    bgUrl: "/Creations/Creation_7.png",
    link: "https://github.com/DreamwalkerJL"
  }
];

// Header animation variants
const headerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3 // stagger svg, image, and title
    }
  }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Row and card animation variants
const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const creationVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Creations: React.FC = () => {
  return (
    <div
      data-layer="Hero Main"
      className="HeroMain z-20 inline-flex w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden bg-white"
    >
      <div
        data-layer="Creations"
        className="Creations flex flex-col items-center justify-start self-stretch"
      >
        {/* Top Space */}
        <div
          data-layer="Top Space"
          className="TopSpace relative inline-flex h-64 w-screen items-start justify-start self-stretch bg-neutral-700 py-px sm:h-[100px]"
        />

        {/* Creations Main */}
        <div
          data-layer="Creations Main"
          className="CreationsMain flex w-full flex-col items-end justify-start bg-neutral-700 pb-12 md:items-center"
        >
          {/* Header with staggered animations */}
          <motion.div
            data-layer="Creations Header"
            className="CreationsHeader relative flex h-[256px] flex-col items-center justify-center gap-2.5 pr-72 md:pr-0 xl:pr-35"
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute top-[-255px] left-[-774px] h-[228px] w-[1920px] overflow-hidden sm:top-[-100px] sm:left-[-750px] sm:h-[100px] md:left-[-650px] xl:left-[-610px]">
              <svg
                className="h-full w-full"
                viewBox="0 0 1920 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 226.227H707.343C729.068 226.227 749.095 214.484 759.703 195.526L851.372 31.7016C861.98 12.7432 882.008 1 903.732 1H1920"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
              {/* mask overlays the line and slides away to reveal */}
              <motion.div
                className="absolute inset-0 bg-neutral-700"
                initial={{ x: 0 }}
                whileInView={{ x: "100%", transition: { duration: 1.7, ease: "easeOut" } }}
                viewport={{ once: true, amount: 0.2 }}
              />
            </div>
            <motion.img
              data-layer="Header BG"
              className="HeaderBg absolute top-[-175px] left-[260px] h-[637px] w-[657px] p-2.5 mix-blend-lighten sm:top-[0px] sm:h-[300px] md:left-[20px]"
              src="/Flower.jpg"
              variants={headerItemVariants}
            />

            <motion.div
              data-layer="the creations"
              className="TheCreations justify-start text-right font-['Orbitron'] text-9xl font-semibold text-white uppercase sm:text-[40px] md:text-center md:text-[100px]"
              variants={headerItemVariants}
            >
              the
              <br />
              creations
            </motion.div>
          </motion.div>

          {/* Creations Row with mapping & stagger */}
          <motion.div
            data-layer="Creations Row"
            className="CreationsRow flex w-screen max-w-[1920px] flex-wrap items-start justify-center gap-5  px-36 pt-12 md:px-10"
            variants={rowVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {creationsData.map(({ id, title, text, bgUrl, link }) => (
              <motion.a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="Creation w-full  min-w-[350px] flex-1/3 md:min-w-[150px] md:flex-auto xl:w-[350px] relative inline-flex h-52 flex-col items-center justify-start rounded-lg bg-cover bg-center pt-5 p-5 cursor-pointer"
                style={{ backgroundImage: `url(${bgUrl})` }}
                variants={creationVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 0 12px rgba(255,255,255,0.8)",   filter: "brightness(1.2)", transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <div className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg">
                  <div className="Title font-['Orbitron'] text-3xl font-semibold text-white uppercase text-shadow-[0px_0px_10px_rgba(0,0,0,1)] sm:text-[20px]">
                    {title}
                  </div>
                  <div className="Text font-['Inter'] text-base font-normal text-white text-shadow-[0px_0px_10px_rgba(0,0,0,1)] sm:text-[12px] mt-2">
                    {text}
                  </div>
                </div>
                <div className="ButtonBg absolute bottom-4 right-4 bg-pink-500 p-2.5 px-4 rounded-lg">
                  <div className="ButtonText font-['Orbitron'] text-sm font-semibold text-white uppercase">
                    Visit Site
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Space */}
          <div data-layer="Bot Space" className="BotSpace h-32 self-stretch p-2.5 sm:h-16 lg:h-24" />
        </div>
      </div>
    </div>
  );
};

export default Creations;