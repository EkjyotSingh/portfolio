import { motion } from "framer-motion";
import { useRippleClone } from "../context/RippleCloneContext";

const skills = [
  { name: "Kafka", accent: "indigo" },
  { name: "Microservices", accent: "cyan" },
  { name: "Node.js", accent: "emerald" },
  { name: "NestJS", accent: "indigo" },
  { name: "React.js", accent: "cyan" },
  { name: "PostgreSQL", accent: "emerald" },
  { name: "Lambda", accent: "cyan" },
  { name: "Docker", accent: "indigo" },
];

export default function SkillsMarquee() {
  const isClone = useRippleClone();
  const items = [...skills, ...skills];

  if (isClone) return null;

  return (
    <div className="skills-marquee block md:hidden" aria-hidden="true">
      <motion.div
        className="skills-marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {items.map((skill, i) => (
          <span key={`${skill.name}-${i}`} className={`skill-pill skill-pill--${skill.accent}`}>
            {skill.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
