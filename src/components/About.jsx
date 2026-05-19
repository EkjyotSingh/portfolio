import { motion } from "framer-motion";
import { personal } from "../data/resume";
import { SectionShell, SectionHeading, AnimatedCounter } from "./shared";
import { fadeUp, staggerContainer } from "../utils/animations";
import TiltCard from "./effects/TiltCard";

const stats = [
  { value: personal.yearsOfExperience, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Technologies" },
];

export default function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        label="About Me"
        title="Crafting Digital Experiences"
        subtitle="Passionate about building efficient, production-ready solutions"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="about-grid"
      >
        <motion.div variants={fadeUp}>
          <TiltCard className="mx-auto max-w-sm">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass glow-indigo rounded-2xl p-8"
            >
              <motion.div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent-indigo to-accent-cyan font-display text-4xl font-bold text-bg-primary">
                ES
              </motion.div>
              <div className="text-center">
                <p className="font-display text-lg font-semibold">{personal.name}</p>
                <p className="font-mono text-sm text-accent-cyan">{personal.title}</p>
                <p className="mt-1 text-sm text-text-muted">{personal.location}</p>
              </div>
              <motion.div
                className="mt-6 flex flex-wrap justify-center gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { label: "< /> MERN", className: "text-accent-emerald" },
                  { label: "AI + Web3", className: "text-accent-pink" },
                ].map((badge) => (
                  <motion.span
                    key={badge.label}
                    variants={fadeUp}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`rounded-full bg-bg-elevated px-3 py-1 font-mono text-xs ${badge.className}`}
                  >
                    {badge.label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-lg leading-relaxed text-text-muted">{personal.profile}</p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass stat-card rounded-xl p-4 text-center sm:p-6"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-xs text-text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Microservices", "REST APIs", "Blockchain", "AI Integration", "Real-time Systems"].map(
              (tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="about-tag rounded-full border border-border px-4 py-1.5 text-sm text-text-muted"
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
