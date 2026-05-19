import { useCallback, useEffect, useRef, useState } from "react";
import { useRippleClone } from "../../context/RippleCloneContext";

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function randomChar(charset) {
  return charset[Math.floor(Math.random() * charset.length)];
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrambleText({
  children,
  className = "",
  as: Tag = "span",
  chars = DEFAULT_CHARS,
  speed = 35,
  revealStagger = 28,
  mono = true,
  ...props
}) {
  const isClone = useRippleClone();
  const text = String(children);
  const [display, setDisplay] = useState(text);
  const hoveredRef = useRef(false);
  const scrambleTimer = useRef(null);
  const revealTimer = useRef(null);

  const charset = typeof chars === "string" ? chars : chars.join("");

  const scramble = useCallback(() => {
    return text
      .split("")
      .map((char) => (char === " " ? " " : randomChar(charset)))
      .join("");
  }, [text, charset]);

  const clearTimers = useCallback(() => {
    if (scrambleTimer.current) {
      clearInterval(scrambleTimer.current);
      scrambleTimer.current = null;
    }
    if (revealTimer.current) {
      clearInterval(revealTimer.current);
      revealTimer.current = null;
    }
  }, []);

  const revealText = useCallback(() => {
    if (getReducedMotion()) {
      setDisplay(text);
      return;
    }

    let step = 0;
    const total = text.length;

    revealTimer.current = setInterval(() => {
      step += 1;
      const progress = step / (total + 2);

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const threshold = i / total;
            return progress >= threshold ? char : randomChar(charset);
          })
          .join("")
      );

      if (step > total + 2) {
        clearTimers();
        setDisplay(text);
      }
    }, revealStagger);
  }, [text, charset, clearTimers, revealStagger]);

  const handleEnter = () => {
    if (getReducedMotion()) return;
    hoveredRef.current = true;
    clearTimers();
    scrambleTimer.current = setInterval(() => {
      if (hoveredRef.current) setDisplay(scramble());
    }, speed);
  };

  const handleLeave = () => {
    hoveredRef.current = false;
    clearTimers();
    revealText();
  };

  useEffect(() => () => clearTimers(), [clearTimers]);

  if (isClone) {
    return (
      <Tag className={`scramble-text ${mono ? "scramble-text--mono" : ""} ${className}`.trim()} {...props}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      className={`scramble-text ${mono ? "scramble-text--mono" : ""} ${className}`.trim()}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      aria-label={text}
      {...props}
    >
      {display}
    </Tag>
  );
}
