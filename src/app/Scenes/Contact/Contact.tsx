import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const fadeSide: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const Contact: React.FC = () => {
      const formRef = useRef<HTMLFormElement>(null); // ✅ 2. Create form ref

  const handleScrollTo = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Allow the form to submit normally to Formspree
    setTimeout(() => {
      formRef.current?.reset(); // ✅ Clear form after delay
    }, 100); // Short delay so Formspree still receives the data
  };

  return (
    <motion.div
      data-layer="Hero Main"
      className="HeroMain inline-flex w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden bg-white"
    >
      {/* ===== Contact Section ===== */}
      <motion.div
        data-layer="Contact"
        className="Contact relative flex h-[761px] w-full flex-col items-end justify-start overflow-hidden bg-white md:items-center"
      >
        <motion.div
          data-layer="Contact Main"
          className="ContactMain flex w-[900px] flex-1 flex-col items-center justify-center pr-36 sm:px-[40px] md:w-full md:px-[140px] lg:w-[600px] xl:w-[700px] xl:pr-24 z-10"
        >
          {/* Title */}
          <motion.h2
            className="Contact font-['Orbitron'] text-9xl font-semibold text-neutral-700 sm:text-[75px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Contact
          </motion.h2>

          {/* Formspree Form */}
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit} // ✅ 3. Hook up the handler
      action="https://formspree.io/f/xovdzewd"
      method="POST"
      className="ContactForm flex w-full flex-col items-start justify-center gap-6 overflow-hidden rounded-lg px-5 py-5  bg-white"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
    >
            {/* Full Name */}
            <motion.div
              className="Input flex flex-col items-start justify-start gap-1.5 w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
              <label htmlFor="name" className="text-sm font-medium text-slate-900 font-['Inter']">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 outline-none placeholder:text-slate-400"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="Input flex flex-col items-start justify-start gap-1.5 w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <label htmlFor="email" className="text-sm font-medium text-slate-900 font-['Inter']">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 outline-none placeholder:text-slate-400"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="TextareaFrame flex w-full flex-col items-start justify-start gap-1.5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            >
              <label htmlFor="message" className="text-sm font-medium text-black font-['Inter']">
                Your message
              </label>
  <textarea
  id="message"
  name="message"
  required
  placeholder="Type your message here"
  className="h-20 min-h-[5rem] max-h-[12rem] resize-y w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none placeholder:text-slate-400"
/>

            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white font-['Inter'] cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            >
              Send message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Character Images */}
        <motion.div
          className="xxl:right-[calc(1920px-100vw)] absolute top-0 inline-flex h-full w-full overflow-hidden md:hidden lg:right-[calc(1520px-100vw)] xl:right-[calc(1620px-100vw)] pointer-events-none"
          variants={fadeSide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
        >
          <motion.img
            className="ContactCharWithBg mix-blend-darken absolute z-10 top-0 left-0 min-h-[761px] min-w-[796px]"
            src="Contact-Char-with-BG.jpg"
            alt="Contact character background"
            initial={{ filter: 'brightness(1)', x: 0, y: 0 }}
            animate={{
              filter: [
                'brightness(1)',
                'brightness(0.2)',
                'brightness(1)',
                'brightness(0.5)',
                'brightness(1)'
              ],
              x: [0, -3, 3, -2, 0],
              y: [0, 2, -2, 1, 0],
            }}
            transition={{
              duration: 0.1,
              ease: 'linear',
              times: [0, 0.2, 0.4, 0.6, 1],
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 20,
            }}
          />
          <motion.img
            className="ContactCharAdditional mix-blend-darken  absolute top-[-10px] left-[-10px] min-h-[781px] min-w-[1251px] p-2.5 filter will-change-[filter,transform]"
            src="Contact-Char-Additional.jpg"
            alt="Contact character additional"
            initial={{ filter: 'brightness(1)', x: 0, y: 0 }}
            animate={{
              filter: [
                'brightness(1)',
                'brightness(0.2)',
                'brightness(1)',
                'brightness(0.5)',
                'brightness(1)'
              ],
              x: [0, -3, 3, -2, 0],
              y: [0, 2, -2, 1, 0],
            }}
            transition={{
              duration: 0.1,
              ease: 'linear',
              times: [0, 0.2, 0.4, 0.6, 1],
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 10,
            }}
          />
        </motion.div>
      </motion.div>

      {/* ===== Footer ===== */}
      <motion.footer
        data-layer="footer"
        className="Footer flex flex-col items-center justify-center w-full bg-neutral-700 px-2.5 py-5"
      >
        <div
          className="ButtonFrame inline-flex items-center justify-center gap-2.5 rounded-lg bg-pink-500 p-2.5 cursor-pointer"
          onClick={handleScrollTo}
        >
          <span className="text-sm font-semibold text-white font-['Orbitron']">
            GO TO THE TOP
          </span>
        </div>
        <div className="TextFrame flex flex-col items-center justify-center gap-2.5 p-2.5">
          <span className="text-sm font-medium text-white font-['Inter']">
            Joshua.lim@hotmail.ch
          </span>
          <span className="text-sm font-medium text-white font-['Inter']">
            crafted in the fog · transmitted from the edge · © 2025 Joshua Lim
          </span>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Contact;
