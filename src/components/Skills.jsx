import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { SectionShell, SectionHeading } from "./shared";
import { fadeUp, staggerContainer } from "../utils/animations";

const categoryColors = {
  Backend: "from-accent-indigo/20 to-accent-indigo/5 border-accent-indigo/30",
  Frontend: "from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/30",
  Databases: "from-accent-emerald/20 to-accent-emerald/5 border-accent-emerald/30",
  "Cloud & DevOps": "from-accent-pink/20 to-accent-pink/5 border-accent-pink/30",
  "Real-time & Other": "from-accent-indigo/20 to-accent-cyan/5 border-accent-indigo/30",
};

export default function Skills() {
  return (
    <SectionShell id="skills" className="bg-bg-secondary/40">
      <SectionHeading
        label="Skills"
        title="Tech Stack & Tools"
        subtitle="Technologies I work with to build robust, scalable applications"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="skills-grid"
      >
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            custom={gi}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`glass skill-card rounded-2xl border bg-gradient-to-br p-6 ${categoryColors[group.category] || "border-border"}`}
          >
            <h3 className="font-display mb-4 text-lg font-semibold">{group.category}</h3>
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {group.items.map((skill, si) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  custom={si * 0.05}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="skill-tag rounded-lg bg-bg-elevated/80 px-3 py-1.5 font-mono text-xs text-text-muted sm:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
