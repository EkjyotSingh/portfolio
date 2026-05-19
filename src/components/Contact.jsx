import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { personal, education } from "../data/resume";
import { SectionShell, SectionHeading } from "./shared";
import { fadeUp, staggerContainer } from "../utils/animations";
import Magnetic from "./effects/Magnetic";

export default function Contact() {
  return (
    <SectionShell id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="contact-grid"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          {[
            { icon: HiOutlineMail, label: "Email", value: personal.email, href: personal.social.email },
            { icon: HiOutlinePhone, label: "Phone", value: personal.phone, href: personal.social.phone },
            { icon: HiOutlineLocationMarker, label: "Location", value: personal.location, href: null },
          ].map((item) => (
            <div key={item.label} className="glass flex items-center gap-4 rounded-xl p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-indigo/10 text-accent-indigo">
                <item.icon size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-text-muted">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-medium transition-colors hover:text-accent-cyan">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <Magnetic strength={0.12}>
            <motion.a
              href={personal.social.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="interactive-btn block rounded-xl bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-emerald p-[1px]"
            >
              <span className="block rounded-xl bg-bg-card px-8 py-4 text-center font-display font-semibold transition-colors hover:bg-transparent">
                Send Me an Email
              </span>
            </motion.a>
          </Magnetic>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} className="glass rounded-2xl p-8">
          <h3 className="font-display mb-6 text-xl font-semibold">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="relative border-l-2 border-accent-indigo/30 pl-6">
                <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent-indigo" />
                <p className="font-display font-semibold">{edu.degree}</p>
                <p className="text-sm text-accent-cyan">{edu.institution}</p>
                <p className="mt-1 text-sm text-text-muted">
                  {edu.field} · {edu.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
