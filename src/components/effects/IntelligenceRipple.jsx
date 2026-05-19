import { useCallback, useEffect, useRef } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { RippleCloneProvider } from "../../context/RippleCloneContext";

function getReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function IntelligenceRipple({ children, className = "" }) {
  const rootRef = useRef(null);
  const animatingRef = useRef(false);

  const originX = useMotionValue(50);
  const originY = useMotionValue(50);
  const radius = useMotionValue(0);
  const overlayOpacity = useMotionValue(0);
  const ringScale = useMotionValue(0);
  const ringOpacity = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(circle ${radius}px at ${originX}% ${originY}%, #000 0%, #000 42%, transparent 68%)`;
  const ringLeft = useMotionTemplate`${originX}%`;
  const ringTop = useMotionTemplate`${originY}%`;

  const runRipple = useCallback(
    async (clientX, clientY) => {
      if (!rootRef.current || animatingRef.current || getReducedMotion()) return;

      animatingRef.current = true;
      const rect = rootRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      const maxRadius = Math.hypot(rect.width, rect.height) * 0.95;

      originX.set(x);
      originY.set(y);
      radius.set(0);
      overlayOpacity.set(0);
      ringScale.set(0);
      ringOpacity.set(0);

      await Promise.all([
        animate(overlayOpacity, [0, 0.95, 0], {
          duration: 1.35,
          times: [0, 0.2, 1],
          ease: "easeOut",
        }),
        animate(radius, [0, maxRadius * 0.35, maxRadius], {
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }),
        animate(ringOpacity, [0, 0.85, 0], {
          duration: 1.35,
          times: [0, 0.25, 1],
          ease: "easeOut",
        }),
        animate(ringScale, [0, 1.15, 1.45], {
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }),
      ]);

      animatingRef.current = false;
    },
    [originX, originY, radius, overlayOpacity, ringScale, ringOpacity]
  );

  const triggerFromCenter = useCallback(() => {
    if (!rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    runRipple(rect.left + rect.width * 0.5, rect.top + rect.height * 0.38);
  }, [runRipple]);

  useEffect(() => {
    if (getReducedMotion()) return;
    const timer = setTimeout(triggerFromCenter, 2800);
    return () => clearTimeout(timer);
  }, [triggerFromCenter]);

  const handlePointerDown = (event) => {
    if (event.target.closest("a, button")) return;
    runRipple(event.clientX, event.clientY);
  };

  return (
    <motion.div
      ref={rootRef}
      className={`intelligence-ripple ${className}`.trim()}
      onPointerDown={handlePointerDown}
    >
      <div className="intelligence-ripple-base">{children}</div>

      <motion.div
        className="intelligence-ripple-clone"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      >
        <RippleCloneProvider>
          <div className="intelligence-ripple-clone-inner">{children}</div>
        </RippleCloneProvider>
      </motion.div>

      <motion.div
        className="intelligence-ripple-ring"
        style={{
          left: ringLeft,
          top: ringTop,
          scale: ringScale,
          opacity: ringOpacity,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
