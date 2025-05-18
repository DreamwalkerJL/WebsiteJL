const Creations: React.FC = () => {
  return (
    <div
      data-layer="Hero Main"
      className="HeroMain z-20 inline-flex w-[full] max-w-[1920px] flex-col items-center justify-start overflow-hidden bg-white "
    >
      <div
        data-layer="Creations"
        className="Creations flex flex-col items-center justify-start self-stretch"
      >
        <div
          data-layer="Top Space"
          className="TopSpace relative w-screen inline-flex h-64 items-start justify-start self-stretch bg-neutral-700 py-px  sm:h-[100px]"
        >
          {/* <div
            data-svg-wrapper
            data-layer="Arsenal Creations Split Vector"
            className="ArsenalCreationsSplitVector top-[1px] left-0"
          >
            <svg
              width="1920"
              height="228"
              viewBox="0 0 1920 228"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 226.227H707.343C729.068 226.227 749.095 214.484 759.703 195.526L851.372 31.7016C861.98 12.7432 882.008 1 903.732 1H1920"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div> */}
        </div>
        <div
          data-layer="Creations Main"
          className="CreationsMain flex w-full flex-col items-end md:items-center  justify-start bg-neutral-700 pb-12"
        >
          <div
            data-layer="Creations Header"
            className="CreationsHeader h-[256px]  size- relative flex flex-col  items-center justify-center gap-2.5 pr-72 xl:pr-35 md:pr-0"
          >
                  <div
            data-svg-wrapper
            data-layer="Arsenal Creations Split Vector"
            className="ArsenalCreationsSplitVector  absolute top-[-255px] sm:top-[-100px] md:left-[-650px] xl:left-[-610px] left-[-774px]  sm:left-[-750px]"
          >
            <svg
  
              className="w-[1920px] h-[228px] sm:h-[100px] "
              viewBox="0 0 1920 228"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 226.227H707.343C729.068 226.227 749.095 214.484 759.703 195.526L851.372 31.7016C861.98 12.7432 882.008 1 903.732 1H1920"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
            <img
              data-layer="Header BG"
              className="HeaderBg absolute top-[-175px] left-[260px]  md:left-[20px] sm:h-[300px]  sm:top-[0px] h-[637px] w-[657px] p-2.5 mix-blend-lighten"
              src="./Flower.png"
            />
            <div
              data-layer="the creations"
              className="TheCreations justify-start text-right font-['Orbitron'] text-9xl md:text-[100px] sm:text-[40px] md:text-center font-semibold text-white uppercase"
            >
              the
              <br />
              creations
            </div>
          </div>
          <div
            data-layer="Creations Row"
            className="CreationsRow flex items-start w-screen max-w-[1920px] gap-5  overflow-hidden px-36 pt-12 md:px-10 justify-center flex-wrap"
          >
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/3 w-full bg-[url(/Creations/Creation_1.png)] bg-cover bg-center relative bg- inline-flex h-52   flex-col items-center justify-start rounded-lg pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title  justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase text-shadow-[0px_0px_10px_rgba(0,0,0,1)]
"
                >
                  Gizapp
                </div>
                <div
                  data-layer="Text"
                  className="Text  justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white text-shadow-[0px_0px_10px_rgba(0,0,0,1)]"
                >
                  I built GizApp so planning events with friends feels good.
                  Clean design, simple invites, and no group chat chaos.
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size-   absolute top-[143px] right-[20px] px-[10px] inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/3 w-full bg-[url(/Creations/Creation_2.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase"
                >
                  TIC-TAC-TOE
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  Play against a perfect Tic Tac Toe bot — it never makes a
                  mistake, and you’ll never win.
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/3 w-full bg-[url(/Creations/Creation_3.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase"
                >
                  Artstation
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  A collection of my 2D and 3D artwork, shared on
                  ArtStation.{" "}
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
                       <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/4 w-full bg-[url(/Creations/Creation_4.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase"
                >
                  soundtracks
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  My YouTube channel where I post original soundtracks from
                  series paired with animated visuals.
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/4 w-full bg-[url(/Creations/Creation_5.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase"
                >
                  Video editing
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  A playlist showcasing videos I’ve edited. From cinematic cuts
                  to fast-paced content.
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/4 w-full bg-[url(/Creations/Creation_6.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
                <div
                  data-layer="Title"
                  className="Title text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase"
                >
                  social media
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  A social media page where I share short, thought-provoking
                  video edits with a philosophical edge.
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
            <div
              data-layer="Creation"
              className="Creation xl:w-[350px]  md:min-w-[150px] md:flex-auto min-w-[350px]  flex-1/4 w-full bg-[url(/Creations/Creation_7.png)] bg-cover bg-center relative inline-flex h-52   flex-col items-center justify-start overflow-hidden rounded-lg bg-neutral-700/50 pt-5"
            >
              <div
                data-layer="Text Frame"
                className="TextFrame flex flex-col items-start justify-center gap-2.5 self-stretch rounded-lg px-5 "
              >
<div
  data-layer="Title"
  className="Title justify-center self-stretch font-['Orbitron'] text-3xl sm:text-[20px] font-semibold text-white uppercase "
>

                  Github
                </div>
                <div
                  data-layer="Text"
                  className="Text text-shadow-[0px_0px_10px_rgba(0,0,0,1)] justify-center self-stretch font-['Inter'] text-base sm:text-[12px] font-normal text-white"
                >
                  A hub for the websites and apps I’ve built.{" "}
                </div>
              </div>
              <div
                data-layer="Button BG"
                className="ButtonBg size- right-[20px] px-[10px]  absolute top-[143px]  inline-flex items-start justify-start overflow-hidden rounded-lg bg-pink-500 p-2.5"
              >
                <div
                  data-layer="Button Text"
                  className="ButtonText justify-center font-['Orbitron'] text-sm sm:text-[12px] font-semibold text-white uppercase"
                >
                  Visit Site
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Creations Row"
            className="CreationsRow inline-flex items-start justify-start gap-5 self-stretch overflow-hidden px-36 pt-12"
          >
 
          </div>
          <div
            data-layer="Bot Space"
            className="BotSpace h-32 self-stretch p-2.5 lg:h-24 sm:h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Creations;
