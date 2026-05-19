import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/resume";
import { blurIn, staggerContainer } from "../utils/animations";
import FloatingSkills from "./FloatingSkills";
import SkillsMarquee from "./SkillsMarquee";
import AnimatedMesh from "./effects/AnimatedMesh";
import Magnetic from "./effects/Magnetic";
import ScrambleText from "./effects/ScrambleText";
import IntelligenceRipple from "./effects/IntelligenceRipple";
import { WavyName } from "./effects/WavyText";
import { useRippleClone } from "../context/RippleCloneContext";

const roles = ["MERN Stack Developer", "Backend Engineer", "Microservices Architect", "AI Enthusiast"];

function RoleRotator() {
  const isClone = useRippleClone();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isClone) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isClone]);

  if (isClone) {
    return (
      <p className="font-display text-2xl font-semibold text-text-muted sm:text-3xl lg:text-4xl">
        {roles[0]}
      </p>
    );
  }

  return (
    <div className="mt-6 h-10 overflow-hidden sm:h-12">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl font-semibold text-text-muted sm:text-3xl lg:text-4xl"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <AnimatedMesh />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <FloatingSkills />

      <div className="site-container hero-content relative z-10 flex min-h-[calc(100vh-6rem)] flex-col justify-center py-12 sm:py-20">
        <IntelligenceRipple className="mx-auto w-full max-w-3xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={blurIn} custom={0} className="mb-6 flex items-center gap-3">
            <span className="status-dot">
              <span className="status-dot-ping" />
              <span className="status-dot-core" />
            </span>
            <ScrambleText className="text-sm text-text-muted">Available for opportunities</ScrambleText>
          </motion.div>

          <motion.p variants={blurIn} custom={1} className="mb-4 font-mono text-accent-cyan">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={blurIn}
            custom={2}
            className="hero-title font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <WavyName
              firstName={personal.name.split(" ")[0]}
              lastName={personal.name.split(" ")[1]}
            />
          </motion.h1>

          <motion.div variants={blurIn} custom={3}>
            <RoleRotator />
          </motion.div>

          <motion.p
            variants={blurIn}
            custom={4}
            className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            Building scalable, high-performance web applications with{" "}
            <ScrambleText mono={false} className="highlight-word highlight-indigo">
              microservices
            </ScrambleText>,{" "}
            <ScrambleText mono={false} className="highlight-word highlight-cyan">
              real-time systems
            </ScrambleText>, and{" "}
            <ScrambleText mono={false} className="highlight-word highlight-emerald">
              AI-powered solutions
            </ScrambleText>{" "}
            for nearly{" "}
            {personal.yearsOfExperience} years.
          </motion.p>

          <div className="mt-8">
            <SkillsMarquee />
          </div>

          <motion.div variants={blurIn} custom={6} className="mt-10 space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Magnetic strength={0.25}>
                <motion.a
                  href={personal.social.email}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary interactive-btn inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  <HiOutlineMail size={20} />
                  <ScrambleText>Get In Touch</ScrambleText>
                </motion.a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <motion.a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary interactive-btn inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  <ScrambleText>View My Work</ScrambleText>
                </motion.a>
              </Magnetic>
            </div>

            <motion.div className="flex items-center gap-5 border-t border-border/50 pt-8">
              {[
                { Icon: FaGithub, href: personal.social.github, label: "GitHub" },
                { Icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <Magnetic key={label} strength={0.4}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="social-link text-text-muted"
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </motion.a>
                </Magnetic>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        </IntelligenceRipple>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="scroll-indicator"
        aria-label="Scroll to about"
      >
        <ScrambleText className="scroll-indicator-text">Scroll</ScrambleText>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
