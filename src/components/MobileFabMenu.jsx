import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiFolder,
  HiMail,
  HiPlus,
  HiX,
} from "react-icons/hi";
import { navLinks } from "../data/resume";
import ScrambleText from "./effects/ScrambleText";

const iconMap = {
  home: HiHome,
  about: HiUser,
  skills: HiCode,
  experience: HiBriefcase,
  projects: HiFolder,
  contact: HiMail,
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: (offset) => ({
    x: offset.x,
    y: offset.y,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  }),
  closed: {
    x: 0,
    y: 0,
    opacity: 0,
    scale: 0.35,
    transition: { duration: 0.2 },
  },
};

/* Closest item sits just above trigger; fans upward with a slight left arc */
const fabActions = [...navLinks].reverse().map((link, i) => ({
  ...link,
  icon: iconMap[link.id] || HiHome,
  offset: {
    x: -(6 + i * 14),
    y: -(72 + i * 58),
  },
}));

export default function MobileFabMenu({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSelect = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className="mobile-fab-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
        )}
      </AnimatePresence>

      <motion.div
        className="mobile-fab"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AnimatePresence>
          {open && (
            <motion.ul
              className="mobile-fab-list"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {fabActions.map((action) => {
                const Icon = action.icon;
                const isActive = activeSection === action.id;

                return (
                  <motion.li
                    key={action.id}
                    className="mobile-fab-item"
                    custom={action.offset}
                    variants={itemVariants}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(action.id)}
                      className={`mobile-fab-action ${isActive ? "is-active" : ""}`}
                      aria-label={action.label}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="mobile-fab-label">
                        <ScrambleText>{action.label}</ScrambleText>
                      </span>
                      <span className="mobile-fab-icon">
                        <Icon size={20} />
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className="mobile-fab-trigger"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                className="mobile-fab-trigger-icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <HiX size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                className="mobile-fab-trigger-icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <HiPlus size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
}
