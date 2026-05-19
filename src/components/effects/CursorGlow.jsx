import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

function getCursorGlowEnabled() {
  if (typeof window === "undefined") return false;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const wideScreen = window.matchMedia("(min-width: 768px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return finePointer && wideScreen && !reducedMotion;
}

export default function CursorGlow() {
  const [enabled] = useState(getCursorGlowEnabled);
  const spring = { stiffness: 150, damping: 25, mass: 0.5 };
  const x = useSpring(-100, spring);
  const y = useSpring(-100, spring);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-glow cursor-glow-outer"
        style={{ left: x, top: y, x: "-50%", y: "-50%" }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-glow cursor-glow-inner"
        style={{ left: x, top: y, x: "-50%", y: "-50%" }}
        aria-hidden="true"
      />
    </>
  );
}
