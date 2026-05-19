import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { personalProjects } from "../data/resume";
import { SectionShell, SectionHeading } from "./shared";
import { fadeUp, staggerContainer } from "../utils/animations";
import ProjectGallery from "./ProjectGallery";
import TiltCard from "./effects/TiltCard";
import Magnetic from "./effects/Magnetic";

function ProjectLinks({ project }) {
  if (!project.url) return null;

  return (
    <div className="project-links">
      <Magnetic strength={0.15}>
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="project-link"
        >
          <HiOutlineExternalLink size={18} />
          {project.urlLabel || "View Project"}
        </motion.a>
      </Magnetic>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isFeatured = project.featured;
  const inner = (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: isFeatured ? 0 : -6 }}
      className={`glass project-card ${isFeatured ? "project-card-featured" : ""}`}
    >
      <div className={isFeatured ? "project-card-inner" : "project-card-stack"}>
        <div className="project-card-content">
          <span className="font-mono text-sm text-accent-pink">{"// project"}</span>
          {project.role && (
            <span className="mt-2 inline-block rounded-full bg-accent-indigo/10 px-3 py-1 font-mono text-xs text-accent-indigo">
              {project.role}
            </span>
          )}
          <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
            {project.description}
          </p>

          {project.overview && (
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.overview}</p>
          )}

          <ProjectLinks project={project} />

          <ul className="mt-6 space-y-3">
            {project.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="project-point"
              >
                <span className="project-point-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="project-point-text">{point}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="project-tech-tags"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {project.tech.map((t, ti) => (
              <motion.span
                key={t}
                variants={fadeUp}
                custom={ti * 0.03}
                whileHover={{ scale: 1.08, y: -2 }}
                className="project-tech-tag"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {project.images?.length > 0 && <ProjectGallery images={project.images} />}
      </div>
    </motion.article>
  );

  if (isFeatured) {
    return <TiltCard maxTilt={5}>{inner}</TiltCard>;
  }

  return inner;
}

export default function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        label="Projects"
        title="Personal & Side Projects"
        subtitle="Platforms and tools built with scalable backends and real-world impact"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="projects-list"
      >
        {personalProjects.map((project, pi) => (
          <ProjectCard key={project.name} project={project} index={pi} />
        ))}
      </motion.div>
    </SectionShell>
  );
}
