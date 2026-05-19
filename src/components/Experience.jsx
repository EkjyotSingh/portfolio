import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { experience } from "../data/resume";
import { SectionShell, SectionHeading } from "./shared";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        label="Experience"
        title="Where I've Worked"
        subtitle="Building scalable systems across gaming, blockchain, and real estate"
      />

      <div className="mx-auto max-w-4xl">
        <div className="space-y-10 sm:space-y-14">
          {experience.map((job, ji) => (
            <motion.div
              key={job.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                custom={ji}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass experience-card rounded-2xl p-6 sm:p-8"
              >
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-accent-indigo">{job.company}</p>
                    <p className="text-sm text-text-muted">{job.location}</p>
                  </div>
                  <span className="w-fit rounded-full bg-accent-indigo/10 px-4 py-1.5 font-mono text-xs text-accent-indigo">
                    {job.period}
                  </span>
                </div>

                <ul className="mb-6 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  {job.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-border/50 bg-bg-elevated/50 p-4"
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h4 className="font-display font-semibold text-accent-cyan">
                          {project.name}
                        </h4>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 text-text-muted transition-colors hover:text-accent-indigo"
                            aria-label={`Visit ${project.name}`}
                          >
                            <HiOutlineExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <p className="mb-3 text-xs text-text-muted">{project.description}</p>
                      <ul className="space-y-1.5">
                        {project.points.slice(0, 3).map((point) => (
                          <li key={point} className="flex gap-2 text-xs text-text-muted">
                            <span className="shrink-0 text-accent-emerald">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
