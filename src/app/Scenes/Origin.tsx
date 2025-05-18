import React from 'react';
import '../OriginMain.css'


export default function Origin() {
  return (
<div
      data-layer="Origin Main"
      className="OriginMain self-stretch pt-10 bg-white flex flex-col justify-start items-start gap-12 overflow-hidden origin-wider"
    >
      <div
        data-layer="Origin Title"
        className="OriginTitle self-stretch bg-white inline-flex justify-center items-start overflow-hidden"
      >
        <div
          data-layer="Title Frame"
          className="TitleFrame size- p-2.5 flex justify-start items-start gap-2.5 overflow-hidden"
        >
          <div
            data-layer="Title Text"
            className="TitleText justify-start text-neutral-700 text-5xl font-semibold font-['Orbitron'] origin-sm-title    "
          >
            THE ORIGIN
          </div>
        </div>
      </div>

      <div
        data-layer="About Me"
        className="AboutMe self-stretch px-5 rounded-lg flex flex-col justify-center items-center gap-2.5 overflow-hidden origin-sm-about-padding "
      >
        <div
          data-layer="About Me Title"
          className="AboutMeTitle justify-start text-neutral-700 text-xl font-semibold font-['Orbitron'] uppercase"
        >
          Journey
        </div>
        <div
          data-layer="About Me Text"
          className="AboutMeText self-stretch text-center justify-start text-neutral-700 text-xs font-normal font-['Inter'] origin-sm-text  "
        >
          My journey into the digital world began with a deep curiosity and a drive to create. I’m a self-taught developer and designer, having explored various disciplines.
          <br />
          Along the way, I’ve worked professionally as an ICT Support Specialist and a SharePoint Web Developer, giving me hands-on experience with real-world systems and collaborative environments. This blend of technical depth and creative vision shapes everything I build today.
        </div>
      </div>

      <div
        data-layer="Origin Main Section"
        className="OriginMainSection self-stretch p-5 relative inline-flex justify-center items-start gap-2.5 origin-sm-section-padding "
      >
        <div
          data-layer="Right Side"
          className="RightSide flex-1 inline-flex flex-col justify-start items-end"
        >
          <div
            data-layer="Timeline"
            className="Timeline self-stretch flex flex-col justify-start items-end gap-[5px] origin-sm-timeline-gap  "
          >
            {[
              { year: '2024', title: 'ARTIFICIAL INTELLIGENCE' },
              { year: '2024', title: 'UI / UX' },
              { year: '2022', title: 'DEVELOPER' },
              { year: '2020', title: '3D art' },
              { year: '2018', title: 'Video Editing' },
              { year: '2014', title: 'Graphic Design' },
            ].map((item, idx) => (
              <div
                key={idx}
                data-layer="Timeline Object"
                className="TimelineObject self-stretch flex flex-col justify-start items-end overflow-hidden"
              >
                <div
                  data-layer="Title Frame"
                  className="TitleFrame self-stretch h-10 px-5 bg-gradient-to-r from-white to-sky-100 rounded-lg inline-flex justify-end items-center overflow-hidden origin-sm-higher "
                >
                  <div
                    data-layer="Text Frame"
                    className="TextFrame size- inline-flex flex-col justify-center items-end"
                  >
                    <div
                      data-layer="Year Text"
                      className="YearText justify-center text-sky-100 text-base font-semibold font-['Orbitron'] origin-sm-year "
                    >
                      {item.year}
                    </div>
                    <div
                      data-layer="Title Text"
                      className="TitleText text-right justify-center text-black text-[10px] font-normal font-['Inter'] uppercase origin-sm-label "
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          data-layer="Origin Char Effect BG"
          className="OriginCharEffectBg size-80 p-2.5 left-[-36px] top-[-16px] absolute blur-lg origin-sm-bg1   "
          src="https://placehold.co/333x324"
        />
        <img
          data-layer="Origin Char Effect BG"
          className="OriginCharEffectBg size-80 p-2.5 left-[-33px] top-[-13px] absolute origin-sm-bg2"
          src="https://placehold.co/327x318"
        />
      </div>
    </div>


  );
}

