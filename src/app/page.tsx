"use client";
import React, { FC, JSX, useEffect, useState } from "react";
import "./globals.css"
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/inter";
import "@fontsource/orbitron/600.css"; // semibold
import "@fontsource/orbitron/900.css"; // black (if you need it elsewhere)
import  Origin  from "./Scenes/Origin/Origin";
import Hero from "./Scenes/Hero/Hero";
import Arsenal from "./Scenes/Arsenal/Arsenal";
import Creations from "./Scenes/Creations/Creations";
import Contact from "./Scenes/Contact/Contact";
import StickyNav from "./Scenes/Origin/StickyNav";

// Main hero component
const HeroMain: FC = (): JSX.Element => {

  
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  document.body.classList.toggle("overflow-hidden", menuOpen);
  return () => document.body.classList.remove("overflow-hidden");
}, [menuOpen]);
  return (
<div className="HeroMain w-full relative sm:mt-[-100px]   inline-flex flex-col justify-start items-center overflow-hidden  bg-[#1d1d1d] ">
<StickyNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <div id="home"className="w-full relative   inline-flex flex-col justify-start items-center overflow-hidden  bg-[#1d1d1d]">
<Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
</div>
<div id="origin" className="w-full relative   inline-flex flex-col justify-start items-center overflow-hidden  bg-[#1d1d1d]">
  <Origin />
</div>
<div id="arsenal">
  <Arsenal />
</div>
<div id="creations">
  <Creations />
</div>
<div id="contact" className="w-full relative   inline-flex flex-col justify-start items-center overflow-hidden  bg-[#1d1d1d]">
  <Contact />
</div>

    </div>
  );
};

export default HeroMain;
