import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const TypingText = ({ text, className = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {displayedText}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm {" "}
            <span className="text-[#915EFF]">
              <TypingText text="Priyanshu Singh" speed={100} />
            </span>
          </h1>

          <TypingText
            className={`${styles.heroSubText} mt-2 text-white-100`}
            text="I'm a full-stack developer passionate about building modern and responsive web experiences."
            speed={40}
          />
          <div className="flex gap-6 mt-6 text-white text-[36px] z-10 relative">
            <a
              href="https://github.com/PriyanshuXsingh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-[#915EFF] transition cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-287b37224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#915EFF] transition cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/priyanshusingh15__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#915EFF] transition cursor-pointer" />
            </a>
            <a
              href="mailto:priyanshusingh1572005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-[#915EFF] transition cursor-pointer" />
            </a>
            <a
              href="https://leetcode.com/u/priyanshusingh15__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="hover:text-[#915EFF] transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
