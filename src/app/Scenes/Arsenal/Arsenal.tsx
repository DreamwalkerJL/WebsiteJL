"use client";

const Arsenal: React.FC = () => {
  return (
    <div
      data-layer="Hero Main"
      className="HeroMain inline-flex w-[1920px] h-full  flex-col items-center justify-start overflow-hidden bg-white shadow-[0_0_100px_1px]
shadow-white z-10"
    >
      {/* <img className="absolute opacity-50" src="./Hero Main1100.png"/> */}
      
      <div
        data-layer="Arsenal"
        className="flex flex-col items-center justify-center   self-stretch bg-neutral-700"
      >
        <div
          data-layer="Arsenal Header"
          className="ArsenalHeader relative inline-flex h-[670px] lg:h-[350px] sm:h-[250px] lg:mt-[100px]  items-start justify-center self-stretch lg:scale-55 lg:top-[-100px] sm:top-[-20px] sm:scale-[.25]"
        >
          <div data-layer="Top Space" className="TopSpace h-48 lg:h-96  flex-1" />
          <div
            data-layer="Title"
            className="Title absolute top-[259px] left-[300px]  justify-start bg-gradient-to-l from-white from-50% to-neutral-700 to-[120%] bg-clip-text font-['Orbitron'] text-[150px] leading-[185px] font-semibold text-transparent uppercase"
 >
            The <br />
            Arsenal
          </div>
          <div
            data-svg-wrapper
            data-layer="Sword BG"
            className="SwordBg absolute top-[213px] left-[463px]"
          >
            <svg
              width="1204"
              height="318"
              viewBox="0 0 1204 318"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_608_123)">
                <path
                  d="M119.951 51H1145C1149.42 51 1153 54.5817 1153 59V227H265.288C262.864 227 260.572 225.901 259.053 224.013L119.951 51Z"
                  fill="#FF3CAC"
                />
                <path
                  d="M90 51H1145C1149.42 51 1153 54.5817 1153 59V227H265.288C262.864 227 260.572 225.901 259.053 224.013L119.951 51"
                  stroke="#404040"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_608_123"
                  x="0"
                  y="0.5"
                  width="1203.5"
                  height="317"
                  filterUnits="userSpaceOnUse"
                  colorinterpolation-filters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-20" dy="20" />
                  <feGaussianBlur stdDeviation="35" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_608_123"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_608_123"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <img
            data-layer="Sword"
            className="Sword absolute top-[155px] left-[650px] w-[977px] origin-top-left"
            src="./Sword.png"
          />
        </div>
        <div
          data-layer="List"
          className="List inline-flex lg:w-screen items-start justify-center gap-20 overflow-hidden lg:px-36  px-96 pt-6 sm:flex-wrap "
        >
          <div
            data-layer="List Frame"
            className="ListFrame inline-flex flex-1 flex-col items-center justify-start gap-5 "
          >
            <div
              data-layer="Title Frame"
              className="TitleFrame inline-flex  items-start justify-start self-stretch bg-slate-500 p-[5px] min-w-[300px] sm:min-w-[325px]"
            >
              <div
                data-layer="creative & visual"
                className="CreativeVisual justify-start font-['Orbitron'] text-xl sm:text-[12px] font-semibold text-white uppercase"
              >
                creative & visual
              </div>
            </div>
            <div
              data-layer="List Text Frame"
              className="ListTextFrame inline-flex lg:flex-wrap items-start justify-start gap-12 sm:gap-8 self-stretch pl-[5px]"
            >
              <div
                data-layer="List"
                className="List size- inline-flex flex-col items-start justify-start gap-2.5 overflow-hidden text-xl sm:text-[12px] "
              >
                <div
                  data-layer="Adobe Photoshop"
                  className="AdobePhotoshop justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Adobe Photoshop
                </div>
                <div
                  data-layer="Adobe Ilustrator"
                  className="AdobeIlustrator justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Adobe Ilustrator
                </div>
                <div
                  data-layer="Adobe After Effects"
                  className="AdobeAfterEffects justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Adobe After Effects
                </div>
                <div
                  data-layer="Adobe Premiere Pro"
                  className="AdobePremierePro justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Adobe Premiere Pro
                </div>
                <div
                  data-layer="Figma"
                  className="Figma justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Figma
                </div>
                <div
                  data-layer="Cinema 4D"
                  className="Cinema4d justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Cinema 4D
                </div>
              </div>
              <div
                data-layer="List"
                className="List size- inline-flex flex-col items-start justify-start gap-2.5"
              >
                <div
                  data-layer="Maya"
                  className="Maya justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Maya
                </div>
                <div
                  data-layer="Stubstance 3D"
                  className="Stubstance3d justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Stubstance 3D
                </div>
                <div
                  data-layer="Blender"
                  className="Blender justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Blender
                </div>
                <div
                  data-layer="Foundry Mari"
                  className="FoundryMari justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Foundry Mari
                </div>
                <div
                  data-layer="ZBrush"
                  className="Zbrush justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  ZBrush
                </div>
                <div
                  data-layer="Marvelous Designer"
                  className="MarvelousDesigner justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Marvelous Designer
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="List Frame"
            className="ListFrame inline-flex flex-1 flex-col items-center justify-start gap-5"
          >
            <div
              data-layer="Title Frame"
              className="TitleFrame inline-flex items-start justify-start self-stretch bg-slate-500 p-[5px] min-w-[300px] "
            >
              <div
                data-layer="DEVELOPMENT"
                className="Development justify-start font-['Orbitron'] text-xl sm:text-[12px] font-semibold text-white uppercase"
              >
                DEVELOPMENT
              </div>
            </div>
            <div
              data-layer="List Text Frame"
              className="ListTextFrame inline-flex lg:flex-wrap items-start justify-start gap-12 sm:gap-8 self-stretch pl-[5px]"
            >
              <div
                data-layer="List"
                className="List size-  inline-flex flex-col items-start justify-start gap-2.5 overflow-hidden"
              >
                <div
                  data-layer="HTML"
                  className="Html justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  HTML
                </div>
                <div
                  data-layer="CSS"
                  className="Css justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  CSS
                </div>
                <div
                  data-layer="Javascript"
                  className="Javascript justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Javascript
                </div>
                <div
                  data-layer="React"
                  className="React justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  React
                </div>
                <div
                  data-layer="Typescript"
                  className="Typescript justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Typescript
                </div>
                <div
                  data-layer="Next.js"
                  className="NextJs justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Next.js
                </div>
              </div>
              <div
                data-layer="List"
                className="List size- inline-flex flex-col items-start justify-start gap-2.5"
              >
                <div
                  data-layer="Kotlin"
                  className="Kotlin justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Kotlin
                </div>
                <div
                  data-layer="Spring-Boot"
                  className="SpringBoot justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Spring-Boot
                </div>
                <div
                  data-layer="Node.js"
                  className="NodeJs justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Node.js
                </div>
                <div
                  data-layer="SPFX"
                  className="Spfx justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  SPFX
                </div>
                <div
                  data-layer="GraphQL"
                  className="Graphql justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  GraphQL
                </div>
                <div
                  data-layer="Redux"
                  className="Redux justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Redux
                </div>
              </div>
              <div
                data-layer="List"
                className="List size- inline-flex flex-col items-start justify-start gap-2.5"
              >
                <div
                  data-layer="Vite"
                  className="Vite justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Vite
                </div>
                <div
                  data-layer="Three.js"
                  className="ThreeJs justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Three.js
                </div>
                <div
                  data-layer="SCSS"
                  className="Scss justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  SCSS
                </div>
                <div
                  data-layer="Tailwind CSS"
                  className="TailwindCss justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Tailwind CSS
                </div>
                <div
                  data-layer="Framer-Motion"
                  className="FramerMotion justify-start font-['Inter'] text-xl sm:text-[12px] font-normal text-white"
                >
                  Framer-Motion
                </div>
                <div
                  data-layer="And many more..."
                  className="AndManyMore justify-start font-['Inter'] text-xl sm:text-[12px] font-light text-white"
                >
                  And many more...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Bot Space"
          className="BotSpace h-48 self-stretch bg-neutral-700 p-2.5 sm:h-36"
        />
      </div>
    </div>
  );
};

export default Arsenal;
