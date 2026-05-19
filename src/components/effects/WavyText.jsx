import { motion } from "framer-motion";
import { useRippleClone } from "../../context/RippleCloneContext";

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function WavyText({ text, className = "", gradient = false }) {
  const isClone = useRippleClone();
  const chars = text.split("");
  const reducedMotion = getReducedMotion();
  const charClass = gradient
    ? "wavy-text-char gradient-text gradient-text-animated"
    : "wavy-text-char";

  if (isClone || reducedMotion) {
    return (
      <span className={`${gradient ? "gradient-text gradient-text-animated" : ""} ${className}`.trim()}>
        {text}
      </span>
    );
  }

  return (
    <span className={`wavy-text ${className}`.trim()} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className={charClass}
          aria-hidden="true"
          animate={{ y: [0, -10, 0, 4, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.09,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function WavyName({ firstName, lastName, className = "" }) {
  return (
    <span className={`wavy-name ${className}`.trim()}>
      <WavyText text={`${firstName} `} />
      <WavyText text={lastName} gradient />
    </span>
  );
}
