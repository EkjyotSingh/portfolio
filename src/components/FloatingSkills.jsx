import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const skills = [
  { name: "Kafka", x: 6, y: 14, duration: 14, delay: 0, accent: "indigo", depth: 0.03 },
  { name: "Microservices", x: 88, y: 12, duration: 16, delay: 0.5, accent: "cyan", depth: 0.05 },
  { name: "Node.js", x: 4, y: 38, duration: 12, delay: 1, accent: "emerald", depth: 0.04 },
  { name: "NestJS", x: 92, y: 32, duration: 15, delay: 1.5, accent: "indigo", depth: 0.06 },
  { name: "React.js", x: 78, y: 52, duration: 13, delay: 0.3, accent: "cyan", depth: 0.035 },
  { name: "MySQL", x: 10, y: 58, duration: 17, delay: 2, accent: "pink", depth: 0.025 },
  { name: "PostgreSQL", x: 86, y: 68, duration: 14, delay: 0.8, accent: "emerald", depth: 0.045 },
  { name: "Lambda", x: 18, y: 78, duration: 16, delay: 1.2, accent: "cyan", depth: 0.03 },
  { name: "Docker", x: 72, y: 82, duration: 13, delay: 1.8, accent: "indigo", depth: 0.04 },
];

const accentClass = {
  indigo: "floating-skill--indigo",
  cyan: "floating-skill--cyan",
  emerald: "floating-skill--emerald",
  pink: "floating-skill--pink",
};

function FloatingSkill({ skill, mouseX, mouseY }) {
  const drift = 18 + (skill.delay % 3) * 6;
  const parallaxX = useSpring(0, { stiffness: 80, damping: 20 });
  const parallaxY = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    parallaxX.set((mouseX - centerX) * skill.depth);
    parallaxY.set((mouseY - centerY) * skill.depth);
  }, [mouseX, mouseY, skill.depth, parallaxX, parallaxY]);

  return (
    <motion.span
      className={`floating-skill ${accentClass[skill.accent]}`}
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        x: parallaxX,
        y: parallaxY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.55, 0.9, 0.55],
        rotate: [0, 4, -3, 2, 0],
        scale: [1, 1.06, 0.98, 1.03, 1],
      }}
      whileHover={{
        scale: 1.15,
        opacity: 1,
        boxShadow: "0 0 24px rgba(129, 140, 248, 0.35)",
      }}
      transition={{
        opacity: { duration: skill.duration, delay: skill.delay, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: skill.duration, delay: skill.delay, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: skill.duration, delay: skill.delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.span
        animate={{
          x: [0, drift, -drift * 0.6, drift * 0.4, 0],
          y: [0, -drift * 0.8, drift * 0.5, -drift * 0.3, 0],
        }}
        transition={{
          duration: skill.duration,
          delay: skill.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="floating-skill-inner"
      >
        {skill.name}
      </motion.span>
    </motion.span>
  );
}

export default function FloatingSkills() {
  const { x, y } = useMousePosition();

  return (
    <div className="floating-skills" aria-hidden="true">
      {skills.map((skill) => (
        <FloatingSkill key={skill.name} skill={skill} mouseX={x} mouseY={y} />
      ))}
    </div>
  );
}
