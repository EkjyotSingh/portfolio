import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { blurIn } from "../utils/animations";
import ScrambleText from "./effects/ScrambleText";

export function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={`site-section ${className}`.trim()}>
      <div className="site-container">{children}</div>
    </section>
  );
}

export function SectionHeading({ label, title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="section-heading">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        <ScrambleText>{label}</ScrambleText>
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      <motion.div
        className="section-title-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="section-subtitle"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, 1800, inView);

  return (
    <span ref={ref} className="gradient-text font-display text-4xl font-bold sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={blurIn}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
