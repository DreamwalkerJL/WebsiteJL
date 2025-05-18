"use client";
import React, { FC, JSX } from "react";
import "./globals.css"
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/inter";
import "@fontsource/orbitron/600.css"; // semibold
import "@fontsource/orbitron/900.css"; // black (if you need it elsewhere)
import  Origin  from "./Scenes/Origin/Origin";
import styles from './Scenes/OriginMain.module.css';
import Hero from "./Scenes/Hero/Hero";
import Arsenal from "./Scenes/Arsenal/Arsenal";
import Creations from "./Scenes/Creations/Creations";
import Contact from "./Scenes/Contact/Contact";

// Main hero component
export const HeroMain: FC = (): JSX.Element => {
  return (
<div className="HeroMain w-full relative   inline-flex flex-col justify-start items-center overflow-hidden -z-20 bg-[#1d1d1d] ">
<Hero/>
      <Origin />
      <Arsenal/>
      <Creations/>
      <Contact/>
    </div>
  );
};

export default HeroMain;
