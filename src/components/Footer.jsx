import { motion } from "framer-motion";
import { personal } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="site-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-text-muted"
        >
          © {year} {personal.name}. Built with React & Framer Motion
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-text-muted"
        >
          Designed & developed with{" "}
          <span className="text-accent-pink">♥</span>
        </motion.p>
      </div>
    </footer>
  );
}
