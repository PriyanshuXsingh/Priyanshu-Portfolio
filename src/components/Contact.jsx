import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Priyanshu Singh",
          from_email: form.email,
          to_email: "priyanshusingh1572005@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-14 overflow-hidden">
      {/* Left: Contact Form + Socials */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Socials */}
        <div className="mt-10 border-t border-zinc-700 pt-6">
          <p className="text-gray-400 mb-3 font-medium">Find me on:</p>
          <div className="flex gap-6 text-[28px]">
            <a
              href="https://github.com/PriyanshuXsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-287b37224/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
             <a
              href="https://www.instagram.com/priyanshusingh15__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:priyanshusingh1572005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://leetcode.com/u/priyanshusingh15__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right: Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
