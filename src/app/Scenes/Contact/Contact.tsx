const Contact: React.FC = () => {
  return (
    <div
      data-layer="Hero Main"
      className="HeroMain inline-flex w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden bg-white"
    >
      <div
        data-layer="Contact"
        className="Contact relative flex h-[761px] w-full flex-col items-end justify-start overflow-hidden bg-white md:items-center"
      >
        <div
          data-layer="Contact Main"
          className="ContactMain flex w-[900px] flex-1 flex-col items-center justify-center pr-36 sm:px-[40px] md:w-full md:px-[140px] lg:w-[600px] xl:w-[700px] xl:pr-24"
        >
          <div
            data-layer="Contact"
            className="Contact justify-start font-['Orbitron'] text-9xl font-semibold text-neutral-700 sm:text-[75px]"
          >
            Contact
          </div>
          <div
            data-layer="Contact form"
            className="ContactForm size- flex w-full flex-col items-start justify-center gap-2.5 overflow-hidden rounded-lg px-5 py-5"
          >
            <div
              data-layer="input"
              className="Input flex flex-col items-start justify-start gap-1.5 self-stretch"
            >
              <div
                data-layer="Full Name"
                className="FullName justify-start font-['Inter'] text-sm leading-tight font-medium text-slate-900"
              >
                Full Name
              </div>
              <div
                data-layer="input/with button"
                className="InputWithButton inline-flex items-start justify-start gap-2 self-stretch"
              >
                <div
                  data-layer="default"
                  className="Default inline-flex h-10 flex-1 flex-col items-start justify-start gap-1.5"
                >
                  <div
                    data-layer="field"
                    className="Field inline-flex h-10 items-center justify-start self-stretch rounded-md bg-white py-2 pr-14 pl-3 outline outline-slate-300"
                  >
                    <div
                      data-layer="Full Name"
                      className="FullName justify-start font-['Inter'] text-base leading-normal font-normal text-slate-400"
                    >
                      Full Name
                    </div>
                  </div>
                </div>
              </div>
              {/* <div data-layer="Enter your full name" className="EnterYourFullName justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-tight">Enter your full name</div> */}
            </div>
            <div
              data-layer="input"
              className="Input flex flex-col items-start justify-start gap-1.5 self-stretch"
            >
              <div
                data-layer="Email"
                className="Email justify-start font-['Inter'] text-sm leading-tight font-medium text-slate-900"
              >
                Email
              </div>
              <div
                data-layer="input/with button"
                className="InputWithButton inline-flex items-start justify-start gap-2 self-stretch"
              >
                <div
                  data-layer="default"
                  className="Default inline-flex h-10 flex-1 flex-col items-start justify-start gap-1.5"
                >
                  <div
                    data-layer="field"
                    className="Field inline-flex h-10 items-center justify-start self-stretch rounded-md bg-white py-2 pr-14 pl-3 outline outline-slate-300"
                  >
                    <div
                      data-layer="Email"
                      className="Email justify-start font-['Inter'] text-base leading-normal font-normal text-slate-400"
                    >
                      Email
                    </div>
                  </div>
                </div>
              </div>
              {/* <div data-layer="Enter your email address" className="EnterYourEmailAddress justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-tight">Enter your email address</div> */}
            </div>
            <div
              data-layer="textarea frame"
              className="TextareaFrame size- flex w-full flex-col items-start justify-start gap-1.5"
            >
              <div
                data-layer="textarea"
                className="Textarea size- flex w-full flex-col items-start justify-start gap-2"
              >
                <div
                  data-layer="label"
                  className="Label justify-start font-['Inter'] text-sm leading-none font-medium text-black"
                >
                  Your message
                </div>
                <div
                  data-layer="textarea"
                  className="Textarea inline-flex h-20 w-full items-start justify-start gap-2.5 rounded-md bg-white px-3 py-2 outline outline-offset-[-1px] outline-slate-300 md:w-full"
                >
                  <div
                    data-layer="Type your message here"
                    className="TypeYourMessageHere flex-1 justify-start font-['Inter'] text-sm leading-tight font-normal text-slate-400"
                  >
                    Type your message here
                  </div>
                </div>
                <div
                  data-layer="button"
                  data-state="Default"
                  data-type="default"
                  className="Button inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-slate-900 px-4 py-2 md:w-full"
                >
                  <div
                    data-layer="Continue"
                    className="Continue justify-start font-['Inter'] text-sm leading-normal font-medium text-white"
                  >
                    Send message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xxl:right-[calc(1920px-100vw)] absolute top-0 inline-flex h-full w-full overflow-hidden md:hidden lg:right-[calc(1520px-100vw)] xl:right-[calc(1620px-100vw)]">
          <img
            data-layer="Contact Char with BG"
            className="ContactCharWithBg absolute top-0 left-[0px] min-h-[761px] min-w-[796px]"
            src="Contact Char with BG.png"
          />
          <img
            data-layer="Contact Char Additional"
            className="ContactCharAdditional absolute top-[-10px] left-[-10px] min-h-[781px] min-w-[1251px] p-2.5"
            src="Contact Char Additional.png"
          />
        </div>
      </div>
      <div
        data-layer="footer"
        className="Footer flex flex-col items-center justify-center self-stretch overflow-hidden bg-neutral-700 px-2.5 py-5"
      >
        <div
          data-layer="button frame"
          className="ButtonFrame size- inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-pink-500 p-2.5"
        >
          <div
            data-layer="text"
            className="Text justify-start font-['Orbitron'] text-sm leading-tight font-semibold text-white"
          >
            GO TO THE TOP
          </div>
        </div>
        <div
          data-layer="text frame"
          className="TextFrame size- flex flex-col items-center justify-center gap-2.5 overflow-hidden p-2.5"
        >
          <div
            data-layer="text"
            className="Text justify-start font-['Inter'] text-sm leading-tight font-medium text-white"
          >
            Joshua.lim@hotmail.ch
          </div>
          <div
            data-layer="text"
            className="Text justify-start font-['Inter'] text-sm leading-tight font-medium text-white"
          >
            crafted in the fog · transmitted from the edge · © 2025 Joshua Lim
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
