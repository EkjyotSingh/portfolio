import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/resume";
import MobileFabMenu from "./MobileFabMenu";
import ScrambleText from "./effects/ScrambleText";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-4"
        }`}
      >
        <nav className="site-container flex items-center justify-between">
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display shrink-0 border-none bg-transparent text-xl font-bold tracking-tight"
          >
            <ScrambleText mono={false} className="gradient-text">
              Ekjyot
            </ScrambleText>
            <ScrambleText mono={false} className="text-text-muted">
              .dev
            </ScrambleText>
          </motion.button>

          <ul className="site-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`site-nav-link ${activeSection === link.id ? "is-active" : ""}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <MobileFabMenu activeSection={activeSection} onNavigate={scrollTo} />
    </>
  );
}
